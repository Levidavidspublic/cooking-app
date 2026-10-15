# Tickets

Seed list for `monorepo-template` from Week-0 v2 §7.4–§7.5. Format: header
line + seven fields. **None** are `agent:ready` until Gate 1.

Labels: exactly one `agent:*`; plus lane, executor, product, stage, version,
and control (`backend-change`, `template-change`, `needs-amit`, `release`,
`stop-test`).

---

## MT-01 — conformance check

product: template · generation: G0
lane: code · executor: exec:cursor-cloud · stage: p-1 · version: v0

GOAL:
Ship a conformance script that fails the skeleton when factory invariants
drift (lockfile, MIT, docs links, CI check names, issue `GOAL:` prefix).

CONTEXT:
`CONFORMANCE.md`, `docs/TEMPLATE_STATE.md`, `.github/workflows/ci.yml`.

ACCEPTANCE:
- Script runnable via pnpm from repo root
- Checks the `CONFORMANCE.md` skeleton list
- CI stubs remain named exactly as `tempo-rhythm` until this ticket
  replaces stub **bodies** (not names)

CONSTRAINTS:
Draft PR; no secrets; do not rename CI checks.

BUDGET:
budget: $5

STOP:
`BLOCKED_PATH_DRIFT` if a check name changes. `needs-amit` if `01` §7
requires six workflow files this ticket cannot see.

EVIDENCE:
PR + CI names + secret-scan.

---

## MT-02 — automatic config runbook

product: template · generation: G0
lane: code · executor: exec:grokbot · stage: p-1 · version: v0

GOAL:
Write `docs/AUTO_CONFIG.md` so Grok Bot can replay Cursor / Squad / GitHub
factory config from names only (no values).

CONTEXT:
Week-0 W1–W3; Amit's Cursor brief (Automations A1/A2/A3). This file does
not exist yet.

ACCEPTANCE:
- `docs/AUTO_CONFIG.md` lists steps, env **names**, and verification
  (`NAME = SET|UNSET`)
- No secret values
- Linked from `README.md`

CONSTRAINTS:
No dashboard clicks by a code agent. Names only.

BUDGET:
budget: $5

STOP:
`BLOCKED_DEPENDENCY` if the Cursor brief is missing.

EVIDENCE:
Doc PR; no keys touched.

---

## MT-03 — multi-app amendment

product: template · generation: G0
lane: code · executor: exec:cursor-cloud · stage: p-1 · version: v0

GOAL:
Apply the OmniAgent multi-app amendment to the template contract:
`apps/spice-web`, `apps/spice-mobile`, `apps/work-web`,
`apps/work-mobile` on one `packages/backend`, and record `01` §11
steps 3–4 as **once per app**.

CONTEXT:
`docs/TEMPLATE_STATE.md` (intended table). Spice PRD §9 gap. Do not
create those folders in a product-less clone unless the ticket says the
template should ship examples.

ACCEPTANCE:
- TEMPLATE_STATE intended rows marked applied or explicitly deferred
- Vercel + EAS "once per app" written into `docs/AUTO_CONFIG.md` or this
  ticket's doc
- No silent merge of mobile-only Convex modules

CONSTRAINTS:
One shared Convex URL pair per product. No Polar Convex stubs.

BUDGET:
budget: $5

STOP:
`needs-amit` if the template should contain example OmniAgent apps vs
docs-only.

EVIDENCE:
PR; `template-change` label.

---

## MT-04 — context-tooling regenerate hook

product: template · generation: G0
lane: code · executor: exec:cursor-cloud · stage: p-1 · version: v0

GOAL:
Install Graphify + Understand Anything as project skills and commit the
graph artefact path in `docs/TEMPLATE_STATE.md`. Hook regenerate-on-merge.

CONTEXT:
Week-0 W0 (Blitzy pattern). Intended paths in TEMPLATE_STATE. Skills
dirs are not present in this scaffold.

ACCEPTANCE:
- `ls .agents/skills` lists graphify + understand-anything
- A graph artefact exists and TEMPLATE_STATE names its path
- Merge hook / instruction: regenerate on merge

CONSTRAINTS:
No secrets. Do not fetch unrelated corpora.

BUDGET:
budget: $5

STOP:
`BLOCKED_DEPENDENCY` if plugins cannot be installed in CI.

EVIDENCE:
Graph path + PR.

---

## MT-L — labels + AGENTS.md (proof)

product: template · generation: G0
lane: code · executor: exec:cursor-cloud · stage: p-1 · version: v0

GOAL:
Monday loop-proof: labels from `.github/labels.json` exist on the repo
and `AGENTS.md` still has the template section plus the factory section.

