require("dotenv").config();
const env = process.env;

const { NovaBrowser } = require("./NovaBrowser");
const novaBrowser = new NovaBrowser({ url: env.NOVA_URL, headless: false });

(async () => {
  try {
    await novaBrowser.openPage();
    await novaBrowser.login();
  } catch (error) {
    console.error(error);
  }
})();
