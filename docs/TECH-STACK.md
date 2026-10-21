# Cooking App technical stack

Updated 2026-10-21. Evidence-bounded documentation proposal; not a release or default-branch adoption.

This is a manifest snapshot, not a recommendation or compatibility claim. No install, migration or runtime acceptance was performed.

| Layer | Verified baseline declaration | Product implication |
|---|---|---|
| Workspace | pnpm 10.26.2; Turbo ^2.5.4; TypeScript ^5.9.3 | Keep the pinned package manager; no Bun migration from historical drafts |
| Node | ^22.18.0 or >=24.0.0 | Actual build/runtime compatibility UNKNOWN |
| Web | Next 15.5.7; React 19.2.3; Tailwind ^4.1.18; Radix/shadcn-style primitives | Existing scaffold, not Cooking-specific implementation |
| Backend | Convex ^1.31.0; Convex Auth ^0.0.90; packages/backend/convex | Shared product backend required; live configuration UNKNOWN |
| Mobile | Expo ~53.0.11; React Native 0.81.5; Expo Router ~6.0.19; NativeWind ^4.2.1 | Declared mixed package versions require actual compatibility proof; Android proposed for MVP |
| Web payments | Polar adapter in scaffold | Provider eligibility/accepted cooking entitlement policy UNKNOWN; no merchant setup |
| Mobile payments | RevenueCat library ^9.6.10 | Template source-of-truth split retained; purchase acceptance UNKNOWN |
| Shared core/UI | Absent at baseline | New pure TypeScript core is CA-01; never invent existing packages |
| Preview | Vercel | Auto-preview cost concern prevents publication in this run |
| Knowledge/runtime provider | UNKNOWN | No provider selected from old research; no paid calls authorized |
| Code maps | Graphify pin in SLOTS; Understand Anything required by HARD_RULES | Current semantic completeness UNKNOWN; no graph implementation in this run |

## Architectural intent

Keep business logic independent of platform APIs in the proposed core. Thin web/Android/iOS bindings call the shared backend. Model output is untrusted and never owns access, arithmetic, entitlement or allergen decisions. A read-only knowledge connector is a later accepted contract, not currently wired infrastructure.

## Historical alternatives

Base44, Android/Room/Compose, a mock localStorage harness and the real Convex/Auth harness are separate historical artifacts. None overrides current pnpm/Convex repository law. The early real-backend portability brief establishes intent, not a passed cross-platform test. Provider, exact toolchain migration and desktop scope remain UNKNOWN.

## Validation limits

Manifest reads establish declared versions only. Installed resolution, current service configuration, security acceptance, compatibility, commercial access and measured cost are UNKNOWN. Root has no test or e2e script; backend lint is a placeholder echo. Do not present a successful aggregate command as evidence of a cooking test that is not registered.
