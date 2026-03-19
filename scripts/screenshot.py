"""Take a screenshot of the local dev server for the Cataract Safe site."""
import asyncio
import sys
sys.path.insert(0, '/work')

async def main():
    from sdk.utils.browser import get_browser, close_browser
    
    browser = await get_browser("cataract-screenshot", viewport_width=1440, viewport_height=900)
    
    # Load the local site
    await browser.goto("http://localhost:8888/")
    
    # Wait for fonts to load
    await browser.page.wait_for_timeout(3000)
    
    # Take full page screenshot
    screenshot_bytes = await browser.page.screenshot(
        path="/work/repos/cataract-safe-nextjs/scripts/preview_desktop.png",
        full_page=True
    )
    print(f"Screenshot saved: {len(screenshot_bytes)} bytes")
    
    # Mobile screenshot
    await browser.page.set_viewport_size({"width": 390, "height": 844})
    await browser.page.wait_for_timeout(1000)
    screenshot_bytes = await browser.page.screenshot(
        path="/work/repos/cataract-safe-nextjs/scripts/preview_mobile.png",
        full_page=True
    )
    print(f"Mobile screenshot saved: {len(screenshot_bytes)} bytes")
    
    await close_browser("cataract-screenshot")
    print("Done!")

asyncio.run(main())
