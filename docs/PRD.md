# monorepo-template — 01 PRD (product requirements)

> **TL;DR**
> - This repo is a TEMPLATE, not an app. It starts new full-stack web + mobile prototypes.
> - Stack: Convex backend · Next.js web on Vercel · Expo mobile · **Bun** as package manager (never pnpm).
> - It ships CI checks, how-to docs, a wiki, privacy and legal pages. A new app should deploy with 1–2 adjustments.
> - Goal: a new app reaches a live preview in ONE day.
> - Known mismatch: the repo still uses pnpm (code, docs, description). Not fixed here.

Version: 3 Oct 2026. First version of this document. The template had no product docs before.

Marks used in all six docs:

| Mark | Meaning |
|---|---|
| (AMIT 3 Oct) | Amit's description of the template, passed in the 3 Oct task brief |
| (A-Oct) | Amit's decisions, 1–3 Oct (Basic Memory notes) |
| (REPO 3 Oct) | Read from this repo's `integration` branch on 3 Oct |
| (EXTRAPOLATED) | My fill or my reading. Check it. |
| UNKNOWN | No source says. Needs Amit. |

## 1. What it is

1. A full-stack web + mobile prototyping template. (AMIT 3 Oct)
2. One shared Convex backend. Web on Vercel. Mobile on Expo. (AMIT 3 Oct; REPO 3 Oct)
3. Bun is the package manager. Never pnpm. (AMIT 3 Oct)
4. It ships factory pieces: CI checks, wikis and how-tos, privacy policy and legal pages. (AMIT 3 Oct)
5. An app built from it deploys with 1–2 adjustments. (AMIT 3 Oct)
6. It is usable in Bolt. (AMIT 3 Oct) The roadmap test: a Bolt export lands with zero backend edits. (REPO `ROADMAP.md`)
7. It holds the factory conventions that product repos copy: tickets, CI check names, labels, docs. (REPO `README.md`)

## 2. Who uses it

| Who | Need |
|---|---|
| Amit | Start a new product fast. Reach a live preview in one day. (A-Oct) |
| Factory agents (Cursor, Claude Code, Codex) | One known layout. One set of rules. No guessing. |
| Product repos (`tempo-rhythm`, `omniagent`, `agentwright`) | Copy conventions from here. Never invent a second queue. (REPO `README.md`) |
| Bolt | Generate or import an app that fits this layout (exact Bolt flow UNKNOWN) (EXTRAPOLATED) |

## 3. Must have

| # | Requirement | State today (REPO 3 Oct) |
|---|---|---|
| 1 | Bun as the only package manager | **Not met.** pnpm 10.26.2, `pnpm-lock.yaml`, `pnpm-workspace.yaml` |
| 2 | Every key slot listed (`.env.example` + `docs/ENV.md`) (A-Oct goal D1) | Partly. Names in `PROVIDERS.md` and per-app `.env.example`. `docs/ENV.md` missing. |
| 3 | Sign-in works on first deploy: magic link (A-Oct goal D2) | **Not met.** Password sign-in only. Magic link is planned (ticket M-AUTH). |
| 4 | Setup pulls keys from 1Password. No value written to a file or printed. (A-Oct goal D3) | In progress in an open PR (setup-secrets script). Not merged. |
| 5 | Factory pieces built in: CI, review, `claude.yml`, Cursor environment, issue template, labels, `AGENTS.md` (A-Oct goal D4) | Partly. CI jobs are stubs. No Cursor `environment.json` found at root. |
| 6 | Privacy, Terms (and Cookies) pages | Partly. Privacy + Terms exist in Hebrew only on web. No Cookies page. No English. |
| 7 | Real CI: lint, typecheck, tests, build, Playwright smoke, secret scan (A-Oct goal E2) | **Not met.** Six named jobs only echo "STUB". No secret scan. |
| 8 | Payments split: Polar (web), RevenueCat (mobile) | Met (skeleton) |
| 9 | Wiki + how-tos | Partly. `docs/wiki/Home.md`, `Tickets.md` in repo. GitHub wiki content UNKNOWN. |

## 4. Never

1. pnpm, npm or yarn as the package manager. (AMIT 3 Oct)
2. Secret values in the repo, docs, logs or PRs. Names only.
3. Polar Convex stubs (`convex/polar.ts`, `convex/convex.config.ts`) unless asked. (REPO `HARD_RULES.md`)
4. Weakening a check. (A-Oct)
5. Any "Sol" model, Fable, Astra, Opus or Soul writing code. (A-Oct)
6. OpenRouter. Composio (replaced by Executor). (Factory Decisions 18 Sep)

## 5. Decisions folded in (1–3 Oct)

| Decision | Source |
|---|---|
| Template has every key slot, sign-in and factory piece. New app → live preview in one day. | Weekend plan, 1–2 Oct |
| Bun only. (The 2 Oct note still said "pnpm or Bun open"; Amit's rule now is Bun.) | AMIT 3 Oct |
| Merge into `integration` only when CI green + Greptile 4/5+ + no open P1 + no conflicts + inside MUTATES | 1–2 Oct |
| Greptile disconnected 3 Oct. Bugbot is the reviewer for now. | 3 Oct |
| Only Amit merges to `master` and deploys live | 30 Sep; 1–2 Oct |
| Code models mid-tier. Codex: GPT-5.6 Terra or GPT-6 Luna. Never "Sol" models. | A-Oct |
| Repos move to org Levidavidspublic. Shared secrets become org secrets. | 3 Oct |
| UX/UI work next week; Taby is a named reference | Weekend goals §4 |

## 6. Known mismatches (not fixed in this PR)

| # | Says | Reality |
|---|---|---|
| M1 | Amit: Bun only | Repo: pnpm everywhere (`package.json`, lockfile, `AGENTS.md`, `HARD_RULES.md`, `README.md`, CI stub text) |
| M2 | Repo description: "Universal pnpm monorepo template (Convex + Vercel + Expo Go)" | Should say Bun |
| M3 | `README.md`, `docs/TEMPLATE_STATE.md`: default branch `master` | GitHub default branch is `integration` (REPO 3 Oct) |
| M4 | `HARD_RULES.md` §6: seven-field tickets, `GOAL:` first | Factory standard is eleven fields (Factory Decisions 18 Sep) |
| M5 | `PROVIDERS.md` lists `COMPOSIO_API_KEY` | Composio is replaced by Executor (18 Sep) |
| M6 | Goal: real CI | `ci.yml` jobs are stubs |

## Open questions

1. Bun switch: one config-lane ticket, or several (lockfile, scripts, CI, docs)?
2. Should the template ship the sign-up cap (30) and the approval flow?
3. Which legal pages exactly: Privacy, Terms, Cookies? English and Hebrew?
4. How is the template used in Bolt: import from GitHub, or export from Bolt into it? UNKNOWN.
5. Does Bolt run Bun? UNKNOWN.

## Sources

- Repo `integration` 3 Oct: `README.md`, `AGENTS.md`, `HARD_RULES.md`, `ROADMAP.md`, `PROVIDERS.md`, `BILLING.md`, `UNKNOWNS.md`, `docs/VISION.md`, `docs/TEMPLATE_STATE.md`, `package.json`, `.github/workflows/*`, app folders, repo description.
- Basic Memory (project Main, folder factory/): "Factory Decisions — 2026-09-18", "Weekend factory plan 2026-10-02", "Weekend goals 2026-10-02", "Next week — factory decisions and research 2026-10-03", "Factory merge and deploy policy".
- `plan-v4/PLAN-FINAL.md`.
