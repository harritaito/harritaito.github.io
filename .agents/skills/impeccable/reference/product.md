# Product register

## Copy and tone of voice

**Who:** Harri Halonen — product and systems designer, based in Tampere. The voice is personable and millennial: direct, occasionally dry, never corporate. Smart wit lands through brevity and honest framing, not jokes.

**The core idea:** Simply put is best — and that's not just a writing style, it's the thing Harri brings to teams. Copy should embody the same value as the work: make the complicated parts legible, then get out of the way.

**Rules:**

- Lead with a mild claim or hot take, then back it up in plain sentences. No setup paragraphs.
- No consultant vocab: "align on tradeoffs," "cross-functional," "stakeholders," "deliverables," "leverage." If you wouldn't say it to a friend who works in tech, don't write it.
- Don't pre-approve yourself for verticals or client types. If the work is good, it speaks to whoever needs it.
- Don't explain how to read your own work. If the portfolio needs a manual, fix the portfolio.
- One sentence doing the work of three is always better.
- Rhetorical questions are almost always the wrong move.
- Let the work carry the argument. Copy's job is to not get in the way.

**In practice:**

| Instead of | Write |
|---|---|
| "I help cross-functional teams align on tradeoffs" | "I work out what's actually going on, then help the team act on it" |
| "Curious about the person behind the work?" | "More about me." |
| "A small evidence map of archive, concept, and in-development work" | *(nothing — just show the work)* |
| "My work sits between discovery, IA, interaction design, and service thinking" | "Most design problems are structure problems in disguise" |



When design SERVES the product: app UIs, admin dashboards, settings panels, data tables, tools, authenticated surfaces, anything where the user is in a task.

## The product slop test

Not "would someone say AI made this." Familiarity is often a feature here. The test is: would a user fluent in the category's best tools (Linear, Figma, Notion, Raycast, Stripe come to mind) sit down and trust this interface, or pause at every subtly-off component?

Product UI's failure mode isn't flatness, it's strangeness without purpose: over-decorated buttons, mismatched form controls, gratuitous motion, display fonts where labels should be, invented affordances for standard tasks. The bar is earned familiarity. The tool should disappear into the task.

## Typography

- **System fonts are legitimate.** `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif` gives you native feel on every platform. Inter is the common cross-platform default for a reason.
- **One family is often right.** Product UIs don't need display/body pairing. A well-tuned sans carries headings, buttons, labels, body, data.
- **Fixed rem scale, not fluid.** Clamp-sized headings don't serve product UI. Users view at consistent DPI, and a fluid h1 that shrinks in a sidebar looks worse, not better.
- **Tighter scale ratio.** 1.125–1.2 between steps is typical. More type elements here than on brand surfaces; exaggerated contrast creates noise.
- **Line length still applies for prose** (65–75ch). Data and compact UI can run denser; tables at 120ch+ are fine.

## Color

Product defaults to Restrained. A single surface can earn Committed (a dashboard where one category color carries a report, an onboarding flow with a drenched welcome screen), but Restrained is the floor.

- State-rich semantic vocabulary: hover, focus, active, disabled, selected, loading, error, warning, success, info. Standardize these.
- Accent color used for primary actions, current selection, and state indicators only, not decoration.
- A second neutral layer for sidebars, toolbars, and panels (slightly cooler or warmer than the content surface).

## Layout

- Predictable grids. Consistency IS an affordance; users navigate faster when the structure is expected.
- Familiar patterns are features. Standard navigation (top bar, side nav), breadcrumbs, tabs, and form layouts have established user expectations. Don't reinvent for flavor.
- Responsive behavior is structural (collapse sidebar, responsive table, breakpoint-driven columns), not fluid typography.

## Components

Every interactive component has: default, hover, focus, active, disabled, loading, error. Don't ship with half of these.

- Skeleton states for loading, not spinners in the middle of content.
- Empty states that teach the interface, not "nothing here."
- Consistent affordances across the surface. Same button shape. Same form-control vocabulary. Same icon style.

## Motion

- 150–250 ms on most transitions. Users are in flow; don't make them wait for choreography.
- Motion conveys state, not decoration. State change, feedback, loading, reveal: nothing else.
- No orchestrated page-load sequences. Product loads into a task; users don't want to watch it load.

## Product bans (on top of the shared absolute bans)

- Decorative motion that doesn't convey state.
- Inconsistent component vocabulary across screens. If the "save" button looks different in two places, one is wrong.
- Display fonts in UI labels, buttons, data.
- Reinventing standard affordances for flavor (custom scrollbars, weird form controls, non-standard modals).
- Heavy color or full-saturation accents on inactive states.

## Product permissions

Product can afford things brand surfaces can't.

- System fonts and familiar sans defaults (Inter, SF Pro, system-ui stacks).
- Standard navigation patterns: top bar + side nav, breadcrumbs, tabs, command palettes.
- Density. Tables with many rows, panels with many labels, dense information when users need it.
- Consistency over surprise. The same visual vocabulary screen to screen is a virtue; delight is saved for moments, not pages.
