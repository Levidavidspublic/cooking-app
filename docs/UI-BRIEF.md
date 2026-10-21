# Cooking App design

Updated 2026-10-21. Evidence-bounded documentation proposal; not a release or default-branch adoption.

## Direction

- What: Warm restrained gray interface, readable ingredient-role table, light/dark modes; October draft adds English/Hebrew and mirrored RTL from start, phone tabs and desktop split view. Evidence: USER BRAND DIRECTION PLUS PROPOSED DESIGN TOKENS.
- When: decided UNKNOWN (first seen 2025-08-12); source chronology: 2025-08-12 and 2026-10-15
- Why: Reduce cognitive load and support use while cooking.
- How: Plain ingredient/job/swap labels, large touch targets, text beyond color, reduced motion, keyboard/focus/screen-reader support and clear loading/error/refusal states. Specific amber/font/spacing tokens are proposals. Cook mode timing, tab label and spinner versus text-only loading conflict remain open.
- Status: MVP
- From: S101, S45, S46

## Primary flow

1. Choose owned eaters and kitchen context; show missing constraints before generation.
2. Enter one brief and select rough/copycat intent where relevant.
3. Show a truthful pending state, then a RecipeCard, AnswerCard or refusal.
4. Explain original ingredient, its job, proposed swap, amount uncertainty, risk and compromise.
5. Save deliberately to Cookbook as v1; reopen exact immutable versions.
6. Log the version actually cooked; create an improved version only after confirmation; display what changed and why.

## Layout and states

| Surface | Proposed behavior | Required states |
|---|---|---|
| Phone | Readable tabbed navigation and large cooking-friendly controls | EN/HE, light/dark, loading/error/refusal, empty Cookbook |
| Desktop | Ask/result split view where space permits | Keyboard order and readable ingredient table |
| Household editor | Accessible labeled constraints; selected eater visible | Invalid/removed eater; save/cancel; ownership error |
| Result | Text beyond color; accessible table or narrow-screen equivalent | Unknown amount/nutrition, unsafe/unsupported refusal, timeout/retry |
| Cookbook | Version order and parent/change reason explicit | Empty, unavailable, deleted/stale, retry |
| Cook log | Exact version target visible throughout | Custom/unknown outcome, cancel, duplicate retry, saved feedback |
| Account | Explicit export/delete choices and truthful progress | Signed-out, partial cleanup, retry; no false completion |

The prior acceptance proposal exercises widths 390 and 1280 across English/Hebrew and light/dark themes. Quantity digits, units and ingredient names must remain readable in mixed scripts. Use semantic labels, visible focus, keyboard support, reduced motion and a non-color explanation for errors. Browser and physical-device acceptance are separate.

## Decisions still open

- Exact amber/font/spacing tokens are proposals, not approved brand law.
- UI brief says no spinner while flow mentions one. Keep the conflict until a single loading contract is accepted; never show completion while waiting.
- AnswerCard save-as-note has no agreed storage contract. Do not implement a dead action.
- Five baking outcomes omit savory and fermentation cases. Broaden vocabulary or narrow supported scope explicitly.
- Optional cook mode belongs to Gen 1 until accepted otherwise; timing must never imply food safety.
- Existing UI-kit PR #4 remains untouched. Its preview status is not acceptance of this product UI.

Source basis: S101/S102 historical gray/light/dark direction; S45/S46 October UI and flow; S36 kitchen acceptance; S11-S14 review gaps. See SOURCES for dated evidence. New visual tokens and final screen composition remain UNKNOWN.
