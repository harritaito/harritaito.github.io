# Repository remediation plan

- **Date:** 2026-09-01
- **Scope:** source, content, accessibility, security, performance, testing, and deployment
- **Status:** proposed; Phase 0 remediation is in progress
Date: 2026-09-01  
Scope: source, content, accessibility, security, performance, testing, and deployment  
Status: proposed; no production behavior changed

## Progress

- 2026-09-01: `SEC-01` and `SEC-02` completed. The production dependency audit reports zero
  vulnerabilities, and `prop-types` is now declared directly. Tests, lint, build, and export
  verification pass with the patched dependency graph.
- 2026-09-01: `SEC-04`, `SEC-06`, and `SEC-07` completed. Protected exports now leave a verified
  completion manifest, expected protected sources cannot silently disappear, article slug collisions
  fail the build, and pull requests run validation without deployment permissions. `SEC-03` is
  mitigated by the fail-closed deployment gate; eliminating the intermediate plaintext directory
  remains open.

## Purpose

This audit turns repository evidence into a sequenced improvement program. It deliberately
separates confirmed defects from hypotheses that need browser or user validation. The plan favors
small vertical slices and treats [`PRODUCT.md`](../PRODUCT.md) and [`DESIGN.md`](../DESIGN.md) as
acceptance criteria.

## Baseline

- `npm test -- --runInBand`: 28 suites and 87 tests passed.
- `npm run lint`: passed.
- `npm audit --omit=dev --audit-level=moderate`: failed with five high-severity findings.
- `npm run build`: passed on the subsequent uncontested run; an earlier concurrent run was invalidated
  when another audit process cleaned the shared `.next` directory.
- The source tree was clean before the audit. Generated `out/` and `.next/` remain excluded.

## Prioritization model

- **P0:** blocks an audience from core content or creates a material security/release risk.
- **P1:** meaningfully harms trust, conversion, accessibility, or reliability.
- **P2:** measurable performance, maintainability, or consistency cost.
- **P3:** cleanup that should be bundled only with nearby work.
- **Confidence:** `confirmed` means source or a command proves the issue; `validate` means runtime,
  assistive-technology, analytics, or stakeholder evidence is still required.

## Findings

### Security and release integrity


#### SEC-01 — completed

- **Evidence and impact:** Production audit reports high-severity advisories through `next`,
  `postcss`, `sharp`, `js-yaml`, and `nanoid`; dependency ranges and the PostCSS override live in
  `package.json`.
- **Proposed correction:** Upgrade to patched compatible releases in one dependency-only change;
  document which server-only advisories are unreachable in a static deployment.
- **Verification:** `npm audit --omit=dev`; tests; serial build; inspect lock diff.

#### SEC-02 — completed

- **Evidence and impact:** `prop-types` is imported by components such as `ProjectPage`,
  `InViewport`, and `ProjectIcon` but is not declared; `npm ls prop-types --depth=0` is empty. The
  build relies on accidental transitive hoisting.
- **Proposed correction:** Add it as a direct dependency or remove all runtime use in a dedicated
  migration.
- **Verification:** Fresh `npm ci`; `npm ls`; tests; build.

#### SEC-03 — P1 (confirmed)

- **Evidence and impact:** Protected articles are emitted as plaintext before
  `scripts/encrypt-protected.js` replaces them. An interrupted or incorrectly ordered deployment can
  publish private content.
- **Proposed correction:** Produce protected output in an isolated temporary location and make
  deployment verification fail closed if encryption markers or expected files are absent.
- **Verification:** Fixture containing a unique secret; interrupt-before-encrypt test; assert deploy
  step rejects plaintext.

#### SEC-04 — completed
#### SEC-04 — P1 (confirmed)

- **Evidence and impact:** `scripts/verify-out.js` checks export structure but does not detect
  plaintext protected content or prove encryption completed.
- **Proposed correction:** Extend verification with an encryption manifest/marker and secret-canary
  scan.
- **Verification:** Integration tests for encrypted, missing, and plaintext fixtures.

#### SEC-05 — P2 (confirmed)

- **Evidence and impact:** GitHub Actions use mutable major tags in `.github/workflows/deploy.yml`.
  A compromised tag can alter deployment behavior.
- **Proposed correction:** Pin actions to commit SHAs and use Dependabot or Renovate for updates.
- **Verification:** Workflow lint; inspect resolved action SHAs; successful Pages deployment.

