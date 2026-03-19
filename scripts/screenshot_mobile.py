"""Take a proper mobile screenshot."""
import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        
        context = await browser.new_context(
            viewport={"width": 390, "height": 844},
        )
        page = await context.new_page()
        await page.goto("http://localhost:8889/")
        await page.wait_for_timeout(3000)
        
        # Hero screenshot on mobile
        await page.screenshot(
            path="/work/repos/cataract-safe-nextjs/scripts/preview_mobile_hero.png",
            clip={"x": 0, "y": 0, "width": 390, "height": 700}
        )
        print("Mobile hero screenshot saved")
        
        # Full page
        await page.screenshot(
            path="/work/repos/cataract-safe-nextjs/scripts/preview_mobile_full.png",
            full_page=True
        )
        print("Mobile full screenshot saved")
        
        await browser.close()

asyncio.run(main())
