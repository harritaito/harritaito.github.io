import { execFileSync } from "child_process";
import fs from "fs";
import os from "os";
import path from "path";

const sourceScript = path.join(process.cwd(), "scripts", "encrypt-protected.js");

function createFixture(manifest) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "protected-build-"));
  fs.mkdirSync(path.join(root, "scripts"));
  fs.mkdirSync(path.join(root, "content"));
  fs.mkdirSync(path.join(root, "out"));
  fs.copyFileSync(sourceScript, path.join(root, "scripts", "encrypt-protected.js"));
  fs.writeFileSync(
    path.join(root, "content", "protected-articles.json"),
    `${JSON.stringify(manifest)}\n`,
  );
  return root;
}

function runFixture(root) {
  return execFileSync(process.execPath, [path.join(root, "scripts", "encrypt-protected.js")], {
    encoding: "utf8",
    env: { ...process.env, NODE_PATH: path.join(process.cwd(), "node_modules") },
    stdio: "pipe",
  });
}

test("writes a completion manifest when no protected articles are expected", () => {
  const root = createFixture([]);
  try {
    expect(runFixture(root)).toContain("no protected articles");
    expect(
      JSON.parse(fs.readFileSync(path.join(root, "out", ".protected-articles.json"), "utf8")),
    ).toEqual({ slugs: [] });
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("fails when an expected protected source is unavailable", () => {
  const root = createFixture(["expected-article"]);
  try {
    expect(() => runFixture(root)).toThrow(
      /expected protected source missing for: expected-article/,
    );
    expect(fs.existsSync(path.join(root, "out", ".protected-articles.json"))).toBe(false);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});