#### SEC-06 — completed
#### SEC-06 — P2 (confirmed)

- **Evidence and impact:** `getArticleSlugs` concatenates public and private slugs while
  `directoryFor` silently prefers private. Duplicate slugs can shadow content or create duplicate
  static paths.
- **Proposed correction:** Detect duplicates and fail with both source paths.
- **Verification:** Unit test with colliding fixtures; build must fail descriptively.

#### SEC-07 — completed
#### SEC-07 — P1 (confirmed)

- **Evidence and impact:** The deployment workflow runs on pushes to `master` and manual dispatch,
  but not pull requests. Repository-owned checks can therefore run only after merge.
- **Proposed correction:** Add a least-privilege pull-request validation job; keep Pages deployment
  conditional on `master`.
- **Verification:** Open a test PR and confirm validation runs without deployment permissions.

### Accessibility and interaction correctness


#### A11Y-01 — P0 (confirmed)

- **Evidence and impact:** `ProjectIcon` opens a modal from a click-only `span`; it has no keyboard
  semantics or accessible name.
- **Proposed correction:** Replace it with a real button while preserving layout; return focus after
  close.
- **Verification:** Keyboard and RTL tests for Enter/Space, Escape, focus entry, and focus return.

#### A11Y-02 — P0 (confirmed)

- **Evidence and impact:** Project-card and modal-close styles suppress focus outlines in
  `Project.js` and `ProjectIcon.js`.
- **Proposed correction:** Remove suppression and add high-contrast `:focus-visible` styles matching
  hover affordance.
- **Verification:** Keyboard audit in normal and forced-colors modes.

#### A11Y-03 — P0 (confirmed)

- **Evidence and impact:** `pages/_app.js` wraps whole pages in `main`, while pages place `Navbar`
  and `Footer` inside themselves. Banner, navigation, and contentinfo landmarks are therefore nested
  inside main.
- **Proposed correction:** Introduce a shared shell with header, main content, and footer as
  siblings, migrating routes incrementally.
- **Verification:** Landmark rotor/axe check: one top-level main and correctly placed landmarks.

#### A11Y-04 — P0 (confirmed)

- **Evidence and impact:** The About page begins with an `h3` and has no `h1`, despite the
  accessibility statement promising semantic headings.
- **Proposed correction:** Make “About” the `h1` and normalize following sections to `h2`/`h3`.
- **Verification:** Heading-outline test and manual screen-reader navigation.

#### A11Y-05 — P0 (confirmed)

- **Evidence and impact:** `ProjectPage` starts looping video on viewport entry; `Video` does not
  honor reduced motion or expose pause controls.
- **Proposed correction:** Disable autoplay when reduced motion is requested and provide
  discoverable controls.
- **Verification:** Emulated reduced-motion test plus keyboard/manual playback check.

#### A11Y-06 — P1 (confirmed)

- **Evidence and impact:** Video has sources and visual caption text but no programmatically
  associated transcript or caption track.
- **Proposed correction:** Inventory each video; require a descriptive transcript and add tracks
  when audio carries meaning.
- **Verification:** Screen-reader audit and track/transcript presence tests.

#### A11Y-07 — P1 (confirmed)

- **Evidence and impact:** Several links open new tabs without warning, including Home CTAs and
  project-modal links; the accessibility statement already acknowledges this limitation.
- **Proposed correction:** Prefer same-tab navigation, or add visible/screen-reader disclosure
  consistently.
- **Verification:** Source inventory and accessible-name tests for every `_blank` link.

#### A11Y-08 — P1 (confirmed)

- **Evidence and impact:** Contact copy asks visitors to infer and type an email address instead of
  providing a link, adding friction for voice, mobile, and assistive-technology users.
- **Proposed correction:** Add a human-readable `mailto:` action; use build-time obfuscation only if
  spam evidence warrants it.
- **Verification:** Keyboard/mobile activation and accessible-name tests.

#### A11Y-09 — P1 (confirmed)

- **Evidence and impact:** Navigation links do not expose the current route through `aria-current`
  or a visual active state.
- **Proposed correction:** Add route-aware current-page semantics and a non-color-only active
  treatment.
- **Verification:** Route rendering tests and visual keyboard audit.

#### A11Y-10 — P1 (confirmed)

- **Evidence and impact:** The hide-on-scroll navbar transitions without a reduced-motion override.
- **Proposed correction:** Disable transforms/transitions for reduced motion and keep focused
  navigation visible.
