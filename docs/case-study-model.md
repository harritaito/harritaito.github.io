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
1. Hard metrics
1. Qualitative evidence
1. Proxy evidence
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
- Hard metrics, qualitative evidence, or proxy evidence
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

- Archive cards should use stage labels such as `Older work` or `Concept work`.
- Archived case pages can use `Earlier case study` when the page is still a case study rather than concept-only work.
- Concept-only pages should be labeled `Concept work`.
- Missing metrics must not be fabricated.
- If evidence is missing, prefer a short note like `Not documented in source`
  instead of inventing a result.
- Use `Hard metrics` for measured product, user, or business outcomes, or for
  a clear note that no such metrics are documented.
- Use `Qualitative evidence` for interviews, observation, course feedback, or
  direct participant/stakeholder comments.
- Use `Proxy evidence` for indirect signals such as competition recognition,
  prototype completion, artifact quality, or external coverage.
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
          hardMetrics: "...",
          qualitativeEvidence: "...",
          proxyEvidence: "...",
          reflection: "...",
        }}
      />
      <ProjectSection title="Problem" content={...} />
    </span>
  }
/>
```
