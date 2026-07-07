import React from "react";
import { colors } from "./design-system/tokens";

// How Harri decides — taste made concrete. Each principle pairs a stance with
// one sentence of the behavior it produces, so the judgment reads before any
// case study does. Kept restrained: a narrow list on paper, not a card wall.
const PRINCIPLES = [
  {
    title: "Map the business process before the UI",
    detail:
      "I diagram how the work really moves — who hands off to whom, where it stalls — before I draw a single screen.",
  },
  {
    title: "Design for experts without punishing beginners",
    detail:
      "The fast path stays fast for daily users, while a first-timer still gets clear labels, safe defaults, and a way back.",
  },
  {
    title: "Use systems to pay down decision debt",
    detail:
      "I settle a repeated choice once as a pattern, so the tenth screen doesn't relitigate what the first one already answered.",
  },
  {
    title: "Treat implementation as part of the design",
    detail:
      "I stay in the codebase through the build, because a design only really exists once it survives real data and a real deadline.",
  },
  {
    title: "Use AI to support judgment, not replace it",
    detail:
      "AI can draft, rank, and summarize; the person keeps the decision, the override, and the accountability for it.",
  },
  {
    title: "Name states, permissions, and errors early",
    detail:
      "Empty, loading, denied, and failed get designed with the happy path — not bolted on after QA finds the gaps.",
  },
  {
    title: "Measure quality by outcomes, not output",
    detail:
      "I judge a screen by the tasks people finish and the tickets that stop arriving, not by how it looked in the review.",
  },
];

const Principles = () => (
  <ol className="principles" aria-label="How I approach the work">
    {PRINCIPLES.map((principle) => (
      <li className="principles__item" key={principle.title}>
        <h4 className="principles__title">{principle.title}</h4>
        <p className="principles__detail">{principle.detail}</p>
      </li>
    ))}
    <style jsx>{`
      .principles {
        counter-reset: principle;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .principles__item {
        counter-increment: principle;
        padding-left: 2.4rem;
        position: relative;
      }

      .principles__item:not(:last-child) {
        margin-bottom: 1.6rem;
      }

      .principles__item::before {
        color: ${colors.accentPurple};
        content: counter(principle, decimal-leading-zero);
        font-size: 0.8rem;
        font-weight: 600;
        left: 0;
        letter-spacing: 0.08em;
        line-height: 1.6;
        position: absolute;
        top: 0.15rem;
      }

      .principles__title {
        font-size: 1.05rem;
        font-weight: 600;
        line-height: 1.35;
        margin: 0 0 0.3rem;
      }

      .principles__detail {
        color: ${colors.textMuted};
        font-size: 0.98rem;
        line-height: 1.6;
        margin: 0;
      }
    `}</style>
  </ol>
);

export default Principles;
