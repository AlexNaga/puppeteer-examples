require("dotenv").config();
const env = process.env;
const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false }); // default is true
    const page = await browser.newPage();
    await page.goto("https://example.com");

    await page.screenshot({ path: `${env.OUTPUT_DIR}/example.png` });

    await browser.close();
  } catch (error) {
    console.error(error);
  }
})();
