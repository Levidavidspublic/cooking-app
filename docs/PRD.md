# Cooking App PRD

Updated 2026-10-21. Evidence-bounded documentation proposal; not a release or default-branch adoption.

## Product and users

A cooking assistant for home cooks with dietary, sensory, ingredient or equipment constraints, with later professional development/scaling use. It explains ingredient functions and compromises and preserves recipe versions so actual cooking feedback can inform a later version. Keto is a proposed marketing entry point, not the whole product. S94, S95, S48, S36.

Personal tester identities and health histories are not product requirements. No medical, allergy-safe, laboratory-accuracy or kosher-certification claim is established. This document describes proposed product contracts; it does not advise on a person's diet or treatment. Stage labels denote proposed scope, not shipped status. Later also parks unresolved evidence; it is not an adoption decision.

## Requirements and evidence

All proposed implementation slices are EXTRAPOLATED decomposition of the cited product sources. Source dates are not adoption dates. A completed document does not establish completed software.

### C02 — Original recipe-assistance ambition

- What: User requested text/URL/video recipe conversion and generation, diet/allergy/preference/equipment/budget/texture adaptations, simplification, restaurant recreation and coordinated meal preparation; later accepted a broad end-product inventory. Evidence: HISTORICAL_DIRECT_USER_SCOPE; CURRENT ADOPTION UNKNOWN.
- When: decided UNKNOWN (first seen 2025-08-12); source chronology: 2025-08-12 to 2025-08-22
- Why: Fit real cooks and kitchens while explaining food-science substitutions and preserving flavor and texture.
- How: Early two-page converter expanded to full account/admin/pricing flows. One feature/component at a time was requested. Later photo/pantry acceptance is superseded or narrowed by March correction and subsequent phase scopes; assistant prices, schemas and commercial extensions remain proposals.
- Status: MVP
- From: S101, S99

### C03 — Standalone product and batch grouping

- What: Cooking is separate from Tempo Flow and Consilium. User asks dietary conversion, shopping lists and grouping selected recipes by cuisine, preparation and overlapping ingredients; explicitly rejects the pantry-photo/computer-vision interpretation. Evidence: HISTORICAL_DIRECT_USER_DECISION.
- When: decided 2026-03-20 (first seen 2026-03-20); source chronology: 2026-03-20
- Why: Reduce repeated work and make practical meal preparation easier.
- How: Home/semi-professional/professional audiences are user intent; detailed tier allocations and shared backend are assistant suggestions. Reliable dietary knowledge and expert review are prerequisites, not accomplished results.
- Status: MVP
- From: S94, S95

### C06 — October product definition

- What: Recipe Alchemist is constraint-based recipe engineering, with keto as a marketing hook rather than its entire scope. Six Ask intents are convert, copycat, substitute, troubleshoot, develop and plan tonight for one to three dishes. Evidence: DRAFT_SPEC; EXTRAPOLATED CHOICES EXPLICIT.
- When: decided UNKNOWN (first seen 2026-10-15); source chronology: 2026-10-15
- Why: Simple swaps break ingredient functions and texture; cooks need explanations, risk warnings and a learning loop.
- How: One brief plus household constraints and rough/copycat fidelity returns RecipeCard, AnswerCard or refusal. Launch proposal is bilingual web/Android, invitation beta then free/paid. Product name/repository rename remains unapproved; actual prepared repository is cooking-app.
- Status: MVP
- From: S48, S36

### C16 — Related names and software cookbooks

- What: RecipeAI, HealthGourmet, Chef KetoBot and MealPrep OS are historical related concepts; exact aliases/adoption require evidence. Software prompt cookbooks and Consilium project prompts are not Cooking-app requirements. Evidence: IDENTITY_UNKNOWN_OR_EXCLUDED.
- When: decided UNKNOWN (first seen UNKNOWN); source chronology: 2025-06 to 2026-10 secondary summaries
- Why: Avoid inventing product identity from domain words or AI summaries.
- How: PDF and cards preserve cross-product evidence separately. Saved memory offers a secondary Concilium-to-Omni/Agentwright lineage candidate but conflicts with another summary; it does not authorize collapsing identities.
- Status: Later
- From: S91, S111, S112

## Product capabilities

### C07 — Three-feature kitchen and immutable improvement loop

