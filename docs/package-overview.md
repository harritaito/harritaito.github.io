# Package Overview

This project is a Next.js portfolio site for Harri Halonen. The package metadata highlights:

- **Scripts**
  - `dev`: Runs the Next.js development server.
  - `build`: Builds the production output and ensures GitHub Pages ignores Jekyll processing by touching `.nojekyll`.
  - `start`: Serves the production build.
  - `clearCache`: Removes the Next.js cache under `node_modules/.cache`.
  - `deploy`: Builds the site, adds the `out/` directory to git, commits, and pushes a subtree to the `master` branch for deployment.
  - `test`: Executes the Jest test suite.

- **Dependencies**
  - Core framework: `next` 15 and React 18.
  - Media utilities: `react-medium-image-zoom`, `react-responsive-carousel`, `react-image`, and `react-inlinesvg`.
  - UX enhancements: `react-headroom`, `react-modal`, `react-plx`, `react-visibility-sensor`, and `react-collapse`.
  - Visualization: `victory` for charts.
  - Font loading: `fontfaceobserver`.

- **Tooling**
  - Uses Jest with Babel for testing.
  - Includes `next-babel-minify` for optimized builds and `next-images` for static asset handling.

Overall, the configuration is tailored for a media-rich portfolio with attention to image handling, animations, and deployment to GitHub Pages.
