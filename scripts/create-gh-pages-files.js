const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "..");
const outDir = path.join(rootDir, "out");
const cnameSourcePath = path.join(rootDir, "CNAME");
const noJekyllPath = path.join(outDir, ".nojekyll");
const cnameOutputPath = path.join(outDir, "CNAME");

function relativePath(filePath) {
  return path.relative(rootDir, filePath);
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

if (!fs.existsSync(outDir)) {
  fail(
    `Cannot create GitHub Pages files because ${relativePath(outDir)} does not exist. Did the static export run?`,
  );
}

if (!fs.statSync(outDir).isDirectory()) {
  fail(`Cannot create GitHub Pages files because ${relativePath(outDir)} is not a directory.`);
}

if (!fs.existsSync(cnameSourcePath)) {
  fail(`Cannot create ${relativePath(cnameOutputPath)} because ${relativePath(cnameSourcePath)} is missing.`);
}

const domain = fs.readFileSync(cnameSourcePath, "utf8").trim();

if (!domain) {
  fail(`Cannot create ${relativePath(cnameOutputPath)} because ${relativePath(cnameSourcePath)} is empty.`);
}

try {
  fs.writeFileSync(noJekyllPath, "");
  fs.writeFileSync(cnameOutputPath, `${domain}\n`);
  console.log(`Ensured ${relativePath(noJekyllPath)} and ${relativePath(cnameOutputPath)} exist.`);
} catch (error) {
  fail(`Failed to create GitHub Pages files: ${error.message}`);
}
