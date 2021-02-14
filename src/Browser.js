const puppeteer = require("puppeteer");

class Browser {
  constructor({ url, headless = true }) {
    this.url = url;
    this.headless = headless;
  }

  async init() {
    this.browser = await puppeteer.launch({ headless: this.headless }); // default is true
  }

  async openPage(url = this.url) {
    if (!this.browser) {
      await this.init();
    }
    const page = await this.browser.newPage();
    await page.goto(url);
  }
}

module.exports = { Browser };
