import React from "react";
import Link from "next/link";
import HighlightUnderline from "./design-system/HighlightUnderline";
import { colors } from "./design-system/tokens";

// Homepage index for the three recurring themes in the work. Every link
// keeps its honest status label — evidence rules live in
// docs/content-evidence-audit.md: no shipped-AI claims, no invented
// outcomes, shells stay labelled as in progress.
const FOCUS_AREAS = [
  {
    id: "systems",
    title: "Systems",
    lead:
      "Operational products with many roles, uneven permissions, and workflows that live partly in tools and partly in people’s heads. I make that complexity legible first — workflow maps, role and state models — then help decide what the product should absorb, and in what order.",
    now: [
      {
        href: "/direction-setting",
        label: "From ambiguity to shared direction",
        tag: "methods case — artifacts in progress",
      },
      {
        href: "/kivakaupunki",
        label: "Kiva Kaupunki",
        tag: "archive — civic reporting concept and MVP",
      },
      {
        href: "/#how-i-work",
        label: "How I work",
        tag: "the loop and its artifacts, on this page",
      },
    ],
    progress:
      "An anonymized operations-platform case is being written up as evidence is cleared.",
    progressLink: { href: "/operations-platform", label: "Read the case shell" },
  },
  {
    id: "research",
    title: "Research",
    lead:
      "Design decisions that trace back to evidence: field observation, interviews, synthesis — and honest limits on what the findings can claim. This is the oldest thread in the work and the best documented one.",
    now: [
      {
        href: "/thesis",
        label: "Interaction design principles for industrial XR",
        tag: "master’s thesis",
      },
      {
        href: "/hri-study",
        label: "Classroom robot study",
        tag: "archive research case — observation to evaluation",
      },
      {
        href: "/aikakone",
        label: "Aikakone",
        tag: "concept work — field inquiry and service blueprinting",
      },
      {
        href: "/writing",
        label: "Writing",
        tag: "research notes",
      },
    ],
    progress:
      "Recent discovery artifacts — interview synthesis, assumption maps — are being anonymized for the direction-setting case.",
  },
  {
    id: "ai-and-data",
    title: "AI & Data",
    lead:
      "A current focus, labelled as such: designing AI as decision support inside real workflows — visible uncertainty, easy override, a fallback path that works. No shipped AI product is claimed here; the framework I design against is the evidence so far.",
    now: [
      {
        href: "/ai-decision-support",
        label: "AI as decision support",
        tag: "design framework — concept shell",
      },
      {
        href: "/hri-study",
        label: "Classroom robot study",
        tag: "human-in-the-loop behavior under speech-recognition limits",
      },
      {
        href: "/thesis",
        label: "Industrial XR thesis",
        tag: "emerging-tech interaction research",
      },
    ],
    progress:
      "Anonymized AI-workflow artifacts attach to the framework page as they are cleared — nothing gets published before that.",
  },
];

const FocusAreas = () => (
  <div className="focus-areas">
    {FOCUS_AREAS.map((area) => (
      <section
        key={area.id}
        id={area.id}
        className="focus-area"
        aria-labelledby={`${area.id}-heading`}
      >
        <h3 className="focus-area__title" id={`${area.id}-heading`}>
          {area.title}
        </h3>
        <p className="focus-area__lead">{area.lead}</p>
        <p className="focus-area__label">Proof today</p>
        <ul className="focus-area__links">
          {area.now.map((item) => (
            <li key={item.href + item.label}>
              <Link href={item.href} legacyBehavior>
                <a className="focus-area__link">
                  {item.label}
                  <HighlightUnderline />
                </a>
              </Link>
              <span className="focus-area__tag"> — {item.tag}</span>
            </li>
          ))}
        </ul>
        <p className="focus-area__label">In progress</p>
        <p className="focus-area__progress">
          {area.progress}
          {area.progressLink ? (
            <>
              {" "}
              <Link href={area.progressLink.href} legacyBehavior>
                <a className="focus-area__link">
                  {area.progressLink.label}
                  <HighlightUnderline />
                </a>
              </Link>
              .
            </>
          ) : null}
        </p>
      </section>
    ))}
    <style jsx>{`
      .focus-areas {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }

      @media only screen and (min-width: 62rem) {
        .focus-areas {
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }
      }

      .focus-area__title {
        font-size: 1.3em;
        line-height: 1.4;
        margin: 0 0 0.6em;
      }

      .focus-area__lead {
        line-height: 1.7;
        margin: 0 0 1.5em;
      }

      .focus-area__label {
        color: ${colors.textMuted};
        font-size: 0.78rem;
        font-weight: 600;
        letter-spacing: 0.06em;
        margin: 0 0 0.6rem;
        text-transform: uppercase;
      }

      .focus-area__links {
        list-style: none;
        margin: 0 0 1.5em;
        padding: 0;
      }

      .focus-area__links li {
        line-height: 1.6;
        margin-bottom: 0.6em;
      }

      .focus-area__links li:last-child {
        margin-bottom: 0;
      }

      .focus-area :global(.focus-area__link) {
        color: inherit;
        display: inline-block;
        font-weight: 500;
      }

      .focus-area__tag {
        color: ${colors.textMuted};
        font-size: 0.9rem;
      }

      .focus-area__progress {
        color: ${colors.textMuted};
        font-size: 0.95rem;
        line-height: 1.7;
        margin: 0;
      }
    `}</style>
  </div>
);

export default FocusAreas;