- What: Kitchen has Ask, private Cookbook and cook-log-driven improvement. Save creates v1; conversion/improvement creates a new immutable version with an explanation; original logs stay attached to the original version. Evidence: ACCEPTANCE_SPEC; NO EXECUTED PROOF.
- When: decided UNKNOWN (first seen 2026-10-15); source chronology: 2026-10-15
- Why: Preserve reproducible recipes and make real cooking feedback useful.
- How: Approximately six-hour preview scope. CP1/CP2/CP5 cover useful recipe, troubleshooting and allergen behavior; CP3 version/log explanation; CP4 Hebrew/RTL; CP6 second-user isolation including direct-URL denial. Required unit/preview/human checks were not run here.
- Status: MVP
- From: S36

### C08 — Household constraints and deterministic authority

- What: Households/eaters/kitchens supply allergies including free text, diets, kosher choices, sensory preferences, age category, professional parent-entered targets, equipment, unavailable ingredients and region. Model generates content; code owns allergen gates, macros and access. Evidence: DRAFT_TECHNICAL_CONTRACT.
- When: decided UNKNOWN (first seen 2026-10-15); source chronology: 2026-10-15
- Why: Treat user constraints as enforceable inputs rather than optional model suggestions.
- How: Shared pure core classifies/builds prompt/parses/gates/checks diets/calculates macros. Quote pasted recipes as data. Parse retry once; allergen violation regenerates once, then refuses. Proposed ingredient-only gate is insufficient per review.
- Status: MVP
- From: S44, S47, S46

### C09 — Safety and nutrition limits

- What: Draft prohibits allergy-safe, medical, laboratory-accuracy or kosher-certification claims. It proposes deterministic selected-eater blocking, label/may-contain warning, no AI targets for minors, and USDA attribution or UNKNOWN for unmatched ingredients. Evidence: PROPOSED_PRODUCT_RULES; EXPERT VALIDATION PENDING.
- When: decided UNKNOWN (first seen 2026-10-15); source chronology: 2026-10-15
- Why: Consumer recipe guidance must expose uncertainty and avoid inventing nutrition or certification.
- How: R1-R5 in PRD are explicitly proposed/EXTRAPOLATED. Rough seeded macros are distinct from later exact nutrition; ingredient gram conversion and custom/all-field allergen matching remain unresolved contracts. Regulatory/provider assertions are historical research, not fresh guidance.
- Status: MVP
- From: S48, S47, S23, S24, S26

### C11 — Bilingual accessible cooking interface

- What: Warm restrained gray interface, readable ingredient-role table, light/dark modes; October draft adds English/Hebrew and mirrored RTL from start, phone tabs and desktop split view. Evidence: USER BRAND DIRECTION PLUS PROPOSED DESIGN TOKENS.
- When: decided UNKNOWN (first seen 2025-08-12); source chronology: 2025-08-12 and 2026-10-15
- Why: Reduce cognitive load and support use while cooking.
- How: Plain ingredient/job/swap labels, large touch targets, text beyond color, reduced motion, keyboard/focus/screen-reader support and clear loading/error/refusal states. Specific amber/font/spacing tokens are proposals. Cook mode timing, tab label and spinner versus text-only loading conflict remain open.
- Status: MVP
- From: S101, S45, S46

### Ask: convert

- What: Adapt a supplied recipe to selected eater constraints while explaining ingredient roles and compromises.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: Fit cooking help to the actual requested job and constraints.
- How: One request brief plus chosen eaters and kitchen context; classify intent and return RecipeCard, AnswerCard or a refusal under the accepted output contract.
- Status: MVP
- From: S48, S36

### Ask: copycat

- What: Recreate a requested dish under available equipment and ingredient constraints. Rough and99% are requested fidelity mode labels; no measured99% similarity is proved.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: Fit cooking help to the actual requested job and constraints.
- How: One request brief plus chosen eaters and kitchen context; classify intent and return RecipeCard, AnswerCard or a refusal under the accepted output contract.
- Status: MVP
- From: S48, S36

### Ask: substitute

- What: Explain an ingredient replacement in the recipe context, including function, amount uncertainty and likely failure risk.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: Fit cooking help to the actual requested job and constraints.
- How: One request brief plus chosen eaters and kitchen context; classify intent and return RecipeCard, AnswerCard or a refusal under the accepted output contract.
- Status: MVP
- From: S48, S36

### Ask: troubleshoot

- What: Return an AnswerCard for an observed cooking problem; do not fabricate a full recipe when advice is the requested output.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: Fit cooking help to the actual requested job and constraints.
- How: One request brief plus chosen eaters and kitchen context; classify intent and return RecipeCard, AnswerCard or a refusal under the accepted output contract.
- Status: MVP
- From: S48, S36

