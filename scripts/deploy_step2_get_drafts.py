"""
Create deployment draft - we'll collect both draft IDs and ask for approval together.
Step 2 needs to happen after project is created. But let's first get the deployment draft too.

Actually - let's do it more cleverly. We know the file upload will be large.
Let's use a more optimized approach: create the project, then do the deploy.
Since both create drafts we need to handle them sequentially.

For now, just create the deployment draft with a fake/placeholder project ID
to see the draft ID structure, then we can do it properly.
"""
import asyncio, sys, json, base64
sys.path.insert(0, '/work')
from pathlib import Path

async def get_deployment_draft(project_id: str):
    from sdk.tools.pd_vercel_token_auth import pd_vercel_token_auth_proxy_post
    
    TEAM_ID = "team_5abSgYLF5aSg66CW2jblETOE"
    PROJECT_NAME = "cataract-safe-nextjs"
    OUT_DIR = Path("/work/repos/cataract-safe-nextjs/out")
    
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
    print(json.dumps(result, indent=2))
    return result

if __name__ == "__main__":
    # Load project_id from result file if available
    result_file = Path("/work/repos/cataract-safe-nextjs/scripts/project_id.txt")
    if result_file.exists():
        project_id = result_file.read_text().strip()
        print(f"Using project_id: {project_id}")
        asyncio.run(get_deployment_draft(project_id))
    else:
        print("No project_id.txt found. Run step 1 first.")
