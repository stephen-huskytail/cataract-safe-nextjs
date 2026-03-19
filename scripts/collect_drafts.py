"""
Collect draft IDs for all needed operations: create project + deploy.
Output the draft IDs so we can ask for a single bulk approval.
"""
import asyncio, sys, json, re, base64
sys.path.insert(0, '/work')
from pathlib import Path

TEAM_ID = "team_5abSgYLF5aSg66CW2jblETOE"
PROJECT_NAME = "cataract-safe-nextjs"
OUT_DIR = Path("/work/repos/cataract-safe-nextjs/out")

def extract_draft_id(result: dict) -> str | None:
    """Extract draft_id from a proxy POST response."""
    if isinstance(result, dict) and "content" in result:
        content = result["content"]
        match = re.search(r'draft_id:\s*(\S+?)\.', content)
        if match:
            return match.group(1)
        # Try another pattern
        match = re.search(r'draft_id:\s*(\w+)', content)
        if match:
            return match.group(1)
    return None

async def main():
    from sdk.tools.pd_vercel_token_auth import pd_vercel_token_auth_proxy_post, pd_vercel_token_auth_proxy_get
    
    draft_ids = {}
    
    print("=== Step 1: Check if project already exists ===")
    result = await pd_vercel_token_auth_proxy_get(
        url=f"https://api.vercel.com/v9/projects/{PROJECT_NAME}",
        query_params={"teamId": TEAM_ID}
    )
    
    if isinstance(result, dict) and "content" in result:
        try:
            body = json.loads(result["content"])
            project_id = body.get("body", {}).get("id")
        except:
            project_id = None
    else:
        project_id = None
    
    if project_id:
        print(f"Project already exists: {project_id}")
        draft_ids["project_id"] = project_id
    else:
        print("Getting create-project draft ID...")
        result = await pd_vercel_token_auth_proxy_post(
            url="https://api.vercel.com/v10/projects",
            query_params={"teamId": TEAM_ID},
            json_body={
                "name": PROJECT_NAME,
                "framework": None,
                "publicSource": False,
            }
        )
        draft_id = extract_draft_id(result)
        print(f"Create project draft_id: {draft_id}")
        print(f"Full content: {result.get('content', '')}")
        draft_ids["create_project"] = draft_id
    
    print("\n=== Step 2: Get deploy draft ID ===")
    print("Collecting files...")
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
    
    print(f"Collected {len(files)} files")
    
    # Use a placeholder project ID for now - the real one will be available after create
    placeholder_project_id = draft_ids.get("project_id", "PLACEHOLDER")
    
    result = await pd_vercel_token_auth_proxy_post(
        url="https://api.vercel.com/v13/deployments",
        query_params={"teamId": TEAM_ID, "forceNew": "1"},
        json_body={
            "name": PROJECT_NAME,
            "project": placeholder_project_id,
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
    deploy_draft_id = extract_draft_id(result)
    print(f"Deploy draft_id: {deploy_draft_id}")
    print(f"Deploy content: {result.get('content', '')[:200]}")
    draft_ids["deploy"] = deploy_draft_id
    
    # Save
    Path("/work/repos/cataract-safe-nextjs/scripts/draft_ids.json").write_text(
        json.dumps(draft_ids, indent=2)
    )
    print(f"\nDraft IDs: {json.dumps(draft_ids, indent=2)}")
    return draft_ids

if __name__ == "__main__":
    asyncio.run(main())
