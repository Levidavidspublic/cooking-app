# Mobile-only Convex modules (NOT merged)

These files exist in the source `mobile-template/convex/` but were
**intentionally not** copied into `packages/backend/convex/`:

- `conversations.ts`
- `memories.ts`
- `messages.ts`

They reference tables (`conversations`, `memories`, `messages`) that are also
**not declared** in the mobile `schema.ts` (which only has `authTables` +
`users`). Treat them as product/domain code that sat with the mobile template —
do **not** silently move them into the shared backend.

To adopt them later: add table definitions to
`packages/backend/convex/schema.ts` and copy/adapt the modules in the same
change set.
