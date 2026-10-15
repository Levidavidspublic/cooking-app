# Recipe Alchemist — KITCHEN-BRIEF

**Verdict.** One frontier-tier run of about 6 hours builds three features and stops: **Ask**, **Cookbook**, and **Test and verify**. Each feature has one finish line, proven on the preview URL by a Playwright spec plus a two-minute look from you. No billing, no Android, no scraping, no import. If finish line 1's allergen check fails, the run has not shipped, whatever else works.

## Where to run it
- **Harness:** Claude Code on Opus 5.5, or Codex on Astra/Soul. Both are frontier tier, as the kitchen allows. The reviewer is CodeRabbit.
- **Repo:** a fresh `Levidavidspublic/recipe-alchemist` from monorepo-template. One branch per finish line: `kitchen/fl1-ask`, `kitchen/fl2-cookbook`, `kitchen/fl3-loop`. *(EXTRAPOLATED)*
- **Target:** a Vercel preview on a Convex **dev** deployment. Nothing goes live; deploying is yours.
- **Timebox:** 6 hours. At 6 hours, stop and hand over whatever exists, plus a report.

## Attach
- [ ] `01-PRD.md` through `06-ROADMAP.md` from this folder
- [ ] This file

## Configuration before building (names only, never values)
Set these with `npx convex env set` (Convex) and in the Vercel project settings (web). Keys come from 1Password by item name. If an item doesn't exist yet, the agent stops and tells you which item name to create.

| Env var | Where | 1Password item *(EXTRAPOLATED names)* |
|---|---|---|
| `LLM_BASE_URL`, `LLM_API_KEY`, `LLM_MODEL` | Convex | "Recipe Alchemist — LLM provider" (provider UNKNOWN; it must serve GLM 5.3 Flash) |
| `AUTH_RESEND_KEY`, `SITE_URL` | Convex | "Recipe Alchemist — Resend" |
| `FDC_API_KEY` | local only, for the seed script | "USDA FDC — data.gov key" |
| `E2E_TEST_LOGIN` | Convex **dev** only | none; it is a flag. It allows a test-only sign-in for Playwright and is never set on live. *(EXTRAPOLATED)* |

Run the cost guard before starting: GLM spend capped at the provider, and CodeRabbit and any pay-per-use reviewers checked.

## What gets built
- **Schema:** the kitchen tables from `05-BACKEND-SCHEMA.md` only.
- **Engine:** `packages/core` with `classifyIntent`, `buildPrompt`, `parseCard`, `allergenGate`, `dietChecks` and `macros`, each with a Vitest test.
- **Seeds:**
  - about 150 ingredients pulled from USDA FoodData Central, each row keeping its `fdcId`
  - an English and Hebrew allergen-term list of at least 25 terms per allergen in your testers' profiles, with milk, tree nuts and peanuts first
- **Screens:**
  - sign-in and onboarding
  - Ask with the recipe card, answer card and refusal card
  - Cookbook with recipe detail
  - Log a cook
  - Household
  - Settings with the language switch
- **Languages:** English and Hebrew strings for every screen, and right-to-left layout.

## Finish line 1: Ask is useful and safe
**Proof on preview:**
```
pnpm --filter core test allergenGate        → all pass (incl. stubbed "butter"/"ghee"/"whey"/"חמאה" cases blocked)
pnpm exec playwright test e2e/fl1-ask.spec.ts   → 3 passed
```
The spec runs these click-paths:
- **CP1:** an eater allergic to milk asks for "McDonald's soft serve, no ice cream machine". The card must show:
  - a role table with at least 3 rows
  - at least 1 risk flag
  - the allergen banner
  - no milk term from `allergenTerms` in any ingredient
  - "USDA FoodData Central" on the macros line
- **CP2:** "my ginger beer isn't fizzing after 3 days" returns an answer card, not a recipe card.
- **CP5:** the croissant brief never shows a milk term.

**Your two-minute look:** ask for something you know cold, like keto ricotta gnocchi. Is the swap logic one a pastry chef would sign?

## Finish line 2: Cookbook keeps everything, privately
**Proof on preview:**
```
pnpm exec playwright test e2e/fl2-cookbook.spec.ts   → 3 passed
```
- Save the CP1 card as version 1, reload the page, and it's still there.
- "Convert again" creates version 2; version 1 is unchanged.
- **CP6:** a second test account sees an empty cookbook and gets a 404 on the first account's recipe URL.

**Your two-minute look:** open your own saved recipe on your phone. Can you read the role table without zooming?

## Finish line 3: Test and verify closes the loop, in both languages
**Proof on preview:**
```
pnpm exec playwright test e2e/fl3-loop.spec.ts   → 3 passed
```
- **CP3:** log "rubbery" with the note "too much xanthan" on version 1, then tap Improve. Version 2 exists and its card has a non-empty "What changed because of your log" line.
- The log is attached to version 1 only.
- **CP4:** switch Settings to עברית. `<html dir="rtl">`, and the next answer's title contains Hebrew characters.

**Your two-minute look:** does version 2 actually fix the problem in your note, or just reword it?

## Out of scope for this run
- payments
- the free-tier limit
- invites
- Expo or Android
- import from a URL or photo
- weekly plans
- exact nutrition mode
- the knowledge-base layers
- bring-your-own ChatGPT
- cook mode
- the logo

## What to check when it finishes
- [ ] All three Playwright specs pass against the preview URL, and the report includes their output.
- [ ] The allergen-gate unit tests pass, including the stubbed-violation cases.
- [ ] No env value appears anywhere in the client bundle or the logs; names only.
- [ ] Every macro on screen says "USDA FoodData Central" or "unknown"; none is guessed.
- [ ] The disclaimer sentence is visible on every recipe card.
- [ ] It stopped at 6 hours or earlier, and didn't deploy to live.

## Open questions for Amit
1. Which provider and which 1Password item hold the GLM 5.3 Flash key?
2. Is the test-only sign-in flag (`E2E_TEST_LOGIN`, dev only) acceptable for automated proof? The alternative is that you click the magic links yourself.
3. Do you want to supply one "known-good" conversion, such as your keto nougat, as a gold example in the prompt?

## Sources
- `01-PRD.md` through `06-ROADMAP.md` (this folder)
- Convex Auth magic links: https://labs.convex.dev/auth/config/email
- USDA FoodData Central: https://fdc.nal.usda.gov/api-guide
- Your kitchen definition: about 80% in one run of about 6 hours on preview, frontier models, micro-SaaS with about 3 features
