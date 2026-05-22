# harritaito.github.io

Source repo for Harri Halonen's personal portfolio site. App built with [Next.js](https://nextjs.org/), exported as static HTML for GitHub Pages. Site focuses on selected design and development case studies, personal profile, contact paths.
This repository contains the source code for Harri Halonen's personal portfolio website. The site is written with [Next.js](https://nextjs.org/) and exported to static HTML so it can be served via GitHub Pages.
This portfolio highlights design and development projects and shares background about the author. The site now includes a dedicated Projects page, a simple contact form for reaching out, and automatic dark mode styling.

## Stack

- Next.js 15
- React 18
- Styled JSX
- Jest for component tests
- Static export to `out/`

## Prerequisites

- Node.js 20.9.0 or newer
- npm

## Repo Structure

- `pages/`: route-level source pages
- `components/`: shared UI components
- `components/design-system/`: extracted shared tokens and reusable design primitives
- `static/`: source media and static assets
- `out/`: generated static export output
- `PRODUCT.md`: product/brand context for agents and contributors
- `DESIGN.md`: current visual system and design rules

Generated HTML also exists at repo root from prior exports. Treat `pages/` and `components/` as source of truth.

## Local Development

Install deps and start dev server:

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`.

## Testing

Run Jest:

```bash
npm test
```

Tests live in `components/__tests__/`. Test setup lives in `test-setup.js`.

Tests execute in a lightweight Node environment defined in `test-setup.js` so
`jest-environment-jsdom` is not required.

## Build

Generate static export:

```bash
npm run build
```

Build does 2 things:

1. runs `next build`
2. ensures `out/.nojekyll` and `out/CNAME` exist for GitHub Pages

Build refreshes generated files under `out/`.

Verify the generated export without publishing it:

```bash
npm run verify:out
```

## Design System Notes

Current design direction lives in `PRODUCT.md` and `DESIGN.md`. Before changing UI, read both.

Current shared design primitives include:

- token file: `components/design-system/tokens.js`
- underline highlight primitive: `components/design-system/HighlightUnderline.js`

If visual pattern repeated 3+ times, prefer extraction into shared component or token instead of new hard-coded values.

## Deployment

GitHub Pages respects the `.nojekyll` marker in the published output. Keeping that file prevents Pages from stripping the `_next` directory that holds the statically exported JavaScript assets, so the published site continues to load styles and scripts correctly. The build also copies the root `CNAME` value into `out/CNAME` so branch-based Pages publishing keeps the custom domain.

### Publishing with GitHub Actions

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds the site and publishes the `out/` directory to the `gh-pages` branch. Configure GitHub Pages to serve from that branch so the published site always matches the latest static build.

1. Push your changes to the `master` branch.
2. GitHub Actions will run the `deploy` workflow automatically and update the `gh-pages` branch with the latest static export.
3. Confirm the deployment succeeded by checking the workflow run and visiting the configured Pages URL once it completes.

Because GitHub Pages serves files exactly as they exist in the published branch, avoid deleting `.nojekyll` or the `CNAME` marker when updating the `gh-pages` branch—both files are required for the production site to resolve correctly.

### Publishing manually

If you need to publish without waiting for CI, verify the static export locally and push it yourself.

1. Run a production build and inspect the generated HTML under `out/`:

   ```bash
   npm run build
   npm run verify:out
   ```

2. When you are satisfied with the build output and intentionally want to use the old subtree path, publish the contents of `out/` to GitHub Pages from your workstation:

   ```bash
   npm run publish:legacy
   ```

The `publish:legacy` command keeps the old git subtree deployment available for emergencies. Prefer the GitHub Actions workflow for normal publishing so generated `out/` files stay out of implementation commits.
