# monorepo-template — 02 TRD (technical requirements)

> **TL;DR**
> - Monorepo: `apps/web` (Next.js → Vercel), `apps/mobile` (Expo), `apps/landing` (static), `packages/backend` (Convex).
> - One Convex deployment serves web and mobile.
> - Target package manager: **Bun**. Today: pnpm + turbo (known mismatch).
> - CI has six locked job names. Today they are stubs. `config-guard` is real.
> - Secrets: names only. Values come from 1Password, never into files or logs.

Version: 3 Oct 2026. Marks: see `01-PRD.md`.

## 1. Stack

| Layer | Today (REPO 3 Oct) | Target |
|---|---|---|
| Package manager | pnpm 10.26.2, `pnpm-workspace.yaml`, `pnpm-lock.yaml`, `.npmrc` | **Bun only** (AMIT 3 Oct). One lockfile: `bun.lock` (EXTRAPOLATED). |
| Task runner | turbo 2.5 | turbo, run through Bun (EXTRAPOLATED) |
| Runtime | Node `^22.18.0 \|\| >=24` | same, plus Bun |
| Language | TypeScript 5.9 | same |
| Backend | Convex in `packages/backend/convex` (`@app/backend`) | same |
| Auth | `@convex-dev/auth`, Password provider, 30-day session | Magic link via Resend (ticket M-AUTH) |
| Web | Next.js app router in `apps/web`, Tailwind, shadcn-style `components/ui` (button, card, dialog, input, label), Biome config | same |
| Mobile | Expo Router app in `apps/mobile`, RevenueCat | same |
| Landing | Static Next.js in `apps/landing`, no Convex | same |
| Payments | Polar (web), RevenueCat (mobile) | same |
| Licence | MIT | MIT |

Missing slots (REPO `docs/TEMPLATE_STATE.md`): `packages/core`, `packages/ui`, `packages/config`. Create them only from a ticket.

## 2. Repo map

```
packages/backend/convex/   schema, auth, users, http  (only place for backend code)
apps/web/                  Next.js SaaS → Vercel
apps/mobile/               Expo → Expo Go / EAS
apps/landing/              static marketing → Vercel
scripts/                   setup.mjs, regenerate-graphs.sh
docs/                      VISION, TEMPLATE_STATE, factory/REFERENCES, graphs/, wiki/
.github/                   workflows, issue + PR templates, labels.json
```

## 3. Services and environments

| Service | Use | Notes |
|---|---|---|
| Convex | Backend + auth | ONE deployment for web and mobile. Dev/prod names per product. |
| Vercel (Pro plan) | `apps/web`, `apps/landing` | Preview from `integration` (for new apps) (EXTRAPOLATED). `vercel.json` per app. |
| Expo / EAS | Mobile builds | Expo Go for dev |
| Resend | Magic-link email | Planned |
| Polar | Web checkout | `apps/web/app/checkout/route.ts` |
| RevenueCat | Mobile subscriptions | Source of truth for mobile |
| PostHog | Analytics | Names listed in `PROVIDERS.md` |

Branches: default `integration` (REPO 3 Oct). All PRs go into `integration`. Only Amit merges into `master`.

## 4. Environment variable names (names only)

| Where | Names |
|---|---|
| `apps/web` | `NEXT_PUBLIC_CONVEX_URL`, `CONVEX_DEPLOYMENT` |
| `apps/mobile` | `EXPO_PUBLIC_CONVEX_URL`, `CONVEX_DEPLOYMENT`, `EXPO_PUBLIC_REVENUECAT_TEST_STORE_API_KEY`, `EXPO_PUBLIC_REVENUECAT_IOS_API_KEY`, `EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY`, `EXPO_PUBLIC_PRIVACY_POLICY_URL`, `EXPO_PUBLIC_TERMS_OF_SERVICE_URL` |
| Convex (planned auth) | `AUTH_RESEND_KEY`, `RESEND_FROM_EMAIL` |
| Payments | `POLAR_ACCESS_TOKEN`, `POLAR_WEBHOOK_SECRET`, `REVENUECAT_PUBLIC_KEY`, `REVENUECAT_SECRET_KEY`, `REVENUECAT_WEBHOOK_SECRET` |
| Analytics | `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST` |
| Deploy | `CONVEX_DEPLOY_KEY`, `EXPO_TOKEN` |
| GitHub Actions | `CLAUDE_CODE_OAUTH_TOKEN`, `CURSOR_API_KEY` (org secrets after the move), `VERCEL_AUTOMATION_BYPASS_SECRET` (per repo) |

