# Writing pages IndieWeb plan

## Source reference

The reference article is Brennan Kenneth Brown's user-provided folk.zone announcement.
I am treating it as an inspiration source, not a visual clone. The useful patterns are:

- a plain, durable article shell with skip navigation and readable no-JavaScript fallback;
- rich article metadata: author, publish date, reading time, tags, canonical permalink;
- a large, credited hero image with descriptive alt text;
- short, lowercase section headings that make the essay easy to scan;
- post-body affordances: reaction, author bio, RSS/newsletter prompt, comments, webmentions,
  related posts, blogroll, badges, and webrings;
- IndieWeb identity signals: RSS, IndieAuth-style commenting, webmentions, canonical URL,
  visible source/build information, and personal network links.

## Fit for this portfolio

Harri's portfolio should not become a dense personal blog sidebar. The writing pages should borrow
Brennan's sense of independent web ownership while preserving the current design direction: light
paper background, Trirong and Rubik typography, selective accents, soft tactile elevation, and
restrained motion.

The right translation is a quiet writing system for essays, research notes, and process pieces that
helps a hiring manager or collaborator understand Harri's thinking without leaving the portfolio
context.

## Implementation goals

1. Make `/writing` feel like an authored publication index, not a placeholder list.
2. Make `/writing/[slug]` support long-form essays with metadata, tags, credits, and related links.
3. Add IndieWeb-compatible hooks gradually, starting with static, low-maintenance features.
4. Keep generated deployment output out of implementation commits.

## Phase 1: Article data model

Add optional frontmatter fields to public and protected Markdown articles:

- `title`: existing page title.
- `summary`: existing description and article-card excerpt.
- `date`: existing publish date.
- `updated`: optional material update date.
- `eyebrow`: existing article category label.
- `tags`: array of topic tags.
- `hero`: existing hero path.
- `heroAlt`: required when `hero` is meaningful.
- `heroCredit`: optional short credit line.
- `canonicalUrl`: optional final public permalink.
- `readingTime`: optional override; otherwise calculate from Markdown word count.
- `related`: optional array of related article slugs.

Verification:

- Add tests for article sorting, protected filtering, and reading-time fallback.
- Confirm articles without new fields still build.

## Phase 2: Writing index upgrades

Upgrade `/writing` with source-friendly publication cues:

- Add a warmer intro that explains what the writing section is for.
- Show count, latest month, and topic filters when tags exist.
- Render article cards with date, reading time, summary, and tags.
- Preserve the current highlight underline, paper background, and narrow readable measure.
- Add an RSS link only if an RSS feed exists or is implemented in the same phase.

Verification:

- Run the existing writing index tests or add snapshot-free rendering tests if none exist.
- Check empty state still reads well when there are no public articles.

## Phase 3: Article template upgrades

Evolve `/writing/[slug]` from a case-study shell into a dedicated essay shell:

- Keep the existing portfolio navbar and footer for continuity.
- Add a compact article masthead: category, title, summary, date, reading time, and tags.
- Place a credited hero image below the masthead when present.
- Keep article body width around 60 to 70 characters for comfortable reading.
- Add section heading styles that feel editorial but still use the existing typography tokens.
- Add a post footer with permalink, tags, author note, and related articles.
- Include a "back to writing" path so articles are not dead ends.

Verification:

- Test Markdown rendering for headings, lists, blockquotes, images, tables, and links.
- Verify keyboard focus states on article links and the back link.

## Phase 4: IndieWeb basics

Start with static primitives that do not require a server:

- Generate canonical URLs for articles.
- Add RSS feed generation for public, non-draft articles.
- Add `rel="me"` profile links where appropriate.
- Use semantic `article`, `header`, `footer`, and `time` markup.
- Add microformat-friendly classes only where they do not fight the component structure.

Verification:

- Validate generated RSS XML in a test.
- Confirm protected articles do not appear in RSS, index pages, or related-post lists.

## Phase 5: Community affordances

Add interactive or networked features only after the static writing system works:

- Webmention display can start as a static placeholder or build-time fetch.
- Commenting should be deferred unless there is a clear moderation and privacy plan.
- Reactions should be avoided unless they are backed by a low-maintenance service.
- A blogroll or "read nearby" section could be added as a curated static list.

Verification:

- Ensure failures in external webmention or feed fetching never break the build.
- Keep all third-party scripts optional and privacy-conscious.

## Visual translation notes

Use Brennan's page as a structural reference, but translate it into Harri's system:

- Replace Brennan's maximal side matter with one calm post-footer stack.
- Keep badges and webrings optional; if added, make them feel like small desk ephemera rather
  than a retro wall of buttons.
- Use project accent colors for tags sparingly, not as full-page decoration.
- Prefer soft paper cards and marker highlights over dark terminal or zine aesthetics.
- Keep motion limited to hover lift, underline motion, and gentle transitions.

## Risks and decisions to make

- Decide whether writing should be public-only or include protected essays in the same template.
- Decide whether RSS should ship before there are several public articles.
- Decide whether IndieWeb comments fit the portfolio's hiring/client audience.
- Decide whether article pages should continue using `ProjectPage` or move to a dedicated
  `ArticlePage` component to reduce case-study assumptions.

## Recommended first implementation slice

Build the smallest complete slice first:

1. Add reading-time calculation and tags to article metadata.
2. Upgrade `/writing` cards to show metadata.
3. Create a dedicated article masthead in `/writing/[slug]` while keeping `ArticleBody` intact.
4. Add a static post footer with permalink and back-to-writing link.
5. Add tests for metadata and protected-article exclusion.

This gives the writing area the authored, IndieWeb-adjacent feel without committing to comments,
webmentions, feeds, or community widgets before the content model proves itself.