### Ask: develop

- What: Develop a recipe from a supplied goal and constraints; commercial suitability is not certified.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: Fit cooking help to the actual requested job and constraints.
- How: One request brief plus chosen eaters and kitchen context; classify intent and return RecipeCard, AnswerCard or a refusal under the accepted output contract.
- Status: MVP
- From: S48, S36

### Ask: plan tonight

- What: Coordinate one to three dishes in the draft request scope; full weekly planning belongs to later accepted scope.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: Fit cooking help to the actual requested job and constraints.
- How: One request brief plus chosen eaters and kitchen context; classify intent and return RecipeCard, AnswerCard or a refusal under the accepted output contract.
- Status: MVP
- From: S48, S36

### Private Cookbook

- What: Save v1, reopen it, and create a new immutable version for conversion or improvement. Recipes are private in MVP; sharing is not adopted.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: UNKNOWN for this individual feature; the parent product rationale is in the linked claim.
- How: UNKNOWN beyond the linked draft contract.
- Status: MVP
- From: S36

### Cook log and improvement

- What: Attach the observed outcome/note to the version actually cooked; a later version explains what changed because of that log. Five baking outcomes are too narrow for some intended requests.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: UNKNOWN for this individual feature; the parent product rationale is in the linked claim.
- How: UNKNOWN beyond the linked draft contract.
- Status: MVP
- From: S36

### Household and kitchen profile

- What: Store selected eaters, coded and free-text allergens, diets, kosher preferences, sensory notes, age category, externally supplied targets, equipment, exclusions and region. Multi-account household sharing remains open.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: UNKNOWN for this individual feature; the parent product rationale is in the linked claim.
- How: UNKNOWN beyond the linked draft contract.
- Status: MVP
- From: S44, S47, S46

### Ingredient function and risk presentation

- What: Show original ingredient, its job, proposed replacement, risk flags, steps and a compromise line. All food-instructing fields must be included in the accepted constraint contract.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: UNKNOWN for this individual feature; the parent product rationale is in the linked claim.
- How: UNKNOWN beyond the linked draft contract.
- Status: MVP
- From: S44, S47, S46

### Nutrition source and UNKNOWN

- What: Rough seeded nutrition must identify its source and version. Unknown foods or unvalidated unit-to-gram conversions cannot acquire invented numbers. Exact fiber/polyol mode is later.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: UNKNOWN for this individual feature; the parent product rationale is in the linked claim.
- How: UNKNOWN beyond the linked draft contract.
- Status: MVP
- From: S48, S47, S23, S24, S26

### Selected-eater allergen behavior

- What: Draft R1 intends a deterministic gate across every selected eater and custom value; ingredient-only scanning cannot establish that promise. Expert-reviewed terms and all-field tests are acceptance prerequisites.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: UNKNOWN for this individual feature; the parent product rationale is in the linked claim.
- How: UNKNOWN beyond the linked draft contract.
- Status: MVP
- From: S48, S47, S23, S24, S26

### Minor and certification limits

- What: Draft R2 refuses AI-set calorie/macro targets for minors; R3/R5 prohibit clinical/lab/kosher-certification claims. These are proposed rules awaiting explicit adoption, not certification proof.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: UNKNOWN for this individual feature; the parent product rationale is in the linked claim.
- How: UNKNOWN beyond the linked draft contract.
- Status: MVP
- From: S48, S47, S23, S24, S26

### Readable bilingual interface

- What: English/Hebrew, RTL, light/dark, large targets, plain ingredient-role labels, keyboard focus and explicit refusal/error states. Specific tokens and spinner/loading differences remain open.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: UNKNOWN for this individual feature; the parent product rationale is in the linked claim.
- How: UNKNOWN beyond the linked draft contract.
- Status: MVP
- From: S101, S45, S46

### Explicit exclusions

- What: No billing in the kitchen, scraping in MVP, social feed or household sharing in MVP, or unrequested vegan substitutions. Pantry/computer-vision product identity was explicitly rejected in the20March user decision; October recipe-photo import is a separate later proposal.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: Preserve the requested standalone recipe and batch workflow rather than infer a different product.
- How: Keep these boundaries visible in requirements and future acceptance checks.
- Status: Dropped
- From: S94, S95

### C14 — Later import, planning and professional scope

