# Recipe Alchemist — PRD

**Verdict.** Recipe Alchemist is a chef in your pocket. You give it any cooking goal and your household's limits, and it gives back a recipe that still works. It shows what each ingredient does, flags the steps most likely to fail, and improves the next version after you cook it. Keto conversion is the marketing hook; the product is recipe engineering under constraints. The MVP is web plus Android, in Hebrew and English, with a free invite beta and then free and paid tiers. The cooking "Context7" knowledge base is Gen 1.

Draft v1 · 2026-10-15 · owner Amit.

## 1. Problem
Recipes assume your diet, equipment, pantry and skill. One-to-one swaps break texture, and allergy-safe food often "tastes like cardboard". Existing "turn any recipe keto" apps never say what each ingredient does, where the new version will fail, or how to learn from the result.

## 2. Users
All first testers are free, by invitation. Roles, not names, except where Amit named them.

| Tester | Job | The limit that matters |
|---|---|---|
| Amit (former pastry chef, eats keto/paleo) | copycats, conversions, troubleshooting ferments | keto, real dairy, no vegan swaps |
| Guli (professional recipe developer) | develop recipes for food companies | fidelity, reproducibility |
| Kosher caterer | kosher and parve desserts at volume | kosher level, scale |
| Dojo parents of teen competitors | high-protein, kid-friendly meal prep | macro targets set by a coach or dietitian |
| Therapeutic-karate and neurodivergent households | sensory-friendly food | texture and sensory notes per person |
| Households with life-threatening allergies | safe food that tastes good | anaphylactic dairy; vegetarian plus nut allergy |
| Food technologist (expert reviewer) | grades a fixed set of answers before each release | professional sign-off |
| English speakers in Ra'anana | everything above, in English | language |

First payer: a home cook working to a diet or limits. *(EXTRAPOLATED)* Caterers and developers get a Gen 1 pro tier.

## 3. The one job
"Tell it what you want and what's in your way, get a recipe that works, know why it works, and make it better after you cook it."

One brief box; the app works out the kind of request: **convert** ("higher-protein, lower-carb"), **copycat** ("McDonald's soft serve without an ice cream machine"; fidelity rough or 99%), **substitute** ("green curry without galangal"), **troubleshoot** ("my ginger beer isn't fizzing"; advice, not a recipe), **develop** ("a donut recipe I can sell") and **plan tonight** (one to three dishes).

## 4. Features
**Kitchen prototype, three features:**
- **F1 Ask.** You pick which eaters a request is for. The result shows a role table (original ingredient → its job → substitute), risk flags, the rewritten steps, macros from a named source and a "what I had to compromise" line. The household profile (eaters and kitchen) is set up inside F1.
- **F2 Cookbook.** Saved recipes with versions you can't change after saving. "Convert again" creates the next version.
- **F3 Test and verify.** After cooking, you log an outcome (worked, rubbery, dry, spread or off-flavour) plus a note. "Improve from this log" creates the next version and says how the log changed it.

**The MVP adds:** an Android app built with Expo, an invite list, a free tier and a paid tier with payments, legal pages in English and Hebrew, an allergen dictionary reviewed by the expert, the expert's grading set, and account deletion.

**Gen 1 adds:** the cooking "Context7" knowledge base (four layers, published as a connector), URL and photo import, weekly plans with a shopping list, a pro tier with scaling and costing, exact nutrition mode (soluble and insoluble fibre, sugar alcohols), simplification mode, cook mode *(EXTRAPOLATED)*, iOS, and bring-your-own ChatGPT if OpenAI approves.

## 5. Safety rules
These are written as RULES. *(EXTRAPOLATED; Amit may rewrite them)*
- **R1 Allergen gate.** A fixed code check, not the model, compares every recipe against the saved allergens of each selected eater. A recipe that contains a listed allergen is never shown. Every recipe ends with: "Check every label for may-contain warnings." The app never claims a recipe is safe.
- **R2 Minors.** The app never sets calorie or macro targets for an eater under 18. It only works towards targets a parent types in from a professional.
- **R3 Accuracy contract.** "Google Fit sleep monitor versus a sleep lab": consumer-grade guidance, never lab-grade. This sentence appears in the UI.
- **R4 Named numbers.** Every macro comes from USDA FoodData Central. An ingredient that isn't in the table shows "macros unknown"; the model never guesses a number.
- **R5 Kosher.** Kosher modes give guidance, not certification. The app never claims a hechsher.

