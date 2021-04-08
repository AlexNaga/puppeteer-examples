const puppeteer = require("puppeteer");

// Example of clicking and typing
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false }); // default is true
    const page = await browser.newPage();
    await page.setViewport({ width: 1000, height: 900 });
    await page.goto("https://www.sj.se");

    // await page.waitForNavigation({ waitUntil: "networkidle0" });

    const fromInput = "#booking-departure";
    const toInput = "#booking-arrival";

    await page.waitForSelector(fromInput, { visible: true });
    await page.waitForSelector(toInput, { visible: true });

    await page.type(fromInput, "Göteborg");
    await page.type(toInput, "Stockholm");

    await page.keyboard.press("Enter");

    // await browser.close();
  } catch (error) {
    console.error(error);
  }
})();