- **Verification:** Reduced-motion and scroll-while-focused browser tests.

#### A11Y-11 — P1 (confirmed)

- **Evidence and impact:** The navbar progress element has no accessible name and may be announced
  as an unnamed progressbar.
- **Proposed correction:** Name it “Reading progress” where meaningful, or hide it if decorative.
- **Verification:** Accessibility-tree inspection on short and long pages.

#### A11Y-12 — P1 (confirmed)

- **Evidence and impact:** `ProductLoop` makes static list items tabbable only to reproduce hover
  while its detail panel is hidden from assistive technology.
- **Proposed correction:** Make the list static, or implement genuine disclosure buttons with
  `aria-expanded` and readable panels.
- **Verification:** Tab-order count and screen-reader announcement tests.

#### A11Y-13 — P1 (confirmed)

- **Evidence and impact:** The project modal is generically named “Modal”; its close image says
  “close button” inside a button.
- **Proposed correction:** Name the dialog from its heading; label the close button and make its
  icon decorative.
- **Verification:** Dialog accessible-name snapshot and screen-reader check.

#### A11Y-14 — P1 (validate)

- **Evidence and impact:** Carousel semantics, control labels, announcements, focus, and swipe
  alternatives need runtime assessment.
- **Proposed correction:** Audit the representative project carousel and either configure it
  accessibly or replace it with a simpler gallery.
- **Verification:** NVDA/VoiceOver, keyboard, and touch test matrix.

#### A11Y-15 — P1 (validate)

- **Evidence and impact:** Thin image alternatives such as “Comment input” name screens without
  conveying the case-study evidence they contain.
- **Proposed correction:** Classify each image as decorative or informative and rewrite informative
  alternatives around purpose and insight.
- **Verification:** Editorial inventory plus screen-reader reading pass.

#### A11Y-16 — P2 (confirmed)

- **Evidence and impact:** `pages/writing/index.js` applies `overflow: hidden`, which can clip
  zoomed content and focus rings.
- **Proposed correction:** Constrain only the decorative layer or use horizontal clipping where
  needed.
- **Verification:** 200%/400% zoom and keyboard focus audit.

#### A11Y-17 — P2 (confirmed)

- **Evidence and impact:** Labels as small as `0.72rem` appear in `SpecSheet` and other primitives.
- **Proposed correction:** Establish a readable minimum label token, retaining tiny text only when
  decorative.
- **Verification:** Computed-style inventory, 200% zoom, and mobile screenshots.

#### A11Y-18 — P2 (validate)

- **Evidence and impact:** Navbar wrapping, tables, carousels, modal sizing, and two-column specs
  have no documented 320 px/400% zoom acceptance pass.
- **Proposed correction:** Add a responsive/zoom checklist and fix failures one route family at a
  time.
- **Verification:** Screenshots at 320, 375, 768, and 1366 px; 400% zoom audit.

#### A11Y-19 — P2 (confirmed)

- **Evidence and impact:** Global link styles remove outlines and depend entirely on later
  `:focus-visible` behavior.
- **Proposed correction:** Keep native outline as fallback and enhance it rather than erasing it.
- **Verification:** Forced-colors, Safari, Firefox, and Chromium keyboard checks.

#### A11Y-20 — P2 (confirmed)

- **Evidence and impact:** The About portrait alternative is only the person’s name and does not
  establish whether the image is informative or decorative.
- **Proposed correction:** Choose editorial intent: meaningful short portrait description or empty
  alt when redundant.
- **Verification:** Content review and screen-reader pass.

### UX, content, and design-system alignment


#### UX-01 — P1 (confirmed)

- **Evidence and impact:** Home does not render the shared navbar, while other routes do. Visitors
  cannot consistently discover Writing, About, Projects, or Contact.
- **Proposed correction:** Move navigation into the shared shell and expose the minimum useful
  information architecture.
- **Verification:** Desktop/mobile route screenshots and keyboard journey.

#### UX-02 — P1 (confirmed)

- **Evidence and impact:** The primary Home CTA only scrolls to work; the contact CTA prioritizes
  LinkedIn and offers neither direct email nor calendar booking, despite `PRODUCT.md`.
- **Proposed correction:** Make direct email primary, optionally add calendar, and keep LinkedIn
  secondary.
- **Verification:** CTA inventory and conversion-event validation if analytics is added.

#### UX-03 — P1 (confirmed)

