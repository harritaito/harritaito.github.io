# Branch Obsolescence Audit

Date: 2026-05-22

Base: `origin/master` at `ca9932d` (`agents scope update`)

Integration branch: `integration/branch-obsolescence-2026-05-22`

## Result

The shared UI test work was moved from the temporary `work/shared-ui-confidence-2026-05-21` branch onto this integration branch. That keeps one current review branch based on `origin/master`.

The remaining older branches were checked after `git fetch --prune`. Their durable ideas are either already present on current `master`, superseded by newer implementations, or too stale to replay without reintroducing older dependency and generated-output drift.

## Integrated Here

- `origin/work/shared-ui-confidence-2026-05-21`
  - Commit integrated: `775b68e test: strengthen shared UI coverage`
  - Reason: current, verified value from the previous detached work.

## Obsolete Local Branches

- `agents-md`
  - Status: obsolete after `origin/master` received newer agent guidance and design-system work.
  - Cleanup: switch the main checkout off this branch, then delete local and remote refs.
- `audit/branch-truth-map-2026-05-20`
  - Status: obsolete snapshot.
  - Cleanup: remove the clean audit worktree and delete the branch.
- `backup/master-local-promote-2026-05-20`
  - Status: obsolete backup of a promotion path now superseded by `origin/master`.
  - Cleanup: delete the local backup branch.
- `codex/identify-changes-for-local-setup`
  - Status: obsolete setup/test attempt from 2025; current master already has newer build/test structure.
  - Cleanup: delete the local branch.
- `integration/branch-recovery-2026-05`
  - Status: obsolete recovery branch; its durable docs/design-system outcome is already represented on current master.
  - Cleanup: remove the clean integration worktree and delete the branch.
- `work/shared-ui-confidence-2026-05-21`
  - Status: replaced by this integration branch.
  - Cleanup: delete local and remote refs after this branch is pushed.

## Obsolete Remote Branches

- `origin/agents-md`
  - Stale after current `master` agent/design-system follow-up.
- `origin/ac3vky-codex/modernize-portfolio-website`
  - Stale variant of contact/projects/theme work; current master already has contact/projects routes and theme toggle.
- `origin/codex/modernize-portfolio-website`
  - Stale variant of contact/projects work; current master already carries the newer route structure.
- `origin/jt7iz3-codex/modernize-portfolio-website`
  - Stale variant of contact/projects and home-copy work; superseded by current master.
- `origin/llpglt-codex/modernize-portfolio-website`
  - Stale modernize variant with React 19/package churn; not replayed.
- `origin/codex/check-project-health`
  - Stale dependency-health branch with large package-lock churn; not replayed.
- `origin/codex/check-project-health-bnbj4j`
  - Duplicate stale dependency-health branch; not replayed.
- `origin/codex/review-old-pull-requests`
  - Stale PR-triage documentation branch; the branch cleanup itself is now tracked here.

## Kept Branches

- `origin/master`
  - Canonical source branch.
- `origin/gh-pages`
  - Deployment branch.
- `integration/branch-obsolescence-2026-05-22`
  - Current integration branch.

## Verification Gate

Before promoting this branch:

```bash
npm test
npm run build
```