CONTEXT:
Week-0 §8 proof ticket for this repo. Base named `main` (actual default
`master` — UNKNOWN).

ACCEPTANCE:
- `gh label list` matches `.github/labels.json`
- `AGENTS.md` template section intact; factory section present
- Checker can comment `PREFLIGHT:` on the proof PR
- Files touched ≤ 3 + 1 unless this ticket says otherwise

CONSTRAINTS:
Draft PR. Amit merges. Not `agent:ready` until Gate 1.

BUDGET:
budget: $5

STOP:
`BLOCKED_VERIFICATION` if MT-STOP went green. `BLOCKED_PATH_DRIFT` if
the default branch is rewritten without a decision.

EVIDENCE:
PR URL · Squad comment · CI check names + states · Cursor run id.

---

## MT-STOP — stop ticket (must stay red)

product: template · generation: G0
lane: code · executor: exec:human · stage: p-1 · version: v0

GOAL:
Seed a stop ticket that stays **red**. Verifier health: if this ticket
is ever marked done or its proof goes green, stop the factory and fix
the verifier.

CONTEXT:
Week-0 §8. Labels: `agent:blocked` + `stop-test` + `needs-amit`.
Stop code: `BLOCKED_VERIFICATION`. GitHub issue create is **blocked**
on this token (`Resource not accessible by integration` / MCP 404).
Apply `.github/labels.json` and file the issue from a PAT with Issues
write (`DISPATCH_PAT`). Same seven fields as below.

ACCEPTANCE:
- Issue open, not `agent:ready`
- Body starts with `GOAL:`
- Stays `agent:blocked`
- A green close of this ticket is a **factory incident**

CONSTRAINTS:
Do not implement a feature on this ticket. Do not flip it to
`agent:ready`. Do not merge a PR that "completes" it.

BUDGET:
budget: $2

STOP:
`BLOCKED_VERIFICATION` (permanent for this ticket).

EVIDENCE:
Issue URL + label list. Green CI on the **scaffold** PR is unrelated
and must not close MT-STOP.

---

## Mega Memory (parked on this repo)

`product:mega-memory`. Move when Amit picks
`Levidavidspublic/mega-memory` vs a package in `tempo-rhythm`. **MM-00
blocks MM-01.**

### MM-00 — licence + repo location

product: mega-memory · generation: G0
lane: research · executor: exec:human · stage: 0 · version: v0

GOAL:
Amit answers AGPL vs Apache/MIT (and the split) **and** whether Mega
Memory is a new repo or a `tempo-rhythm` package.

CONTEXT:
Week-0 §11 decision 2. Blocks Tempo store build and MM-01.

ACCEPTANCE:
Written decision on the issue. Tickets moved or kept.

CONSTRAINTS:
`needs-amit`. Do not infer.

BUDGET:
budget: $0

STOP:
Decision missing → stay blocked.

EVIDENCE:
Comment from Amit.

### MM-01 — paste-once MCP

GOAL:
After MM-00: paste-once MCP so `remember` in one session and `recall`
in a new one work.

ACCEPTANCE:
Remember / recall across two sessions. MIT or the chosen licence applied.

CONSTRAINTS:
Blocked until MM-00. Draft PR.

BUDGET:
budget: $5

STOP:
`BLOCKED_DEPENDENCY` on MM-00.

### MM-02 — remember / recall proof

GOAL:
Documented proof of MM-01 on a clean session.

ACCEPTANCE:
Ledger line + screenshot with no masked fields.

### MM-03 — template + web viewer

GOAL:
Template + web viewer on Vercel.

### MM-04 — Convex hosted variant

GOAL:
Hosted Convex variant of Mega Memory (separate from Agentwright's
no-Convex rule).

### MM-05 — Amit-Wiki ingest

GOAL:
Ingest survives (`tmp/` skipped, ~7k notes). Never touch
`C:\Users\User\Documents\Amit-Wiki\` from an agent machine.

### MM-06 — two-device sync

GOAL:
Two-device sync ≤ 60 s; conflicts visible.

### MM-07 — auto-indexing

GOAL:
Auto-indexing on six axes.

### MM-08 — per-recipient sharing

GOAL:
Per-recipient sharing holds across hops.

### MM-09 — pricing live

GOAL:
$9 / $15 / $19 live (provider TBD after MM-00).

### MM-10 — Cowork gate

GOAL:
Cowork gate from a cold session.

---

## Label reminder

`MT-STOP` is the only ticket that should carry `stop-test` +
`agent:blocked` + `needs-amit` from birth. All others stay unlabeled
`agent:ready` until Amit's Gate 1.