- **Evidence and impact:** The Home hero uses two dense paragraphs before the work, slowing the
  rapid credibility scan the product brief requires.
- **Proposed correction:** Reduce it to one distinctive value statement and move process detail to
  “How I work.”
- **Verification:** 1366×768 first-viewport check and five-second comprehension test.

#### UX-04 — P1 (confirmed)

- **Evidence and impact:** Nine capability chips and profile facts precede work, risking the résumé
  taxonomy and credibility theater rejected by the product brief.
- **Proposed correction:** Keep three to five differentiators or move the inventory after case-study
  evidence.
- **Verification:** First-viewport content inventory and user comprehension test.

#### UX-05 — P1 (confirmed)

- **Evidence and impact:** Homepage copy discusses documentation status and whether artifacts are
  illustrative, sounding like internal caveats rather than confident visitor-facing framing.
- **Proposed correction:** Put precise disclosure beside the affected artifact and lead with visitor
  value.
- **Verification:** Editorial review against brand voice and claim-evidence audit.

#### UX-06 — P1 (confirmed)

- **Evidence and impact:** `DESIGN.md` specifies Trirong, while `_document.js` downloads and uses
  Voltaire and Home repeats that stack.
- **Proposed correction:** Decide which source is authoritative, then align font loading and
  semantic typography tokens in one change.
- **Verification:** Generated-head inspection, computed-font check, visual snapshots.

#### UX-07 — P1 (confirmed)

- **Evidence and impact:** Design-system JS tokens contain fixed light colors that shared components
  interpolate, producing inconsistent dark-theme surfaces and contrast.
- **Proposed correction:** Replace palette literals in component styles with semantic CSS custom
  properties.
- **Verification:** Axe/contrast checks and screenshots in both themes.

#### UX-08 — P1 (confirmed)

- **Evidence and impact:** The writing article route hard-codes a light gradient, white metadata
  surfaces, and black body copy.
- **Proposed correction:** Map article surfaces and text to the same semantic theme variables.
- **Verification:** Light/dark screenshots and computed contrast checks.

#### UX-09 — P2 (confirmed)

- **Evidence and impact:** Navigation exposes only Home and Writing even though About, project
  archive, and Contact are core hiring-manager tasks.
- **Proposed correction:** Test a compact four-item structure or restrained menu without turning the
  shell into SaaS navigation.
- **Verification:** First-click testing for work, about, writing, and contact.

#### UX-10 — P2 (validate)

- **Evidence and impact:** Charts and project/progress accents may communicate state through color
  alone.
- **Proposed correction:** Inventory every semantic use of color and add labels, patterns, icons, or
  text where necessary.
- **Verification:** Grayscale and screen-reader review of chart legends and progress states.

#### UX-11 — P2 (confirmed)

- **Evidence and impact:** Light-theme safe-area variables are undefined but used globally; only
  dark theme defines them.
- **Proposed correction:** Define safe-area defaults in `:root`, then override only when needed.
- **Verification:** iOS simulator/device checks for notches and anchored navigation.

#### UX-12 — P2 (confirmed)

- **Evidence and impact:** Navbar overlay uses `100vw`, which can create horizontal overflow when
  scrollbars consume viewport width.
- **Proposed correction:** Position with left/right insets or use containing-block width.
- **Verification:** Narrow viewport, zoom, and horizontal-scroll assertions.

### Runtime reliability and code health


#### REL-01 — P0 (confirmed)

- **Evidence and impact:** `ProjectPage` chooses a next project with `Math.random()` in its
  constructor, including cases where the next-project card is hidden. SSR and hydration can
  disagree.
- **Proposed correction:** Resolve next project deterministically from the archive, and skip work
  when hidden.
- **Verification:** SSR/hydration regression test with console errors treated as failures.

#### REL-02 — P1 (confirmed)

- **Evidence and impact:** `Social` and `ProjectIcon` replace body overflow with `hidden`, restore
  it to `auto`, and do not clean up on unmount. Existing styles can be corrupted and navigation can
  leave scrolling locked.
- **Proposed correction:** Save and restore the previous value in close and unmount paths,
  preferably through one modal primitive.
- **Verification:** Tests for preexisting overflow, close, Escape, and route unmount.

#### REL-03 — P1 (confirmed)

- **Evidence and impact:** `ThemeToggle` accesses local storage without guarding `SecurityError`;
  restricted storage contexts can break initialization or toggling.
