# Graph Report - cooking-app  (2026-10-30)

## Corpus Check
- 161 files · ~56,444 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 21 file(s) not represented in the graph (top: (none) 7, .example 4, .css 3)

## Summary
- 1239 nodes · 1583 edges · 98 communities (72 shown, 26 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8e553178`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Navbar.tsx
- correctness
- config-guard.mjs
- expo-start-windows.js
- Plan: Integrate Council AI Assistant into Mobile Template
- mobile/package.json
- dependencies
- expo
- web/biome.json
- ref_react
- web/package.json
- scripts
- users.ts
- landing/package.json
- settings.tsx
- What You Must Do When Invoked
- backend/package.json
- ref_convex
- compilerOptions
- Mega Memory (parked on this repo)
- compilerOptions
- dependencies
- README.md
- correctness
- RevenueCatContext.tsx
- compilerOptions
- monorepo-template — 04 UI brief
- rtl.ts
- app/_layout.tsx
- tasks
- metro.config.js
- components.json
- devDependencies
- monorepo-template — 06 Roadmap
- Software factory — agent instructions
- monorepo-template — 02 TRD (technical requirements)
- suspicious
- scripts
- monorepo-template — 05 Backend schema
- preview/package.json
- Factory slots — this repo's fill
- HARD RULES — monorepo-template
- mobile/biome.json
- rules
- scripts
- Factory references — rule lists
- monorepo-template — 01 PRD (product requirements)
- devDependencies
- mobile/tsconfig.json
- TEMPLATE_STATE
- pull_request_template.md
- Themed.tsx
- monorepo-template — 03 App flow
- check-deps.ts
- server.d.ts
- Understand Anything (project)
- landing/vercel.json
- monorepo-template
- formatter
- javascript
- web/vercel.json
- BUILD NOTES — read before assuming this builds
- Copy this template into a new product
- PROMPT — monorepo template (agent entry)
- Roadmap — monorepo-template
- vercel.json
- source
- 🚀 **Callout:** Remember that debugging is learning.
- settings.json
- Conformance — skeleton checks
- legalUrls.ts
- route.ts
- success/page.tsx
- Billing — factory split
- UNKNOWNS — do not infer
- post-commit.sh
- pre-commit.sh
- setup-git-hooks.sh
- setup-shell-logging.sh
- start-expo.sh
- postcss.config.mjs
- CLAUDE.md
- CONNECTIONS.md
- contracts/README.md
- graph/README.md
- MOBILE-ONLY-CONVEX.md
- tickets/README.md
- TEMPLATE_NOTES.md
- regenerate-graphs.sh

## God Nodes (most connected - your core abstractions)
1. `cn()` - 23 edges
2. `react-native` - 22 edges
3. `expo` - 17 edges
4. `correctness` - 17 edges
5. `compilerOptions` - 17 edges
6. `compilerOptions` - 16 edges
7. `correctness` - 16 edges
8. `Navbar()` - 16 edges
9. `scripts` - 16 edges
10. `react-native-safe-area-context` - 14 edges

## Surprising Connections (you probably didn't know these)
- `4. Layout` --references--> `Footer()`  [INFERRED]
  docs/UI-BRIEF.md → apps/web/components/Footer.tsx
- `4. Layout` --references--> `Navbar()`  [INFERRED]
  docs/UI-BRIEF.md → apps/web/components/Navbar.tsx
- `2. Flow B — web app (end user)` --references--> `PremiumGate()`  [INFERRED]
  docs/APP-FLOW.md → apps/web/components/payments/PremiumGate.tsx
- `Live intake (Week-0 §3.2)` --references--> `gh()`  [INFERRED]
  PROVIDERS.md → scripts/factory/gh-api.mjs
- `3. Components (REPO 3 Oct)` --references--> `Footer()`  [INFERRED]
  docs/UI-BRIEF.md → apps/web/components/Footer.tsx

## Import Cycles
- None detected.

## Communities (98 total, 26 thin omitted)

### Community 0 - "Navbar.tsx"
Cohesion: 0.05
Nodes (63): nextConfig, ContactPage(), metadata, RootLayout(), Footer(), DebugRow(), Navbar(), FEATURES_FREE (+55 more)

### Community 1 - "correctness"
Cohesion: 0.05
Nodes (44): noSvgWithoutTitle, noForEach, noConstantCondition, noConstAssign, noEmptyCharacterClassInRegex, noEmptyPattern, noInnerDeclarations, noInvalidConstructorSuper (+36 more)

### Community 2 - "config-guard.mjs"
Cohesion: 0.09
Nodes (31): Factory infrastructure (Week-0 §5), Live intake (Week-0 §3.2), Not in this intake (adapters stay dormant), Providers — template seam, Retired (remove, do not rotate), CONFIG_LABEL, GUARDED, GUARDED_AUTHORS (+23 more)

### Community 3 - "expo-start-windows.js"
Cohesion: 0.06
Nodes (29): args, loaderPath, path, { pathToFileURL }, proc, { spawn }, resolve(), checkFile() (+21 more)

### Community 4 - "Plan: Integrate Council AI Assistant into Mobile Template"
Cohesion: 0.05
Nodes (38): 1.1 Extract and Examine Source Code, 1.2 Document Component Structure, 2.1 Memory System Schema Migration, 2.2 Convert Edge Functions to Convex Actions, 2.3 AI Integration Setup, 3.1 Create Memory System Components, 3.2 Create Custom Hook, 3.3 Convert Chat Interface (+30 more)

### Community 5 - "mobile/package.json"
Cohesion: 0.05
Nodes (37): @app/backend, @biomejs/biome, class-variance-authority, clsx, convex, @convex-dev/auth, react, react-dom (+29 more)

### Community 6 - "dependencies"
Cohesion: 0.05
Nodes (38): dependencies, @app/backend, class-variance-authority, clsx, compression, convex, @convex-dev/auth, expo (+30 more)

### Community 7 - "expo"
Cohesion: 0.05
Nodes (36): backgroundColor, foregroundImage, adaptiveIcon, edgeToEdgeEnabled, backgroundColor, translucent, typedRoutes, expo (+28 more)

### Community 8 - "web/biome.json"
Cohesion: 0.06
Nodes (33): source, assist, actions, enabled, css, parser, files, ignoreUnknown (+25 more)

### Community 9 - "ref_react"
Cohesion: 0.15
Nodes (14): SignInScreen(), SignUpScreen(), PreviewModeBanner(), PreviewModeBannerProps, WebViewModal(), WebViewModalProps, rtl, styles (+6 more)

### Community 10 - "web/package.json"
Cohesion: 0.07
Nodes (28): @app/backend, @biomejs/biome, class-variance-authority, clsx, convex, @convex-dev/auth, next, react (+20 more)

### Community 11 - "scripts"
Cohesion: 0.07
Nodes (27): devDependencies, turbo, typescript, engines, node, pnpm, typescript, name (+19 more)

### Community 12 - "users.ts"
Cohesion: 0.09
Nodes (21): auth, isAuthenticated, signIn, signOut, store, action, httpAction, internalAction (+13 more)

### Community 13 - "landing/package.json"
Cohesion: 0.08
Nodes (25): dependencies, next, react, react-dom, devDependencies, @types/node, @types/react, @types/react-dom (+17 more)

### Community 14 - "settings.tsx"
Cohesion: 0.14
Nodes (16): FEATURES, PaywallScreen(), AuthenticatedLayout(), DebugButton(), DebugRow(), SettingsScreen(), APP_ENV, AppEnv (+8 more)

### Community 15 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native AGENTS.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 16 - "backend/package.json"
Cohesion: 0.08
Nodes (23): dependencies, convex, @convex-dev/auth, devDependencies, typescript, exports, ./convex/_generated/api, ./convex/_generated/api.js (+15 more)

### Community 17 - "ref_convex"
Cohesion: 0.13
Nodes (11): Page2(), Page3(), PremiumGate(), PremiumGateProps, api, components, internal, DataModel (+3 more)

### Community 18 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 19 - "Mega Memory (parked on this repo)"
Cohesion: 0.10
Nodes (20): Label reminder, Mega Memory (parked on this repo), MM-00 — licence + repo location, MM-01 — paste-once MCP, MM-02 — remember / recall proof, MM-03 — template + web viewer, MM-04 — Convex hosted variant, MM-05 — Amit-Wiki ingest (+12 more)

### Community 20 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 21 - "dependencies"
Cohesion: 0.11
Nodes (18): dependencies, @app/backend, class-variance-authority, clsx, convex, @convex-dev/auth, lucide-react, next (+10 more)

### Community 22 - "README.md"
Cohesion: 0.20
Nodes (4): Vision — factory template, Home, Links, Ledger

### Community 23 - "correctness"
Cohesion: 0.12
Nodes (16): noConstantCondition, noConstAssign, noEmptyCharacterClassInRegex, noEmptyPattern, noInnerDeclarations, noInvalidConstructorSuper, noInvalidUseBeforeDeclaration, noPrecisionLoss (+8 more)

### Community 24 - "RevenueCatContext.tsx"
Cohesion: 0.21
Nodes (13): isRunningInExpoGo(), mapPackageType(), PackageInfo, PREVIEW_PACKAGES, RevenueCatContext, RevenueCatContextType, RevenueCatProvider(), initialize() (+5 more)

### Community 25 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, allowJs, allowSyntheticDefaultImports, forceConsistentCasingInFileNames, isolatedModules, jsx, lib, module (+7 more)

### Community 26 - "monorepo-template — 04 UI brief"
Cohesion: 0.12
Nodes (11): metadata, 1. Purpose of the template UI, 2. Tokens today (REPO 3 Oct, `apps/web/app/globals.css`), 4. Layout, 5. Language and direction, 6. Accessibility floor (EXTRAPOLATED), 7. What a new app changes (EXTRAPOLATED), 8. Next week (A-Oct) (+3 more)

### Community 27 - "rtl.ts"
Cohesion: 0.17
Nodes (9): APP_IS_RTL, getFlexDirection(), getTextAlign(), iconTransform, isExpoGo, needsExplicitRTL(), position, spacing (+1 more)

### Community 28 - "app/_layout.tsx"
Cohesion: 0.16
Nodes (10): convex, convexUrl, RootLayout(), secureStorage, bootstrapRTL(), getConvexUrl(), expo-constants, expo-secure-store (+2 more)

### Community 29 - "tasks"
Cohesion: 0.13
Nodes (14): dependsOn, outputs, cache, persistent, cache, dependsOn, $schema, tasks (+6 more)

### Community 30 - "metro.config.js"
Cohesion: 0.14
Nodes (9): config, { getDefaultConfig }, Module, path, { withNativeWind }, workspaceRoot, nextConfig, expo (+1 more)

### Community 31 - "components.json"
Cohesion: 0.14
Nodes (13): aliases, components, utils, rsc, $schema, style, tailwind, baseColor (+5 more)

### Community 32 - "devDependencies"
Cohesion: 0.14
Nodes (14): devDependencies, autoprefixer, @biomejs/biome, eslint, eslint-plugin-tailwind-canonical-classes, postcss, tailwindcss, @tailwindcss/postcss (+6 more)

### Community 33 - "monorepo-template — 06 Roadmap"
Cohesion: 0.15
Nodes (12): Cadence (A-Oct), Later (vague on purpose, REPO `ROADMAP.md`), monorepo-template — 06 Roadmap, Open questions, Phase 0 — Factory gates (now, A-Oct), Phase 1 — Bun switch (config lane), Phase 2 — Real CI, Phase 3 — Ready-to-deploy kit (+4 more)

### Community 34 - "Software factory — agent instructions"
Cohesion: 0.17
Nodes (12): Commands, Done means, Failing and stuck, Layout, Never — and what enforces it, Read first, every session, Report format, Rules (+4 more)

### Community 35 - "monorepo-template — 02 TRD (technical requirements)"
Cohesion: 0.17
Nodes (11): 1. Stack, 2. Repo map, 3. Services and environments, 4. Environment variable names (names only), 5. CI and guards (REPO 3 Oct), 6. Agents and models, 7. Knowledge graph, 8. Bun switch — what it touches (EXTRAPOLATED) (+3 more)

### Community 36 - "suspicious"
Cohesion: 0.18
Nodes (11): suspicious, noAsyncPromiseExecutor, noCatchAssign, noConsole, noDoubleEquals, noDuplicateObjectKeys, noMisleadingCharacterClass, noPrototypeBuiltins (+3 more)

### Community 37 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, android, check, dev, format, ios, lint, postinstall (+3 more)

### Community 38 - "monorepo-template — 05 Backend schema"
Cohesion: 0.18
Nodes (10): 1. Fixed and open, 2. Tables (REPO 3 Oct, `schema.ts`), 3. Functions (REPO 3 Oct, `users.ts`), 4. Sign-in, 5. Who sees what (target) (EXTRAPOLATED), 6. Payments data, 7. Secrets and env (names only), monorepo-template — 05 Backend schema (+2 more)

### Community 39 - "preview/package.json"
Cohesion: 0.18
Nodes (8): description, devDependencies, @playwright/test, name, private, scripts, test, @playwright/test

### Community 40 - "Factory slots — this repo's fill"
Cohesion: 0.18
Nodes (10): Code map, Code model of the week, Commands, Enforcement checklist, Factory slots — this repo's fill, Pause, Schedule, Secrets (names only, never values) (+2 more)

### Community 41 - "HARD RULES — monorepo-template"
Cohesion: 0.18
Nodes (11): 10. If a rule feels wrong, 1. Authority, 2. Package manager and layout, 3. Secrets, 4. Payments and Polar, 5. Mobile product modules, 6. Tickets, 7. Stop codes (+3 more)

### Community 42 - "mobile/biome.json"
Cohesion: 0.20
Nodes (9): files, ignoreUnknown, includes, overrides, $schema, vcs, clientKind, enabled (+1 more)

### Community 43 - "rules"
Cohesion: 0.20
Nodes (10): linter, enabled, rules, noAccumulatingSpread, performance, recommended, style, noImplicitBoolean (+2 more)

### Community 44 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, check, check:fix, dev, format, lint, start (+2 more)

### Community 45 - "Factory references — rule lists"
Cohesion: 0.20
Nodes (9): 1. Greg Isenberg × Ras Mic — "Building a Software Factory that actually works (Full Course)", 2. Corbin — "Cursor Projects Just Killed ChatGPT Codex, Claude Code", 3. Corbin — "Every AI App Builder Is Trash Except Cursor and ChatGPT Codex", 4. Theo (t3.gg) — "Did AI Kill React Native?", 5. Dave Plummer — TMOG task manager, and Amit's DAVE LOOP, 6. "agent-loop.en.srt" — The agent loop (lesson), 7. Factory kit (18 Sep) — factory-kit.zip, 8. Ras Mic's skills repo — github.com/michaelshimeles/skills (+1 more)

### Community 46 - "monorepo-template — 01 PRD (product requirements)"
Cohesion: 0.20
Nodes (9): 1. What it is, 2. Who uses it, 3. Must have, 4. Never, 5. Decisions folded in (1–3 Oct), 6. Known mismatches (not fixed in this PR), monorepo-template — 01 PRD (product requirements), Open questions (+1 more)

### Community 47 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, @biomejs/biome, chalk, react-test-renderer, tailwindcss, @types/bun, @types/react, typescript (+1 more)

### Community 48 - "mobile/tsconfig.json"
Cohesion: 0.22
Nodes (8): compilerOptions, paths, strict, strictNullChecks, exclude, extends, include, expo/tsconfig.base

### Community 49 - "TEMPLATE_STATE"
Cohesion: 0.22
Nodes (9): Apps — OmniAgent amendment (MT-03), Apps — this template (generic slots), CI, Knowledge graph, Package manager and branches, Packages, Regenerate on merge, TEMPLATE_STATE (+1 more)

### Community 50 - "pull_request_template.md"
Cohesion: 0.22
Nodes (8): Acceptance criteria, CI check names (locked), HARD_RULES checklist, Linked issue, Screenshots / recording, Stage evidence, Summary, Test plan

### Community 51 - "Themed.tsx"
Cohesion: 0.32
Nodes (6): Text(), TextProps, ThemeProps, useThemeColor(), View(), ViewProps

### Community 52 - "monorepo-template — 03 App flow"
Cohesion: 0.25
Nodes (7): 1. Flow A — make a new app (builder), 3. Flow B — mobile app (end user), 4. Sign-in flow (target, A-Oct), 5. States (placeholder copy) (EXTRAPOLATED), monorepo-template — 03 App flow, Open questions, Sources

### Community 53 - "check-deps.ts"
Cohesion: 0.38
Nodes (6): checkDependency(), CheckResult, dependencies, Dependency, main(), printResults()

### Community 54 - "server.d.ts"
Cohesion: 0.29
Nodes (5): ActionCtx, DatabaseReader, DatabaseWriter, MutationCtx, QueryCtx

### Community 55 - "Understand Anything (project)"
Cohesion: 0.33
Nodes (5): Artefact, Constraints, Regenerate (local / agent machine), Regenerate on merge, Understand Anything (project)

### Community 56 - "landing/vercel.json"
Cohesion: 0.33
Nodes (5): buildCommand, framework, installCommand, outputDirectory, $schema

### Community 57 - "monorepo-template"
Cohesion: 0.33
Nodes (6): CI check names, Day-to-day, Factory docs, monorepo-template, Queue, Use this template

### Community 58 - "formatter"
Cohesion: 0.40
Nodes (5): formatter, enabled, indentStyle, indentWidth, lineWidth

### Community 59 - "javascript"
Cohesion: 0.40
Nodes (5): quoteStyle, trailingCommas, javascript, formatter, globals

### Community 60 - "web/vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, $schema

### Community 61 - "BUILD NOTES — read before assuming this builds"
Cohesion: 0.40
Nodes (4): BUILD NOTES — read before assuming this builds, Known facts from source templates, Must-run steps, Package manager

### Community 62 - "Copy this template into a new product"
Cohesion: 0.40
Nodes (4): After bootstrap, Copy this template into a new product, Option A — GitHub template (preferred), Option B — Local folder copy

### Community 63 - "PROMPT — monorepo template (agent entry)"
Cohesion: 0.40
Nodes (4): Goal, Hard constraints, Package manager, PROMPT — monorepo template (agent entry)

### Community 64 - "Roadmap — monorepo-template"
Cohesion: 0.40
Nodes (5): P-1 — this fortnight, P-2 — first real graft, Past V1 (vague on purpose), Related product roads (not this repo), Roadmap — monorepo-template

### Community 65 - "vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, framework, installCommand, $schema

### Community 66 - "source"
Cohesion: 0.50
Nodes (4): source, assist, actions, organizeImports

### Community 67 - "🚀 **Callout:** Remember that debugging is learning."
Cohesion: 0.50
Nodes (3): 🚀 **Callout:** Remember that debugging is learning., Common Debugging Workflow, Resources

### Community 68 - "settings.json"
Cohesion: 0.50
Nodes (3): permissions, deny, $schema

### Community 69 - "Conformance — skeleton checks"
Cohesion: 0.50
Nodes (4): Conformance — skeleton checks, Locked CI check names (must match `tempo-rhythm`), Skeleton conformance (manual / future script), Stop-codes check

### Community 73 - "Billing — factory split"
Cohesion: 0.67
Nodes (3): Billing — factory split, Rules, Spend heuristics (factory, not product)

### Community 74 - "UNKNOWNS — do not infer"
Cohesion: 0.67
Nodes (3): Amit decisions that touch the template (Week-0 §11), Open on this repo, UNKNOWNS — do not infer

## Knowledge Gaps
- **782 isolated node(s):** `$schema`, `deny`, `metadata`, `nextConfig`, `name` (+777 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 858 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **26 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Providers — template seam` connect `config-guard.mjs` to `README.md`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **What connects `$schema`, `deny`, `metadata` to the rest of the system?**
  _782 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Navbar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05039193729003359 - nodes in this community are weakly interconnected._
- **Should `correctness` be split into smaller, more focused modules?**
  _Cohesion score 0.045454545454545456 - nodes in this community are weakly interconnected._
- **Should `config-guard.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.08879492600422834 - nodes in this community are weakly interconnected._
- **Should `expo-start-windows.js` be split into smaller, more focused modules?**
  _Cohesion score 0.06097560975609756 - nodes in this community are weakly interconnected._
- **Should `Plan: Integrate Council AI Assistant into Mobile Template` be split into smaller, more focused modules?**
  _Cohesion score 0.05128205128205128 - nodes in this community are weakly interconnected._