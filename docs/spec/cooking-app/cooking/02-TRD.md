# Recipe Alchemist — TRD

**Verdict.** This is a plain chatbot with a database, built on your monorepo-template: Convex, Next.js 16, later Expo, and pnpm.
- **Runtime model.** GLM 5.3 Flash, called through one provider seam.
- **Who decides what.** The model writes the recipe; plain code decides allergens, macros and access.
- **Sign-in.** Convex Auth magic link.
- **Payments and nutrition.** Payments must be non-Stripe. Nutrition numbers come from a seed table built from USDA data.

## 1. Stack
These parts are locked by monorepo-template:
- pnpm monorepo
- Convex: database, functions and Convex Auth
- `apps/web` on Next.js 16, hosted on Vercel
- `apps/mobile` on Expo with NativeWind (MVP phase, not the kitchen run), version as pinned in the template
- Tailwind v4 and shadcn primitives
- Biome, Vitest and Playwright

Repo: `Levidavidspublic/recipe-alchemist`, created from monorepo-template. *(EXTRAPOLATED)*

## 2. Architecture
```
apps/web (Next.js 16)        apps/mobile (Expo, MVP)
      │  UI only: no logic, no vendor calls
      ▼
packages/ui (shadcn primitives + RoleTable, RiskFlag, AllergenBanner, OutcomeChips…)
packages/core (pure TypeScript — the engine)
   classifyIntent → buildPrompt → parseCard → allergenGate → dietChecks → macros
      ▲                                    ▲
packages/backend (Convex)                  │
   mutations/queries  ── actions ── providerSeam (fetch, OpenAI-compatible)
   tables (05-BACKEND-SCHEMA)               │
                                             ▼
                                   LLM provider (UNKNOWN)
```

## 3. The engine (`packages/core`, pure TypeScript, Vitest on every function)
1. **classifyIntent(brief, hasSourceRecipe)** returns one of: convert, copycat, substitute, troubleshoot, develop or plan_tonight. It runs on keyword rules first and asks the model only when the rules can't tell. *(EXTRAPOLATED)*
2. **buildPrompt** combines:
   - the intent and fidelity
   - the selected eaters: allergens, diets, kosher level, sensory notes, age band, and macro targets typed in by a parent
   - the kitchen: equipment, ingredients you can't get, and region
   - the UI language

   Pasted recipe text is wrapped as quoted data, never treated as instructions.
3. **The model call** goes through `providerSeam` inside a Convex action. It asks for JSON only, in the shape `RecipeCard` or `AnswerCard`.
4. **parseCard** validates the JSON against that schema. If it fails, the call retries once; if it fails again, the user sees an error state.
5. **allergenGate** is deterministic, and is RULE R1:
   - It normalises every ingredient line, then matches it against `allergenTerms` (English and Hebrew synonyms, word-boundary matching) for each selected eater's allergens.
   - On a hit, it regenerates once with the violation stated.
   - On a second hit, it refuses with a message and saves nothing as a recipe.
6. **dietChecks** are deterministic warnings:
   - parve: no dairy and no meat terms
   - kosher-dairy: no meat terms
   - kosher-meat: no dairy terms
   - keto: net carbs per serving shown against the target
7. **macros** come only from `nutritionSeed`, which is RULE R4. An unmatched ingredient appears in `unknownIngredients`.

`RecipeCard`: title, servings, intent, fidelity, `ingredients[]` {quantity, unit, name, role, replaces?, note}, `steps[]`, `riskFlags[]` {step, why, watch}, compromises, `allergenTagsDeclared[]`, language. `AnswerCard` (troubleshoot): diagnosis, steps to try, when to stop or throw it out, riskFlags.