- **Proposed correction:** Add a narrow safe storage helper matching the guarded document bootstrap.
- **Verification:** Tests with throwing `getItem` and `setItem`.

#### REL-04 — P1 (confirmed)

- **Evidence and impact:** `Lightbox` mirrors `open` into state but never reads that state, so its
  public API does not control rendering.
- **Proposed correction:** Confirm intended inline-versus-modal behavior, then remove dead state or
  implement actual dialog visibility.
- **Verification:** Interaction tests for open, close, Escape, and focus behavior.

#### REL-05 — P2 (confirmed)

- **Evidence and impact:** `ProjectIcon` initializes both loading-state branches to `visible` and
  passes a nonstandard `loader` prop to `img`.
- **Proposed correction:** Remove the dead API or implement real pending/loaded behavior using
  standard events.
- **Verification:** DOM-prop warning test and loading-state test.

#### REL-06 — P2 (confirmed)

- **Evidence and impact:** `_document.js` spells the font preconnect attribute `crossorigi`,
  preventing the intended cross-origin hint.
- **Proposed correction:** Use React’s `crossOrigin="anonymous"` prop.
- **Verification:** Inspect exported HTML and browser network/preconnect diagnostics.

#### REL-07 — P2 (confirmed)

- **Evidence and impact:** A timestamp build ID is appended to icon URLs, making identical builds
  differ and forcing cache misses.
- **Proposed correction:** Remove the query or use a stable content/git hash.
- **Verification:** Two clean builds produce matching icon URLs and hashes.

#### REL-08 — P2 (confirmed)

- **Evidence and impact:** `_document.js` is about 1,473 lines and several case-study pages exceed
  600 lines, combining global CSS, content, and behavior.
- **Proposed correction:** Extract only repeated styles/sections encountered during feature work;
  avoid a broad rewrite.
- **Verification:** Smaller reviewed diffs, unchanged visual snapshots, tests per extraction.

#### REL-09 — P3 (confirmed)

- **Evidence and impact:** `Social` imports inline-SVG machinery and assets while rendering
  hand-coded SVG; `Lightbox` appears referenced only in tests.
- **Proposed correction:** Remove only after a full reference/build check, and reevaluate dependency
  removal separately.
- **Verification:** `rg` reference inventory, lint, tests, build, bundle comparison.

#### REL-10 — P3 (confirmed)

- **Evidence and impact:** `ProjectIcon` wraps inline SVG in an `object` without `data` or `type`,
  adding meaningless semantics.
- **Proposed correction:** Remove the wrapper when converting the trigger to a button.
- **Verification:** DOM snapshot and accessibility-tree check.

#### REL-11 — P1 (confirmed)

- **Evidence and impact:** Article date-only strings pass through `new Date(value)` and locale
  formatting without a timezone. Clients west of UTC can display the previous date and disagree with
  static HTML.
- **Proposed correction:** Parse calendar fields directly or format consistently in UTC.
- **Verification:** Render fixtures under `TZ=UTC` and `TZ=America/Los_Angeles`; assert identical
  dates and hydration.

#### REL-12 — P1 (confirmed)

- **Evidence and impact:** Aikakone and Kivakaupunki create `react-modal` galleries without
  centrally configuring the application element. Background content may remain exposed to assistive
  technology.
- **Proposed correction:** Configure the app element once in the client shell and standardize focus
  restoration.
- **Verification:** Assert background `aria-hidden`, initial focus, Escape, and trigger focus
  return.

### Performance, SEO, and test coverage


#### PERF-01 — P1 (validate)

- **Evidence and impact:** Three.js animation, writing canvas, charting, carousel, modal, and media
  libraries may inflate route bundles; no bundle budget is enforced.
- **Proposed correction:** Record per-route JS baselines, dynamically load route-only interactive
  modules, and set regression budgets.
- **Verification:** Next build route table, bundle analyzer, Lighthouse mobile.

#### PERF-02 — P1 (confirmed)

- **Evidence and impact:** Most content images use raw `img`, and a PNG exceeds 600 KB;
  dimensions/loading/decoding strategy is inconsistent.
- **Proposed correction:** Inventory intrinsic dimensions and formats; optimize actual assets and
  set explicit dimensions plus intentional loading priority.
- **Verification:** Image byte report, CLS trace, Lighthouse; visual comparison.

#### PERF-03 — P1 (validate)

- **Evidence and impact:** Canvas/WebGL components need explicit CPU, battery, background-tab, and
  reduced-motion lifecycle checks.
