---
name: portfolio-ui
description: Build, refine, and debug UI for Harri Halonen's Next.js portfolio. Use when changing pages, components, layout, styling, motion, design tokens, accessibility states, or visual regressions in this repository.
---

# Portfolio UI

Use this skill for source UI work in `pages/`, `components/`, `static/`, and
`components/design-system/`.

## Required Context

Before changing UI:

1. Read `PRODUCT.md` for the portfolio's audience and product purpose.
2. Read `DESIGN.md` before changing colors, type, spacing, elevation, motion, or
   component styling.
3. Inspect existing components and tests for the pattern being changed.

Do not edit generated root HTML, `out/**`, `.next/**`, or other build output.

## Design Rules

- Keep the current direction: light paper background, Trirong plus Rubik
  typography, selective project accent colors, soft shadows, and restrained
  motion.
- Reuse `components/design-system/tokens.js` and
  `components/design-system/HighlightUnderline.js` before adding hard-coded
  values or duplicated primitives.
- Accent colors belong to project stories and emphasis moments, not the whole
  page shell.
- Keep interaction cues visible and accessible; do not rely on color alone.
- Avoid generic SaaS sections, cold corporate polish, visual noise, and motion
  that competes with comprehension.

## Implementation Rules

1. Inspect repo state with `git status --short` and `git diff --stat`.
2. Keep edits small and source-focused.
3. Match existing component and styled-jsx patterns unless a local pattern is the
   source of the bug.
4. If a visual pattern appears three or more times, extract it into
   `components/design-system/` or an existing shared component.
5. Add focused Jest coverage under `components/__tests__/` for high-risk behavior
   or regressions.

## Verification

After source UI changes, run:

```bash
npm test
npm run build
```

`npm run build` refreshes generated export output. Leave generated changes
unstaged and report them separately unless the user explicitly asks for deploy
output.
