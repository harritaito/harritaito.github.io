# Branch Cleanup Audit

Date: 2026-05-20

Scope:
- Current branch truth was checked against `origin/master` after fetching the latest remote refs.
- Goal was to land only proven value on `master`, then separate safe local deletions from remote deletions that still need manual confirmation.

Verification:
- `npm test`
- `npm run build`

Result:
- `origin/master` had already absorbed the approved `agents` and `agents-md` work, plus newer follow-up fixes, so replaying the old local promotion commits would have reintroduced stale README and `package.json` drift.
- The only durable value worth carrying forward from the earlier recovery pass is this updated audit record.

## Master Status

- Base for promotion: `origin/master` at fetch time on 2026-05-20
- Local backup kept: `backup/master-local-promote-2026-05-20`
- Promotion branch: `master-sync-2026-05-20`

## Local Branch Decisions

Safe to delete now:
- `agents`
- `cherry-codex`
- `codex/fix-npm-vulnerabilities`

Merged but not deleted automatically:
- `agents-md`
  Reason: fully merged, but still checked out in `/home/harri/Develop/harritaito.github.io`

Keep for manual follow-up:
- `audit/branch-truth-map-2026-05-20`
  Reason: branch-audit worktree still exists and can be removed after this report is no longer needed.
- `integration/branch-recovery-2026-05`
  Reason: not merged; keep only if you still want the historical replay branch. Otherwise archive or delete after review.
- `codex/identify-changes-for-local-setup`
  Reason: not merged; keep only if you still plan to review that remaining unique commit.

## Remote Branches To Delete After Manual Confirmation

Fully merged into `origin/master`:
- `origin/agents`
- `origin/agents-md`
- `origin/bkcf3o-codex/modernize-portfolio-website`
- `origin/cherry-codex`
- `origin/codex/evaluate-and-fix-mobile-view-images`
- `origin/codex/fix-implementation-of-progress-component`
- `origin/codex/fix-npm-vulnerabilities`

Not proposed for deletion automatically:
- `origin/ac3vky-codex/modernize-portfolio-website`
- `origin/codex/check-project-health`
- `origin/codex/check-project-health-bnbj4j`
- `origin/codex/find-and-fix-important-bug`
- `origin/codex/identify-changes-for-local-setup`
- `origin/codex/modernize-portfolio-website`
- `origin/codex/refactor-code-for-modern-dependencies`
- `origin/codex/review-old-pull-requests`
- `origin/gh-pages`
- `origin/jt7iz3-codex/modernize-portfolio-website`
- `origin/kh9ee5-codex/find-and-fix-important-bug`
- `origin/kvcjxn-codex/identify-changes-for-local-setup`
- `origin/llpglt-codex/modernize-portfolio-website`
- `origin/ryiedi-codex/find-and-fix-important-bug`

## Safe Delete Commands

Delete merged local branches now:

```bash
git branch -d agents cherry-codex codex/fix-npm-vulnerabilities
```

Delete `agents-md` after its worktree is no longer needed:

```bash
git -C /home/harri/Develop/harritaito.github.io switch master
git worktree remove /home/harri/Develop/harritaito.github.io
git branch -d agents-md
```

Delete merged remote branches after manual confirmation:

```bash
git push origin --delete agents agents-md bkcf3o-codex/modernize-portfolio-website cherry-codex codex/evaluate-and-fix-mobile-view-images codex/fix-implementation-of-progress-component codex/fix-npm-vulnerabilities
```
