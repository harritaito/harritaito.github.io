# harritaito.github.io

Source repo for Harri Halonen's personal portfolio site. App built with [Next.js](https://nextjs.org/), exported as static HTML for GitHub Pages. Site focuses on selected design and development case studies, personal profile, contact paths.

## Stack

- Next.js 15
- React 18
- Styled JSX
- Jest for component tests
- Static export to `out/`

## Prerequisites

- Node.js 18 or newer
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
2. ensures `out/.nojekyll` exists for GitHub Pages

Build refreshes generated files under `out/`.

## Design System Notes

Current design direction lives in `PRODUCT.md` and `DESIGN.md`. Before changing UI, read both.

Current shared design primitives include:

- token file: `components/design-system/tokens.js`
- underline highlight primitive: `components/design-system/HighlightUnderline.js`

If visual pattern repeated 3+ times, prefer extraction into shared component or token instead of new hard-coded values.

## Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds the site and publishes the `out/` directory to the `gh-pages` branch. Configure GitHub Pages to serve from that branch so the published site always matches the latest static build.