- **Proposed correction:** Pause outside viewport and on hidden documents, disable for reduced
  motion, and clean up listeners/contexts.
- **Verification:** Performance trace, hidden-tab test, reduced-motion test, heap snapshot.

#### PERF-04 — P1 (validate)

- **Evidence and impact:** The site lacks browser-level smoke tests for exported navigation, assets,
  modals, theme persistence, and protected pages.
- **Proposed correction:** Add a small Playwright suite against `out/`; avoid duplicating Jest
  component assertions.
- **Verification:** CI smoke matrix over core routes and a representative case study.

#### PERF-05 — P1 (validate)

- **Evidence and impact:** There is no automated axe coverage across representative routes and both
  themes.
- **Proposed correction:** Add axe to browser smoke tests, then retain manual AT testing for
  semantics axe cannot assess.
- **Verification:** Zero serious/critical axe violations on the route/theme matrix.

#### PERF-06 — P1 (validate)

- **Evidence and impact:** SEO metadata, canonical URLs, sitemap coverage, article schema, and
  social previews need an exported-output audit.
- **Proposed correction:** Define an expected route manifest and assert title, description,
  canonical, OG/Twitter image, and structured data.
- **Verification:** Parse exported HTML and compare sitemap/robots/route manifest.

#### PERF-07 — P2 (confirmed)

- **Evidence and impact:** Current Jest coverage is broad at component-render level but has no
  configured coverage thresholds.
- **Proposed correction:** Measure first, identify risk-based gaps, then introduce attainable
  per-area thresholds rather than a vanity global number.
- **Verification:** `jest --coverage`; thresholds enforced without snapshot-only tests.

#### PERF-08 — P2 (validate)

- **Evidence and impact:** Generated export verification is not visibly part of the normal `build`
  acceptance command beyond postbuild generation.
- **Proposed correction:** Make CI run `npm run verify:out` explicitly after build so logs show the
  deployment gate.
- **Verification:** CI log and intentionally corrupted output fixture.

#### PERF-09 — P2 (validate)

- **Evidence and impact:** No documented Core Web Vitals or performance budget prevents regressions
  in the animation-heavy pages.
- **Proposed correction:** Establish mobile budgets for LCP, CLS, INP/TBT proxy, JS bytes, and image
  bytes using representative routes.
- **Verification:** Repeatable Lighthouse CI or equivalent traces with stored budgets.

#### PERF-10 — P2 (validate)

- **Evidence and impact:** Broken-link and orphan-route detection is not part of verification.
- **Proposed correction:** Crawl the static export, validating internal anchors, assets, canonical
  URLs, and sitemap membership.
- **Verification:** Link checker against `out/` with deliberate broken-link fixture.

#### PERF-11 — P0 (confirmed)

- **Evidence and impact:** `Seo` falls back to homepage metadata for unknown routes; several
  exported pages are absent from its route map. They therefore receive the homepage canonical,
  title, and social copy.
- **Proposed correction:** Require metadata for every intentional route; give unfinished pages
  explicit canonical/noindex policy instead of silently falling back.
- **Verification:** Table-driven route-map tests and exported-HTML assertions for unique canonicals.

#### PERF-12 — P0 (confirmed)

- **Evidence and impact:** The handwritten sitemap omits a published article and several exported
  routes. Search discovery can silently drift after every content addition.
- **Proposed correction:** Generate the sitemap from the same public route/article manifest used by
  the build.
- **Verification:** Compare sitemap URLs with all indexable exports; exclude aliases, drafts,
  protected pages, and errors.

#### PERF-13 — P0 (confirmed)

- **Evidence and impact:** Protected sources are gitignored, the deployment workflow does not
  restore them, and encryption exits successfully when none exist. A normal CI publish can silently
  drop previously deployed protected pages.
- **Proposed correction:** Choose a coherent secure-source or separate-deployment model and maintain
  an expected protected-slug manifest that fails when input disappears.
- **Verification:** CI-like checkout must produce expected encrypted routes, contain no plaintext,
  and fail without required sources.

#### PERF-14 — P1 (confirmed)

- **Evidence and impact:** Global route metadata and article-local `Head` blocks compete, leaving
  article Open Graph and Twitter fields incomplete or dependent on merge behavior.
- **Proposed correction:** Make one `Seo` interface own title, canonical, robots, Open Graph,
  Twitter, image, and article metadata.
