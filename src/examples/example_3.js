require("dotenv").config();
const env = process.env;
const puppeteer = require("puppeteer");

// Example of taking a screenshot in Nova
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false }); // default is true
    const page = await browser.newPage();
    await page.goto(env.NOVA_URL);

    await page.screenshot({ path: `${env.OUTPUT_DIR}/example_3.png` });

    await browser.close();
  } catch (error) {
    console.error(error);
  }
})();
