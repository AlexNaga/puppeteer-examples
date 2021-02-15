require("dotenv").config();
const env = process.env;
const puppeteer = require("puppeteer");

// Example of taking a screenshot in Nova
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false }); // default is true
    const page = await browser.newPage();
    await page.goto(env.NOVA_URL);

    const usernameInput = "#login_name";
    const passwordInput = "#login_pwd";
    const loginBtn = "#login_nonguest";

    await page.waitForSelector(usernameInput, { visible: true });
    await page.waitForSelector(passwordInput, { visible: true });
    await page.waitForSelector(loginBtn, { visible: true });

    // await page.waitForNavigation({ waitUntil: "networkidle0" });

    await page.type(usernameInput, env.NOVA_USERNAME);
    await page.type(passwordInput, env.NOVA_PASSWORD);
    await page.click(loginBtn);

    // await browser.close();
  } catch (error) {
    console.error(error);
  }
})();
