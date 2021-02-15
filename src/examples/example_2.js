require("dotenv").config();
const env = process.env;
const puppeteer = require("puppeteer");

// Example of saving as a .pdf
(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://example.com");

    await page.pdf({ path: `${env.OUTPUT_DIR}/example_2.pdf`, format: "A4" });

    await browser.close();
  } catch (error) {
    console.error(error);
  }
})();
