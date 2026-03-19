"""Step 1: Create the Vercel project"""
import asyncio
import json
import sys
sys.path.insert(0, '/work')

async def main():
    from sdk.tools.pd_vercel_token_auth import pd_vercel_token_auth_proxy_post

    TEAM_ID = "team_5abSgYLF5aSg66CW2jblETOE"
    PROJECT_NAME = "cataract-safe-nextjs"
    
    result = await pd_vercel_token_auth_proxy_post(
        url="https://api.vercel.com/v10/projects",
        query_params={"teamId": TEAM_ID},
        json_body={
            "name": PROJECT_NAME,
            "framework": None,
            "publicSource": False,
        }
    )
    print(json.dumps(result, indent=2))
    return result

result = asyncio.run(main())
