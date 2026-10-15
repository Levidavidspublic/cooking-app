---
name: Factory ticket
about: Factory ticket. GOAL renders first. STEPS starts with the graph query.
title: "[MT-XX] "
labels: []
---

product: template · generation: G0
lane: code
executor: exec:cursor-cloud
stage: p-1
version: v0

GOAL:

CONTEXT:
<!-- Point at docs/TEMPLATE_STATE.md and the knowledge-graph path once it exists. -->

ACCEPTANCE:

MUTATES:
<!-- Every file this ticket may change, one path per line. The merge gate (rule 1.4) checks the PR against this list. -->

STEPS:
1. Query the Graphify graph and Understand Anything for the MUTATES files and their dependents, then adjust this plan to the current code before editing. Commands and the pinned `graphifyy` version are in AGENTS.md (Step 0).

CONSTRAINTS:
- PR into `integration`. It merges only under rule 1.4 (all required checks green, Greptile passes, no conflicts, inside MUTATES; the orchestrator or tester worker clicks merge). Only Amit merges into `master`.
- MIT. No secrets. Never print a value.
- Do not mark `agent:ready` in this template.

BUDGET:
budget: $5

STOP:
<!-- BLOCKED_DEPENDENCY | BLOCKED_PATH_DRIFT | BLOCKED_VERIFICATION | needs-amit -->

EVIDENCE:
<!-- PR URL · CI check names + states · files touched · secret-scan=pass|fail -->
