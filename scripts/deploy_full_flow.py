"""
Full deploy flow: Create project (if needed) + deploy files to Vercel.
This script handles both steps and properly processes draft approvals.
"""
import asyncio, sys, json, base64
sys.path.insert(0, '/work')
from pathlib import Path

TEAM_ID = "team_5abSgYLF5aSg66CW2jblETOE"
PROJECT_NAME = "cataract-safe-nextjs"
OUT_DIR = Path("/work/repos/cataract-safe-nextjs/out")

def parse_result(result):
    """Parse proxy result, handling both dict with 'body' and 'content' formats."""
    if isinstance(result, dict):
        if "body" in result:
            return result["status_code"], result["body"]
        elif "content" in result:
            try:
                parsed = json.loads(result["content"])
                if isinstance(parsed, dict) and "body" in parsed:
                    return parsed.get("status_code", 200), parsed["body"]
                return 200, parsed
            except json.JSONDecodeError:
                return 200, result["content"]
        elif "response_role" in result:
            # Draft created - need approval
            return -1, result["content"]
    return 200, result

async def ensure_project():
    """Get or create the Vercel project. Returns project_id."""
    from sdk.tools.pd_vercel_token_auth import pd_vercel_token_auth_proxy_get, pd_vercel_token_auth_proxy_post
    
    # First, try to get existing project
    result = await pd_vercel_token_auth_proxy_get(
        url=f"https://api.vercel.com/v9/projects/{PROJECT_NAME}",
        query_params={"teamId": TEAM_ID}
    )
    status, body = parse_result(result)
    
    if status == 200 and isinstance(body, dict) and body.get("id"):
        project_id = body["id"]
        print(f"✓ Project exists: {project_id}")
        return project_id
    
    # Create project
    print("Creating project...")
    result = await pd_vercel_token_auth_proxy_post(
        url="https://api.vercel.com/v10/projects",
        query_params={"teamId": TEAM_ID},
        json_body={
            "name": PROJECT_NAME,
            "framework": None,
            "publicSource": False,
        }
    )
    status, body = parse_result(result)
    
    if status == -1:
        print(f"DRAFT REQUIRED: {body}")
        return None
    
    if isinstance(body, dict) and body.get("error"):
        error = body["error"]
        if error.get("code") == "project_already_exists":
            # Try fetching again
            result2 = await pd_vercel_token_auth_proxy_get(
                url=f"https://api.vercel.com/v9/projects/{PROJECT_NAME}",
                query_params={"teamId": TEAM_ID}
            )
            _, body2 = parse_result(result2)
            return body2.get("id")
        print(f"Error: {error}")
        return None
    
    project_id = body.get("id") if isinstance(body, dict) else None
    print(f"✓ Created project: {project_id}")
    return project_id

async def deploy_files(project_id):
    """Deploy the static files to Vercel."""
    from sdk.tools.pd_vercel_token_auth import pd_vercel_token_auth_proxy_post
    
    print(f"Collecting files from {OUT_DIR}...")
    files = []
    for file_path in sorted(OUT_DIR.rglob("*")):
        if file_path.is_file():
            rel_path = str(file_path.relative_to(OUT_DIR))
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                file_entry = {"file": rel_path, "data": content}
            except UnicodeDecodeError:
                with open(file_path, "rb") as f:
                    content = f.read()
                file_entry = {
                    "file": rel_path,
                    "data": base64.b64encode(content).decode("utf-8"),
                    "encoding": "base64",
                }
            files.append(file_entry)
    
    print(f"Deploying {len(files)} files...")
    
    result = await pd_vercel_token_auth_proxy_post(
        url="https://api.vercel.com/v13/deployments",
        query_params={"teamId": TEAM_ID, "forceNew": "1"},
        json_body={
            "name": PROJECT_NAME,
            "project": project_id,
            "files": files,
            "target": "preview",
            "projectSettings": {
                "framework": None,
                "outputDirectory": "",
                "installCommand": "",
                "buildCommand": "",
            },
        }
    )
    
    status, body = parse_result(result)
    
    if status == -1:
        print(f"DRAFT REQUIRED: {body}")
        return None
    
    if status not in (200, 201):
        print(f"Deploy error: {json.dumps(body, indent=2)[:1000]}")
        return None
    
    dep_id = body.get("id", body.get("uid")) if isinstance(body, dict) else None
    dep_url = body.get("url", "") if isinstance(body, dict) else ""
    dep_state = body.get("readyState", body.get("status", "BUILDING")) if isinstance(body, dict) else "BUILDING"
    
    return {
        "deployment_id": dep_id,
        "url": dep_url,
        "state": dep_state,
    }

async def main():
    print("=== Cataract Safe & Lock — Vercel Deploy ===\n")
    
    project_id = await ensure_project()
    if not project_id:
        print("❌ Could not get/create project")
        return
    
    # Save project ID
    Path("/work/repos/cataract-safe-nextjs/scripts/project_id.txt").write_text(project_id)
    
    dep = await deploy_files(project_id)
    if not dep:
        print("❌ Deployment failed")
        return
    
    url = dep["url"]
    print(f"\n✅ Deployed!")
    print(f"URL: https://{url}")
    print(f"State: {dep['state']}")
    
    # Save result
    result = {
        "project_id": project_id,
        "deployment_id": dep["deployment_id"],
        "url": url,
        "preview_url": f"https://{url}",
        "state": dep["state"],
    }
    Path("/work/repos/cataract-safe-nextjs/scripts/deploy_result.json").write_text(
        json.dumps(result, indent=2)
    )
    print(f"\nResult saved to deploy_result.json")
    return result

if __name__ == "__main__":
    result = asyncio.run(main())
    if result:
        print(f"\n🎉 Preview: {result['preview_url']}")
