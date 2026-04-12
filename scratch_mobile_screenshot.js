const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    isMobile: true
  });
  const page = await context.newPage();
  await page.goto('file:///Users/princeyadav/Downloads/Untitled session-all-assets (1)/bellezahome/index.html');
  await page.screenshot({ path: '/Users/princeyadav/.gemini/antigravity/brain/cacb155e-3827-4cdf-b3e2-1f9674e49bb4/mobile_view_1.png', fullPage: true });
  await browser.close();
})();
