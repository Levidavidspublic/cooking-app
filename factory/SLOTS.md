# Factory slots — this repo's fill
<!-- Path: factory/SLOTS.md. The ONLY file that names tools. To swap a tool, edit one row.
     Everything else (AGENTS.md, CLAUDE.md, the skill) stays as it is. Review weekly. -->

## Pause
`FACTORY_PAUSED=true`. Configure only until Phase L (after TEMPO-PROVEN + go).
Rule files only: this file, `AGENTS.md`, `CLAUDE.md`, `.claude/settings.json` (a docs skeleton is allowed).
Do not add factory workflows here until Phase L. Do not change `config-guard`.
The GitHub repo variable was not readable from this session (403). Treat the pause as on.

## Slots
| Slot | Role | Tool | Status |
|---|---|---|---|
| A-1 | Intake interviewer | UNKNOWN | pick one |
| A-2 | Doc writer | UNKNOWN | pick one |
| A-3 | Consistency check | UNKNOWN | pick one |
| A-4 | Doc store | GitHub repo wiki | |
| A-5 | Ticket sync | UNKNOWN | not built |
| B-1 | Ticket queue | GitHub Issues, org Levidavidspublic | |
| B-2 | Dispatcher | Copilot (gh-aw), claude-haiku-4.5, routing only | no gh-aw workflow file in this repo |
| B-3a | Agent lane A | Cursor cloud agent | |
| B-3b | Agent lane B | Claude Code in GitHub Actions (subscription token as org secret CLAUDE_CODE_OAUTH_TOKEN) | workflow: `.github/workflows/claude.yml` |
| B-3c | Agent lane C | Codex cloud via @codex (subscription only, never an OpenAI API key) | |
| B-4 | Checks | GitHub Actions CI + Playwright | |
| B-5 | Review gate | Cursor Bugbot (interim, set 2026-10-05); CodeRabbit optional later | bot-authored PRs need a Cursor team covering the repo |
| B-6 | Auto-merge | GitHub merge queue (public repos) / GitHub auto-merge (private repos) | this repo is private, so the path is GitHub auto-merge. No merge bot. No Factory App. No FACTORY_APP_*. Stays off until Amit turns it on |
| B-7 | Preview host | Vercel preview | |
| — | Backend | Convex (local Postgres where a product bans Convex) | this template: Convex in `packages/backend` |
| C-1 | Secrets vault | 1Password | |
| C-2 | Configurator | Grok Bot | |
| C-3 | Code map | Graphify 0.9.74 + Archify (diagrams) | Graphify pin matches `.github/workflows/graphify.yml`. Archify command: UNKNOWN |
| C-4 | Memory log | Basic Memory | |

## Code model of the week
Mid-tier by BILLING only. Left blank for Amit:
- code model: ______
- fallback: ______

EXTRAPOLATED suggestion: UNKNOWN. Repo variables `FACTORY_MODEL_*` were not readable (GitHub variables API returned 403).

## Stack (template defaults)
- pnpm monorepo (`packageManager`: pnpm@10.26.2): `packages/backend`, `packages/core`, `packages/ui`, `apps/<shell>`
- Backend folder: `packages/backend` (Convex functions in `packages/backend/convex/`)
- Present in this tree: `packages/backend`, `apps/web`, `apps/mobile`, `apps/landing`
- Not in this tree: `packages/core`, `packages/ui`, desktop shell
- UI: shadcn primitives, Tailwind v4, NativeWind on mobile
- Shells: web, mobile (Expo), desktop (Tauri by default)

## Commands
From root `package.json` (`pnpm`). Do not invent a script that is not listed.

| Purpose | Command |
|---|---|
| install | `pnpm install` |
| dev | `pnpm dev` |
| test | UNKNOWN as a root script (root `package.json` has no `test`). CI job `ci / test` runs `pnpm -r --if-present test` |
| lint | `pnpm lint` |
| typecheck | `pnpm typecheck` |
| build | `pnpm build` |
| e2e | UNKNOWN as a root script (root `package.json` has no `e2e`). When repo variable `FACTORY_HAS_PREVIEW` is `true`, `.github/workflows/e2e-preview.yml` runs `npx playwright test` in `e2e/preview` |

## Code map
Graphify (PyPI package `graphifyy`, CLI `graphify`), pin 0.9.74. CI on push to `integration`: `graphify extract . --code-only --no-cluster`. Committed snapshot: `docs/graphs/monorepo-template.json`.

```bash
graphify query "<question>" --graph docs/graphs/monorepo-template.json
graphify explain "<node>" --graph docs/graphs/monorepo-template.json
graphify path "<source>" "<target>" --graph docs/graphs/monorepo-template.json
```

Archify (diagrams): UNKNOWN. No Archify command or config file is in this repo.

## Secrets (names only, never values)
PLACEHOLDER — product-specific secret lists differ per product. Do not fill them here.

Names already referenced by this template's workflows (not a product list):
- `CLAUDE_CODE_OAUTH_TOKEN`
- `VERCEL_AUTOMATION_BYPASS_SECRET`

## Schedule
- `FACTORY_PAUSED=true`. Build loop does not run until Phase L.
- Quiet days (active work stops: configuration, patching, fixing stuck tickets): ______
- Agents take the date from the system clock.
- Follow-on already on push to `integration`: `.github/workflows/graphify.yml` rebuilds the code graph and uploads an artifact. It does not open a PR.

## Enforcement checklist
Mark each one `configured`, then `tested` once a real run has shown it working. Rows stay open in this template until that run.
- [ ] Branch protection on the default branch: PRs only, required checks, review gate required
- [ ] Live environment requires owner approval
- [ ] Integration branch allows auto-merge only when checks and review pass
- [ ] Claude `.claude/settings.json` denies reading `.env*` and pushing to the default branch
- [ ] The same denials for every other lane's agent (Cursor hooks, Codex sandbox and rules)
- [ ] Secret scanning on
- [ ] Spend caps on every paid provider key

Phase A (2026-10-05) added `.claude/settings.json` deny rules for `.env*` and push to the GitHub default branch `integration`. That row is not marked configured: it has not been tested. GitHub's default branch for this repo is `integration`. Older docs in the repo still say `master`.
