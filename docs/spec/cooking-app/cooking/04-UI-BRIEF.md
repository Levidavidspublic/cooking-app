# Recipe Alchemist — UI brief

**Verdict.** The app should feel calm and warm, like a clean kitchen. The base is a quiet grey, with one warm amber accent for actions. Big type and big tap targets suit wet fingers. The role table is the centrepiece of every screen. Every component maps to a shadcn primitive, and nothing is invented that a primitive already does. The layout mirrors fully for Hebrew. It is built for readers with ADHD, autism or dyslexia, which includes several of the first testers.

## References: what to take from each
These are live Mobbin screens, checked 2026-10-15.

| Reference | What to take | What to leave |
|---|---|---|
| [Perplexity — recipe answer](https://mobbin.com/screens/81ef3310-09d3-42fa-bb58-7120a64be19b) | A recipe answer with a follow-up box pinned underneath; the model of Ask turning into a conversation. | The generic bullet styling. |
| [MacroFactor — recipe](https://mobbin.com/screens/f3c03d98-460a-4fcd-b9e6-2fde9d68fae2) | Ingredient rows with weight in grams under each name; a servings stepper; prep/cook chips. | Icons for every ingredient: too busy for sensory-sensitive users. |
| [Lifesum — instructions](https://mobbin.com/screens/53bf5e52-aa94-47eb-bc76-690e8236afd9) | Numbered steps in a card with generous spacing; nutrition as its own section below. | The big green "Track" button. |
| [Noom — directions + nutrition](https://mobbin.com/screens/1b333b48-3637-405a-9e41-98910975e098) | A serif heading for "Directions" for warmth; nutrition placed after the steps. | Ring charts: the macros line is text. |
| [Blue Apron — recipe card](https://mobbin.com/screens/2c656c75-eeb4-433a-88a8-fc3f61dff130) | Steps grouped into stages ("prepare", "cook", "assemble"). | Print-card density, which is far too dense on a phone. |

Earlier references from the Bolt spec weren't re-checked today: Paprika's ingredient table and NYT Cooking's recipe density.

## Layout
- **Phone first.** A bottom bar with three tabs: Ask, Cookbook, Household. On desktop it becomes a left rail, and Ask shows the input on one side and the result on the other.
- **Ask, top to bottom:**
  - brief box
  - eater chips
  - fidelity toggle
  - Ask button
  - result card
- **Recipe card order:** title → allergen banner → role table → risk flags → steps → macros → compromises → disclaimer → actions.
- **Cook mode.** Opened from a recipe; it is Gen 1. *(EXTRAPOLATED)* It shows one step per screen, the screen stays awake and the text is extra large.

## Tokens *(EXTRAPOLATED from your August 2025 and May 2026 brand notes)*
- **Colour:** a neutral grey scale.
  - Accent: amber (`--accent`), used only for primary actions and the active tab.
  - Danger: red, used only for the allergen refusal.
  - Success: green, used only for "worked".
  - Light and dark themes, following the system setting by default.
- **Type:**
  - A sans that supports Hebrew (Rubik or Assistant, both on Google Fonts; to be confirmed).
  - Base size 17 px; ingredient names 18 px, never cut off.
  - Line height 1.6 for body text.
- **Space:** a 4 px grid. Tap targets are at least 48 px.
- **Radius:** 12 px on cards, 8 px on controls.
- **Motion:** 150 ms fades only, and none when the user has turned on `prefers-reduced-motion`.

## Components → shadcn primitives
| Component | Primitive | Notes |
|---|---|---|
| BriefBox | Textarea + Button | rotating placeholder examples; Enter submits on desktop |
| EaterChips | ToggleGroup (multiple) | avatar initial + name; a dot shows if the eater has allergens |
| FidelityToggle | ToggleGroup (single) | "Rough" / "99% copycat" |
| AllergenBanner | Alert | neutral when passed; destructive variant on the refusal card |
| RoleTable | Table | columns: original → job → substitute; the job shown as a Badge; mirrors for right-to-left |
| RiskFlag | Alert (default) | step number + why + "watch for" |
| StepsList | ordered list in a Card | groupable into stages |
| MacrosLine | text + Tooltip | source label "USDA FoodData Central"; unknown ingredients listed |
| RecipeCard / AnswerCard | Card | actions in CardFooter |
| VersionStrip | Tabs | v1, v2…; read-only |
| OutcomeChips | ToggleGroup (single) | exactly five, each with a label and colour |
| CookLogForm | Form + Textarea + Button | |
| EaterEditor | Sheet + Form | allergen chips from a fixed list, plus "other" |
| LanguageSwitch | Select | English / עברית |
| Toasts | Sonner | "Saved as v2" |
| EmptyStates | Card + Button | one sentence and one action |

Design system lock: shadcn primitives, Tailwind v4, NativeWind on Expo. uiverse (MIT) is fine for small elements.

## Accessibility and neurodivergent-friendly rules *(EXTRAPOLATED)*
- One primary action per screen; secondary actions use quiet button styles.
- Plain words: "what it does" rather than "functional role" in the UI. The role table header is "Ingredient · Its job · Swap".
- Colour is never the only signal; every outcome and flag has a text label.
- Nothing plays, pops up or moves on its own. Loading shows text status lines, not spinner animations.
- Allergen information always appears in the same place on every card, so people learn where to look.
- Keyboard reachable; visible focus rings; screen-reader labels on the chips.
- Right-to-left: use logical properties only (`ms-*`, `me-*`, `start`, `end`); icons with a direction flip; numbers and units stay left-to-right inside Hebrew text.

## Still placeholders
- Logo and app icon: none yet.
- Illustrations for empty states: text only for now.
- Final fonts: Rubik or Assistant, to be confirmed.
- Exact amber value: chosen during the kitchen run, then frozen.

## Open questions for Amit
1. A dark "kitchen at night" default, or follow the system setting? *(EXTRAPOLATED: follow the system)*
2. Is amber right as the single accent, or do you want a brand colour?
3. Should Cook mode be pulled forward into the MVP for the dojo parents?

## Sources
- Mobbin screens linked in the table above, retrieved 2026-10-15.
- Internal: `bolt-04-recipe-converter.md` §8 visual system; Basic Memory "Recipe Converter" (the 12 August 2025 brand notes) and the May 2026 Recipe Alchemist chat ("Dark Kitchen" amber).
- Design system lock: `software-factory-doc-set` (shadcn, Tailwind v4, NativeWind).
