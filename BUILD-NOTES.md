# BUILD NOTES — read before assuming this builds

**Status: structure is scaffolded.** Run `pnpm install` at the repo root before
expecting apps to typecheck or start. Run Convex codegen/dev from
`packages/backend` before apps can talk to a real deployment.

## Must-run steps

1. `pnpm install` at repo root (creates the **single** `pnpm-lock.yaml`).
2. `pnpm --filter @app/backend dev` → connects/creates a Convex deployment and
   refreshes `packages/backend/convex/_generated/`.
3. Point **both** apps at that one deployment:
   - `apps/web/.env.local` → `NEXT_PUBLIC_CONVEX_URL`, `CONVEX_DEPLOYMENT`
   - `apps/mobile/.env.local` → `EXPO_PUBLIC_CONVEX_URL`, `CONVEX_DEPLOYMENT`
4. Payment secrets via Convex env / provider dashboards — never commit real keys.
5. Replace `apps/landing` placeholder content with real marketing pages.

## Known facts from source templates

- **Landing source was empty** (only `node_modules`). `apps/landing` is a
  hand-authored static Next.js placeholder — chosen over deleting the app so
  the monorepo shape stays complete.
- **No `polar.ts` / `convex.config.ts`** in web Convex. Polar is route/config
  level (`@polar-sh/nextjs`). Do not stub Convex Polar components.
- **Mobile-only modules** (`conversations`, `memories`, `messages`) were **not**
  merged into `packages/backend` — see `docs/MOBILE-ONLY-CONVEX.md`.
- Source templates had **dual lockfiles** (`bun.lock` + `package-lock.json`).
  Those were dropped; this repo uses **one** root `pnpm-lock.yaml`.
- Nested `.git` from `mobile-template` was **not** copied.
- Real `.env` files (including Clerk keys in web-template) were **not** copied.
- Mobile `app.json` EAS `projectId` / `owner` were removed so clones do not
  attach to someone else's Expo project.
- Web layout still defaults to `dir="rtl" lang="he"` (functional default from
  the source template). Title/description were neutralized.

## Package manager

Verified on the authoring machine: `pnpm 10.26.2`, `bun 1.3.14`. This template
standardizes on **pnpm** so there is one lockfile and one install path.
