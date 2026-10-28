# Graph Report - cooking-app  (2026-10-28)

## Corpus Check
- Corpus is ~48,985 words - fits in a single context window. You may not need a graph.

## Summary
- 1265 nodes · 1825 edges · 121 communities (79 shown, 42 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 26 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Web Lint Rules
- Expo App Config
- Expo Start Scripts
- E2E Preview Workflow
- Web Biome Assist
- Config Guard Script
- Mobile Auth Screens
- Convex Auth and Users
- Root Package Scripts
- Landing Dependencies
- Shared UI Utilities
- Web App Dependencies
- Backend Dependencies
- Mobile Package Config
- Paywall Feature Flags
- Template Bootstrap Docs
- Council Memory Plan
- Navbar and Dialogs
- Web Dev Dependencies
- Landing Layout
- Metro and Setup
- Web Runtime Dependencies
- Web TypeScript Config
- Claude Workflow
- Landing TypeScript Config
- Mobile Paywall Screens
- Graphify and Context Tooling
- RevenueCat Context
- Web Correctness Rules
- Graphify Workflow
- E2E Preview Jobs
- Scope Guard Workflow
- Backend TypeScript Config
- Agent Instructions
- Mobile Placeholder Pages
- Config Guard CI
- Turbo Pipeline
- shadcn Components Config
- Scope Guard CI
- Mobile Root Layout
- Web Package Manifest
- Factory References
- Web Suspicious Rules
- Mobile Package Scripts
- Playwright Preview Package
- Mobile Biome Files
- Web Linter Rules
- Mobile Build Scripts
- E2E Preview Environment
- Mobile Auth Navigation
- Mobile TypeScript Config
- E2E Preview Steps
- Claude Workflow Triggers
- Mobile Auth Routes
- Themed Components
- Web Placeholder Pages
- CI Job Definitions
- Landing Home Assets
- Mobile Dependency Check
- Convex Server Types
- Landing Vercel Config
- Mobile Backend Dependency
- GitHub Issue Config
- Biome Formatter Base
- Biome Formatting Rules
- Web Vercel Config
- E2E Preview Job
- CI Stub Jobs
- PR Workflow Triggers
- Convex Data Model
- Root Vercel Config
- Landing Root Layout
- Web Import Sorting
- Claude Deny Rules
- CI Build Job
- E2E Job
- Third-party Notices Job
- Scans Job
- Test Job
- Typecheck Job
- Graphify Triggers
- Mobile Legal URLs
- Checkout Success Page
- compression dependency
- @convex-dev/auth dependency
- expo dependency
- expo-linear-gradient dependency
- expo-linking dependency
- expo-localization dependency
- expo-splash-screen dependency
- expo-status-bar dependency
- expo-updates dependency
- nativewind dependency
- react dependency
- react-dom dependency
- react-native-reanimated dependency
- react-native-webview dependency
- @react-navigation/native dependency
- @rn-primitives/slot dependency
- @rn-primitives/types dependency
- tailwind-merge dependency
- post-commit.sh dependency
- pre-commit.sh dependency
- setup-git-hooks.sh dependency
- setup-shell-logging.sh dependency
- start-expo.sh dependency
- convex dependency
- @convex-dev/auth dependency
- next dependency
- @radix-ui/react-slot dependency
- tailwindcss dependency
- @tailwindcss/postcss dependency
- postcss.config.mjs dependency
- pnpm Workspace Config

## God Nodes (most connected - your core abstractions)
1. `react-native` - 23 edges
2. `cn()` - 23 edges
3. `README — monorepo-template` - 19 edges
4. `TEMPLATE_STATE — actual vs intended layout` - 18 edges
5. `expo` - 17 edges
6. `correctness` - 17 edges
7. `compilerOptions` - 17 edges
8. `compilerOptions` - 16 edges
9. `correctness` - 16 edges
10. `scripts` - 16 edges

## Surprising Connections (you probably didn't know these)
- `Committed Graphify artefact` --semantically_similar_to--> `Graphify code map slot`  [INFERRED] [semantically similar]
  docs/TEMPLATE_STATE.md → factory/SLOTS.md
- `Graphify code map slot` --semantically_similar_to--> `Understand Anything artefact`  [INFERRED] [semantically similar]
  factory/SLOTS.md → .agents/skills/understand-anything/SKILL.md
- `Phase 5 — Bolt graft` --conceptually_related_to--> `Roadmap — monorepo-template (root)`  [INFERRED]
  docs/ROADMAP.md → ROADMAP.md
- `Factory references — rule lists` --references--> `AGENTS.md — software factory agent instructions`  [EXTRACTED]
  docs/factory/REFERENCES.md → AGENTS.md
- `CLAUDE.md — Claude-only rules` --references--> `Factory slots — this repo fill`  [EXTRACTED]
  CLAUDE.md → factory/SLOTS.md

## Import Cycles
- None detected.

## Communities (121 total, 42 thin omitted)

### Community 0 - "Web Lint Rules"
Cohesion: 0.05
Nodes (44): noSvgWithoutTitle, noForEach, noConstantCondition, noConstAssign, noEmptyCharacterClassInRegex, noEmptyPattern, noInnerDeclarations, noInvalidConstructorSuper (+36 more)

### Community 1 - "Expo App Config"
Cohesion: 0.05
Nodes (40): backgroundColor, foregroundImage, adaptiveIcon, edgeToEdgeEnabled, backgroundColor, translucent, typedRoutes, expo (+32 more)

### Community 2 - "Expo Start Scripts"
Cohesion: 0.06
Nodes (29): args, loaderPath, path, { pathToFileURL }, proc, { spawn }, resolve(), checkFile() (+21 more)

### Community 3 - "E2E Preview Workflow"
Cohesion: 0.05
Nodes (39): concurrency, cancel-in-progress, group, name, runs-on, steps, timeout-minutes, CI (+31 more)

### Community 4 - "Web Biome Assist"
Cohesion: 0.06
Nodes (33): source, assist, actions, enabled, css, parser, files, ignoreUnknown (+25 more)

### Community 5 - "Config Guard Script"
Cohesion: 0.15
Nodes (24): CONFIG_LABEL, GUARDED, GUARDED_AUTHORS, judge(), labelApproval(), main(), PKG_KEYS, pkgGuarded() (+16 more)

### Community 6 - "Mobile Auth Screens"
Cohesion: 0.15
Nodes (14): SignInScreen(), SignUpScreen(), PreviewModeBanner(), PreviewModeBannerProps, WebViewModal(), WebViewModalProps, rtl, styles (+6 more)

### Community 7 - "Convex Auth and Users"
Cohesion: 0.09
Nodes (23): Missing owner checks in users.ts, Magic-link sign-in target, auth, isAuthenticated, signIn, signOut, store, action (+15 more)

### Community 8 - "Root Package Scripts"
Cohesion: 0.08
Nodes (27): devDependencies, turbo@^2.5.4, typescript@^5.9.3, engines, node, pnpm, typescript, name (+19 more)

### Community 9 - "Landing Dependencies"
Cohesion: 0.10
Nodes (25): dependencies, next@15.5.7, react@19.2.3, react-dom@19.2.3, devDependencies, @types/node@^20.19.27, @types/react@^19.2.7, @types/react-dom@^19.2.3 (+17 more)

### Community 10 - "Shared UI Utilities"
Cohesion: 0.18
Nodes (14): ContactPage(), Button, ButtonProps, buttonVariants, Card, CardContent, CardDescription, CardFooter (+6 more)

### Community 11 - "Web App Dependencies"
Cohesion: 0.08
Nodes (24): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, convex@^1.31.0, @expo/cli@^54.0.22, expo-font@~14.0.10, @expo/metro-runtime@^6.1.2, expo-router@~6.0.19 (+16 more)

### Community 12 - "Backend Dependencies"
Cohesion: 0.09
Nodes (23): dependencies, convex@^1.31.0, @convex-dev/auth@^0.0.90, devDependencies, typescript@^5.9.3, exports, ./convex/_generated/api, ./convex/_generated/api.js (+15 more)

### Community 13 - "Mobile Package Config"
Cohesion: 0.12
Nodes (22): Debugging callout (mobile docs), devDependencies, @biomejs/biome@2.2.6, chalk@^5.3.0, react-test-renderer@19.1.0, tailwindcss@^3.4.19, @types/bun@1.4.2, @types/react@~19.1.17 (+14 more)

### Community 14 - "Paywall Feature Flags"
Cohesion: 0.11
Nodes (19): FEATURES_FREE, FEATURES_PAID, getPolarProductId(), PaywallModalProps, PaywallPlanId, PlanCard(), PlanCardProps, APP_ENV (+11 more)

### Community 15 - "Template Bootstrap Docs"
Cohesion: 0.13
Nodes (22): Conformance — skeleton checks, Skeleton conformance checklist, Connections — how services connect, COPY — copy the template into a product, docs/contracts — one API contract per batch, Factory conventions as a product, docs/tickets — factory tickets, Wiki tickets — MT-* / MM-* / MT-STOP (+14 more)

### Community 16 - "Council Memory Plan"
Cohesion: 0.12
Nodes (18): Council AI assistant mobile integration plan, Council AI memory system plan, GET, config, isPublicRoute, BILLING — factory billing split, Payments split: Polar (web) / RevenueCat (mobile), BUILD NOTES — build prerequisites (+10 more)

### Community 17 - "Navbar and Dialogs"
Cohesion: 0.27
Nodes (15): DebugRow(), Navbar(), PaywallModal(), SignInModal(), SignInModalProps, SignUpModal(), SignUpModalProps, DialogContent (+7 more)

### Community 18 - "Web Dev Dependencies"
Cohesion: 0.10
Nodes (21): devDependencies, autoprefixer@^10.4.22, @biomejs/biome@2.3.8, eslint@^9.39.2, eslint-plugin-tailwind-canonical-classes@^1.0.8, postcss@^8.5.6, @tailwindcss/typography@^0.5.19, @types/node@^20.19.27 (+13 more)

### Community 19 - "Landing Layout"
Cohesion: 0.13
Nodes (10): nextConfig, metadata, RootLayout(), Footer(), convex, Providers(), ProvidersProps, Accessibility floor (+2 more)

### Community 20 - "Metro and Setup"
Cohesion: 0.10
Nodes (10): config, { getDefaultConfig }, Module, path, { withNativeWind }, workspaceRoot, nextConfig, Template bootstrap steps (+2 more)

### Community 21 - "Web Runtime Dependencies"
Cohesion: 0.10
Nodes (20): dependencies, @app/backend@workspace:*, class-variance-authority@^0.7.1, lucide-react@^0.546.0, @polar-sh/nextjs@^0.9.1, @radix-ui/react-accordion@^1.2.12, @radix-ui/react-dialog@^1.1.15, @radix-ui/react-icons@^1.3.2 (+12 more)

### Community 22 - "Web TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 23 - "Claude Workflow"
Cohesion: 0.10
Nodes (20): if, permissions, runs-on, steps, timeout-minutes, jobs, claude, actions (+12 more)

### Community 24 - "Landing TypeScript Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 25 - "Mobile Paywall Screens"
Cohesion: 0.19
Nodes (15): FEATURES, PaywallScreen(), AuthenticatedLayout(), DebugButton(), DebugRow(), SettingsScreen(), APP_ENV, AppEnv (+7 more)

### Community 26 - "Graphify and Context Tooling"
Cohesion: 0.17
Nodes (16): Understand Anything skill, Understand Anything artefact, docs/graph — Graphify output notes, TEMPLATE_STATE — actual vs intended layout, Committed Graphify artefact, OmniAgent multi-app amendment, 02 TRD — technical requirements, Graphify code map slot (+8 more)

### Community 27 - "RevenueCat Context"
Cohesion: 0.19
Nodes (14): isRunningInExpoGo(), mapPackageType(), PackageInfo, PREVIEW_PACKAGES, RevenueCatContext, RevenueCatContextType, RevenueCatProvider(), initialize() (+6 more)

### Community 28 - "Web Correctness Rules"
Cohesion: 0.12
Nodes (16): noConstantCondition, noConstAssign, noEmptyCharacterClassInRegex, noEmptyPattern, noInnerDeclarations, noInvalidConstructorSuper, noInvalidUseBeforeDeclaration, noPrecisionLoss (+8 more)

### Community 29 - "Graphify Workflow"
Cohesion: 0.12
Nodes (16): name, runs-on, steps, timeout-minutes, GH_TOKEN, PR_NUMBER, jobs, config-guard (+8 more)

### Community 30 - "E2E Preview Jobs"
Cohesion: 0.12
Nodes (16): jobs, rebuild, name, runs-on, steps, timeout-minutes, name, run (+8 more)

### Community 31 - "Scope Guard Workflow"
Cohesion: 0.12
Nodes (16): GH_TOKEN, PR_NUMBER, jobs, scope-guard, name, runs-on, steps, timeout-minutes (+8 more)

### Community 32 - "Backend TypeScript Config"
Cohesion: 0.12
Nodes (15): compilerOptions, allowJs, allowSyntheticDefaultImports, forceConsistentCasingInFileNames, isolatedModules, jsx, lib, module (+7 more)

### Community 33 - "Agent Instructions"
Cohesion: 0.16
Nodes (14): AGENTS.md — software factory agent instructions, Factory report format, Three attempts per ticket, Ticket — eleven fields, CLAUDE.md — Claude-only rules, Wiki home, FACTORY_PAUSED=true, Factory slots — this repo fill (+6 more)

### Community 34 - "Mobile Placeholder Pages"
Cohesion: 0.17
Nodes (9): APP_IS_RTL, getFlexDirection(), getTextAlign(), iconTransform, isExpoGo, needsExplicitRTL(), position, spacing (+1 more)

### Community 35 - "Config Guard CI"
Cohesion: 0.13
Nodes (14): Locked CI check names, concurrency, cancel-in-progress, group, name, permissions, actions, contents (+6 more)

### Community 36 - "Turbo Pipeline"
Cohesion: 0.13
Nodes (14): dependsOn, outputs, cache, persistent, cache, dependsOn, $schema, tasks (+6 more)

### Community 37 - "shadcn Components Config"
Cohesion: 0.14
Nodes (13): aliases, components, utils, rsc, $schema, style, tailwind, baseColor (+5 more)

### Community 38 - "Scope Guard CI"
Cohesion: 0.14
Nodes (13): concurrency, cancel-in-progress, group, name, permissions, contents, issues, pull-requests (+5 more)

### Community 39 - "Mobile Root Layout"
Cohesion: 0.19
Nodes (8): convex, convexUrl, RootLayout(), secureStorage, bootstrapRTL(), expo-constants@~18.0.13, getConvexUrl(), expo-constants

### Community 40 - "Web Package Manifest"
Cohesion: 0.17
Nodes (11): clsx@^2.1.1, @radix-ui/react-label@^2.1.8, react@19.2.3, @types/react@^19.2.7, clsx, react, @types/react, name (+3 more)

### Community 41 - "Factory References"
Cohesion: 0.20
Nodes (12): Factory references — rule lists, Reference precedence order, Bun-only package manager target, 01 PRD — product requirements, One-day preview goal, 06 Roadmap (phases), Phase 0 — factory gates, Phase 5 — Bolt graft (+4 more)

### Community 42 - "Web Suspicious Rules"
Cohesion: 0.18
Nodes (11): suspicious, noAsyncPromiseExecutor, noCatchAssign, noConsole, noDoubleEquals, noDuplicateObjectKeys, noMisleadingCharacterClass, noPrototypeBuiltins (+3 more)

### Community 43 - "Mobile Package Scripts"
Cohesion: 0.18
Nodes (11): scripts, android, check, dev, format, ios, lint, postinstall (+3 more)

### Community 44 - "Playwright Preview Package"
Cohesion: 0.20
Nodes (8): description, devDependencies, @playwright/test@1.63.0, name, private, scripts, test, @playwright/test

### Community 45 - "Mobile Biome Files"
Cohesion: 0.20
Nodes (9): files, ignoreUnknown, includes, overrides, $schema, vcs, clientKind, enabled (+1 more)

### Community 46 - "Web Linter Rules"
Cohesion: 0.20
Nodes (10): linter, enabled, rules, noAccumulatingSpread, performance, recommended, style, noImplicitBoolean (+2 more)

### Community 47 - "Mobile Build Scripts"
Cohesion: 0.20
Nodes (10): scripts, build, check, check:fix, dev, format, lint, start (+2 more)

### Community 48 - "E2E Preview Environment"
Cohesion: 0.29
Nodes (10): steps, steps, steps, NEEDS, NEXT_PUBLIC_CONVEX_URL, steps, env, name (+2 more)

### Community 49 - "Mobile Auth Navigation"
Cohesion: 0.28
Nodes (3): api, components, internal

### Community 50 - "Mobile TypeScript Config"
Cohesion: 0.22
Nodes (8): compilerOptions, paths, strict, strictNullChecks, exclude, extends, include, expo/tsconfig.base

### Community 51 - "E2E Preview Steps"
Cohesion: 0.22
Nodes (9): name, runs-on, steps, timeout-minutes, ci-lint, with, cache, node-version (+1 more)

### Community 52 - "Claude Workflow Triggers"
Cohesion: 0.22
Nodes (9): types, types, types, types, True, issue_comment, issues, pull_request_review (+1 more)

### Community 54 - "Themed Components"
Cohesion: 0.32
Nodes (6): Text(), TextProps, ThemeProps, useThemeColor(), View(), ViewProps

### Community 55 - "Web Placeholder Pages"
Cohesion: 0.39
Nodes (5): Page2(), Page3(), PremiumGate(), PremiumGateProps, MOCK_PAYMENTS

### Community 56 - "CI Job Definitions"
Cohesion: 0.25
Nodes (8): name, runs-on, timeout-minutes, jobs, ci-typecheck, lint, name, runs-on

### Community 57 - "Landing Home Assets"
Cohesion: 0.29
Nodes (5): Next.js starter file icon (SVG), Next.js starter globe icon (SVG), Next.js wordmark (SVG), Vercel wordmark (SVG), Next.js starter window icon (SVG)

### Community 58 - "Mobile Dependency Check"
Cohesion: 0.38
Nodes (6): checkDependency(), CheckResult, dependencies, Dependency, main(), printResults()

### Community 59 - "Convex Server Types"
Cohesion: 0.29
Nodes (5): ActionCtx, DatabaseReader, DatabaseWriter, MutationCtx, QueryCtx

### Community 60 - "Landing Vercel Config"
Cohesion: 0.33
Nodes (5): buildCommand, framework, installCommand, outputDirectory, $schema

### Community 61 - "Mobile Backend Dependency"
Cohesion: 0.20
Nodes (6): @app/backend@workspace:*, react-native-screens@~4.16.0, react-native-worklets@0.5.1, @app/backend, react-native-screens, react-native-worklets

### Community 62 - "GitHub Issue Config"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 63 - "Biome Formatter Base"
Cohesion: 0.40
Nodes (5): formatter, enabled, indentStyle, indentWidth, lineWidth

### Community 64 - "Biome Formatting Rules"
Cohesion: 0.40
Nodes (5): quoteStyle, trailingCommas, javascript, formatter, globals

### Community 65 - "Web Vercel Config"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, $schema

### Community 66 - "E2E Preview Job"
Cohesion: 0.40
Nodes (5): if, name, needs, runs-on, ci

### Community 67 - "CI Stub Jobs"
Cohesion: 0.40
Nodes (5): name, runs-on, steps, timeout-minutes, ci-test

### Community 68 - "PR Workflow Triggers"
Cohesion: 0.40
Nodes (5): branches, types, True, pull_request, workflow_dispatch

### Community 69 - "Convex Data Model"
Cohesion: 0.40
Nodes (4): DataModel, Doc, Id, TableNames

### Community 70 - "Root Vercel Config"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, $schema

### Community 72 - "Web Import Sorting"
Cohesion: 0.50
Nodes (4): source, assist, actions, organizeImports

### Community 73 - "Claude Deny Rules"
Cohesion: 0.50
Nodes (3): permissions, deny, $schema

### Community 74 - "CI Build Job"
Cohesion: 0.50
Nodes (4): name, runs-on, timeout-minutes, ci-build

### Community 75 - "E2E Job"
Cohesion: 0.50
Nodes (4): name, runs-on, steps, e2e

### Community 76 - "Third-party Notices Job"
Cohesion: 0.50
Nodes (4): notices, name, runs-on, steps

### Community 77 - "Scans Job"
Cohesion: 0.50
Nodes (4): scan, name, runs-on, steps

### Community 78 - "Test Job"
Cohesion: 0.50
Nodes (4): test, name, runs-on, steps

### Community 79 - "Typecheck Job"
Cohesion: 0.50
Nodes (4): typecheck, name, runs-on, steps

### Community 80 - "Graphify Triggers"
Cohesion: 0.50
Nodes (4): branches, True, push, workflow_dispatch

## Knowledge Gaps
- **35 isolated node(s):** `expo/tsconfig.base`, `Connections — how services connect`, `Debugging callout (mobile docs)`, `One-day preview goal`, `Factory conventions as a product` (+30 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 652 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **42 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `03 App flow` connect `Council Memory Plan` to `Factory References`, `Paywall Feature Flags`, `Navbar and Dialogs`, `Landing Layout`, `Mobile Auth Routes`, `Web Placeholder Pages`, `Mobile Paywall Screens`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
- **What connects `expo/tsconfig.base`, `Connections — how services connect`, `Debugging callout (mobile docs)` to the rest of the system?**
  _35 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Web Lint Rules` be split into smaller, more focused modules?**
  _Cohesion score 0.045454545454545456 - nodes in this community are weakly interconnected._
- **Why does `Factory slots — this repo fill` connect `Agent Instructions` to `E2E Preview Workflow`, `Config Guard CI`, `Config Guard Script`, `Scope Guard CI`, `Root Package Scripts`, `Graphify and Context Tooling`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
- **Should `Expo App Config` be split into smaller, more focused modules?**
  _Cohesion score 0.04878048780487805 - nodes in this community are weakly interconnected._
- **Why does `BILLING — factory billing split` connect `Council Memory Plan` to `RevenueCat Context`, `Paywall Feature Flags`, `Template Bootstrap Docs`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Should `Expo Start Scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.06097560975609756 - nodes in this community are weakly interconnected._