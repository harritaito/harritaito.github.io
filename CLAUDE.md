# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this
repository.

## Project Overview

Personal portfolio site for Harri Halonen (harritaito.com). Next.js 15 + React 18 with styled-jsx,
statically exported (`output: "export"`) and published to GitHub Pages. Requires Node.js 20.9.0+.

Generic agent behavioral guidelines live in `AGENTS.md`; path-scoped rules live in `.clinerules/`.
Read `PRODUCT.md` before UX/copy/layout decisions and `DESIGN.md` before changing colors, type,
spacing, or component styling.

## Commands

```bash
npm run dev            # dev server at http://localhost:3000
npm test               # run all Jest tests
npx jest components/__tests__/Button.test.js   # run a single test file
npm test -- -t "pattern"                       # run tests matching a name
npm run lint           # ESLint
npm run format:check   # Prettier check (CI enforces this)
npm run format         # Prettier write
npm run build          # clean + next build + postbuild scripts (refreshes out/)
npm run verify:out     # sanity-check the static export in out/
npm run preview        # verify:out + serve out/ locally
```

After source changes, run `npm test` and `npm run build` and ensure both succeed before
committing.

## Architecture

### Static export pipeline

`next.config.js` sets `output: "export"` with an explicit `exportPathMap` — new top-level pages
must be added there. `npm run build` chains:

1. `prebuild`: `rimraf .next out node_modules/.cache`
2. `next build` → static HTML in `out/`
3. `postbuild` scripts, in order:
   - `scripts/encrypt-protected.js` — AES-encrypts built HTML of protected articles with
     staticrypt and deletes their plaintext `_next/data` JSON blobs. Fails the build if protected
     articles exist without `STATICRYPT_PASSWORD` (env var or gitignored `.env`; see
     `.env.example`).
   - `scripts/create-gh-pages-files.js` — writes `out/.nojekyll` and `out/CNAME` (both required
     for GitHub Pages to serve `_next/` assets and the custom domain).
   - `scripts/generate-feed.js` — RSS feed.

`scripts/verify-out.js` asserts required files/directories exist in `out/` and that `out/CNAME`
matches the root `CNAME`.

### Content / writing system

- `content/articles/` — public markdown articles with gray-matter frontmatter (`date`, `tags`,
  `draft`, optional `readingTime`).
- `content/private/` — gitignored protected articles; their plaintext never reaches the repo, only
  encrypted HTML ships (see pipeline above).
- `lib/articles.js` merges both directories, filters `draft: true`, and sorts by date;
  `pages/writing/index.js` and `pages/writing/[slug].js` render the index and articles.

### Pages and components

- `pages/` — route-level pages (case studies like `kivakaupunki.js`, `aikakone.js`, `hri-study.js`
  compose shared components such as `ProjectPage`, `ProjectSection`, `ArticleBody`).
- `components/` — shared UI; `components/design-system/tokens.js` holds shared color/radius/
  shadow/transition tokens and `HighlightUnderline.js` is the underline primitive. Reuse these
  before hard-coding values; extract a pattern into the design system once it repeats 3+ times.
- Styling is styled-jsx (`<style jsx>` blocks inside components).
- `static/` — source media assets, served at `/static/`.

### Testing

Jest runs in a plain **node** environment (not jsdom); `test-setup.js` provides minimal
`document`/`window`/`requestAnimationFrame` mocks. Tests live in `components/__tests__/` and
typically render with `react-dom/server`'s `renderToStaticMarkup` and assert on markup. styled-jsx
appends generated class names, so match classes with regex (e.g. `/class="[^"]*button-link/`)
rather than exact full-class assertions. Image/SVG imports are stubbed via `test-file-stub.js`.

## Deployment

`.github/workflows/deploy.yml` runs on push to `master`: lint → format:check → test → build →
verify:out → deploy `out/` via GitHub Actions Pages artifact. Never delete `.nojekyll` or `CNAME`
from published output.

## Conventions

- Conventional Commits for commit messages.
- Never edit, stage, or commit generated output: `out/**`, `.next/**`, root-level exported HTML,
  `coverage/**`, etc. `pages/` and `components/` are the source of truth; regenerate `out/` via
  build instead of hand-editing.
- Prefer small, low-churn edits; avoid `package-lock.json` churn unless doing dependency work.
- Keep npm scripts cross-platform (no Windows-only or Unix-only shell snippets).
- Markdown docs: ATX headings, wrap at ~100 characters, relative intra-repo links.
