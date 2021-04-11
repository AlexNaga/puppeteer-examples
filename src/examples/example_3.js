const puppeteer = require("puppeteer");

// Example of getting the page title
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("https://sj.se");

    const pageTitle = await page.title();
    console.log(`The page title is: ${pageTitle}`);

    page.on("console", (msg) => console.log(msg.text()));

    // Function that is run within the page
    await page.evaluate(async () => {
      console.log(document.title);
    });

    await browser.close();
  } catch (error) {
    console.error(error);
  }
})();