## 4. Provider seam
- **Runtime model:** GLM 5.3 Flash. Amit chose it for low cost and good instruction-following.
- **Provider:** UNKNOWN. It could be Venice, Ghost, or DeepInfra (the September default). Check which one serves GLM 5.3 Flash before the kitchen run.
- **Env names** *(EXTRAPOLATED)*: `LLM_BASE_URL`, `LLM_API_KEY`, `LLM_MODEL`. They are set with `npx convex env set` and never placed in the client.
- **Rules:** no vendor AI SDK; one `fetch` to an OpenAI-compatible chat endpoint; 60 s timeout *(EXTRAPOLATED)*; every version records `model` and `promptVersion`.
- **Gen 1:** bring-your-own ChatGPT through "Sign in with ChatGPT" (Plus/Pro users only; plan usage limited to "open-source partners and selected private clients", so it needs OpenAI's approval).

## 5. Nutrition data
- **Source:** USDA FoodData Central, which is public domain (CC0); cite it as the source.
- **Seed:** `scripts/build-nutrition-seed.ts` pulls about 150 everyday ingredients from Foundation and SR Legacy into `nutritionSeed`, keeping each `fdcId`. It needs `FDC_API_KEY` (data.gov, 1,000 requests an hour). The live app never calls FoodData Central.
- **Exact mode (Gen 1).** FDC nutrient IDs seen in live API responses: soluble fibre 1082, insoluble fibre 1084, total sugar alcohols 1086. They appear only on some Branded rows, and FDC has no allulose or erythritol nutrient. Energy factors come from:
  - EU 1169/2011 Annex XIV: polyols 2.4 kcal/g, erythritol 0 kcal/g, fibre 2 kcal/g
  - FDA guidance: allulose 0.4 kcal/g
  - FDA factors for each individual polyol: UNKNOWN; no primary FDA source found yet
- **Open Food Facts:** not merged into our database. Its ODbL share-alike licence would force the merged database to be open too. *(EXTRAPOLATED; ask)*

## 6. Sign-in
Convex Auth magic link through Resend: the provider is `@auth/core/providers/resend` and the env vars are `AUTH_RESEND_KEY` and `SITE_URL` (from the Convex Auth docs). Magic link only, matching Tempo Flow and OmniAgent. *(EXTRAPOLATED)* Clerk isn't used here because Clerk Billing "only uses Stripe".

## 7. Language
- English and Hebrew from day one. `<html dir>` follows the chosen language.
- Use logical CSS properties (`ms-`/`me-`) only, so layouts mirror for right-to-left.
- The model answers in the UI language.
- i18n library: UNKNOWN. Check monorepo-template first; if it has none, use next-intl. *(EXTRAPOLATED)*

## 8. Environments
| Env | Web | Convex | Who |
|---|---|---|---|
| local | `pnpm dev` | dev deployment | agent |
| preview | Vercel preview | dev deployment | kitchen run, factory |
| live (MVP) | Vercel production | prod deployment | Amit only |

## 9. Payments (MVP, not the kitchen run)
- **Web:** Paddle (merchant of record; Israel isn't on its excluded list) or Creem (lists Israel with local payouts). Which one: UNKNOWN.
- **Apps:** Google Play billing plus RevenueCat. RevenueCat's own web billing needs Stripe, but it integrates with Paddle; with Creem, UNKNOWN. iOS (Gen 1) may link out to web checkout in the US storefront (guidelines of 8 June 2026).
- **Excluded:** Stripe, Clerk Billing, Lemon Squeezy (moving to Stripe Managed Payments, which doesn't list Israel), and Polar (payouts through Stripe Connect; UNKNOWN for you).

## 10. Usage, cost and security
- `usage` rows enforce the free tier of three requests a day (MVP). Every Convex function checks `ctx.auth` and filters by `userId`.
- Allergies, sensory notes and minors' targets are sensitive: keep them minimal, and delete every row when an account is deleted. *(EXTRAPOLATED)* Israeli privacy-law obligations: UNKNOWN; ask a professional. Legal pages in English and Hebrew.
- Run the cost guard before big configuration jobs.

## 11. CI and build lanes
- **CI:** Biome, Vitest, then Playwright against the preview URL.
- **Reviewer:** CodeRabbit (your current rule).
- **Who writes the code:**
  - The kitchen run uses the frontier tier: Opus 5.5 in Claude Code, or Astra/Soul in Codex.
  - Factory tickets use the mid-tier.
  - Tickets name a tier, never a model; `factory/SLOTS.md` maps tier → model.

## 12. Forbidden
OpenRouter, Composio, Stripe and anything that depends on it (including Lemon Squeezy and Clerk Billing), vendor AI SDKs, axios, Zustand/Redux/Jotai, Electron, and Supabase/Firebase/Auth0/NextAuth (from the September contract).

## Open questions for Amit
1. Which provider serves GLM 5.3 Flash for you: Venice, Ghost or DeepInfra?
2. The September contract forbids Clerk; your 5 October note says Clerk is back on the table. With Clerk Billing ruled out by Stripe, is Convex Auth magic link fine?
3. Should Open Food Facts stay out to avoid its share-alike licence?
4. Do you want Google sign-in alongside the magic link?
5. Who checks your Israeli privacy obligations, your uncle or a lawyer?

## Sources
- Convex Auth magic links: https://labs.convex.dev/auth/config/email
- USDA FoodData Central: https://fdc.nal.usda.gov/api-guide
- Open Food Facts terms: https://world.openfoodfacts.org/terms-of-use
- EU 1169/2011 Annex XIV: https://www.legislation.gov.uk/eur/2011/1169/annex/XIV
- FDA allulose guidance: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-declaration-allulose-and-calories-allulose-nutrition-and-supplement-facts-labels
- 21 CFR 101.9: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-101/subpart-A/section-101.9
- Paddle: https://www.paddle.com/help/start/intro-to-paddle/which-countries-are-supported-by-paddle
- Creem: https://docs.creem.io/merchant-of-record/supported-countries
- RevenueCat:
  - https://www.revenuecat.com/docs/web/web-billing/web-sdk.md
  - https://www.revenuecat.com/docs/web/integrations/paddle.md
- Clerk Billing: https://clerk.com/docs/billing/overview
- Stripe Managed Payments: https://docs.stripe.com/payments/managed-payments/eligibility
- Polar: https://polar.sh/docs/merchant-of-record/supported-countries
- Apple guidelines: https://developer.apple.com/app-store/review/guidelines/
- Sign in with ChatGPT: https://developers.openai.com/siwc/quickstart
- Internal: `13a-RECIPE-CONVERTER-harness-prompt.md` (the contract every small app shares)
