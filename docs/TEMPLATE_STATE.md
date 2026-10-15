# TEMPLATE_STATE

Record of **actual** vs **intended** factory layout. Update this file when
the skeleton changes. Do not treat intended rows as if they already exist.

Generated: 2026-09-17 (MT-04 Graphify artefact). Understand Anything
dashboard is still **not generated** — the `/understand` plugin pipeline
was not runnable as a complete pass in this environment.

## Knowledge graph

| Item | Path | Status |
|------|------|--------|
| Graphify artefact | `docs/graphs/monorepo-template.json` | **generated** (1110 nodes, 1411 edges; `graphifyy` 0.9.74; `graphify update . --no-cluster`) |
| Understand Anything dashboard | `.ua/knowledge-graph.json` (intended) | **not generated** (skill present; plugin `/understand` required) |
| Skills | `.agents/skills/graphify`, `.agents/skills/understand-anything` | **present** |

### Regenerate on merge

After any merge that changes source layout, regenerate graphs in a
follow-up PR (or the next W0/S8 pass). Do not merge that PR yourself.

```sh
# from repo root — requires graphifyy 0.9.74 on PATH
./scripts/regenerate-graphs.sh
# equivalent: graphify update . --no-cluster
# then sanitize abs paths and copy graphify-out/graph.json
#   → docs/graphs/monorepo-template.json
```

If the Understand Anything plugin is available, run `/understand` and
commit `.ua/knowledge-graph.json`. Ticket CONTEXT fields should point at
the live paths above. Do not fetch unrelated corpora. No secrets in
graphs or PRs.

`graphify-out/` is gitignored working output. Local optional:
`graphify hook install` (post-commit / post-checkout).
`.github/workflows/graphify.yml` runs `graphify extract . --code-only --no-cluster`
on every push to `integration` and uploads the result as an artifact.

## Package manager and branches

| Item | Actual | Intended (Week-0 / `01`) |
|------|--------|--------------------------|
| Package manager | `pnpm@10.26.2`, one `pnpm-lock.yaml` | pnpm + turbo |
| Default branch | `master` | Week-0 loop proof names `main` for this repo — UNKNOWN, see `UNKNOWNS.md` |
| Integration branch | `origin/integration` exists | `integration` / `main` as product bases |
| License | MIT (`LICENSE`) | MIT |
| Polar Convex stubs | none | none (do not add) |

## Packages

| Slot | Actual | Intended |
|------|--------|----------|
| `packages/backend` | Convex `@app/backend` (auth, users, http, schema) | single source of truth |
| `packages/core` | **missing** | ingest (Scrapy), providers (Wechaty, dormant LLM lanes) |
| `packages/ui` | **missing** | shared tokens / components |
| `packages/config` | **missing** | env-name registry (`env.ts` names only) |

## Apps — this template (generic slots)

| Slot | Actual | Notes |
|------|--------|-------|
| `apps/web` | Next.js SaaS + Polar checkout routes | Vercel |
| `apps/mobile` | Expo + RevenueCat context | Expo Go / EAS |
| `apps/landing` | static Next.js placeholder | no Convex |

`01` §1–§8 names `apps/web` and `apps/mobile` stubs. `apps/landing` is extra
and stays unless a ticket removes it.

## Apps — OmniAgent amendment (MT-03)

One repo (`omniagent`), two products, four apps, **one** shared
`packages/backend`. `01` §11 steps 3–4 (Vercel project + EAS init) run
**once per app**.

| Intended path | Product | Surface |
|---------------|---------|---------|
| `apps/spice-web` | OmniAgent Spice | Next.js / Vercel (`spice-web`) |
| `apps/spice-mobile` | OmniAgent Spice | Expo / EAS (`spice`) |
| `apps/work-web` | OmniAgent Work | Next.js / Vercel (`work-web`) |
| `apps/work-mobile` | OmniAgent Work | Expo / EAS (`work`) |

Not created in **this** skeleton. Do not add those folders here unless a
ticket says the template itself should ship multi-app examples.

Convex for OmniAgent (weekend S2, not this PR): one schema, app-scoped by
`workspaceId`; template base tables + Spice tables + Work tables; names of
dev / staging / prod deployments will be written here when they exist.

## CI

Workflow: `.github/workflows/ci.yml` (this repo).

Locked job **names** (parity with `tempo-rhythm`):

1. Typecheck
2. Lint
3. Test
4. Scans (forbidden-tech, ram-only-audit, design-tokens)
5. Third-party notices (TF-OSS-00)
6. E2E (Playwright)

Bodies are Week-0 stubs. Six **workflow files** from `01` §7 plus
`claude.yml` are not in this scaffold (`01` was not in the workspace).

## Tickets parked here

See `docs/wiki/Tickets.md`.

- Factory: `MT-01` … `MT-04`, `MT-L`, `MT-STOP`
- Mega Memory: `MM-00` … `MM-10` (`product:mega-memory`) until the repo
  location decision (MM-00) moves them
