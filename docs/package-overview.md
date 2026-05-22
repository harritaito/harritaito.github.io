# Package Overview

This project is a Next.js portfolio site for Harri Halonen. The package metadata highlights:

- **Scripts**
  - `dev`: Runs the Next.js development server.
  - `clean`: Removes `.next`, `out`, and `node_modules/.cache` before static export.
  - `build`: Builds the production static export and writes GitHub Pages markers into `out/`.
  - `verify:out`: Confirms the export has the expected HTML, `_next` assets, `.nojekyll`, and `CNAME`.
  - `preview` / `start`: Serves the generated `out/` directory locally.
  - `deploy`: Builds and verifies the static export without publishing generated files from the source branch.
  - `publish:legacy`: Keeps the old `git subtree` publishing path available for explicit manual recovery.
  - `test`: Executes the Jest test suite.

- **Dependencies**
  - Core framework: `next` 15 and React 18.
  - Media utilities: `react-medium-image-zoom`, `react-responsive-carousel`, `react-image`, and `react-inlinesvg`.
  - UX enhancements: `react-headroom`, `react-modal`, `react-plx`, `react-visibility-sensor`, and `react-collapse`.
  - Visualization: `victory` for charts.
  - Font loading: `fontfaceobserver`.

- **Tooling**
  - Uses Jest with Babel for testing.
  - Uses Next.js static export with unoptimized image handling for GitHub Pages compatibility.

Overall, the configuration is tailored for a media-rich portfolio with attention to image handling, animations, and verified deployment output for GitHub Pages.
