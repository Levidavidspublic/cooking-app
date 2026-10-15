# Vision — factory template

This repository is the **universal monorepo** every Division6066 product
grafts onto: one Convex backend, pnpm + turbo, web and mobile slots, and a
single GitHub Issues queue.

The factory exists so agents can ship without inventing a second layout,
a second CI contract, or a second authority. Cursor executes tickets.
Squad comments. Grok Bot configures. The orchestrator or tester worker merges into
`integration` under rule 1.4; only Amit merges into `master`.

**P-1 (this fortnight)** is a skeleton that boots: six CI check names in
lockstep with `tempo-rhythm`, a conformance script (MT-01), a context-tooling
regenerate hook (MT-04), and the multi-app amendment so OmniAgent can grow
`apps/spice-*` and `apps/work-*` on the same backend (MT-03).

**P-2** is the template's own acceptance test: the first real graft (an
OmniAgent Bolt export) lands with zero backend edits.

What this template is not: a live product, a second payment backend, or a
place to park secrets. Micro-SaaS and the Railway gateway stay parked until
Amit flips them.
