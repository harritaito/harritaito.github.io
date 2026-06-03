# Case Study Model

This repo uses one canonical case-study shape so future pages can read as one
portfolio system instead of a series of one-off story layouts.

## Canonical Structure

- `ProjectPage` provides the shell: title, subtitle, hero, and navigation.
- `CaseStudyMeta` provides the reusable narrative frame below the hero.
- `ProjectSection` remains available for longer evidence-led body sections.

## Field Order

Render these fields in this order when the evidence exists:

1. One-line summary
1. My role
1. Team
1. Timeline
1. Context
1. Problem
1. Users
1. Business context
1. Constraints
1. Discovery
1. Key insights
1. Concept model
1. Key decisions
1. Design details
1. Implementation support
1. Outcome
1. Reflection

## Mandatory Fields For Legacy Cases

For the current archive pages, these fields should be present unless the source
evidence is genuinely missing:

- Title
- Subtitle
- One-line summary
- My role
- Team
- Timeline
- Context
- Problem
- Users
- Business context
- Constraints
- Outcome
- Reflection

## Optional Fields

Leave these out when the source does not support them:

- Discovery
- Key insights
- Concept model
- Key decisions
- Design details
- Implementation support

## Honest Placeholder Rules

- Archived work should be labeled `Earlier case study`.
- Concept-only pages should be labeled `Concept work`.
- Missing metrics must not be fabricated.
- If evidence is missing, prefer a short note like `Not documented in source`
  instead of inventing a result.
- Keep claims at the evidence level: concept work stays concept work, and
  archive work stays archive work.

## Authoring Pattern

Use the model like this:

```jsx
<ProjectPage
  title="..."
  description="..."
  eyebrow="Earlier case study"
  content={
    <span>
      <CaseStudyMeta
        status="Earlier case study"
        summary="..."
        note="Shown here for its research method and interaction thinking."
        fields={{
          myRole: "...",
          team: "...",
          timeline: "...",
          context: "...",
          problem: "...",
          users: "...",
          businessContext: "...",
          constraints: "...",
          discovery: "...",
          keyInsights: "...",
          conceptModel: "...",
          keyDecisions: "...",
          designDetails: "...",
          implementationSupport: "...",
          outcome: "...",
          reflection: "...",
        }}
      />
      <ProjectSection title="Problem" content={...} />
    </span>
  }
/>
```
