# Cooking App TRD

Updated 2026-10-21. Evidence-bounded documentation proposal; not a release or default-branch adoption.

## Architecture and current tree

The current tree contains `apps/web`, `apps/mobile`, `apps/landing` and `packages/backend`. `packages/core` and `packages/ui` do not exist at the verified baseline. Creating either requires its own accepted ticket. Backend code belongs only in `packages/backend/convex/`; consumers import the existing backend package exports. One shared Convex deployment is required by HARD_RULES, but service connectivity is UNKNOWN here.

The proposed pipeline is: authenticated request -> owned household/eater/kitchen context -> classified Ask intent -> backend-only provider adapter -> strict parsed result -> deterministic constraint and nutrition checks -> display -> explicit save of an immutable version. Supplied recipes and imported documents are untrusted data. No provider credential or direct vendor call belongs in a shell.

### C10 — Backend ownership and authentication

- What: Template-oriented Next web, shared TypeScript core/UI and Convex backend/Auth; Expo/NativeWind Android later. Draft magic-link access, per-user ownership, households, asks, recipes, versions, logs and separated reference data. Evidence: DRAFT_ARCHITECTURE; CURRENT STACK ADOPTION UNKNOWN.
- When: decided UNKNOWN (first seen 2026-10-15); source chronology: 2026-10-15
- Why: Keep shells portable, private data isolated and model/provider credentials backend-only.
- How: No household sharing proposed for MVP, soft recipe deletion and full account deletion, export and waitlist entitlement flows. Magic-link-only policy and immediate deletion are EXTRAPOLATED; Google login/provider choice/deletion retention remain open. Review requires relational erasure and safe asynchronous cleanup. S116 provides earlier real-backend portability intent: pure TypeScript core, one provider seam and no vendor calls in shells. Its six-document test request supplies historical rationale, not current architecture acceptance or passed end-to-end proof.
- Status: MVP
- From: S47, S44, S10, S116

### Template and prototype stack conflict

- What: The current clone is an inherited Next/Convex/Expo scaffold. Older Base44/Android-Room-Compose claims and the September localStorage mock are distinct artifacts. Actual selected product implementation and toolchain migration remain unresolved.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: UNKNOWN for this individual feature; the parent product rationale is in the linked claim.
- How: Default-branch law wins; do not silently adopt a historical generated stack or override the Bun/pnpm conflict.
- Status: Later
- From: S81, S39

### Code maps and ticket context

- What: Prepare Understand Anything and Graphify on the writable repo; the helper identifies changed/dependent ticket paths but does not automatically complete acceptance or write live issues.
- When: decided2026-10-19 (first seen2026-10-19)
- Why: Amit requested continued code-to-document/ticket context after changes.
- How: Project skills plus a reviewable read-only report workflow; actual semantic architecture completeness remains pending.
- Status: MVP
- From: S115

## Data contracts

### Ownership and household relationships

- What: User-owned households, eaters, kitchens, asks, recipes, versions and logs are proposed. Private product data and reference knowledge have separate ownership; direct-URL and second-user isolation must be proved.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: UNKNOWN for this individual feature; the parent product rationale is in the linked claim.
- How: UNKNOWN beyond the linked draft contract.
- Status: MVP
- From: S47, S44, S10

### Version provenance

- What: Persist model/prompt-version provenance and changedBecause explanation with every immutable version. Draft typed shapes omit some fields promised by TRD/flow; resolve the contract before implementation.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: UNKNOWN for this individual feature; the parent product rationale is in the linked claim.
- How: UNKNOWN beyond the linked draft contract.
- Status: MVP
- From: S36

### Notes persistence gap

- What: AnswerCard save-as-note is promised by UI without a defined note record, mutation or field. Choose an owned persistence contract or remove the action consistently.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: UNKNOWN for this individual feature; the parent product rationale is in the linked claim.
- How: UNKNOWN beyond the linked draft contract.
- Status: MVP
- From: S47, S44, S10

### Account erasure and asynchronous work

- What: A userId-only delete misses ownerId households and householdId children. Durable authorized retry and suppression of jobs/callbacks after deletion are unresolved design requirements. Delete auth only after dependent cleanup succeeds.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: UNKNOWN for this individual feature; the parent product rationale is in the linked claim.
- How: UNKNOWN beyond the linked draft contract.
- Status: MVP
- From: S47, S44, S10

### Authentication and test access

- What: Magic-link-only and immediate deletion are extrapolated draft choices; Google login, provider and retention remain open. A development bypass must be server-enforced nonproduction/approved-identity or absent.
- When: decided UNKNOWN (first seen 2026-10-15); draft scope, not default-branch adoption
- Why: UNKNOWN for this individual feature; the parent product rationale is in the linked claim.
- How: UNKNOWN beyond the linked draft contract.
- Status: MVP
- From: S47, S44, S10

### C13 — Gen 1 knowledge connector

