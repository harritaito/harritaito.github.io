const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "..");
const outDir = path.join(rootDir, "out");
const cnameSourcePath = path.join(rootDir, "CNAME");
const cnameOutputPath = path.join(outDir, "CNAME");
const protectedManifestPath = path.join(rootDir, "content", "protected-articles.json");
const protectedOutputManifestPath = path.join(outDir, ".protected-articles.json");

const requiredFiles = [
  "index.html",
  "404.html",
  "about.html",
  "accessibility.html",
  "saavutettavuusseloste.html",
  "projects.html",
  "thesis.html",
  "writing.html",
  ".nojekyll",
  "CNAME",
  ".protected-articles.json",
];

const requiredDirectories = ["_next", "static"];
const failures = [];

function relativePath(filePath) {
  return path.relative(rootDir, filePath);
}

function assertFile(filePath) {
  if (!fs.existsSync(filePath)) {
    failures.push(`Missing file: ${relativePath(filePath)}`);
    return;
  }

  if (!fs.statSync(filePath).isFile()) {
    failures.push(`Expected a file: ${relativePath(filePath)}`);
  }
}

function assertDirectory(filePath) {
  if (!fs.existsSync(filePath)) {
    failures.push(`Missing directory: ${relativePath(filePath)}`);
    return;
  }

  if (!fs.statSync(filePath).isDirectory()) {
    failures.push(`Expected a directory: ${relativePath(filePath)}`);
  }
}

function readJson(filePath, label) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    failures.push(`Invalid ${label}: ${relativePath(filePath)} (${error.message})`);
    return null;
  }
}

assertDirectory(outDir);

for (const fileName of requiredFiles) {
  assertFile(path.join(outDir, fileName));
}

for (const directoryName of requiredDirectories) {
  assertDirectory(path.join(outDir, directoryName));
}

if (fs.existsSync(cnameSourcePath) && fs.existsSync(cnameOutputPath)) {
  const sourceDomain = fs.readFileSync(cnameSourcePath, "utf8").trim();
  const outputDomain = fs.readFileSync(cnameOutputPath, "utf8").trim();

  if (!sourceDomain) {
    failures.push(`Empty file: ${relativePath(cnameSourcePath)}`);
  }

  if (sourceDomain !== outputDomain) {
    failures.push(
      `${relativePath(cnameOutputPath)} does not match ${relativePath(cnameSourcePath)}: expected ${sourceDomain || "(empty)"}, got ${outputDomain || "(empty)"}`,
    );
  }
} else if (!fs.existsSync(cnameSourcePath)) {
  failures.push(`Missing file: ${relativePath(cnameSourcePath)}`);
}

if (fs.existsSync(protectedManifestPath) && fs.existsSync(protectedOutputManifestPath)) {
  const expectedSlugs = readJson(protectedManifestPath, "protected article manifest");
  const outputManifest = readJson(protectedOutputManifestPath, "protected export manifest");

  if (Array.isArray(expectedSlugs) && outputManifest && Array.isArray(outputManifest.slugs)) {
    const expected = [...expectedSlugs].sort();
    const actual = [...outputManifest.slugs].sort();
    if (JSON.stringify(expected) !== JSON.stringify(actual)) {
      failures.push(
        `Protected export manifest mismatch: expected ${expected.join(", ") || "(none)"}, ` +
          `got ${actual.join(", ") || "(none)"}`,
      );
    }

    for (const slug of expected) {
      assertFile(path.join(outDir, "writing", `${slug}.html`));
      const dataRoot = path.join(outDir, "_next", "data");
      if (fs.existsSync(dataRoot)) {
        for (const buildId of fs.readdirSync(dataRoot)) {
          const dataPath = path.join(dataRoot, buildId, "writing", `${slug}.json`);
          if (fs.existsSync(dataPath)) {
            failures.push(`Protected page data was not removed: ${relativePath(dataPath)}`);
          }
        }
      }
    }
  } else if (outputManifest && !Array.isArray(outputManifest.slugs)) {
    failures.push(
      `Invalid protected export manifest: ${relativePath(protectedOutputManifestPath)} ` +
        `must contain a slugs array`,
    );
  }
} else if (!fs.existsSync(protectedManifestPath)) {
  failures.push(`Missing file: ${relativePath(protectedManifestPath)}`);
}

if (failures.length > 0) {
  console.error("Static export verification failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Static export verification passed.");
