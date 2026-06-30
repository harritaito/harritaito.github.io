import React from "react";
import Link from "next/link";
import { colors } from "./design-system/tokens";

const STAGES = [
  {
    label: "Discovery",
    behavior:
      "Sit in the real workflow: interviews, support threads, and the spreadsheet someone quietly runs everything from.",
  },
  {
    label: "Framing",
    behavior:
      "Name the actual problem and what we are deliberately not solving, so scope stops sliding mid-project.",
  },
  {
    label: "Concept models",
    behavior:
      "Map the objects, states, and relationships underneath before drawing a single screen.",
  },
  {
    label: "Prototypes",
    behavior:
      "Put clickable flows in front of real data and real users to find where the idea breaks.",
  },
  {
    label: "Design specs",
    behavior:
      "Hand over buildable detail: every state, empty view, error, and edge case engineers will hit.",
  },
  {
    label: "Implementation support",
    behavior:
      "Stay in the build, answer the questions Figma cannot, and adjust as real constraints surface.",
  },
  {
    label: "Design QA",
    behavior:
      "Check the built UI against intent and catch spacing, state, and behavior drift before users do.",
  },
  {
    label: "Measurement",
    behavior:
      "Watch it in use and ask the honest question: did this make the work easier, or just different?",
  },
  {
    label: "System contribution",
    behavior:
      "Fold the patterns that held up back into the design system so the next team starts ahead.",
  },
];

const ProductLoop = () => (
  <ol className="product-loop" aria-label="How I work, from ambiguity to buildable output">
    {STAGES.map((stage, index) => (
      <li className="product-loop__stage" key={stage.label}>
        <span className="product-loop__node" aria-hidden="true" />
        <span className="product-loop__index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="product-loop__label">{stage.label}</p>
        <p className="product-loop__behavior">{stage.behavior}</p>
      </li>
    ))}
    <style jsx>{`
      .product-loop {
        list-style: none;
        margin: 0;
        max-width: 38rem;
        padding: 0;
        position: relative;
      }

      .product-loop::before {
        background: rgba(0, 0, 0, 0.12);
        bottom: 0.55rem;
        content: "";
        left: 0.4rem;
        position: absolute;
        top: 0.55rem;
        width: 1px;
      }

      .product-loop__stage {
        padding-bottom: 1.6rem;
        padding-left: 2rem;
        position: relative;
      }

      .product-loop__stage:last-child {
        padding-bottom: 0;
      }

      .product-loop__node {
        background: ${colors.accentPurple};
        border: 3px solid ${colors.pageBackground};
        border-radius: 999px;
        height: 0.85rem;
        left: 0;
        position: absolute;
        top: 0.4rem;
        width: 0.85rem;
      }

      .product-loop__index {
        color: ${colors.accentPurple};
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.08em;
      }

      .product-loop__label {
        font-size: 1.05rem;
        font-weight: 600;
        margin: 0.25rem 0 0.4rem;
      }

      .product-loop__behavior {
        color: ${colors.textMuted};
        font-size: 0.95rem;
        line-height: 1.55;
        margin: 0;
      }
    `}</style>
  </ol>
);

export default ProductLoop;
