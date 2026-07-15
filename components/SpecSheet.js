import React from "react";
import { colors, shadows } from "./design-system/tokens";

// One worked example of a developer-ready spec: the structure is real and
// mirrors how I hand designs to engineers, but the component and data are
// illustrative — no client project is being quoted here.
const SPEC_PANELS = [
  {
    heading: "States",
    lines: [
      "Field: default · focus-visible · disabled",
      "Results: loading (skeleton rows)",
      "Empty: “No matches — clear the filter?”",
      "Error: retry action, input preserved",
      "No view ships blank — every state has words",
    ],
  },
  {
    heading: "Validation",
    lines: [
      "Validate on blur, not per keystroke",
      "Error names the fix: “Use format YYYY-MM”",
      "Failed submit keeps what the user typed",
      "Disable submit only while a request is in flight",
    ],
  },
  {
    heading: "Responsive",
    lines: [
      "≥ 60rem: filter sits beside the results",
      "< 45rem: filter stacks above, table becomes cards",
      "Touch targets stay ≥ 44px at every width",
      "Truncation rules named per column, not improvised",
    ],
  },
  {
    heading: "Accessibility",
    lines: [
      "Label always visible — never placeholder-only",
      "Error tied to the field with aria-describedby",
      "Result count changes announced politely",
      "Focus order follows reading order, focus visible",
    ],
  },
];

const ENGINEERING_QUESTIONS = [
  "What does the API return on partial failure?",
  "Which columns can the server actually sort?",
  "Is the result count cheap enough to show live?",
];

const SpecSheet = () => (
  <section className="spec-sheet" aria-label="Example of a developer-ready spec">
    <header className="spec-sheet__header">
      <p className="spec-sheet__kicker">Design spec · one component, in full</p>
      <h4 className="spec-sheet__title">Filter field + results list</h4>
      <p className="spec-sheet__note">
        Illustrative example — the structure is how I actually spec, the project is not real.
        Where a design system exists, each rule below points at named tokens and components
        instead of raw values.
      </p>
    </header>

    <div className="spec-sheet__grid">
      {SPEC_PANELS.map((panel) => (
        <div className="spec-sheet__panel" key={panel.heading}>
          <h5 className="spec-sheet__panel-heading">{panel.heading}</h5>
          <ul className="spec-sheet__lines">
            {panel.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <footer className="spec-sheet__footer">
      <p className="spec-sheet__footer-kicker">Logged for engineering before the build starts</p>
      <ul className="spec-sheet__questions">
        {ENGINEERING_QUESTIONS.map((question) => (
          <li key={question}>{question}</li>
        ))}
      </ul>
    </footer>

    <style jsx>{`
      .spec-sheet {
        background: var(--surface-elevated-color, ${colors.pageBackground});
        border: 1px solid var(--border-color, rgba(0, 0, 0, 0.1));
        border-radius: 14px;
        box-shadow: ${shadows.light};
        padding: 1.6rem 1.7rem 1.5rem;
      }

      .spec-sheet__kicker {
        color: ${colors.accentPurple};
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        margin: 0 0 0.4rem;
        text-transform: uppercase;
      }

      .spec-sheet__title {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0 0 0.5rem;
      }

      .spec-sheet__note {
        color: ${colors.textMuted};
        font-size: 0.92rem;
        line-height: 1.55;
        margin: 0 0 1.4rem;
        max-width: 38rem;
      }

      .spec-sheet__grid {
        display: grid;
        gap: 1.25rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .spec-sheet__panel {
        background: var(--surface-sunken-color, rgba(0, 0, 0, 0.03));
        border-left: 2px solid rgba(145, 87, 255, 0.35);
        border-radius: 10px;
        min-width: 0;
        padding: 0.9rem 1rem 1rem;
      }

      .spec-sheet__panel-heading {
        color: ${colors.textStrong};
        font-size: 0.78rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        margin: 0 0 0.6rem;
        text-transform: uppercase;
      }

      .spec-sheet__lines {
        color: ${colors.textMuted};
        font-family: "SFMono-Regular", "Menlo", "Consolas", monospace;
        font-size: 0.76rem;
        line-height: 1.7;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .spec-sheet__lines li {
        margin: 0;
      }

      .spec-sheet__footer {
        border-top: 1px solid var(--border-color, rgba(0, 0, 0, 0.08));
        margin-top: 1.4rem;
        padding-top: 1.1rem;
      }

      .spec-sheet__footer-kicker {
        color: ${colors.accentBlue};
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        margin: 0 0 0.5rem;
        text-transform: uppercase;
      }

      .spec-sheet__questions {
        color: ${colors.textMuted};
        font-size: 0.92rem;
        line-height: 1.6;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .spec-sheet__questions li {
        padding-left: 1.1rem;
        position: relative;
      }

      .spec-sheet__questions li::before {
        color: ${colors.accentBlue};
        content: "?";
        font-weight: 600;
        left: 0;
        position: absolute;
      }

      @media only screen and (max-width: 45rem) {
        .spec-sheet {
          padding: 1.3rem 1.2rem 1.2rem;
        }

        .spec-sheet__grid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </section>
);

export default SpecSheet;
