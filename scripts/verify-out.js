const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "..");
const outDir = path.join(rootDir, "out");
const cnameSourcePath = path.join(rootDir, "CNAME");
const cnameOutputPath = path.join(outDir, "CNAME");

const requiredFiles = [
  "index.html",
  "404.html",
  "about.html",
  "projects.html",
  "writing.html",
  ".nojekyll",
  "CNAME",
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

if (failures.length > 0) {
  console.error("Static export verification failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Static export verification passed.");
