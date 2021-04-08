module.exports = {
  launch: {
    dumpio: false, // Whether to show browser logs or not
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
  browser: "chromium",
  browserContext: "default",
};
