# AGENTS.md

These instructions apply to the entire repository.

## Stack

- Use Node.js 20.9.0 or newer.
- App is Next.js portfolio site with page routes under `pages/`.
- Shared UI lives under `components/`.
- Extracted design-system primitives live under `components/design-system/`.
- Static assets live under `static/`.
- Static export output lives under `out/`.

## Design Context

- Read `PRODUCT.md` before making UX, copy, or layout decisions.
- Read `DESIGN.md` before changing colors, type, spacing, elevation, or component styling.
- Reuse existing tokens and primitives from `components/design-system/` before adding new hard-coded values.
- Keep portfolio feel aligned with current design direction: light paper background, Trirong + Rubik typography, selective project accent colors, soft shadows, restrained motion.

## Working Rules

- Prefer small, low-churn edits over broad rewrites.
- When a visual pattern is repeated 3+ times, extract into `components/design-system/` or an existing shared component instead of duplicating it again.
- Avoid modifying `package-lock.json` unless dependency work requires it.
- If you change source UI code, do not hand-edit `out/`; regenerate via build.

## Verification

- After making code changes, run:
  ```bash
  npm test
  npm run build
  ```
- Ensure both commands succeed before committing.
- `npm run build` performs static export and refreshes `out/`, including `out/.nojekyll`.

## Repo Notes

- `npm run build` is cross-platform. Keep it that way; do not reintroduce Windows-only shell snippets.
- Repository contains generated static HTML at root and under `out/`. Treat `pages/` and `components/` as source of truth.
- Jest tests live under `components/__tests__/`.

## Commits

- Follow Conventional Commits for commit messages.
 

## Scope control

Before editing, inspect the repository state:

- Run `git status —short`
- Run `git diff —stat`
- If the diff is large, identify the largest changed files before editing.

## Generated files

Do not edit, stage, commit, or include generated output unless explicitly instructed.

Treat these paths as generated:

- `out/**`
- `.next/**`
- `dist/**`
- `build/**`
- `coverage/**`
- `.turbo/**`
- `.vercel/**`
- `node_modules/**`
- `*.map`
- `*.min.js`
- `*.min.css`
- generated lockfile churn not directly related to the requested change

If a build command modifies generated files, leave them unstaged and report that they changed.

## Commit and diff hygiene

Keep changes small and source-focused.

Prefer changing:

- `src/**`
- `app/**`
- `pages/**`
- `components/**`
- `public/**` only when actual static assets intentionally change
- config files only when required

Avoid mixing:

- source changes
- formatting-only changes
- dependency updates
- generated build output
- deployment artifacts

If deployment output is required, make it a separate deployment-only commit or branch, not part of the implementation diff.

## Next.js / GitHub Pages

For normal development tasks, do not commit `out/`.

`out/` is deployment output, not source code. If GitHub Pages deployment needs it, use a separate deploy workflow, deploy branch, or explicit deployment step.


Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
