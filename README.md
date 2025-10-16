# harritaito.github.io

This repository contains the source code for Harri Halonen's personal portfolio website. The site is written with [Next.js](https://nextjs.org/) and exported to static HTML so it can be served via GitHub Pages.
This portfolio highlights design and development projects and shares background about the author. The site now includes a dedicated Projects page, a simple contact form for reaching out, and a dark mode toggle so visitors can choose light or dark styling.


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

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds the site and publishes the `out/` directory to the `gh-pages` branch. Configure GitHub Pages to serve from that branch so the published site always matches the latest static build.

To verify the static export before publishing, run the build locally and inspect the HTML under `out/`:

```bash
npm run build
```

When you are satisfied with the build output you can publish the contents of `out/` to GitHub Pages directly from your workstation:

```bash
npm run publish
```

The `publish` command keeps the `deploy` workflow's git subtree deployment for backwards compatibility while making it easy to separate the build and publishing steps when working locally.
