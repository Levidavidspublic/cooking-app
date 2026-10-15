import { defineConfig, devices } from "@playwright/test";

// e2e-preview check: runs only against a deployed preview (PLAYWRIGHT_BASE_URL).
// Vercel Deployment Protection is passed with the automation bypass header.
const baseURL = process.env.PLAYWRIGHT_BASE_URL;
const bypass = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
if (!baseURL) throw new Error("PLAYWRIGHT_BASE_URL is not set (the e2e-preview workflow sets it).");

export default defineConfig({
  testDir: "tests",
  timeout: 60_000,
  expect: { timeout: 15_000 },
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL,
    trace: "on",
    screenshot: "on",
    ...(bypass ? { extraHTTPHeaders: { "x-vercel-protection-bypass": bypass, "x-vercel-set-bypass-cookie": "true" } } : {}),
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
