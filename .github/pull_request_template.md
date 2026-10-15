<!--
Factory PR template — stage evidence.
Check names must match tempo-rhythm (see HARD_RULES §9).
Rule 1.4 (Amit, 2 Oct 2026): merge into integration only when all required checks are green,
Greptile passes, there are no conflicts and every changed file is inside the ticket MUTATES list.
The orchestrator or tester worker clicks merge. Only Amit merges into master.
-->

## Summary

<!-- 2–3 sentences. Why this change exists. -->

## Linked issue

<!-- Factory tickets start with GOAL:. Reference MT-* / MM-* / MT-STOP. -->

Closes #

## Stage evidence

| Field | Value |
|-------|--------|
| Stage | p-1 / v0 |
| Base branch | `integration` (do not push to the base) |
| Preflight | `PREFLIGHT: checks=n/n \| files=k (≤3+1?) \| secret-scan=pass\|fail` |
| Cursor run id | |
| Label after CI | `agent:review` (merge only under rule 1.4) |

### CI check names (locked)

- [ ] Typecheck
- [ ] Lint
- [ ] Test
- [ ] Scans (forbidden-tech, ram-only-audit, design-tokens)
- [ ] Third-party notices (TF-OSS-00)
- [ ] E2E (Playwright)

## Screenshots / recording

<!-- Required for any UI change. Otherwise: N/A — no user-visible surface. -->

## Test plan

- [ ] No secrets committed; no values printed
- [ ] `LICENSE` remains MIT
- [ ] Docs / wiki tickets updated if the queue changed
- [ ] Acceptance criteria below copied from the issue (do not paraphrase)

## Acceptance criteria

<!-- Paste from the linked issue ACCEPTANCE field. -->

## HARD_RULES checklist

Read `HARD_RULES.md` before ticking.

- [ ] pnpm only; no second lockfile
- [ ] No Polar Convex stubs invented
- [ ] Mobile-only Convex modules not silently merged
- [ ] Merge only under rule 1.4 (required checks green, Greptile passes, no conflicts, inside MUTATES)
- [ ] CI job names unchanged unless this is a `template-change` ticket
