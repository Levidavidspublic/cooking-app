# Recipe Alchemist — Roadmap (MVP and Gen 1)

**Verdict.** Seven phases. One kitchen run gets to about 80%. Three short phases finish the MVP: harden, invite beta, then paid launch. Gen 1 is three phases: the cooking "Context7" knowledge base, import and planning, and the pro tier with exact nutrition.
- **MVP** is the product at launch: Ask, Cookbook, Test and verify, households and the allergen gate, in English and Hebrew, on web and Android, with free and paid tiers.
- **Gen 1** is the full first generation.
- Each phase lists only its first three ticket titles; the rest get written from shipped code.

## MVP vs Gen 1
| | MVP | Gen 1 |
|---|---|---|
| Asking | one brief box, six intents, fidelity | + import from a URL or photo, + simplification mode |
| Safety | allergen gate, minors rule, disclaimer | + expert-reviewed availability and kosher layer |
| Nutrition | guideline macros from the USDA seed | + exact mode: soluble/insoluble fibre, sugar alcohols, energy factors |
| Planning | plan tonight (1–3 dishes) | weekly plan + shopping list |
| Platforms | web, Android (Expo) | + iOS |
| Money | invite beta → free (3 a day) and paid; Paddle or Creem; Google Play | + pro tier (scale, cost, batch); bring-your-own ChatGPT (if OpenAI approves) |
| Knowledge | seed tables only | cooking "Context7": four layers as a connector |

## Phases

### Phase 0: Kitchen run (one day, about 6 hours, frontier tier)
- **Goal:** about 80% of the product on preview, following `KITCHEN-BRIEF.md`.
- **Exit check:** all three finish lines pass on the preview URL, CP1–CP6 from `03-APP-FLOW.md` are green in Playwright, and `pnpm test` is green.
- **First tickets:**
  1. Scaffold `recipe-alchemist` from monorepo-template with the Convex schema for the kitchen tables
  2. Engine core: intent, prompt, parse, allergen gate and macros, with Vitest fixtures
  3. Ask screen and recipe card wired to `engine.run` on preview

### Phase 1: Harden for testers (1–2 weeks, factory, mid-tier)
- **Goal:** make it safe and solid enough to hand to the first testers.
- **Exit check:**
  - the expert has reviewed the English and Hebrew allergen terms (`allergenTerms.reviewedBy` set on 100% of rows)
  - an Android APK installs and runs CP1 and CP3
  - the legal pages are live in English and Hebrew
- **First tickets:**
  1. Expert review screen and `expertReviews` table
  2. Expo shell around the same `packages/core` and `packages/backend`, with no backend change
  3. English and Hebrew legal pages plus account deletion

### Phase 2: Invite beta (1–2 weeks)
- **Goal:** the first testers use it for real, and the expert grades a fixed set of answers.
- **Exit check:**
  - at least 10 testers have each saved at least one recipe and logged at least one cook *(EXTRAPOLATED number)*
  - the gold set has at least 30 versions graded, with an average grade of at least 4 out of 5 and zero answers marked unsafe
- **First tickets:**
  1. Invite list and waitlist screen
  2. Gold set: 30 seeded briefs covering every intent and tester group
  3. Expert grading run on the gold set, with a pass/fail report

### Phase 3: MVP launch, free and paid (1–2 weeks)
- **Goal:** strangers can sign up, use three requests a day and pay to upgrade.
- **Exit check:**
  - a test purchase on web and Android updates `entitlements`
  - the free limit blocks the 4th request of the day
  - Amit deploys to live
- **First tickets:**
  1. Usage counter and free-tier limit
  2. Web checkout through the chosen vendor (Paddle or Creem), with the webhook writing to `entitlements`
  3. Google Play billing and RevenueCat entitlements

### Gen 1, Phase A: Cooking "Context7" knowledge base (2 weeks)
- **Goal:** the four July layers become separate tables, published as a connector the app also uses. The four layers are chemistry, failures, availability and kosher, and techniques.
- **Exit check:** the engine cites a layer for each risk flag, and an external agent can query the connector.
- **First tickets:**
  1. Chemistry layer from USDA FoodData Central plus functional tags
  2. Failure layer built from cook logs and expert reviews
  3. Read-only connector exposing the layers

### Gen 1, Phase B: Import and planning (2 weeks)
- **Goal:** bring recipes in from anywhere, and plan a week.
- **Exit check:** a recipe URL and a cookbook photo each import into Ask, and a 7-day plan produces one shopping list.
- **First tickets:**
  1. Import from a URL
  2. Import from a photo or screenshot
  3. Weekly plan and shopping list

### Gen 1, Phase C: Pro tier and exact nutrition (2 weeks)
- **Goal:** serve caterers and recipe developers, and give manufacturer-grade numbers.
- **Exit check:**
  - scaling one recipe to 10× keeps the ratios and flags technique changes
  - exact mode shows soluble fibre, insoluble fibre and sugar alcohols with their energy factors and named sources
  - the iOS build is live
- **First tickets:**
  1. Scaling and batching for the pro tier
  2. Exact nutrition mode
  3. iOS shell with a US link-out to checkout

Parked until OpenAI approves the app: bring-your-own ChatGPT plan. Parked until after Gen 1 Phase A: simplification mode, the same engine run in reverse to simplify the process rather than swap ingredients.

## Dependencies
```
P0 kitchen ─► P1 harden ─► P2 beta ─► P3 MVP launch ─► G1-A knowledge ─► G1-C pro/exact
                                                    └─► G1-B import/plan
```

## Open questions for Amit
1. Is 10 testers with at least one save and one cook log the right bar for the beta exit?
2. Payment vendor, and price: both block Phase 3.
3. Should Gen 1 Phase A (the knowledge base) come before Phase B (import), given the knowledge base is the moat?
4. Who runs Phase 1: the factory on mid-tier models, or a second kitchen run?

## Sources
- Internal:
  - `KITCHEN-BRIEF.md`, `01-PRD.md` §4, `03-APP-FLOW.md` CP1–CP6
  - the July four-layer plan (Basic Memory)
  - the definitions of STAGE, PHASE and GENERATION and of MVP vs Gen 1 (Amit's vocabulary)
  - factory proof rules (`software-factory` skill)
- Sign in with ChatGPT: https://developers.openai.com/siwc/quickstart
- Apple US link-out rules: https://developer.apple.com/app-store/review/guidelines/
