# PROMPT — monorepo template (agent entry)

Read `AGENTS.md` and this file before changing anything.

## Goal

Universal pnpm monorepo: one shared Convex backend (`packages/backend`), plus
`apps/web`, `apps/mobile`, and `apps/landing`. Copy this folder (or clone the
private GitHub repo) to start a new tool.

## Hard constraints

1. Default branch is `master`, not `main`.
2. ONE lockfile for the whole workspace (`pnpm-lock.yaml` only).
3. NO nested `.git` directories below the root.
4. Do NOT assume `polar.ts` or `convex.config.ts` exist — they do not. Stop
   rather than stubbing them.
5. `.env` must be gitignored at every level. Never print `.env` contents.
6. Landing was empty in the source — this repo scaffolds a minimal placeholder.
7. Mobile product/domain Convex modules are flagged in
   `docs/MOBILE-ONLY-CONVEX.md` — do not silently move them.

## Package manager

`pnpm@10.26.2`. Prefer pnpm scripts in `package.json`.
