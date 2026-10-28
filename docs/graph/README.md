# docs/graph — Graphify output

## Run 2026-10-28 — code and docs

- Tool: `graphifyy` **0.9.96** (PyPI package `graphifyy`, CLI `graphify`).
- Base: `origin/integration` at commit `8e553178941166337cb21fac1eec16aa167e5d31`
  (this repo has no `main` or `master`).
- Outputs: `graph.json` and `GRAPH_REPORT.md`, both in this folder.
- Size: **1265 nodes, 1825 edges, 121 communities**.
- Coverage: 132 code files extracted structurally (AST, 1160 nodes), plus 36 Markdown
  documents and 9 image assets extracted semantically. No external LLM provider or API
  key was used — the host agent did the doc and image extraction itself.
- Corpus stats from graphify detection: 177 files, ~48,985 words.
- Graph health (graphify diagnostics on the raw extraction): 7 dangling-endpoint edges,
  1 self-loop edge, 88 collapsed undirected edges, 0 missing-endpoint edges. These come
  from duplicate/structural edges in the generated YAML/JSON config files and are
  reported here rather than dropped.

### Doc coverage (verified on the base commit above)

| Doc | Status | Path / reason |
|---|---|---|
| Roadmap | FOUND | `ROADMAP.md` and `docs/ROADMAP.md` |
| Tech stack | MISSING as a dedicated file | Stack is documented in `docs/TRD.md` §1 and `package.json` |
| DESIGN.md | MISSING | No `DESIGN.md` anywhere in the base tree |
| AGENTS.md | FOUND | `AGENTS.md` |
| Architecture | MISSING as a dedicated file | Repo map in `docs/TRD.md` §2 and `docs/TEMPLATE_STATE.md` |
| PRD | FOUND | `docs/PRD.md` |
| TRD | FOUND | `docs/TRD.md` |
| include.md | MISSING | Not on `integration`; the file exists only in open draft PRs #61 and #62, never merged |

## CI notes (kept from the previous README)

- CI (`.github/workflows/graphify.yml`, graphifyy==0.9.74) rebuilds the code graph on every push to
  `integration` and uploads `graphify-out/graph.json` as the Actions artifact `graphify-graph`
  (kept 14 days). Not committed here yet: committing needs a Factory App PR (labelled `config`),
  and the Factory App doesn't exist yet.
- The older committed snapshot is `docs/graphs/monorepo-template.json` (see docs/TEMPLATE_STATE.md).
