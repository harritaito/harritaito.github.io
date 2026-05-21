# AGENTS.md

These instructions apply to the entire repository.

## Stack

- Use Node.js 18 or newer.
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

