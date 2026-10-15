# docs/graph — Graphify output

- CI (`.github/workflows/graphify.yml`, graphifyy==0.9.74) rebuilds the code graph on every push to
  `integration` and uploads `graphify-out/graph.json` as the Actions artifact `graphify-graph`
  (kept 14 days). Not committed here yet: committing needs a Factory App PR (labelled `config`),
  and the Factory App doesn't exist yet.
- The older committed snapshot is `docs/graphs/monorepo-template.json` (see docs/TEMPLATE_STATE.md).
