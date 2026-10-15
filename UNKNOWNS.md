# UNKNOWNS — do not infer

Anything not in Week-0 v2, the Session B set, or Amit's uploaded reference
batch is UNKNOWN. Open a `needs-amit` issue. Never guess.

## Open on this repo

| Item | Why it is UNKNOWN | Ticket |
|------|-------------------|--------|
| Full stop-code list (`02` §3) | Session B file `02` was not in this workspace | keep using the three codes named in Week-0; expand only from `02` |
| `stop-codes` CI job | Named in Week-0 acceptance; not a tempo-rhythm `ci.yml` job | MT-01 / `template-change` |
| Default branch `master` vs `main` | This repo's default is `master`; Week-0 loop proof says `main` for the template | decision #9 family |
| Public 404 / Mobbin mapping | Week-0 decision #9: confirm or correct template visibility and Mobbin refs | `needs-amit` |
| `packages/core`, `packages/ui`, `packages/config` | Specified in `01` §1–§8; not present in the skeleton | MT-03 |
| `packages/config/env.ts` env-name registry | W0 seam entry; file does not exist | MT-03 |
| Understand Anything dashboard | Graphify artefact is committed at `docs/graphs/monorepo-template.json`; `.ua/knowledge-graph.json` still needs `/understand` | MT-04 follow-up |
| Railway token variable | `RAILWAY_TOKEN` vs `RAILWAY_API_TOKEN` — resolve from official docs before use | intake |
| Wechaty env name | `WECHATY_TOKEN` assumed; confirm on wechaty.js.org before wiring | dormant |
| Venice / Abliteration OpenCode keys | Names may differ from `VENICE_API_KEY` / `ABLITERATION_API_KEY` | Squad OpenCode |
| Mega Memory repo location | New `Levidavidspublic/mega-memory` vs package in `tempo-rhythm` | MM-00 |
| Mega Memory licence | AGPL vs Apache/MIT and the split — blocks MM-01 | MM-00 |
| Six workflow **files** vs six **jobs** | `01` §7 not in this workspace; this scaffold ships one `ci.yml` with six named jobs | MT-01 |

## Amit decisions that touch the template (Week-0 §11)

Seed as `needs-amit` when filing. Do not answer them in code.

2. Mega Memory licence **and** repo location (blocks MM-01).
9. Template repo state (404 publicly) and the Mobbin reference mapping.
12. Convex: keep the prod/preview two-key exception, or one key.

Other §11 decisions belong on product repos (Agentwright box, OmniAgent
blocklist, Tempo Zustand, etc.).
