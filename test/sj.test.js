describe("SJ", () => {
  beforeAll(async () => {
    await page.goto("https://sj.se");
  });

  it('should include "sj.se" in the title', async () => {
    await expect(page.title()).resolves.toContain("sj.se");
  });
});
