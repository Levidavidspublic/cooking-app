# monorepo-template

Universal **software-factory** template for Division6066 products. One shared
Convex backend, pnpm + turbo workspaces, and app slots that graft onto the
same spine.

This repository is the source of truth for factory conventions (tickets, CI
check names, docs, labels). Product repos (`tempo-rhythm`, `omniagent`,
`agentwright`) clone the conventions; they do not invent a second queue.

| Path | Role today | Intended factory slot |
|------|------------|------------------------|
| `packages/backend` | Shared Convex (`@app/backend`) | `packages/backend` |
| *(missing)* | — | `packages/core`, `packages/ui`, `packages/config` |
| `apps/web` | Next.js SaaS → Vercel | generic web slot |
| `apps/mobile` | Expo → Expo Go / EAS | generic mobile slot |
| `apps/landing` | Static marketing → Vercel | optional marketing slot |

**OmniAgent multi-app amendment** (not created in this skeleton): one repo,
four product apps — `apps/spice-web`, `apps/spice-mobile`, `apps/work-web`,
`apps/work-mobile` — sharing `packages/backend`. See
[`docs/TEMPLATE_STATE.md`](./docs/TEMPLATE_STATE.md).

License: **[MIT](./LICENSE)**. No secrets are committed. PRs go into
`integration` and merge only under rule 1.4 (all required checks green, Greptile
passes, no conflicts, inside the ticket MUTATES list); only Amit merges into `master`.

## Use this template

1. On GitHub: **Use this template** (https://github.com/new?template_name=monorepo-template&template_owner=Levidavidspublic) → new private repo under
   `Levidavidspublic` (default branch
   **`master`** today; Week-0 v2 also names `main` — recorded as UNKNOWN).
2. Clone it, create the working branch with `git push origin master:integration`
   (all PRs go into `integration`; only Amit merges `integration` into `master`),
   then:

```bash
pnpm install
pnpm run setup
```

See **[COPY.md](./COPY.md)** for a local folder copy and connect commands.

## Day-to-day

```bash
pnpm dev:backend    # Convex (keep running)
pnpm dev:web        # http://localhost:3000
pnpm dev:landing    # http://localhost:3002
pnpm dev:mobile     # Expo Go QR
pnpm run vercel:web
pnpm run vercel:landing
```

`NEXT_PUBLIC_CONVEX_URL` (web) and `EXPO_PUBLIC_CONVEX_URL` (mobile) must be the
**same** Convex deployment.

## Factory docs

Read these before opening a ticket or a PR:

- [`AGENTS.md`](./AGENTS.md) — standing orders for every agent
- [`HARD_RULES.md`](./HARD_RULES.md) — non-negotiables (this file wins)
- [`docs/VISION.md`](./docs/VISION.md) — what the factory is for
- [`ROADMAP.md`](./ROADMAP.md) — phases to V1
- [`PROVIDERS.md`](./PROVIDERS.md) — seams, live vs dormant
- [`BILLING.md`](./BILLING.md) — Polar (web) / RevenueCat (mobile)
- [`CONFORMANCE.md`](./CONFORMANCE.md) — skeleton checks (MT-01)
- [`UNKNOWNS.md`](./UNKNOWNS.md) — never infer; open `needs-amit`
- [`LEDGER.md`](./LEDGER.md) — one line per factory run
- [`docs/TEMPLATE_STATE.md`](./docs/TEMPLATE_STATE.md) — actual vs intended layout
- [`docs/wiki/Home.md`](./docs/wiki/Home.md) — wiki home
- [`docs/wiki/Tickets.md`](./docs/wiki/Tickets.md) — MT-* / MM-* / MT-STOP

Also: [`BUILD-NOTES.md`](./BUILD-NOTES.md), [`PROMPT.md`](./PROMPT.md),
[`COPY.md`](./COPY.md), [`CONNECTIONS.md`](./CONNECTIONS.md),
[`docs/MOBILE-ONLY-CONVEX.md`](./docs/MOBILE-ONLY-CONVEX.md).

## CI check names

`.github/workflows/ci.yml` registers the same job **names** as
`tempo-rhythm` so branch rules can stay in lockstep. Week-0 jobs are stubs
(they must stay green on the skeleton). Names are locked:

1. `Typecheck`
2. `Lint`
3. `Test`
4. `Scans (forbidden-tech, ram-only-audit, design-tokens)`
5. `Third-party notices (TF-OSS-00)`
6. `E2E (Playwright)`

## Queue

GitHub Issues is the only queue. Tickets use the seven-field body that
starts with `GOAL:`. Seeded factory tickets live in
[`docs/wiki/Tickets.md`](./docs/wiki/Tickets.md). None of them are
`agent:ready` until Gate 1.
