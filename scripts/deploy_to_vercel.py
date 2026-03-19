"""
Deploy Cataract Safe & Lock static site to Vercel using the Files API.
Since it's a static export (output: 'export'), we deploy the /out directory directly.
"""
import asyncio
import base64
import json
import os
import sys
sys.path.insert(0, '/work')

from pathlib import Path

async def main():
    from sdk.tools.pd_vercel_token_auth import (
        pd_vercel_token_auth_proxy_post,
        pd_vercel_token_auth_proxy_get,
    )

    TEAM_ID = "team_5abSgYLF5aSg66CW2jblETOE"
    PROJECT_NAME = "cataract-safe-nextjs"
    OUT_DIR = Path("/work/repos/cataract-safe-nextjs/out")

    print("=== Step 1: Create Vercel Project ===")
    
    # Create new project
    result = await pd_vercel_token_auth_proxy_post(
        url="https://api.vercel.com/v10/projects",
        query_params={"teamId": TEAM_ID},
        json_body={
            "name": PROJECT_NAME,
            "framework": None,
            "publicSource": False,
        }
    )
    print(f"Create project raw result keys: {list(result.keys()) if isinstance(result, dict) else type(result)}")
    print(f"Create project result: {json.dumps(result, indent=2)[:500]}")
    
    # Handle both response formats
    if isinstance(result, dict) and "body" in result:
        status = result.get("status_code", 0)
        body = result.get("body", {})
    else:
        body = result if isinstance(result, dict) else {}
        status = 200
    
    print(f"Status: {status}")
    
    if isinstance(body, dict) and body.get("error"):
        error = body["error"]
        if error.get("code") == "project_already_exists":
            # Get existing project
            get_result = await pd_vercel_token_auth_proxy_get(
                url=f"https://api.vercel.com/v9/projects/{PROJECT_NAME}",
                query_params={"teamId": TEAM_ID}
            )
            print(f"Get project result: {json.dumps(get_result, indent=2)[:300]}")
            if isinstance(get_result, dict) and "body" in get_result:
                project_id = get_result["body"]["id"]
            else:
                project_id = get_result["id"]
        else:
            print(f"Error creating project: {error}")
            return None
    elif isinstance(body, dict):
        project_id = body.get("id")
    else:
        print(f"Unexpected response: {body}")
        return None
    
    print(f"Project ID: {project_id}")

    print(f"\n=== Step 2: Collect Files from /out ===")
    
    files = []
    for file_path in sorted(OUT_DIR.rglob("*")):
        if file_path.is_file():
            rel_path = str(file_path.relative_to(OUT_DIR))
            
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                file_entry = {
                    "file": rel_path,
                    "data": content,
                }
            except UnicodeDecodeError:
                with open(file_path, "rb") as f:
                    content = f.read()
                file_entry = {
                    "file": rel_path,
                    "data": base64.b64encode(content).decode("utf-8"),
                    "encoding": "base64",
                }
            
            files.append(file_entry)
            print(f"  + {rel_path}")

    print(f"\nTotal files: {len(files)}")
    
    print(f"\n=== Step 3: Create Deployment ===")
    
    deployment_result = await pd_vercel_token_auth_proxy_post(
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
    
    print(f"Deployment result keys: {list(deployment_result.keys()) if isinstance(deployment_result, dict) else type(deployment_result)}")
    
    if isinstance(deployment_result, dict) and "body" in deployment_result:
        dep_status = deployment_result.get("status_code", 0)
        dep = deployment_result.get("body", {})
    else:
        dep_status = 200
        dep = deployment_result if isinstance(deployment_result, dict) else {}
    
    print(f"Deployment status code: {dep_status}")
    
    if dep_status not in (200, 201) or (isinstance(dep, dict) and dep.get("error")):
        print(f"Error: {json.dumps(dep, indent=2)[:2000]}")
        return None
    
    dep_id = dep.get("id", dep.get("uid"))
    dep_url = dep.get("url", "")
    dep_state = dep.get("readyState", dep.get("status", "unknown"))
    
    print(f"Deployment ID: {dep_id}")
    print(f"URL: {dep_url}")
    print(f"State: {dep_state}")
    
    return {
        "project_id": project_id,
        "deployment_id": dep_id,
        "url": dep_url,
        "state": dep_state,
    }

if __name__ == "__main__":
    result = asyncio.run(main())
    if result:
        print(f"\n✅ Preview URL: https://{result['url']}")
        with open("/work/repos/cataract-safe-nextjs/scripts/deploy_result.json", "w") as f:
            json.dump(result, f, indent=2)
