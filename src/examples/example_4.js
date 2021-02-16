require("dotenv").config();
const env = process.env;
const puppeteer = require("puppeteer");

// Example of getting the page title
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://google.com");

    const pageTitle = await page.title();
    console.log(`The page title is: ${pageTitle}`);

    await browser.close();
  } catch (error) {
    console.error(error);
  }
})();
