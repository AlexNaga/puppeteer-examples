const { Browser } = require("./Browser");

class NovaBrowser extends Browser {
  constructor({ url, headless }) {
    // Here, it calls the parent class' constructor with url
    super({ url, headless });
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
  }

  login() {
    console.log("Login to Nova");
  }
}

module.exports = { NovaBrowser };
