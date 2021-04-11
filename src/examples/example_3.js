const puppeteer = require("puppeteer");

// Example of getting the page title
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("https://sj.se");

    console.log(await page.title());

    // Function that is run within the page
    const pageTitle = await page.evaluate(async () => document.title);

    console.log(`The page title is: ${pageTitle}`);

    await browser.close();
  } catch (error) {
    console.error(error);
  }
})();
