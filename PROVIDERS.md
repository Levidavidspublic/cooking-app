# Providers — template seam

Names only. Never values. One key per tool after 24 Aug 2026 rotation
(Convex is the documented exception: two deploy keys).

Secrets rule (Amit, 2 Oct 2026): secrets come only from the 1Password `dev`
vault, through a service account. Never print, log, echo, screenshot or paste a
value (chat, ticket, PR, commit, workflow log, report); names only. Never click
reveal/show on masked fields. Save a generated secret to 1Password `dev` before
setting it. Convex: never run `convex env list`; use
`pnpm --filter @app/backend exec convex env get <NAME>` only for non-secret
values (URLs, numbers, emails).

## Live intake (Week-0 §3.2)

| Tool | Variable name(s) | Typical fan-out |
|------|------------------|-----------------|
| DeepInfra | `DEEPINFRA_API_KEY` | Convex, Actions, Cursor Secrets |
| Deepgram | `DEEPGRAM_API_KEY` | Convex (tempo) |
| Runware | `RUNWARE_API_KEY` | Convex (omniagent, dev) |
| Hugging Face | `HF_TOKEN` | Grok Bot shell; Squad OpenCode |
| Composio | `COMPOSIO_API_KEY` | Convex (tempo) |
| Convex | `CONVEX_DEPLOY_KEY` (prod) · preview-scoped key | Vercel Production / Preview |
| Vercel | `VERCEL_TOKEN` | Grok Bot shell |
| Railway | `RAILWAY_TOKEN` (project) — vs `RAILWAY_API_TOKEN`: UNKNOWN | Grok Bot shell |
| GitHub | `DISPATCH_PAT` | Actions ×4; `gh` |
| Claude Code | `CLAUDE_CODE_OAUTH_TOKEN` | Actions ×4 **only** |
| Cursor | `CURSOR_API_KEY` | Grok Bot throwaway agent |
| Resend | `AUTH_RESEND_KEY` (Convex Auth magic link; same name as Tempo and OmniAgent) · `RESEND_FROM_EMAIL` | Convex. **Planned, not built yet:** the template has password sign-in only today; magic link comes via ticket M-AUTH |
| RevenueCat | `REVENUECAT_PUBLIC_KEY` · `REVENUECAT_SECRET_KEY` · `REVENUECAT_WEBHOOK_SECRET` | Convex; Vercel web |
| Polar | `POLAR_ACCESS_TOKEN` · `POLAR_WEBHOOK_SECRET` | Convex (tempo) |
| PostHog | `NEXT_PUBLIC_POSTHOG_KEY` · `NEXT_PUBLIC_POSTHOG_HOST` | Vercel (all web) |
| Expo | `EXPO_TOKEN` | Cursor Secrets; Actions `eas-preview.yml` |
| Venice (Squad) | `VENICE_API_KEY` — OpenCode schema name UNKNOWN | Squad OpenCode lane |
| Abliteration (Squad) | `ABLITERATION_API_KEY` — same caveat | Squad OpenCode lane |

## Factory infrastructure (Week-0 §5)

| Tool | Role | Where | Vocabulary |
|------|------|-------|------------|
| Graphify | Code → knowledge graph | Cursor plugin + `.agents/skills` | PLUGIN + SKILL |
| Understand Anything | Interactive graph (`.ua/knowledge-graph.json`) | same; artefact under `docs/` | PLUGIN |
| Scrapy | Ingest / research | Grok Bot machine; `packages/core/ingest/scrapy` (intended) | CONNECTOR |
| Wechaty | Chat layer | `packages/core/providers/chat/wechaty.ts` (intended); env `WECHATY_TOKEN` (name UNKNOWN) | CONNECTOR |
| taste-skill image-to-code | Mobbin → components | `.agents/skills` on product repos | SKILL |
| Context7 | Live vendor docs | `.cursor/mcp.json` (url only) | KNOWLEDGE BASE |

Wechaty and taste-skill are **dormant adapters** until a product ticket
opens them. Intended env-name registry: `packages/config/env.ts` (not
created yet — MT-03).

## Retired (remove, do not rotate)

`MISTRAL_API_KEY`, `OPENROUTER_API_KEY`, `TINKER_API_KEY`, `AI_API_KEY`,
`AI_PROVIDER`, `AI_MODEL`.

## Not in this intake (adapters stay dormant)

Featherless, Inception, MiniMax, Gemini, Nano-GPT, Synthetic, Together,
xAI API key, Telegram.
