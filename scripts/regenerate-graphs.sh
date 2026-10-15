#!/usr/bin/env bash
# MT-04 merge hook: regenerate Graphify artefact after a merge that
# changes source layout. Understand Anything is optional (plugin).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if ! command -v graphify >/dev/null 2>&1; then
  echo "graphify is not on PATH. Install: python3 -m pip install 'graphifyy==0.9.74'" >&2
  exit 1
fi

graphify update . --no-cluster

python3 - <<'PY'
import json
from pathlib import Path

root = Path(".").resolve()
src = Path("graphify-out/graph.json")
dst = Path("docs/graphs/monorepo-template.json")
data = json.loads(src.read_text(encoding="utf-8"))

def relativize(value):
    if isinstance(value, str):
        try:
            path = Path(value)
        except Exception:
            return value
        if path.is_absolute():
            try:
                return str(path.resolve().relative_to(root)).replace("\\", "/")
            except ValueError:
                return value
        return value
    if isinstance(value, list):
        return [relativize(item) for item in value]
    if isinstance(value, dict):
        return {key: relativize(item) for key, item in value.items()}
    return value

sanitized = relativize(data)
text = json.dumps(sanitized, ensure_ascii=False, separators=(",", ":"))
if str(root) in text:
    raise SystemExit("refusing to write graph with this machine's absolute root")
dst.parent.mkdir(parents=True, exist_ok=True)
dst.write_text(text, encoding="utf-8")
print(
    f"Wrote {dst} ({len(sanitized.get('nodes', []))} nodes, "
    f"{len(sanitized.get('links', []))} edges)"
)
PY

echo "Understand Anything: if the plugin is available, run /understand and commit .ua/knowledge-graph.json"
echo "Commit graph artefacts in a follow-up PR. Do not merge that PR yourself."