- What: A read-only cooking knowledge connector separates chemistry, observed failures, local availability/kosher status and conventional techniques. The app should cite a layer behind each risk flag. Evidence: FUTURE_ROADMAP_SPEC.
- When: decided UNKNOWN (first seen 2026-10-15); source chronology: 2026-10-15; earlier research referenced
- Why: Different kinds of evidence have different certainty and update frequency; do not flatten them into one authority.
- How: Nutrition/functional tags, versioned cook logs and expert reviews seed the layers. External agent querying and source provenance are exit criteria, not implemented connectors. Exact taxonomy is four layers with kosher under availability.
- Status: Gen 1
- From: S44, S37, S16

## Required invariants

| Boundary | Proposed invariant | Missing decision/evidence |
|---|---|---|
| Identity | Server derives owner identity; never trusts a client ownerId | Accepted auth provider and real identity proof |
| Household | Every eater and kitchen belongs to the selected owned household | Field schema, retention, sharing exclusion |
| Ask | Persist intent, constraint context and permitted provenance; ambiguous request clarifies | Accepted strict output schema |
| Recipe/version | Append versions with parent link, changedBecause, permitted provider/prompt-version provenance; never overwrite history | Schema and idempotency key contract |
| Cook log | Record observed result against exact immutable version; no migration of old log to new version | Broader non-baking outcome vocabulary |
| Answer note | Either owned persistent record with deletion/export or consistently remove unsupported save action | Explicit note-vs-removal decision |
| Reference data | Separate licensed reference knowledge from personal data | Sources, licence, reviewed taxonomy and refresh policy |
| Generation | Parse retry at most once; allergen regeneration at most once then refusal; bounded adapter invocation | Provider, caps, cancellation/idempotency and approved tests |
| Entitlement | Authentic events, server customer mapping, dedupe, order/revocation rules; no client-paid state | Provider/merchant/price and state machine |
| Erasure | Durable retry across ownerId/householdId links; auth last; delayed jobs/callbacks cannot resurrect data | Retention and job design |

## Nutrition and constraint handling

The accepted matcher must cover ingredients, steps, serving instructions, notes and any food-instructing text, including free-text allergens and all selected eaters. Ingredient-only keyword scanning does not prove the stated contract. The reviewed bilingual term set and uncertainty/refusal rule are prerequisites. Do not infer safe exposure or certification from a match result.

Rough macros require named seed data and valid quantity-to-gram conversion. An unknown food, density, item weight or source field returns UNKNOWN. Exact fiber/polyol accounting is Gen 1 and separately reviewed. Neither blank values nor zero are substitutes for unknown values.

## Verification and commands

`factory/SLOTS.md` declares `pnpm lint`, `pnpm typecheck` and `pnpm build`. Expected structural outcome is exit 0; this does not prove cooking semantics, safety, device behavior or real service acceptance. No application command was run in this documentation lane.

Root `test` and `e2e` scripts are absent. Report `blocked: missing command test` for focused feature tests until an approved command is registered. The existing conditional preview workflow runs `npx playwright test` in `e2e/preview`; it does not prove a newly proposed cooking suite is wired. Report `blocked: missing command e2e` until its accepted configuration/command includes the relevant suite. No guessed command, skipped case, fixture or mocked identity counts as real preview proof.

Before implementation, query current Graphify and Understand Anything for the scoped paths and dependents, then adjust the plan. Tooling gaps are blockers to that build ticket; this docs run does not implement graph tools. Respect the three-source-files plus one-test limit and existing dependency/config boundaries.

## Kitchen acceptance

CP1/CP2/CP5 cover a useful recipe, troubleshooting and allergen handling; CP3 covers versions/logs/change explanation; CP4 covers Hebrew/RTL; CP6 covers two-user ownership with direct-URL denial. All require exact code version and separate fixture, real provider, browser and human culinary evidence. Current measured outcomes are UNKNOWN.


## Inherited baseline gaps confirmed 2026-10-21

Static inspection of current `packages/backend/convex/users.ts` shows getById/listActive without an identity check, updateProfile/remove with a sign-in check but no target-owner check, a callable updateUserType accepting paid state, and createOrUpdateUser resetting userType to free. This is code evidence, not a live exploit test. Current `apps/web/middleware.ts` admits only home/sign-in/sign-up as public, so legal-route acceptance needs middleware scope.

The existing52-slice backlog is retained with explicit EXTRAPOLATED refinements: CA-24 includes users.ts ownership only; CA-33 includes users.ts entitlement authority only; CA-28 includes middleware legal-route allowance only. Each remains at most3source files+1test. CA-25 retains separate relational erasure ownership. CA-33 follows CA-25 and thus CA-24; do not run conflicting users.ts changes in parallel. No source file was changed in this documentation run.

Runtime reachability, exploitability, approved admin privileges and auth-identity semantics are UNKNOWN. Accepted contracts and focused tests remain gates, not assumptions. No complete product isolation/entitlement claim is possible until the inherited paths and new Cooking paths are both verified.
