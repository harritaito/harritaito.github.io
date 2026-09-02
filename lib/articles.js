import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { estimateReadingTime } from "./readingTime";

// Public articles are committed to the repo. Protected articles live in a
// gitignored directory so their plaintext source never reaches the public
// GitHub repo — only their AES-encrypted HTML (see scripts/encrypt-protected.js)
// reaches the deployment artifact.
const publicDirectory = path.join(process.cwd(), "content", "articles");
const protectedDirectory = path.join(process.cwd(), "content", "private");

function directoryFor(slug) {
  const protectedPath = path.join(protectedDirectory, `${slug}.md`);
  return fs.existsSync(protectedPath) ? protectedDirectory : publicDirectory;
}

function readArticleFile(slug) {
  const dir = directoryFor(slug);
  const fileContents = fs.readFileSync(path.join(dir, `${slug}.md`), "utf8");
  const { data, content } = matter(fileContents);
  if (data.date instanceof Date) {
    data.date = data.date.toISOString().slice(0, 10);
  }
  data.protected = dir === protectedDirectory;
  return { slug, frontmatter: data, content };
}

function slugsIn(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function assertUniqueArticleSlugs(publicSlugs, protectedSlugs) {
  const collisions = publicSlugs.filter((slug) => protectedSlugs.includes(slug));
  if (collisions.length === 0) return;

  const details = collisions
    .map(
      (slug) =>
        `${path.join(publicDirectory, `${slug}.md`)} conflicts with ` +
        path.join(protectedDirectory, `${slug}.md`),
    )
    .join("\n");
  throw new Error(`Article slugs must be unique across public and protected content:\n${details}`);
}

export function getArticleSlugs() {
  const publicSlugs = slugsIn(publicDirectory);
  const protectedSlugs = slugsIn(protectedDirectory);
  assertUniqueArticleSlugs(publicSlugs, protectedSlugs);

  return [...publicSlugs, ...protectedSlugs].filter(
    (slug) => !readArticleFile(slug).frontmatter.draft,
  );
}

// Slugs whose built HTML must be encrypted at build time.
export function getProtectedSlugs() {
  return slugsIn(protectedDirectory).filter((slug) => !readArticleFile(slug).frontmatter.draft);
}

export function getArticleBySlug(slug) {
  return readArticleFile(slug);
}

export function getAllArticles() {
  return getArticleSlugs()
    .map((slug) => {
      const { frontmatter, content } = readArticleFile(slug);
      return {
        slug,
        frontmatter,
        readingTime: frontmatter.readingTime || estimateReadingTime(content),
      };
    })
    .sort((a, b) => String(b.frontmatter.date).localeCompare(String(a.frontmatter.date)));
}
