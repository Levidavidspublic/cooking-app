# Roadmap — monorepo-template

Deliberately silent past V1. Source: Week-0 v2 §9 (universal monorepo
template) and §10.

## P-1 — this fortnight

**Exit when:** the skeleton boots; six CI checks (names locked to
`tempo-rhythm`); conformance script; context-tooling regenerate hook;
multi-app amendment documented and then applied.

Opening tickets: `MT-01`, `MT-02`, `MT-03`, `MT-04`, `MT-L`, `MT-STOP`.
See `docs/wiki/Tickets.md`.

## P-2 — first real graft

**Exit when:** an OmniAgent Bolt export lands with **zero** backend edits.
That graft is the template's own acceptance test until micro-SaaS un-parks.

## Past V1 (vague on purpose)

- Extension shell (bundler TBD)
- Tauri desktop
- Image / video providers in the seam if Amit rules them in
- Micro-SaaS and the Railway microservices: week of 28 Sep at the earliest,
  decided Sun 27

## Related product roads (not this repo)

| Product | Next phase | Lives in |
|---------|------------|----------|
| Tempo Flow | P-1 migration (DeepInfra, PR triage, Convex prod) | `tempo-rhythm` |
| Agentwright | P-1 V0.1 / Gate 4 | `agentwright` |
| OmniAgent Spice / Work | P-2 V0 Bolt shells | `omniagent` (`apps/spice-*`, `apps/work-*`) |
| Mega Memory | blocked on MM-00 licence + repo location | tickets parked here until moved |
