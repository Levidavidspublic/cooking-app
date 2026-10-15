# Copy this template into a new product

## Option A — GitHub template (preferred)

1. Open https://github.com/Levidavidspublic/monorepo-template → **Use this template**
   (https://github.com/new?template_name=monorepo-template&template_owner=Levidavidspublic) → create a new repo under `Levidavidspublic`
   (default branch **`master`**).
2. Clone it locally, then create the working branch `integration`:
   `git push origin master:integration`. All PRs go into `integration`.
3. Run the bootstrap script (Windows Git Bash / macOS / Linux):

```bash
pnpm install
pnpm run setup
```

`pnpm run setup` walks Convex → env files → reminds you about Vercel + Expo Go.

## Option B — Local folder copy

```bash
cp -R monorepo-template my-new-tool
cd my-new-tool
rm -rf .git
git init -b master
pnpm install
pnpm run setup
git add -A
git commit -m "chore: copy monorepo-template"
git branch integration   # needs the first commit; PRs go into integration, Amit merges it into master
```

## After bootstrap

| Surface | Command / action |
|--------|-------------------|
| Convex backend | `pnpm dev:backend` (keeps codegen hot) |
| Web (local) | `pnpm dev:web` → http://localhost:3000 |
| Landing (local) | `pnpm dev:landing` → http://localhost:3002 |
| Mobile / Expo Go | `pnpm dev:mobile` → scan QR in Expo Go |
| Vercel (web) | `pnpm run vercel:web` |
| Vercel (landing) | `pnpm run vercel:landing` |

Both `NEXT_PUBLIC_CONVEX_URL` and `EXPO_PUBLIC_CONVEX_URL` must be the **same**
Convex deployment URL.
