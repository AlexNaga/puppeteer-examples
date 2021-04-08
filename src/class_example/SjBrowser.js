const { Browser } = require("./Browser");

class SjBrowser extends Browser {
  constructor({ url, headless }) {
    // Call the parent class' constructor with options
    super({ url, headless });
    /**
     * Note: In derived classes, super() must be called before you
     * can use 'this'. Leaving this out will cause a reference error.
     */
  }

  async login() {
    console.log("Login to SJ");
  }
}

module.exports = { SjBrowser };