- **Verification:** Assert exactly one canonical/description and complete article social/schema
  fields in exported HTML.

#### PERF-15 — P1 (confirmed)

- **Evidence and impact:** More than 1,300 lines of global CSS are embedded through `_document.js`
  in every HTML page rather than cached as a shared stylesheet.
- **Proposed correction:** Extract cacheable global CSS, keeping only theme bootstrap and proven
  critical rules inline.
- **Verification:** Compare HTML bytes, transferred CSS, and CSS parse/render-blocking traces.

#### PERF-16 — P1 (confirmed)

- **Evidence and impact:** Image optimization is globally disabled for static hosting, while raw
  images and Markdown images lack a consistent responsive-format and intrinsic-dimension pipeline.
- **Proposed correction:** Pre-generate responsive AVIF/WebP sources and emit dimensions, `srcset`,
  decoding, and intentional lazy-loading.
- **Verification:** CLS and image-byte budgets plus generated-markup assertions.

#### PERF-17 — P1 (confirmed)

- **Evidence and impact:** `verify:out` validates only a small file list/directories and CNAME; it
  does not crawl pages or check metadata, assets, article/feed/sitemap consistency, or private
  plaintext.
- **Proposed correction:** Turn it into layered route, SEO, link, asset, feed, and protected-content
  verification.
- **Verification:** Mutation tests must fail after deleting/corrupting each protected artifact.

#### PERF-18 — P2 (confirmed)

- **Evidence and impact:** `/Home` is exported as a duplicate homepage URL because the page
  component lives under `pages/`; canonicalization mitigates but does not remove the duplicate.
- **Proposed correction:** Move the implementation outside `pages/`, keep `pages/index.js` as the
  route, and decide whether hosting needs a legacy redirect.
- **Verification:** Build route table contains only `/`; legacy URL behavior matches the decision.

#### PERF-19 — P2 (confirmed)

- **Evidence and impact:** Feed `lastBuildDate` uses the current clock and article dates are not
  validated before conversion, making output nondeterministic and allowing `Invalid Date`.
- **Proposed correction:** Derive build date from content/commit time and validate frontmatter with
  source-specific errors.
- **Verification:** Repeat generation hashes match; invalid-date fixture fails clearly.

#### PERF-20 — P2 (confirmed)

- **Evidence and impact:** Workflow write/OIDC permissions are global, obsolete deployments are not
  cancelled, and full history is fetched without a demonstrated need.
- **Proposed correction:** Give validation read-only permissions, elevate only deploy, cancel
  obsolete runs, and use shallow checkout unless proven necessary.
- **Verification:** Inspect Actions job permissions and race two test pushes.

## Execution roadmap

### Phase 0: restore a trustworthy gate

1. Serialize CI/local build jobs that share a workspace.
2. Patch audited production dependencies and declare `prop-types` directly.
3. Add protected-content fail-closed checks and duplicate-slug detection.
4. Make the required gate explicit: tests, lint, build, export verification, production audit.

Exit criteria: a fresh checkout installs and exports reproducibly; protected plaintext cannot pass
the deployment gate; no unresolved high-severity production advisory remains without a written
reachability decision.

### Phase 1: unblock every visitor

1. Convert project triggers to buttons and fix modal naming, focus, Escape, restoration, and scroll
  lock.
2. Restore robust focus indicators and correct page landmarks/headings.
3. Honor reduced motion for navbar, video, canvas, and WebGL; provide video alternatives.
4. Add direct email access and consistent external-tab disclosure.

Exit criteria: representative journeys work with keyboard alone, axe has no serious/critical issues,
and manual screen-reader checks find correct landmarks, dialog behavior, and media alternatives.

### Phase 2: stabilize rendering and theming

1. Make next-project selection deterministic and test SSR hydration.
2. Guard local storage and repair or remove dead `Lightbox`/image-loading state.
3. Move shared surfaces/text to semantic theme variables.
4. Resolve Trirong versus Voltaire and fix font preconnect/safe-area behavior.

Exit criteria: no hydration warnings, both themes meet contrast requirements, and key pages match
approved visual snapshots at mobile and desktop widths.

### Phase 3: improve the hiring-manager journey

1. Put the shared navigation on Home and expose Work, About, Writing, and Contact deliberately.
2. Tighten hero copy and reduce pre-evidence capability taxonomy.
3. Make email/calendar the primary conversion path and LinkedIn secondary.
4. Move disclosure language next to the affected work and complete the image-alt/content evidence
  audit.

