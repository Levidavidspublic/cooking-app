# monorepo-template — how connections work

This repo is an **empty husk template**. It is not tied to one product’s
Convex/Vercel/Expo projects. After you **Use this template** / clone:

| Service | How to connect |
|--------|----------------|
| **GitHub** | [Use this template](https://github.com/new?template_name=monorepo-template&template_owner=Levidavidspublic) → new private repo in `Levidavidspublic` (`master`) |
| **Convex** | `pnpm install` then `pnpm run setup` (or `pnpm --filter @app/backend exec convex dev`) |
| **Vercel** | From a product clone: `pnpm run vercel:web` / `vercel:landing` (link only; deploy optional) |
| **Expo Go** | `pnpm dev:mobile` with Expo Go app; Expo account via `npx expo login` |

See `COPY.md` for the full copy checklist.

Published template: https://github.com/Levidavidspublic/monorepo-template
