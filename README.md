# harritaito.github.io

This repository contains the source code for Harri Halonen's personal portfolio website. The site is written with [Next.js](https://nextjs.org/) and exported to static HTML so it can be served via GitHub Pages.
This portfolio highlights design and development projects and shares background about the author.


## Prerequisites

- [Node.js](https://nodejs.org/) 12 or newer (includes `npm`)

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

## Building the static site

To generate the static output under the `out/` directory:

```bash
npm run build
npm run export
```

## Deployment

Running `npm run deploy` builds the site, exports it to `out/`, creates a `.nojekyll` file and commits the folder. The script then pushes the contents of `out/` to the `master` branch using `git subtree` so the pages are available through GitHub Pages.

