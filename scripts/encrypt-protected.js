// Encrypts the built HTML of protected articles with staticrypt (AES).
// Protected sources live in the gitignored content/private/ directory, so their
// plaintext never reaches the public repo. This step replaces their plaintext
// HTML in out/ with a password-gated, encrypted version before anything is
// committed or deployed.
//
// Password resolution: STATICRYPT_PASSWORD env var, else the same key in .env
// (gitignored). If protected articles exist but no password is found, the build
// FAILS — refusing to deploy protected content in the clear.

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const matter = require("gray-matter");

const rootDir = path.join(__dirname, "..");
const privateDir = path.join(rootDir, "content", "private");
const outDir = path.join(rootDir, "out");
const writingOutDir = path.join(outDir, "writing");
const nextDataDir = path.join(outDir, "_next", "data");

function relativePath(filePath) {
  return path.relative(rootDir, filePath);
}

function fail(message) {
  console.error(`encrypt-protected: ${message}`);
  process.exit(1);
}

function resolvePassword() {
  if (process.env.STATICRYPT_PASSWORD) {
    return process.env.STATICRYPT_PASSWORD;
  }
  const envPath = path.join(rootDir, ".env");
  if (fs.existsSync(envPath)) {
    const line = fs
      .readFileSync(envPath, "utf8")
      .split("\n")
      .find((l) => l.trim().startsWith("STATICRYPT_PASSWORD="));
    if (line) {
      return line.slice(line.indexOf("=") + 1).trim().replace(/^["']|["']$/g, "");
    }
  }
  return null;
}

function protectedSlugs() {
  if (!fs.existsSync(privateDir)) {
    return [];
  }
  return fs
    .readdirSync(privateDir)
    .filter((file) => file.endsWith(".md"))
    .filter((file) => {
      const { data } = matter(fs.readFileSync(path.join(privateDir, file), "utf8"));
      return !data.draft;
    })
    .map((file) => file.replace(/\.md$/, ""));
}

const slugs = protectedSlugs();

if (slugs.length === 0) {
  console.log("encrypt-protected: no protected articles, nothing to encrypt.");
  process.exit(0);
}

const password = resolvePassword();
if (!password) {
  fail(
    `${slugs.length} protected article(s) found but no password. ` +
      `Set STATICRYPT_PASSWORD in .env or the environment. Refusing to deploy protected content unencrypted.`,
  );
}

for (const slug of slugs) {
  const htmlPath = path.join(writingOutDir, `${slug}.html`);
  if (!fs.existsSync(htmlPath)) {
    fail(`expected built page missing: ${relativePath(htmlPath)}. Did the export run?`);
  }
  execFileSync(
    "npx",
    ["staticrypt", htmlPath, "--short", "-d", writingOutDir],
    { stdio: "inherit", env: { ...process.env, STATICRYPT_PASSWORD: password } },
  );
  console.log(`encrypt-protected: encrypted ${relativePath(htmlPath)}`);

  // Next emits a per-page JSON data blob for client-side navigation that
  // contains the plaintext props. Delete it so the protected body never ships
  // in the clear; soft nav then falls back to a full load of the encrypted HTML.
  if (fs.existsSync(nextDataDir)) {
    for (const buildId of fs.readdirSync(nextDataDir)) {
      const jsonPath = path.join(nextDataDir, buildId, "writing", `${slug}.json`);
      if (fs.existsSync(jsonPath)) {
        fs.rmSync(jsonPath);
        console.log(`encrypt-protected: removed plaintext data ${relativePath(jsonPath)}`);
      }
    }
  }
}
