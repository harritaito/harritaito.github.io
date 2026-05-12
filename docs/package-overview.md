# Package Overview

This project is a Next.js portfolio site for Harri Halonen. The package metadata
highlights:

- **Scripts**
  - `dev`: Runs the Next.js development server.
  - `build`: Builds the production output. The `postbuild` script adds `.nojekyll` so
    GitHub Pages ignores Jekyll processing.
  - `start`: Serves the production build.
  - `clearCache`: Removes the Next.js cache under `node_modules/.cache`.
  - `deploy`: Builds the site and runs `publish`.
  - `publish`: Adds the `out/` directory to git, commits it when needed, and pushes the
    subtree to the `gh-pages` branch.
  - `test`: Executes the Jest test suite.

- **Dependencies**
  - Core framework: `next` 15 and React 18.
  - Media utilities: `react-medium-image-zoom`, `react-responsive-carousel`,
    `react-image`, and `react-inlinesvg`.
  - UX enhancements: `react-headroom`, `react-modal`, `react-plx`,
    `react-visibility-sensor`, and `react-collapse`.
  - Visualization: `victory` for charts.
  - Font loading: `fontfaceobserver`.

- **Tooling**
  - Uses Jest with Babel for testing.
  - Uses `rimraf` to clear the Next.js cache before builds.

Overall, the configuration is tailored for a media-rich portfolio with animations,
charting, static export, and deployment to GitHub Pages.
