# harritaito.github.io

This repository contains the source code for Harri Halonen's personal portfolio website. The site is written with [Next.js](https://nextjs.org/) and exported to static HTML so it can be served via GitHub Pages.
This portfolio highlights design and development projects and shares background about the author.


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
npm run export
```

## Testing

Run the unit tests with Jest:

```bash
npm test
```

Tests execute in a lightweight Node environment defined in `test-setup.js` so
`jest-environment-jsdom` is not required.

## Deployment

Running `npm run deploy` builds the site, exports it to `out/`, creates a `.nojekyll` file and commits the folder. The script then pushes the contents of `out/` to the `master` branch using `git subtree` so the pages are available through GitHub Pages.

