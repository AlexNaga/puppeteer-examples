const puppeteer = require("puppeteer");

// Example of adding our own function to the page
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    page.on("console", (msg) => console.log(msg.text()));

    // Add our own function to the page
    await page.exposeFunction("myFunction", (txt) => txt + " (Hello from myFunction)");

    // Function that is run within the page
    await page.evaluate(async () => {
      const result = await window.myFunction("This is a text");
      console.log(result);
    });

    await browser.close();
  } catch (error) {
    console.error(error);
  }
})();
