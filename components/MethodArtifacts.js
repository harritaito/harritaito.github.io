import React from "react";
import { colors, shadows } from "./design-system/tokens";

// The tangible outputs of the loop. Each card names an artifact, where it
// lands in the process, and a small honest sketch of what it looks like —
// illustrative shapes, not real project data.
const ARTIFACTS = [
  {
    name: "Workflow map",
    stage: "Discovery → Framing",
    what: "How the work actually moves — every step, handoff, and the spreadsheet nobody mentions until week three.",
    preview: [
      "Request ─▶ Triage ─▶ Draft ─▶ Review ─▶ Publish",
      "             │                    ▲",
      "             └──── on hold ───────┘",
    ],
  },
  {
    name: "Role model",
    stage: "Framing",
    what: "Who owns what, where the decisions sit, and the handoffs that quietly go missing.",
    preview: [
      "Requester   raises · adds context",
      "Owner       decides · accepts risk",
      "Editor      shapes · checks facts",
      "Publisher   ships · owns the queue",
    ],
  },
  {
    name: "State model",
    stage: "Concept models",
    what: "The objects underneath the screens, and the states they move between — named before anything gets drawn.",
    preview: [
      "Draft ─▶ In review ─▶ Approved ─▶ Live",
      "  ▲          │",
      "  └── changes requested",
    ],
  },
  {
    name: "Design spec",
    stage: "Design specs",
    what: "Buildable detail: default, empty, loading, error, and the edge cases engineers hit at 4pm on a Friday.",
    preview: [
      "Table · empty · loading · error",
      "Row   · selected · disabled",
      "Bulk  · 0 / 1 / many selected",
    ],
  },
  {
    name: "QA checklist",
    stage: "Design QA",
    what: "What “done” means, checked against intent before users find the gaps for me.",
    preview: [
      "☑ Empty + error states present",
      "☑ Focus order + visible focus",
      "☑ Spacing matches spec",
      "☐ Copy reviewed with owner",
    ],
  },
  {
    name: "Decision log",
    stage: "Throughout",
    what: "Dated calls, the reason, and the tradeoff — so “why is it like this” has an answer months later.",
    preview: [
      "2026-03 · one list, not tabs",
      "  why  · users scan, don't switch",
      "  cost · heavier filter UI",
    ],
  },
];

const MethodArtifacts = () => (
  <ul className="method-artifacts" aria-label="Artifacts I produce">
    {ARTIFACTS.map((artifact) => (
      <li className="method-artifacts__card" key={artifact.name}>
        <p className="method-artifacts__stage">{artifact.stage}</p>
        <h3 className="method-artifacts__name">{artifact.name}</h3>
        <p className="method-artifacts__what">{artifact.what}</p>
        <pre className="method-artifacts__preview" aria-hidden="true">
          {artifact.preview.join("\n")}
        </pre>
      </li>
    ))}
    <style jsx>{`
      .method-artifacts {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .method-artifacts__card {
        background: var(--surface-elevated-color, ${colors.pageBackground});
        border: 1px solid var(--border-color, rgba(0, 0, 0, 0.1));
        border-radius: 14px;
        box-shadow: ${shadows.light};
        display: flex;
        flex-direction: column;
        min-width: 0;
        padding: 1.4rem 1.5rem 1.5rem;
        transition:
          box-shadow 0.3s ease,
          transform 0.3s ease;
      }

      .method-artifacts__card:hover {
        box-shadow: ${shadows.media};
        transform: translateY(-2px);
      }

      .method-artifacts__stage {
        color: ${colors.accentPurple};
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        margin: 0 0 0.5rem;
        text-transform: uppercase;
      }

      .method-artifacts__name {
        font-size: 1.15rem;
        font-weight: 600;
        margin: 0 0 0.5rem;
      }

      .method-artifacts__what {
        color: ${colors.textMuted};
        font-size: 0.95rem;
        line-height: 1.55;
        margin: 0 0 1.1rem;
      }

      .method-artifacts__preview {
        background: var(--surface-sunken-color, rgba(0, 0, 0, 0.03));
        border-radius: 10px;
        border-left: 2px solid rgba(145, 87, 255, 0.35);
        color: ${colors.textMuted};
        font-family: "SFMono-Regular", "Menlo", "Consolas", monospace;
        font-size: 0.74rem;
        line-height: 1.6;
        margin: auto 0 0;
        overflow-x: auto;
        padding: 0.85rem 1rem;
        white-space: pre;
      }

      @media only screen and (max-width: 45rem) {
        .method-artifacts {
          grid-template-columns: 1fr;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .method-artifacts__card {
          transition: none;
        }

        .method-artifacts__card:hover {
          transform: none;
        }
      }
    `}</style>
  </ul>
);

export default MethodArtifacts;
