const { SjBrowser } = require("./SjBrowser");
const sjBrowser = new SjBrowser({ url: "https://www.sj.se", headless: false });

(async () => {
  try {
    await sjBrowser.openPage();
    await sjBrowser.login();
  } catch (error) {
    console.error(error);
  }
})();
