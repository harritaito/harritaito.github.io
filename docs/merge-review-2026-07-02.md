# Latest merges review — what is still open

Date: 2026-07-02
Scope: merges #71–#78 plus the direct-to-master commits that followed
(f4a0c6c capability chips, 6f201c9 product loop, b065498 hero line art,
046df1a hero email removal, 38d7196 interactive product-loop panel + Voltaire).

Verification on current master: `npm ci`, `npm test` (18 suites / 58 tests pass),
`npm run build` + `npm run verify:out` (pass).

---

## 1. Highest-impact open loops

### 1.1 The writing system ships zero articles
PR #73 invested heavily in the writing area: article template styling in
`pages/writing/[slug].js`, `lib/readingTime.js`, tests, and two plan documents.
But `content/articles/` does not exist — `/writing` renders the empty state
("No articles yet — check back soon") in production. Every later phase of both
writing plans is blocked on content existing.

Open: publish at least one public article, or stop surfacing the section until
one exists. All template polish is invisible until then.

### 1.2 No direct contact path remains on the site
PR #77 removed the contact page and form; commit 046df1a removed the hero email
link. What remains: social profile icons in the footer and a riddle on `/about`
("my first name, here at this domain"). `PRODUCT.md` names the audience as
hiring managers deciding whether to contact Harri; `TODO.md` lists "simple
contact method (form or email link)" as a must-have. The homepage funnel now
ends at "See selected work" with no conversion endpoint.

Open: restore one low-friction contact affordance (a `mailto:` on `/about`
and/or the footer). If the riddle is a deliberate anti-spam choice, an
obfuscated-but-clickable link achieves the same without the friction.

### 1.3 Reading-experience plan Phase 1 ("recommended next slice") never started
`docs/reading-experience-optimization-plan.md` ends with a five-step next slice.
None of it is implemented:

- `/writing` cards show only date/title/summary — no reading time, no tags.
- Article body width is `42rem`, not the planned `ch`-based measure.
- No test for writing-index metadata rendering.

Later phases are also open: `ArticlePage` extraction (articles still ride
`ProjectPage` plus ~200 lines of override CSS), heading anchors/TOC, related
posts (the article footer is still the generic copy the plan calls out), code
block styling, print styles, RSS/canonical. Same for
`writing-pages-indieweb-plan.md` phases 2/4/5, and the "decisions to make"
listed in both plans were never decided.

---

## 2. Regressions and defects introduced by the newest work

### 2.1 ProductLoop panel content is unreachable on mobile and for screen readers
The per-stage "What this produces" copy (the `output` field, added in 38d7196)
lives only in the side panel, which is `aria-hidden="true"` and `display: none`
below 60rem. Result: mobile users and assistive-tech users never see any of it.

### 2.2 ProductLoop keyboard interaction is broken
Each `<li>` gets `tabIndex={0}` (9 tab stops) but has no role, no action, and
`outline: none` with no replacement focus style — keyboard users tab through
nine invisible stops that do nothing they can perceive (the panel they'd drive
is aria-hidden). Either make the stages real buttons/tabs with a visible focus
state and move the output copy somewhere accessible (e.g. expandable per-stage
detail), or drop `tabIndex` and treat hover as pure enhancement with the output
copy inlined on small screens.

### 2.3 Trirong is loaded but no longer used; Rubik is loaded twice
38d7196 switched the display font to Voltaire (loaded via the css2 link in
`_document.js`), but `components/Fonts.js` — still called from `_app.js` —
injects the old `css?family=Rubik|Trirong:300,400,500,700,900` stylesheet and
runs a FontFaceObserver on Trirong. Trirong appears nowhere else in the code.
Every page downloads an unused 5-weight serif family and a duplicate Rubik.

Open: delete or rewrite `Fonts.js` (Voltaire/Rubik loading already lives in
`_document.js`); check whether the `.Trirong` class toggle is still load-bearing
anywhere before removing.

### 2.4 Orphaned CSS left by the removals
- `components/HeroFacts.js`: `.hero-facts__contact` rules survive the email
  link's removal (046df1a).
- `pages/Home.js`: `.value-list`, `.availability`, `.section-list`,
  `.section-inline-link` no longer match any markup after #77/#72; the
  `.ReactModal__Content--after-open` block uses invalid property names
  (`margintop`, `maxwidth`) — pre-existing, but now clearly dead.

### 2.5 New interactive components have no tests
`CapabilityChips` got a test; `ProductLoop` (549 lines, stateful,
IntersectionObserver) and the reworked `HeroLineArt` (scroll-driven state,
listener lifecycle) have none. The repo's convention is a rendering test per
component.

---

## 3. Metadata and SEO drift

- `public/sitemap.xml` had `/contact` removed (#77) but `/writing` was never
  added — the section the last month of work invested in is not in the sitemap.
- `components/Seo.js` has no entries for `/writing` or article routes, so they
  fall back to defaults.
- `README.md` still advertises "a simple contact form for reaching out" —
  removed in #77.

## 4. Stalled review thread: open PR #57

PR #57 (2026-06-03, security headers / image `width`/`height` / favicon.svg /
`_headers`) is the only open PR and now conflicts with master (~14 conflict
blocks); much of it was superseded (master already has the skip link, manifest,
robots, sitemap, `Seo.js`). Its sibling branch
`codex/review-html-and-accessibility-checklist` adds a checklist page on top.

Open: salvage the still-unique pieces — explicit image dimensions (CLS) and the
favicon — as a fresh small PR, then close #57 and delete both branches. Note
`.htaccess` (already on master, and in the PR) does nothing on GitHub Pages;
it is dead weight either way.

## 5. Repo hygiene

- **Committed build output is drifting.** Deploy is a fresh CI build
  (`.github/workflows/deploy.yml`), but `out/` is committed and was last
  regenerated 2026-06-22 (25354a1) — it still contains the deleted contact page
  and none of the new homepage sections. Root-level `_next/` and `_error/`
  artifacts date from May. `publish:legacy` and the `gh-pages` branch remain.
  Open: gitignore `out/`, remove the committed copies and root artifacts, drop
  `publish:legacy` and the `gh-pages` branch.
- **Merged branches not deleted**: `claude/portfolio-front-page-copy-8lmcv`,
  `codex/add-support-for-diy-project-material-shopping` (see also
  `docs/branch-audit.md`, which documents this recurring pattern).
- **TODO.md is stale**: upgrade sections 1–4 and 6–9 are done on master
  (Jest 30, React 18.3, Next 15, styled-jsx 5.1.7, peripherals at target
  versions); section 5 (React 19) is the only remaining upgrade. The redesign
  notes still list a contact method as a must-have — currently unmet.
- **`docs/diy-local-materials-planner.md`** (1,895 lines, #75) is a standalone
  product concept with no connection to the portfolio codebase; decide whether
  it belongs in this repo.
- **Test log noise**: styled-jsx's `useLayoutEffect` SSR warning fires in tests
  that use `renderToStaticMarkup` (e.g. `CapabilityChips.test.js`); harmless
  but pollutes CI output.

---

## Suggested order of attack

1. Contact path (1.2) — small change, restores the site's conversion goal.
2. ProductLoop accessibility/mobile (2.1, 2.2) — newest user-facing regression.
3. Font loading cleanup (2.3) — one-file perf win.
4. First article + sitemap/Seo entries for `/writing` (1.1, 3) — makes the
   writing investment real.
5. Reading-plan Phase 1 (1.3) — already scoped in the plan doc.
6. Decide PR #57's fate (4), then hygiene batch (5).
