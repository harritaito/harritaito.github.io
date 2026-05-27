---
name: portfolio-content
description: Plan and edit portfolio content for Harri Halonen's case-study site. Use when writing homepage, About, archive, proof-chip, project-summary, case-study, SEO, or credibility copy for this repository.
---

# Portfolio Content

Use this skill for content strategy, copy edits, case-study framing, and archive
work in this portfolio repo.

## Required Context

Before proposing or editing content:

1. Read `PRODUCT.md` for audience, purpose, voice, and anti-references.
2. Read `DESIGN.md` when content length, hierarchy, or section shape affects the
   visual presentation.
3. Inspect the current source page or component under `pages/` or `components/`.

Do not treat generated root HTML or `out/**` as source.

## Content Rules

- Keep the voice thoughtful, warm, and quietly confident.
- Let projects, artifacts, and concrete decisions carry credibility.
- Avoid generic SaaS language, inflated claims, credibility theater, and vague
  seniority or tenure claims.
- Prefer specific evidence over self-description: shipped work, constraints,
  decisions, artifacts, outcomes, and tradeoffs.
- Preserve a human, personal point of view without making the page feel messy or
  over-designed.
- Keep paragraphs scannable and suited to the existing Trirong plus Rubik
  hierarchy.

## Workflow

1. Identify the source files that own the content.
2. State the intended content outcome and any assumptions before editing.
3. Make the smallest source-focused edit that achieves the outcome.
4. Remove only copy or structure made obsolete by the current edit.
5. For repeated content patterns, prefer an existing component before adding a new
   one.

## Verification

For content-only source edits, run `npm test` and `npm run build` when practical.
For UI-affecting content edits, run both commands before finishing.

Report any generated `out/**` or `.next/**` changes as build output; do not stage
or hand-edit them unless explicitly asked.
