import path from "path";

import { assertUniqueArticleSlugs } from "../../lib/articles";

const collisionSlug = "__article-integrity-collision__";
const publicPath = path.join(process.cwd(), "content", "articles", `${collisionSlug}.md`);
const protectedDirectory = path.join(process.cwd(), "content", "private");
const protectedPath = path.join(protectedDirectory, `${collisionSlug}.md`);

test("rejects duplicate public and protected article slugs with both paths", () => {
  expect(() => assertUniqueArticleSlugs([collisionSlug], [collisionSlug])).toThrow(publicPath);
  expect(() => assertUniqueArticleSlugs([collisionSlug], [collisionSlug])).toThrow(protectedPath);
});