Exit criteria: five-second tests identify role, strengths, proof, and contact path; every claim has
nearby evidence or precise qualification.

### Phase 4: performance and regression protection

1. Establish route bundle, Core Web Vitals, image, and animation baselines.
2. Optimize the largest assets and lazy-load route-only interactive dependencies.
3. Add Playwright smoke, axe, exported-SEO, route-manifest, and broken-link checks.
4. Set risk-based Jest coverage thresholds after baseline measurement.

Exit criteria: budgets run in CI, key exported journeys are exercised in a browser, and SEO/link
failures block deployment.

### Phase 5: incremental maintainability

1. Extract the shared page shell first because it corrects landmarks and navigation simultaneously.
2. Consolidate modal lifecycle behavior after its tests exist.
3. Extract repeated case-study sections/styles only when touched by planned work.
4. Remove proven dead imports/components and stabilize build IDs in isolated cleanup commits.

Exit criteria: each extraction is behavior-preserving, visually checked, and independently
revertible.

## Recommended issue slices

1. **Patch production audit findings** (`SEC-01`, `SEC-02`).
2. **Fail closed for protected articles** (`SEC-03`, `SEC-04`).
3. **Reject duplicate article slugs** (`SEC-06`).
4. **Make project dialogs keyboard complete** (`A11Y-01`, `A11Y-02`, `A11Y-13`, `REL-02`,
   `REL-05`, `REL-10`).
5. **Correct global landmark architecture** (`A11Y-03`, `UX-01`).
6. **Normalize heading structure** (`A11Y-04`) across all route families.
7. **Honor reduced motion and media alternatives** (`A11Y-05`, `A11Y-06`, `A11Y-10`, `PERF-03`).
8. **Make contact directly actionable** (`A11Y-07`, `A11Y-08`, `UX-02`).
9. **Make next-project rendering deterministic** (`REL-01`).
10. **Harden theme persistence** (`REL-03`).
11. **Build semantic light/dark tokens** (`UX-07`, `UX-08`).
12. **Resolve typography and head resource hints** (`UX-06`, `REL-06`).
13. **Improve navigation orientation** (`A11Y-09`, `UX-09`).
14. **Simplify Home’s first scan** (`UX-03`, `UX-04`, `UX-05`).
15. **Complete responsive and zoom audit** (`A11Y-16` through `A11Y-19`, `UX-11`, `UX-12`).
16. **Audit media meaning and color reliance** (`A11Y-15`, `A11Y-20`, `UX-10`).
17. **Set and meet asset/bundle budgets** (`PERF-01` through `PERF-03`, `PERF-09`).
18. **Add exported-site browser gates** (`PERF-04` through `PERF-06`, `PERF-08`, `PERF-10`).
19. **Introduce evidence-based coverage thresholds** (`PERF-07`).
20. **Perform isolated reliability cleanup** (`REL-04`, `REL-07` through `REL-09`, `SEC-05`).
21. **Normalize article calendar dates** (`REL-11`).
22. **Configure all gallery modals centrally** (`REL-12`).
23. **Run validation before merge** (`SEC-07`).

Each issue should include one representative failing test or captured baseline before
implementation, the smallest source-focused correction, explicit manual checks where automation is
insufficient, and the full repository gate before merge. Generated `out/` must remain unstaged.

## Validation matrix

- **Routes:** Home, About, Projects, Writing index/article, accessibility statement, one legacy case
  study, one protected page
- **Viewports:** 320×568, 375×812, 768×1024, 1366×768, and 1440×900
- **Preferences:** light, dark, reduced motion, forced colors, and no stored theme
- **Input:** keyboard, pointer, touch, and screen reader
- **Zoom:** 100%, 200%, and 400%
- **Release:** fresh install, tests, lint, build, export verification, audit, crawl, and
  reproducibility comparison

## Audit limitations

- No analytics or user-research evidence was available, so conversion recommendations require
  validation.
- Source inspection cannot prove computed contrast, focus clipping, carousel announcements, or
  mobile overflow; those items are explicitly marked `validate` or require manual checks.
- The build result from this audit is not a product failure: concurrent audit commands shared the
  same `.next` directory and one clean step removed another build’s intermediate files. The final
  gate must be rerun serially.
- Security advisory exploitability depends on static deployment paths, but build-time dependencies
  and the release pipeline still warrant patching and documented reachability decisions.
