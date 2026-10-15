# HARD RULES — monorepo-template

**Read before touching code.** These are non-negotiables for every contributor
(human, Cursor, Grok Bot, Squad). If anything in this file conflicts with a
PRD or a prompt, this file wins. If you disagree, open a `needs-amit` issue —
do not silently ignore a rule.

This is the **factory template** rule set (MIT). Product repos may add a
product section; they must not weaken the template section.

---

## 1. Authority

- **GitHub Issues is the queue.** Cursor executes against it. Squad watches,
  comments, and escalates. Nothing creates a second authority over the queue.
- **Merging into `integration` follows rule 1.4** (Amit, 2 Oct 2026): auto-merge is OFF until the merge-gate proof (D4) passes. Until then a PR merges into `integration` only when all required checks are green, Greptile passes, there are no conflicts, and every changed file is inside the ticket's MUTATES list. The orchestrator or the tester worker clicks merge, then checks the preview.
  Only Amit merges `integration` into `master` (Gate 2). Never merge into `master`.
- **Never push to the protected base** (`master` today; Week-0 also names
  `main` / `integration`). All work lands through a pull request.
- **One logical change per PR.** Conventional Commits titles.

## 2. Package manager and layout

- **pnpm only.** Root declares `packageManager: pnpm@10.26.2`. Do not add
  `package-lock.json`, `bun.lock`, or `yarn.lock`.
- Backend code lives **only** in `packages/backend/convex/`.
- Apps depend on `@app/backend` and import
  `@app/backend/convex/_generated/api`.
- **One shared Convex deployment** per product. `NEXT_PUBLIC_CONVEX_URL` and
  `EXPO_PUBLIC_CONVEX_URL` must point at the same deployment.
- Do not silently invent `packages/core`, `packages/ui`, or
  `packages/config` — those are the intended slots (see
  `docs/TEMPLATE_STATE.md` and ticket MT-03). Create them only from a ticket.

## 3. Secrets

- **Never commit secrets.** `.env` / `.env.*` are gitignored at every level
  (`.env.example` names only).
- Never print a secret value. Use `--names-only`, masked `vercel env ls`,
  `gh auth status`, `NAME = SET|UNSET`.
- Never screenshot a masked field. Never toggle a reveal control.
- Prefer `pnpm --filter @app/backend exec convex env set …` for backend
  secrets. Fan-out is by CLI, never a dashboard paste into the repo.
- A secret-scan hit is a stop: rotate, abandon the change, do not continue.

## 4. Payments and Polar

- Payments stay split: **Polar** (web) / **RevenueCat** (mobile).
- RevenueCat is the source of truth for mobile subscriptions.
- **No Polar Convex stubs.** Do not invent `convex/polar.ts` or
  `convex/convex.config.ts` unless a human explicitly asks. Web Polar lives
  in `apps/web/config/polarConfig.ts` and `apps/web/app/checkout/`.

## 5. Mobile product modules

- Mobile-only Convex modules stay flagged. See
  `docs/MOBILE-ONLY-CONVEX.md`.
- Do not silently merge `conversations` / `memories` / `messages` into the
  shared schema.

## 6. Tickets

- Every issue body starts with `GOAL:` (see
  `.github/ISSUE_TEMPLATE/factory-ticket.md`). STEPS begins by querying
  the Graphify graph and Understand Anything for the MUTATES files and
  their dependents, then adjusting the plan to the current code before
  editing.
- Exactly one `agent:*` label at a time:
  `agent:ready` · `agent:working` · `agent:review` · `agent:blocked` ·
  `agent:done`.
- **None** of the Week-0 seed tickets are `agent:ready` until Gate 1.
- Anything not in the named Week-0 / Session B / reference documents is
  UNKNOWN → a `needs-amit` issue. Never infer a product decision.

## 7. Stop codes

Stop and continue with the next independent step. Known codes from Week-0
v2 (the full `02` §3 list is UNKNOWN — see `UNKNOWNS.md`):

| Code | Meaning |
|------|---------|
| `BLOCKED_DEPENDENCY` | Required key / tool unset |
| `BLOCKED_PATH_DRIFT` | Guard against editing a frozen path |
| `BLOCKED_VERIFICATION` | Verifier / stop-ticket path (MT-STOP) |

If a stop ticket (`MT-STOP`) goes **green**, stop everything and fix the
verifier. The stop ticket stays red (`agent:blocked` +
`BLOCKED_VERIFICATION`).

## 8. License

- This template ships under **MIT** (`LICENSE`).
- Do not add a second license file or relicense without a `needs-amit`
  ticket.
- Never commit code from another project without verifying the license.

## 9. CI names

Job **names** in `.github/workflows/ci.yml` must stay in lockstep with
`tempo-rhythm`:

- `Typecheck`
- `Lint`
- `Test`
- `Scans (forbidden-tech, ram-only-audit, design-tokens)`
- `Third-party notices (TF-OSS-00)`
- `E2E (Playwright)`

Renaming a check without a `template-change` ticket is path drift.

## 10. If a rule feels wrong

Open a `needs-amit` issue that quotes the rule, the scenario, the proposed
alternative, and the downside. Rules change only via PR to this file.
