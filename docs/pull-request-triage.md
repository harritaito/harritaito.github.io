# Pull Request Triage

As of 2026-05-12, the repository has six open pull requests that predate the current
`master` tip (`0307627`). I fetched the open PR heads from GitHub and compared each head
against the current branch before making these recommendations.

## Summary

- [#21](https://github.com/harritaito/harritaito.github.io/pull/21): close. Opened
  2025-07-29 and last updated 2025-11-25. Superseded by later merged work; the
  projects page, contact page, navbar links, and static export map are already present
  on `master`.
- [#22](https://github.com/harritaito/harritaito.github.io/pull/22): close. Opened
  2025-07-29 and last updated 2025-11-25. Superseded by later merged work; it is a
  small follow-up to #21, and the useful page/link changes are already present on
  `master`.
- [#24](https://github.com/harritaito/harritaito.github.io/pull/24): close. Opened
  2025-07-29 and last updated 2025-10-16. Superseded by later merged dark-mode and
  navigation work; the current app already includes `ThemeToggle` and the modern
  navigation entries.
- [#25](https://github.com/harritaito/harritaito.github.io/pull/25): close. Opened
  2025-07-30 and last updated 2025-10-16. Do not merge because it combines
  superseded UI work with a React 19 upgrade that conflicts with the current React
  18.3.1 dependency set.
- [#28](https://github.com/harritaito/harritaito.github.io/pull/28): close after
  checking #29. Opened 2025-08-21 and last updated 2026-01-01. Mostly superseded by
  current dependency versions; its remaining useful idea is dropping unused
  image/progress packages, which is duplicated by #29.
- [#29](https://github.com/harritaito/harritaito.github.io/pull/29): review
  separately. Opened 2025-08-21 and last updated 2025-10-16. This is the only PR
  with a potentially useful remaining change: removing unused `next-images` and
  `react-reading-progress`. Validate with a fresh build before closing or replacing it.

## Details

### PRs #21, #22, #24, and #25

These pull requests were opened against a much older base commit from 2025-07-29. Their
shared changes have since been handled on `master`:

- `pages/projects.js` and `pages/contact.js` already exist.
- `components/Navbar.js` already links to Home, Projects, About, and Contact.
- `components/Navbar.js` already renders the current `ThemeToggle`.
- `next.config.js` already exports `/projects` and `/contact`.

Close these PRs rather than rebasing them. Rebasing would reintroduce stale conflicts and
would risk reverting newer copy, metadata, deployment, and mobile fixes.

### PR #25

PR #25 also attempts to move React and React DOM to 19.1.0. The current package file uses
React 18.3.1 and React DOM 18.3.1, so this should not be merged as-is. If a React 19
upgrade is still wanted, create a fresh dedicated upgrade branch instead of reviving #25.

### PRs #28 and #29

PR #28 and PR #29 both remove unused package entries for legacy image/progress tooling.
The current package already includes the main version upgrades that motivated those PRs:
Next 15.5.0 and Victory 37.3.6.

The only remaining decision is whether to remove these unused dependencies from the
current branch:

- `next-images`
- `react-reading-progress`

No application code imports either package. If the team wants the cleanup, do it in a new
small dependency PR against the current `master` and then close both #28 and #29. If the
team prefers to keep dependencies stable for now, close #28 as superseded and leave #29
with a comment explaining that its cleanup should be re-created from current `master`.

## Recommended close order

1. Close #21, #22, #24, and #25 as superseded or unsafe to merge.
2. Close #28 as superseded by current dependency versions and duplicate cleanup in #29.
3. Decide whether to recreate #29's dependency cleanup on top of current `master`.
4. Close #29 once the cleanup is either merged in a fresh PR or explicitly declined.
