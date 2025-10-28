# harritaito.github.io

This repository contains the source code for Harri Halonen's personal portfolio website. The site is written with [Next.js](https://nextjs.org/) and exported to static HTML so it can be served via GitHub Pages.
This portfolio highlights design and development projects and shares background about the author. The site now includes a dedicated Projects page, a simple contact form for reaching out, and automatic dark mode styling.


## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (includes `npm`)

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

If you are running Node 20 or newer the Next.js build may otherwise fail with an
OpenSSL error. The npm scripts already set `NODE_OPTIONS=--openssl-legacy-provider`
so no additional configuration is required.

## Building the static site

To generate the static output under the `out/` directory:

```bash
npm run build
```

## Testing

Run the unit tests with Jest:

```bash
npm test
```

Tests execute in a lightweight Node environment defined in `test-setup.js` so
`jest-environment-jsdom` is not required.

## Deployment

GitHub Pages respects the `.nojekyll` marker in the repository root. Keeping that file prevents Pages from stripping the `_next` directory that holds the statically exported JavaScript assets, so the published site continues to load styles and scripts correctly.

### Publishing with GitHub Actions

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds the site and publishes the `out/` directory to the `gh-pages` branch. Configure GitHub Pages to serve from that branch so the published site always matches the latest static build.

1. Push your changes to the `main` branch.
2. GitHub Actions will run the `deploy` workflow automatically and update the `gh-pages` branch with the latest static export.
3. Confirm the deployment succeeded by checking the workflow run and visiting the configured Pages URL once it completes.

Because GitHub Pages serves files exactly as they exist in the published branch, avoid deleting `.nojekyll` or the `CNAME` marker when updating the `gh-pages` branch—both files are required for the production site to resolve correctly.

### Publishing manually

If you need to publish without waiting for CI, verify the static export locally and push it yourself.

1. Run a production build and inspect the generated HTML under `out/`:

   ```bash
   npm run build
   ```

2. When you are satisfied with the build output, publish the contents of `out/` to GitHub Pages from your workstation:

   ```bash
   npm run publish
   ```

The `publish` command keeps the `deploy` workflow's git subtree deployment for backwards compatibility while making it easy to separate the build and publishing steps when working locally. Make sure you have permission to push to the `gh-pages` branch before running it.
