require("dotenv").config();
const env = process.env;
const puppeteer = require("puppeteer");

// Example of taking a screenshot
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false }); // default is true
    const page = await browser.newPage();
    await page.goto("https://example.com");

    await page.screenshot({ path: `${env.OUTPUT_DIR}/example_1.png` });

    await browser.close();
  } catch (error) {
    console.error(error);
  }
})();
