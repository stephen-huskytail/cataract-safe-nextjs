"""Take a screenshot of the local site using playwright directly."""
import asyncio
import sys
sys.path.insert(0, '/work')

async def main():
    from playwright.async_api import async_playwright
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        
        # Desktop screenshot
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()
        
        await page.goto("http://localhost:8888/")
        await page.wait_for_timeout(3000)
        
        await page.screenshot(
            path="/work/repos/cataract-safe-nextjs/scripts/preview_desktop.png",
            full_page=True
        )
        print("Desktop screenshot saved")
        
        # Also save hero section only
        await page.screenshot(
            path="/work/repos/cataract-safe-nextjs/scripts/preview_hero.png",
            clip={"x": 0, "y": 0, "width": 1440, "height": 700}
        )
        print("Hero screenshot saved")
        
        await context.close()
        
        # Mobile screenshot
        context2 = await browser.new_context(
            viewport={"width": 390, "height": 844},
            device_scale_factor=2,
        )
        page2 = await context2.new_page()
        await page2.goto("http://localhost:8888/")
        await page2.wait_for_timeout(2000)
        await page2.screenshot(
            path="/work/repos/cataract-safe-nextjs/scripts/preview_mobile.png",
            full_page=True
        )
        print("Mobile screenshot saved")
        
        await browser.close()

asyncio.run(main())
