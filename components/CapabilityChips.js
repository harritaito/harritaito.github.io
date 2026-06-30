import React from "react";
import { colors, radii } from "./design-system/tokens";

const CAPABILITIES = [
  "Product discovery",
  "B2B & internal tools",
  "Design systems",
  "AI & data-heavy workflows",
  "UX architecture",
  "Implementation support",
  "Accessibility",
  "Design QA",
  "Stakeholder alignment",
];

const CapabilityChips = () => (
  <section className="capability-chips" aria-label="Areas I work across">
    <p className="capability-chips__label">Areas I work across</p>
    <ul className="capability-chips__list">
      {CAPABILITIES.map((capability) => (
        <li className="capability-chips__chip" key={capability}>
          {capability}
        </li>
      ))}
    </ul>
    <style jsx>{`
      .capability-chips {
        margin-top: 2rem;
        max-width: 45rem;
      }

      .capability-chips__label {
        color: ${colors.textMuted};
        font-size: 0.78rem;
        font-weight: 600;
        letter-spacing: 0.06em;
        margin: 0 0 0.75rem;
        text-transform: uppercase;
      }

      .capability-chips__list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .capability-chips__chip {
        border: 1px solid var(--border-color, rgba(0, 0, 0, 0.12));
        border-radius: ${radii.pill};
        color: ${colors.textMuted};
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 1.2;
        padding: 0.4em 0.9em;
      }
    `}</style>
  </section>
);

export default CapabilityChips;
