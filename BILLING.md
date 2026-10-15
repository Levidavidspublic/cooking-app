# Billing — factory split

Payments stay split. Do not unify them in the shared Convex schema.

| Surface | Provider | Source of truth | Where it lives |
|---------|----------|-----------------|----------------|
| Web SaaS | Polar | Polar products / checkout | `apps/web/config/polarConfig.ts`, `apps/web/app/checkout/` |
| Mobile | RevenueCat | RevenueCat entitlements | `apps/mobile` + Convex HTTP webhook (product repos) |

## Rules

- **No Polar Convex stubs.** `web-template` did not ship `convex/polar.ts`
  or `convex/convex.config.ts`. Do not invent them.
- RevenueCat is the source of truth for **mobile** subscriptions (App Store,
  Play, and any RC-wrapped web).
- Env names only in this repo: see `PROVIDERS.md`. Values never land here.
- Template skeleton has Polar route/config on web and RevenueCat context on
  mobile so grafts compile. Product prices, entitlements, and webhook URLs
  are product-repo work (Tempo S6, etc.).

## Spend heuristics (factory, not product)

Week-0 v2 §6 caps are Amit's to fill. Structural: Cursor pay-as-you-go OFF;
Squad auto-recharge has a monthly maximum; DeepInfra prepaid only.
Every ticket carries a `budget:` line (default $5).