RULE: `NEXT_PUBLIC_CONVEX_URL` and `EXPO_PUBLIC_CONVEX_URL` point at the SAME deployment.
RULE: never run `convex env list` (prints values). Never echo a value. `NAME = SET/UNSET` only.

## 5. CI and guards (REPO 3 Oct)

| Workflow | What it does today |
|---|---|
| `ci.yml` | Six locked job names: Typecheck · Lint · Test · Scans (forbidden-tech, ram-only-audit, design-tokens) · Third-party notices (TF-OSS-00) · E2E (Playwright). **All are stubs** that echo text. Runs on PRs into `master`, `integration`, `main`. |
| `claude.yml` | `@claude` lane. Starts only for a human OWNER/MEMBER/COLLABORATOR. Bots never start it. Model `claude-sonnet-5`, max 25 turns. Uses `CLAUDE_CODE_OAUTH_TOKEN`. Checks out `integration`. |
| `config-guard.yml` | Real. Fails a PR into `integration` that touches `.github/**`, `greptile.json`, scan/test config, `bunfig.toml`, `scripts/ci/**` or `package.json` scripts — unless an allowed actor added `config-lane` on that exact head commit. |

Other factory pieces: `greptile.json`, `.github/labels.json`, `.github/ISSUE_TEMPLATE/factory-ticket.md`, PR template.

Gaps:
1. No secret scan job. (A-Oct goal E2 needs one.)
2. No build job. No real tests.
3. Job names are locked to `tempo-rhythm`. Do not rename.
4. Review: Greptile 4/5+ and no open P1 (1–2 Oct). Greptile disconnected 3 Oct; Bugbot for now. Bugbot findings must block merges (setting). Exact rule: UNKNOWN.
5. Never weaken a check. Any CI change goes through the config lane.

## 6. Agents and models

| Lane | Work | Rule |
|---|---|---|
| Cursor | Front end, most building | Cursor API key; mid-tier model |
| Claude Code | Backend, sign-in, tests | `claude.yml` + subscription token. Never API rates. |
| Codex | CI, docs, refactors | ChatGPT subscription only. GPT-5.6 Terra or GPT-6 Luna. |

Never for code: Fable, Astra, Opus, Soul, GPT-5.6 Sol, GPT-6 Sol, GPT-6.1 Sol. (A-Oct)

## 7. Knowledge graph

- Graphify artefact: `docs/graphs/monorepo-template.json` (`graphifyy` 0.9.40). Regenerate with `scripts/regenerate-graphs.sh`.
- Skills: `.agents/skills/graphify`, `.agents/skills/understand-anything`.
- Plan: a CI job rebuilds the graph on each merge into `integration` (PLAN step 4). Not built yet.

## 8. Bun switch — what it touches (EXTRAPOLATED)

1. `package.json`: `packageManager`, `engines`, scripts using `pnpm --filter`. (Guarded by config-guard.)
2. Delete `pnpm-lock.yaml`, `pnpm-workspace.yaml`; add `workspaces` + `bun.lock`.
3. `.npmrc` review.
4. `AGENTS.md`, `HARD_RULES.md` §2, `README.md`, `.env.example` comments.
5. CI: `oven-sh/setup-bun` + `bun install --frozen-lockfile` (as in `agentwright`).
6. Repo description on GitHub.
Expo and Convex CLIs under Bun: verify from vendor docs before the switch. UNKNOWN today.

## Open questions

1. One Bun-switch ticket or several?
2. Should the template ship a real secret scan (gitleaks, like `agentwright`)?
3. Should `packages/config` hold the env-name registry now?
4. Bugbot rule that replaces "Greptile 4/5 + no P1"?

## Sources

- Repo `integration` 3 Oct: `package.json`, `.github/workflows/ci.yml`, `claude.yml`, `config-guard.yml`, `AGENTS.md`, `HARD_RULES.md`, `PROVIDERS.md`, `docs/TEMPLATE_STATE.md`, `apps/*/.env.example`, `packages/backend/convex/*`.
- Basic Memory notes (see `01-PRD.md`). `plan-v4/PLAN-FINAL.md`.