- What: Gen 1 proposes URL/photo import, weekly plan and consolidated shopping list, simplification, technique-aware scaling/batching/costing, exact fiber/polyol nutrition and iOS. Evidence: FUTURE_ROADMAP; NOT KITCHEN REQUIREMENTS.
- When: decided UNKNOWN (first seen 2026-10-15); source chronology: 2026-10-15
- Why: Move from a validated individual recipe loop toward household planning and professional recipe development.
- How: Import/photo is distinct from rejected pantry-vision identity. Tenfold scaling must preserve ratios and flag technique changes; exact nutrition needs named data/energy factors. BYOC remains parked pending approval; knowledge-versus-import order is unresolved.
- Status: Gen 1
- From: S37

## MVP acceptance boundaries

| Contract | Acceptance evidence | Backlog |
|---|---|---|
| Useful Ask response | RecipeCard, AnswerCard or refusal matches requested intent; uncertainty retained; malformed output cannot become a success | CA-02, CA-08 to CA-17 |
| Ownership | Two approved users cannot enumerate, read or mutate each other's household, recipe, version, log or note, including direct identifiers | CA-03, CA-18, CA-20, CA-23, CA-24 |
| Version history | Save v1; log exact version; improve to v2 with changedBecause; original content/log never mutated | CA-18 to CA-22 |
| Constraints | All selected eaters and all food-instructing fields checked against accepted terms; one regeneration then refusal after a violation | CA-05, CA-07, CA-08 |
| Nutrition | Validated mass conversions, named source/version and UNKNOWN on absent data; no invented precision | CA-06, CA-50 later |
| Accessible bilingual experience | EN/HE, RTL, light/dark, keyboard/focus, mobile and desktop; actual device proof separate | CA-27, CA-32 |
| Data rights | Authorized export, accepted soft-delete semantics, resumable relational erasure and suppression of delayed writes | CA-25, CA-26 |
| Launch quality | Real kitchen checks and expert-owned gold set; incomplete human grading is not pass | CA-29, CA-30 |

No medical recommendation, allergy-safe claim, laboratory accuracy or kosher certification is established. These are proposed product safeguards requiring accepted wording and qualified review, not health advice from this document. Original sources include personal circumstances; those are excluded from product requirements.

## Commercial proposal

### C12 — Launch MVP and monetization

- What: After kitchen: expert-reviewed bilingual allergen dictionary, Android, legal/privacy/deletion, invite beta and expert-graded gold set; then free three requests/day and paid access. Evidence: ROADMAP_SPEC; PRICE/VENDOR OPEN.
- When: decided UNKNOWN (first seen 2026-10-15); source chronology: 2026-10-15
- Why: Observe real use and validate recipe quality before a public paid launch.
- How: Draft beta thresholds ten testers and thirty graded recipes/average four/zero unsafe answers are targets; ten testers explicitly EXTRAPOLATED. Payment vendor, price/currency, household entitlement granularity and webhook contract unresolved. Web and Android entitlements need separate proven purchase paths.
- Status: MVP
- From: S37, S48, S47

### No Stripe seller path

- What: No Stripe merchant setup. Draft product rail proposals and inherited Polar/RevenueCat wiring remain unresolved; no price or currency is accepted here.
- When: decided2026-10-19 (first seen2026-10-19)
- Why: Amit states he cannot use Stripe as a seller in Israel.
- How: No live payment, signup, account or entitlement mutation in this lane. Resolve merchant eligibility and accepted webhook/access contract before a later billing ticket.
- Status: MVP
- From: S114, S37, S48, S47

### Entitlement and limit authority

- What: Free three requests/day and an unlimited paid tier are October draft proposals. Household availability overlaps between basic setup and paid wording. Authenticity, user binding, dedupe, event ordering, revocation and post-deletion behavior require a written contract; unlimited wording is not spend authorization.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: UNKNOWN for this individual feature; the parent product rationale is in the linked claim.
- How: Server-owned verified customer/entitlement transitions; no client-set paid state. Provider specifics remain UNKNOWN.
- Status: MVP
- From: S37, S48, S47

## Exclusions and open scope

No pantry-photo recognition: the 2026-03-20 user correction supersedes that historical interpretation. Recipe-photo text import is a separate Gen 1 proposal. No MVP household/social sharing, automatic shopping purchase, autonomous calendar action, kitchen billing, or bring-your-own-subscription integration. Gen 2 scope is UNKNOWN. A marketing fidelity label is never a measured percentage.

The original broad vision and September control assignment are historical inputs. The latest accepted default-branch law remains authoritative. See DECISIONS for unresolved baseline, outcomes, notes, nutrition and entitlement contracts.
