# Reading experience optimization plan

## Research summary

This plan focuses on Markdown-backed article pages in `/writing/[slug]`. It is based on
research from Nielsen Norman Group, Baymard, W3C WCAG text-spacing guidance, MDN CSS
text-wrap documentation, and current examples of comfortable online article reading.

The strongest cross-source themes are:

- Reading is not only typography. It is legibility, scanability, comprehension, and a clear
  reason to keep going.
- Body copy should usually sit around 50 to 75 characters per line on desktop, with mobile
  layouts allowed to fill more of the screen.
- Line-height must stay generous, and the layout should not break if users override text
  spacing for accessibility.
- Headings, summaries, dates, tags, and in-page signposts make long writing easier to scan
  before committing to a full read.
- `text-wrap: balance` is useful for headings; `text-wrap: pretty` can be used as progressive
  enhancement for paragraphs, but should stay limited to article copy because it has a
  performance cost.
- Reading pages should provide exits and continuation paths: back to index, permalink,
  related writing, contact, or project pages.

## Current-state diagnosis

The current writing template has started moving in the right direction with article metadata,
reading time, tags, styled Markdown, and a footer. The next optimization pass should make the
experience more deliberate and measurable instead of only more styled.

Priority issues to solve next:

1. The article shell still borrows `ProjectPage`, so article-specific semantics and layout control
   are limited.
2. There is no table of contents or heading anchor pattern for longer Markdown pieces.
3. Metadata is present, but the writing index does not yet expose the same reading-time and tag
   cues.
4. Markdown components do not yet support code blocks, captions, footnotes, or callouts as a
   designed reading system.
5. Related posts are planned but not implemented, so the article footer is still generic.
6. Accessibility checks are indirect. There is no specific test for text-spacing resilience,
   heading structure, or keyboard-visible article navigation.

## Optimization principles

### 1. Keep the reading measure stable

Use character-based widths rather than only grid columns. The target should be:

- body paragraphs: `max-width: 66ch`;
- metadata and footer cards: `max-width: 72ch`;
- images, tables, and rich media: allowed to break wider when they benefit from scale.

This should make the article body responsive without relying on arbitrary pixel widths.

### 2. Separate article structure from project structure

Create a dedicated `ArticlePage` component once one more article-specific feature is added.
It should own:

- article masthead;
- metadata rail or card;
- hero image and credit;
- Markdown body container;
- article footer;
- optional related writing.

`ProjectPage` should remain the case-study layout. This avoids article styling becoming a large
set of overrides against project-specific markup.

### 3. Make scanning intentional

For long Markdown pages, add:

- heading anchors for `h2` and `h3`;
- an optional compact table of contents generated from Markdown headings;
- section spacing that increases before major headings and tightens within subsections;
- short metadata labels that reinforce date, time, topic, and update status.

The table of contents should be hidden or collapsible on small screens.

### 4. Make Markdown components feel authored

Extend `ArticleBody` with designed renderers for:

- `code` and `pre` blocks;
- `figure`-like image captions via Markdown convention;
- footnotes from `remark-gfm`;
- horizontal rules as quiet section breaks;
- callouts only if they appear in at least three pieces.

Avoid decorative components until the content asks for them.

### 5. Improve continuity after reading

Replace the generic footer copy with data-backed links:

- related articles from frontmatter `related` slugs;
- fallback to latest public writing;
- one contact link for readers who want to discuss the idea;
- canonical permalink only when it differs from the local path or is useful for sharing.

Do not add comments, reactions, or webmentions until moderation and privacy are clear.

### 6. Verify accessibility directly

Add checks for:

- reading-time helper behavior;
- public articles excluding protected articles in any related-writing fallback;
- article pages rendering one `h1`;
- focusable back/permalink/related links;
- no layout loss when text spacing is increased according to WCAG 1.4.12.

Visual checks should include desktop, tablet, and mobile widths.

## Proposed implementation phases

### Phase 1: Measurement and metadata alignment

- Move body width to a `ch`-based article reading token or local constant.
- Use the same reading-time and tag data on `/writing` cards and `/writing/[slug]`.
- Add `updated`, `heroCredit`, and `related` to documented frontmatter examples.
- Keep the current article page component structure for this phase.

Success criteria:

- Public writing cards show title, summary, date, reading time, and tags when present.
- Article body paragraphs stay near 50 to 75 characters on common desktop widths.
- Existing articles without new fields still build.

### Phase 2: Dedicated article component

- Extract article layout from `pages/writing/[slug].js` into `components/ArticlePage.js`.
- Keep data fetching in the page route.
- Move article-specific CSS into the component and reduce global overrides.
- Keep `ArticleBody` focused on Markdown rendering.

Success criteria:

- `ProjectPage` is no longer used for writing articles.
- The article page has semantic `article`, `header`, `main`, and `footer` regions.
- Tests cover the article page shell without importing ESM-only Markdown dependencies directly.

### Phase 3: Markdown reading toolkit

- Add heading IDs and anchor links for `h2` and `h3`.
- Add optional table of contents generation from Markdown headings.
- Style code blocks, tables, blockquotes, images, and footnotes as a coherent article system.
- Add a wider media breakout class or Markdown convention for images that need scale.

Success criteria:

- Long articles are scannable from the top.
- Code and tables are readable without horizontal page overflow.
- Footnotes and captions are visually quiet but discoverable.

### Phase 4: Continuation paths

- Resolve `related` slugs in `getStaticProps`.
- Render related writing cards in the article footer.
- Fallback to latest public articles when no related slugs are provided.
- Keep protected articles out of related lists and RSS/feed candidates.

Success criteria:

- Every article has a meaningful next step.
- Protected articles are never exposed through related-writing fallback.
- Footer copy becomes content-aware instead of generic.

### Phase 5: Comfort and preference polish

- Audit contrast and text spacing with browser zoom and custom spacing styles.
- Consider a reading-width preference only if articles become long enough to justify it.
- Add print styles for essay pages.
- Add RSS and canonical metadata after public writing volume justifies it.

Success criteria:

- Articles remain usable at 200% zoom.
- Custom text spacing does not clip, overlap, or hide content.
- Print output is readable without navigation clutter.

## Recommended next slice

Implement Phase 1 only:

1. Add a `readingMeasure` constant or token using `66ch`.
2. Apply it to article body copy, metadata, and footer in JSX CSS.
3. Surface reading time and tags on `/writing` article cards.
4. Add one test for writing index metadata rendering.
5. Leave table of contents, related posts, and `ArticlePage` extraction for follow-up work.

This gives the site a better reading experience quickly while avoiding another broad rewrite.
