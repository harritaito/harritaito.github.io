import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  {
    ignores: ["node_modules/**", ".next/**", "out/**"],
  },
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Prose-heavy JSX: straight quotes and apostrophes in copy are intentional.
      "react/no-unescaped-entities": "off",
      // Anonymous components come from jest.mock factories and small wrappers.
      "react/display-name": "off",
      // Static export with images.unoptimized — plain <img> is the intended element.
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
