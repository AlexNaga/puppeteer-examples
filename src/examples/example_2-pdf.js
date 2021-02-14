require("dotenv").config();
const env = process.env;
const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://example.com");

    await page.pdf({ path: `${env.OUTPUT_DIR}/example.pdf`, format: "A4" });

    await browser.close();
  } catch (error) {
    console.error(error);
  }
})();
