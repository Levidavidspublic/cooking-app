import { expect, test } from "@playwright/test";

// Minimal preview smoke test. Ticket PRs add their own specs next to this one; the screenshots
// and traces are uploaded as the PR's EVIDENCE.
test("home page loads on the preview", async ({ page }) => {
  const response = await page.goto("/", { waitUntil: "load" });
  expect(response, "no response from the preview").not.toBeNull();
  expect(response!.status(), `HTTP ${response!.status()} from ${page.url()}`).toBeLessThan(400);
  // Not the Vercel login wall: the bypass header worked.
  await expect(page).not.toHaveURL(/vercel\.com\/(login|sso)/);
  await expect(page.locator("body")).toBeVisible();
});
