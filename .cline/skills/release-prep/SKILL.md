---
name: release-prep
description: Prepare and automate release tasks: run tests, build, bump version, generate changelog, and create git tags. Use when preparing releases or generating changelogs.
---

# Release Preparation Skill

This skill provides structured guidance and deterministic steps for preparing a release in this repository. It pairs well with the `release-prep.md` workflow in `.clinerules/workflows/`.

## When to use
- When you're about to publish a new version
- When you need a changelog from recent commits
- When you want an automated, reviewable sequence to run tests, build, and tag

## Steps
1. Ensure working directory is clean. If uncommitted changes exist, prompt whether to stash, commit, or abort.
2. Run the full test suite: `npm run test` (or use repo scripts if different).
3. Run the build: `npm run build`.
4. Ask the user what version bump to apply (patch/minor/major/custom).
5. Update `package.json` and, if present, workspace package manifests consistently. Prefer using the bundled script at `.cline/skills/release-prep/scripts/update-versions.sh` to update all `package.json` files atomically:

   ```bash
   ./.cline/skills/release-prep/scripts/update-versions.sh 1.2.3
   ```

6. Generate a changelog entry from `git log --oneline $(git describe --tags --abbrev=0)..HEAD` and prompt the user to edit.
7. Commit changes, tag the release, and push the tag and commit.

## Tools and commands
- Tests: `npm run test` or `npm test`
- Build: `npm run build`
- Version bump: use `npm version` or update `package.json` programmatically (see script above)
- Changelog: use `git log` to collect commit messages and format an entry

## Failure handling
- If tests fail, stop and show failures. Offer options: abort, investigate, or continue with overrides.
- If build fails, stop and surface build logs.

## Notes for Cline
- Use explicit `execute_command` tool calls for steps that must run locally (tests, build, git commands).
- Require user approval before committing, tagging, or pushing.
- When updating multiple package.json files (monorepo), ensure all package versions are updated consistently and workspace tooling is respected. The included script updates all `package.json` files it finds—review the changes before committing.

## References
- See `.clinerules/workflows/release-prep.md` for a workflow that invokes these steps.
