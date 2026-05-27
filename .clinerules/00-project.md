# Project Rules

## Stack
- Use Node.js 20.9.0 or newer.
- This is a Next.js portfolio site with page routes under `pages/`.
- Shared UI lives under `components/`.
- Design-system primitives live under `components/design-system/`.
- Static assets live under `static/`.

## Workflow
- Before editing, inspect repo state with `git status --short` and `git diff --stat`.
- If the diff is large, identify the largest changed files before editing.
- Prefer small, low-churn edits over broad rewrites.
- Avoid modifying `package-lock.json` unless dependency work requires it.
- Follow Conventional Commits for commit messages.

## Generated Files
- Do not edit, stage, commit, or include generated output unless explicitly asked.
- Treat `out/**`, `.next/**`, `_next/**`, `_error/**`, `dist/**`, `build/**`,
  `coverage/**`, `.turbo/**`, `.vercel/**`, `*.map`, `*.min.js`, and `*.min.css`
  as generated.
- Root static-export HTML files are generated. Treat `pages/` and `components/` as
  source of truth.
- If a build modifies generated files, leave them unstaged and report the change.

## Verification
- For source code changes, run `npm test` and `npm run build`.
- `npm run build` performs the static export and refreshes `out/`, including
  `out/.nojekyll`.
- Keep `npm run build` cross-platform; do not add OS-specific shell snippets.