## 6. Feature parity
From live research on 2026-10-15. These are Gen 1 targets, not MVP.

| Product | What it does that matters | What we take | Our edge |
|---|---|---|---|
| Dishdraft (iOS) | converts any recipe to a diet from screenshots | import from a screenshot | ingredient roles, failure flags, allergen gate |
| Recipe Adapt (iOS) | keto, low-carb and paleo conversion; URL and photo import | URL import | the test loop |
| Jessie: Your Keto Chef (iOS) | "Turn any recipe into keto" | — | Hebrew, kosher, local availability |
| Carb Manager, Cronometer | trackers with URL import | nutrition per recipe | conversion that keeps the texture |
| Samsung Food | AI "healthier version", meal plans | weekly plan | named-source macros |
| ReciMe, Crouton, Plan to Eat, Paprika, Mealie | photo, social and web import; recipe library | import, cookbook polish | — |
| DishGen, ChefGPT | AI generation | — | explaining why each choice was made |

## 7. Non-goals
No medical or clinical nutrition advice. No certification. No social feed or sharing in the MVP. No billing in the kitchen run. No scraping in the MVP. No vegan swaps unless an eater's profile asks for them.

## 8. It works (machine-checkable)
- The three kitchen finish lines in `KITCHEN-BRIEF.md` pass on preview.
- `pnpm test` passes, including the allergen-gate fixture: no recipe with a blocked term gets through.
- A second account sees none of the first account's data.
- Switching to Hebrew sets `dir="rtl"`, and the next answer comes back in Hebrew.

## 9. Money
The beta is free and by invitation. After it, the free tier is three requests a day, and the paid tier gives unlimited use, household profiles and full history. Price: UNKNOWN. Vendors are in TRD §9; nothing that depends on Stripe.

## Open questions for Amit
1. What's the price of the paid tier, in shekels and dollars?
2. Paddle or Creem for web payments?
3. A 18 September decision note says "Micro-SaaS is a pure distraction. FIXED." Your 14 October plan is to test the kitchen on micro-SaaS products. Does the October plan replace that note?
4. The five bake-log outcomes come from baking. Should ferments and savoury dishes get outcomes of their own, such as "no fizz", "mould" or "too salty"?
5. Has the name "Recipe Alchemist" been checked against the US trademark register? UNKNOWN.
6. Should the household profile be shareable between family members in the MVP? *(EXTRAPOLATED: no; it comes in Gen 1)*

## Sources
- Internal:
  - `Downloads\handoff-2026-09-15\session-b\MICRO-SAAS-BRIEFS.md` (Brief 3)
  - `…\bolt\bolt-04-recipe-converter.md`
  - `…\factory-v2-2026-09-19\13-microsaas-harness-prompts\13a-RECIPE-CONVERTER-harness-prompt.md`
  - Basic Memory: "Recipe Converter" and the July 2026 seven-move loop chat
- Competitors:
  - https://apps.apple.com/app/id6762580495
  - https://apps.apple.com/mx/app/recipe-adapt/id6756468652
  - https://help.carbmanager.com/docs/import-recipes
  - https://samsungfood.com/food-plus/
  - https://cronometer.com/gold
  - https://www.plantoeat.com/pricing
  - https://github.com/mealie-recipes/mealie
  - https://www.dishgen.com/
- USDA FoodData Central: https://fdc.nal.usda.gov/api-guide
- Payments:
  - https://www.paddle.com/help/start/intro-to-paddle/which-countries-are-supported-by-paddle
  - https://docs.creem.io/merchant-of-record/supported-countries
  - https://clerk.com/docs/billing/overview
  - https://www.lemonsqueezy.com/blog/2026-update
  - https://developer.apple.com/app-store/review/guidelines/
- Bring-your-own ChatGPT: https://developers.openai.com/siwc/quickstart
