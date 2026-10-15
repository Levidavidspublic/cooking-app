# Conformance — skeleton checks

Ticket **MT-01** owns the real script. Until then, conformance is this
checklist plus the six **named** CI jobs in `.github/workflows/ci.yml`.

## Locked CI check names (must match `tempo-rhythm`)

1. `Typecheck`
2. `Lint`
3. `Test`
4. `Scans (forbidden-tech, ram-only-audit, design-tokens)`
5. `Third-party notices (TF-OSS-00)`
6. `E2E (Playwright)`

Week-0 bodies are stubs so the skeleton stays green. Replacing a stub with
a real command is MT-01, not a silent edit.

## Skeleton conformance (manual / future script)

- [ ] `pnpm install` uses the single root `pnpm-lock.yaml`
- [ ] No `package-lock.json`, `bun.lock`, or `yarn.lock`
- [ ] `LICENSE` is MIT
- [ ] `.env` / `.env.*` gitignored; no secret values in git
- [ ] `AGENTS.md` + `HARD_RULES.md` linked from `README.md`
- [ ] Issue template renders `GOAL:` first
- [ ] PR template asks for stage evidence + the six check names
- [ ] Labels in `.github/labels.json` (seven groups)
- [ ] Wiki tickets include `MT-STOP`
- [ ] `docs/TEMPLATE_STATE.md` records actual vs intended layout
- [ ] Mobile-only Convex modules still flagged
- [ ] No `convex/polar.ts` / `convex/convex.config.ts`

## Stop-codes check

Week-0 acceptance mentions a `stop-codes` check on the seeded `MT-STOP`.
That job is **not** one of the six tempo-rhythm names. Treat the check as
UNKNOWN until MT-01 / a `template-change` ticket adds it without renaming
the locked six.
