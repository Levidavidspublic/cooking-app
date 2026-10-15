# Home

Factory wiki for **monorepo-template**. One paragraph, then links.

This repo is the MIT universal monorepo the factory grafts onto: pnpm +
turbo, one Convex backend, generic `apps/web` and `apps/mobile` slots, and
GitHub Issues as the only queue. Week-0 v2 seeds the docs, the six
`tempo-rhythm` CI check names (stubs), issue/PR templates, and the ticket
list. Executors open PRs into `integration`; they merge only under rule 1.4
(orchestrator or tester worker clicks merge); only Amit merges into `master`. Anything not in the
named documents is UNKNOWN and becomes `needs-amit`.

## Links

- [Tickets](./Tickets.md) — MT-* / MM-* / **MT-STOP**
- [TEMPLATE_STATE](../TEMPLATE_STATE.md) — actual vs intended layout (OmniAgent `apps/*`)
- [VISION](../VISION.md)
- [HARD_RULES](../../HARD_RULES.md)
- [AGENTS](../../AGENTS.md)
- [ROADMAP](../../ROADMAP.md)
- [PROVIDERS](../../PROVIDERS.md)
- [BILLING](../../BILLING.md)
- [CONFORMANCE](../../CONFORMANCE.md)
- [UNKNOWNS](../../UNKNOWNS.md)
- [LEDGER](../../LEDGER.md)
- [README](../../README.md)

Proof ticket (Mon 21): **MT-L** (labels + `AGENTS.md`). Stop ticket: **MT-STOP**.
Base named in Week-0: `main` (this clone's default is `master` — UNKNOWN).
