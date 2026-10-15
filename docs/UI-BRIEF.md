# monorepo-template — 04 UI brief

> **TL;DR**
> - The template ships a neutral, plain look. Each new app swaps the tokens.
> - Web: Tailwind v4 `@theme` tokens (zinc greys), light + dark from the system setting, shadcn-style parts.
> - Mobile: Expo screens for sign-in, signed-in tabs, settings, paywall.
> - Text is Hebrew and right-to-left in several places today. Language and direction per app: needs a rule.
> - UX/UI polish is next week's work. Taby is a named reference. (A-Oct)

Version: 3 Oct 2026. Marks: see `01-PRD.md`.

## 1. Purpose of the template UI

1. Give every new app a working, plain shell on day one. (AMIT 3 Oct)
2. Make it easy to swap colours, font and copy in 1–2 edits (one token file per app) (EXTRAPOLATED).
3. Never block a Bolt-made screen from dropping in (EXTRAPOLATED).

## 2. Tokens today (REPO 3 Oct, `apps/web/app/globals.css`)

| Token | Light | Dark |
|---|---|---|
| background / foreground | `#ffffff` / `#09090b` | `#09090b` / `#fafafa` |
| primary / primary-foreground | `#18181b` / `#fafafa` | `#fafafa` / `#18181b` |
| secondary, muted, accent | `#f4f4f5` | `#27272a` |
| muted-foreground | `#71717a` | `#a1a1aa` |
| destructive | `#ef4444` | `#7f1d1d` |
| border, input | `#e4e4e7` | `#27272a` |
| ring | `#09090b` | `#d4d4d8` |
| radius lg / md / sm | `0.5rem` / −2px / −4px | same |
| font | Arial, Helvetica, sans-serif | same |

Dark mode follows `prefers-color-scheme`. No manual toggle (REPO).
Mobile tokens: not read for this doc. UNKNOWN. Mobile ships `SpaceMono-Regular.ttf` (REPO).

## 3. Components (REPO 3 Oct)

| Web component | Role |
|---|---|
| `components/ui/button`, `card`, `dialog`, `input`, `label` | shadcn-style primitives (`components.json` present) |
| `Navbar` | Top bar, opens sign-in and sign-up |
| `Footer` | Links, likely to legal pages (EXTRAPOLATED) |
| `SignInModal`, `SignUpModal` | Auth in a dialog |
| `payments/PaywallModal`, `payments/PremiumGate` | Paid-feature gate |
| `providers/providers` | Convex and app providers (EXTRAPOLATED) |

Add more shadcn primitives only from a ticket (rule, matches `HARD_RULES.md` spirit) (EXTRAPOLATED).

## 4. Layout

**Web.**
1. Top `Navbar`, page body, `Footer`.
2. Legal pages: centred column, max width 4xl.
3. Sign-in and sign-up: modals, not pages.

**Mobile.**
1. `(auth)` stack: welcome, sign-in, sign-up, paywall.
2. `(authenticated)` group: home, page1, page2, settings. Tabs or stack: UNKNOWN (layout file not read).

## 5. Language and direction

1. Privacy and Terms pages are Hebrew only today. Text aligns right (RTL) (from Hebrew text and `mr-6` list margin) (EXTRAPOLATED).
2. Code comments are Hebrew in many files.
3. Weekend decision for Tempo and OmniAgent: legal pages in English AND Hebrew, Hebrew reads right to left. (A-Oct)
4. For the template: ship both languages, with `dir="rtl"` on Hebrew pages (EXTRAPOLATED).

## 6. Accessibility floor (EXTRAPOLATED)

Amit is dyslexic. Templates should help, not fight that.

1. Short labels. One idea per line.
2. Left-aligned in English, right-aligned in Hebrew. Never justified.
3. No all-caps body text.
4. Touch targets at least 44px.
5. WCAG AA contrast. Visible focus ring (the `ring` token exists).
6. Every status has a word, not only a colour.
7. Font: Arial today. A more readable default (for example Atkinson Hyperlegible) is a question for Amit, not a change here.

## 7. What a new app changes (EXTRAPOLATED)

| Change | Where |
|---|---|
| Colours, radius | `apps/web/app/globals.css` `@theme` |
| Font | `globals.css` body + `apps/mobile/assets/fonts` |
| App name, links, prices | `apps/web/config/appConfig.ts`, `planDisplay.ts`, `polarConfig.ts` |
| Legal contact | Privacy + Terms pages (today: `support@example.com` placeholder) |
| Mobile legal URLs | `EXPO_PUBLIC_PRIVACY_POLICY_URL`, `EXPO_PUBLIC_TERMS_OF_SERVICE_URL` |

## 8. Next week (A-Oct)

- Animations, one ticket per component family (Tempo first).
- A chat button inspired by Taby (Tempo). Whether the template gets it too: UNKNOWN.
- Avatar in the top header (Tempo).

## Open questions

1. Default language for the template: English, Hebrew, or both?
2. Font: keep Arial, or a dyslexia-friendly default?
3. Should the template carry the Taby-style chat button?
4. Mobile tokens: one shared token file with web?

## Sources

- Repo `integration` 3 Oct: `apps/web/app/globals.css`, `apps/web/components/**`, `apps/web/components.json`, `apps/web/app/privacy/page.tsx`, `apps/mobile/app/**`, `apps/mobile/assets/**`.
- Basic Memory: "Weekend factory plan 2026-10-02" (legal pages), "Weekend goals 2026-10-02" §4 (Taby, animations, avatar).
