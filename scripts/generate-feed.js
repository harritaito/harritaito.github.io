const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const rootDir = path.join(__dirname, "..");
const outDir = path.join(rootDir, "out");
const cnameSourcePath = path.join(rootDir, "CNAME");
const articlesDir = path.join(rootDir, "content", "articles");
const feedPath = path.join(outDir, "feed.xml");

function relativePath(filePath) {
  return path.relative(rootDir, filePath);
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

if (!fs.existsSync(outDir) || !fs.statSync(outDir).isDirectory()) {
  fail(
    `Cannot create ${relativePath(feedPath)} because ${relativePath(outDir)} does not exist. Did the static export run?`,
  );
}

if (!fs.existsSync(cnameSourcePath)) {
  fail(
    `Cannot create ${relativePath(feedPath)} because ${relativePath(cnameSourcePath)} is missing.`,
  );
}

const domain = fs.readFileSync(cnameSourcePath, "utf8").trim();

if (!domain) {
  fail(
    `Cannot create ${relativePath(feedPath)} because ${relativePath(cnameSourcePath)} is empty.`,
  );
}

const siteUrl = `https://${domain}`;

// Public articles only — protected articles in content/private must never appear
// in the feed. Mirrors the public-only, non-draft filter in lib/articles.js.
function publicArticles() {
  if (!fs.existsSync(articlesDir)) {
    return [];
  }
  return fs
    .readdirSync(articlesDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { data } = matter(fs.readFileSync(path.join(articlesDir, file), "utf8"));
      if (data.date instanceof Date) {
        data.date = data.date.toISOString().slice(0, 10);
      }
      return { slug, frontmatter: data };
    })
    .filter((article) => !article.frontmatter.draft)
    .sort((a, b) => String(b.frontmatter.date).localeCompare(String(a.frontmatter.date)));
}

function toItem(article) {
  const link = `${siteUrl}/writing/${article.slug}`;
  const { title, summary, date } = article.frontmatter;
  const pubDate = date ? new Date(date).toUTCString() : null;
  return [
    "    <item>",
    `      <title>${escapeXml(title || article.slug)}</title>`,
    `      <link>${escapeXml(link)}</link>`,
    `      <guid isPermaLink="true">${escapeXml(link)}</guid>`,
    pubDate ? `      <pubDate>${pubDate}</pubDate>` : null,
    summary ? `      <description>${escapeXml(summary)}</description>` : null,
    "    </item>",
  ]
    .filter(Boolean)
    .join("\n");
}

const articles = publicArticles();

const feed = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<rss version="2.0">',
  "  <channel>",
  "    <title>Harri Halonen — Writing</title>",
  `    <link>${siteUrl}/writing</link>`,
  "    <description>Research notes and longer-form pieces.</description>",
  `    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
  ...articles.map(toItem),
  "  </channel>",
  "</rss>",
  "",
].join("\n");

try {
  fs.writeFileSync(feedPath, feed);
  console.log(`Wrote ${relativePath(feedPath)} with ${articles.length} item(s).`);
} catch (error) {
  fail(`Failed to create ${relativePath(feedPath)}: ${error.message}`);
}
