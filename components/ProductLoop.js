import React, { useEffect, useRef, useState } from "react";
import { colors } from "./design-system/tokens";

const STAGES = [
  {
    label: "Discovery",
    behavior:
      "Sit in the real workflow: interviews, support threads, and the spreadsheet someone quietly runs everything from.",
    output:
      "A map of how the work really happens — not how the org thinks it does.",
  },
  {
    label: "Framing",
    behavior:
      "Name the actual problem and what we are deliberately not solving, so scope stops sliding mid-project.",
    output:
      "One sentence everyone agrees on: the problem, and the non-goals around it.",
  },
  {
    label: "Concept models",
    behavior:
      "Map the objects, states, and relationships underneath before drawing a single screen.",
    output: "An object model the whole team can point at and reason about.",
  },
  {
    label: "Prototypes",
    behavior:
      "Put clickable flows in front of real data and real users to find where the idea breaks.",
    output: "Evidence — where the flow holds, and where it quietly falls apart.",
  },
  {
    label: "Design specs",
    behavior:
      "Hand over buildable detail: every state, empty view, error, and edge case engineers will hit.",
    output: "A spec engineers can build from without guessing.",
  },
  {
    label: "Implementation support",
    behavior:
      "Stay in the build, answer the questions Figma cannot, and adjust as real constraints surface.",
    output:
      "Decisions made in the moment, in context — not weeks later in a thread.",
  },
  {
    label: "Design QA",
    behavior:
      "Check the built UI against intent and catch spacing, state, and behavior drift before users do.",
    output: "A build that matches intent, down to the empty and error states.",
  },
  {
    label: "Measurement",
    behavior:
      "Watch it in use and ask the honest question: did this make the work easier, or just different?",
    output: "An honest read on whether the work actually got easier.",
  },
  {
    label: "System contribution",
    behavior:
      "Fold the patterns that held up back into the design system so the next team starts ahead.",
    output: "Patterns, hardened and handed forward for the next team.",
  },
];

// Bespoke line-art glyph per stage. `a: true` marks an accent (blue) stroke.
// Drawn on a 56x56 canvas, animated in on each panel switch.
const GLYPHS = [
  // Discovery — magnifier over a field
  [
    { d: "M24 24m-12 0a12 12 0 1 0 24 0a12 12 0 1 0 -24 0" },
    { d: "M33 33l13 13", a: true },
    { d: "M18 24h12M24 18v12", a: true },
  ],
  // Framing — crop brackets around a focus
  [
    { d: "M12 22V12h10" },
    { d: "M44 34v10H34" },
    { d: "M22 28h12", a: true },
  ],
  // Concept models — connected nodes
  [
    { d: "M16 16m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" },
    { d: "M40 20m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" },
    { d: "M28 42m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" },
    { d: "M19 18l18 3M38 24L31 38M25 39L18 20", a: true },
  ],
  // Prototypes — cursor clicking a frame
  [
    { d: "M12 12h24v20H12z" },
    { d: "M30 28l15 6-6 2-2 6-7-14z", a: true },
  ],
  // Design specs — annotated document
  [
    { d: "M16 8h18l8 8v32H16z" },
    { d: "M34 8v8h8" },
    { d: "M22 26h14M22 33h14M22 40h9", a: true },
  ],
  // Implementation support — code brackets
  [
    { d: "M20 20l-8 8 8 8" },
    { d: "M36 20l8 8-8 8" },
    { d: "M32 16l-8 24", a: true },
  ],
  // Design QA — checked badge
  [
    { d: "M28 28m-16 0a16 16 0 1 0 32 0a16 16 0 1 0 -32 0" },
    { d: "M20 29l6 6 12-13", a: true },
  ],
  // Measurement — trend line
  [
    { d: "M14 12v32h32" },
    { d: "M18 36l8-8 7 6 11-14", a: true },
  ],
  // System contribution — module folded into a system
  [
    { d: "M28 8l16 9v18l-16 9-16-9V17z" },
    { d: "M28 8v15m0 0l13 7m-13-7l-13 7", a: true },
  ],
];

const ProductLoop = () => {
  const rootRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [active, setActive] = useState(null);
  const [displayIndex, setDisplayIndex] = useState(0);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || revealed) {
      return undefined;
    }

    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [revealed]);

  const stage = STAGES[displayIndex];

  return (
    <div
      ref={rootRef}
      className={`product-loop${revealed ? " is-visible" : ""}`}
      onMouseLeave={() => setActive(null)}
    >
      <ol
        className="product-loop__list"
        aria-label="How I work, from ambiguity to buildable output"
      >
        {STAGES.map((item, index) => (
          <li
            className={`product-loop__stage${
              active === index ? " is-active" : ""
            }`}
            key={item.label}
            style={{ "--i": index }}
            onMouseEnter={() => {
              setActive(index);
              setDisplayIndex(index);
            }}
            onFocus={() => {
              setActive(index);
              setDisplayIndex(index);
            }}
            tabIndex={0}
          >
            <span className="product-loop__node" aria-hidden="true" />
            <span className="product-loop__index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="product-loop__label">{item.label}</p>
            <p className="product-loop__behavior">{item.behavior}</p>
          </li>
        ))}
      </ol>

      <aside
        className={`product-loop__panel${
          active !== null ? " is-active" : ""
        }`}
        aria-hidden="true"
      >
        <div className="product-loop__panel-inner" key={displayIndex}>
          <span className="product-loop__panel-num">
            {String(displayIndex + 1).padStart(2, "0")}
          </span>
          <svg
            className="product-loop__glyph"
            viewBox="0 0 56 56"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {GLYPHS[displayIndex].map((path) => (
              <path
                key={path.d}
                d={path.d}
                pathLength="1"
                className={path.a ? "accent" : undefined}
              />
            ))}
          </svg>
          <span className="product-loop__panel-kicker">What this produces</span>
          <p className="product-loop__panel-label">{stage.label}</p>
          <p className="product-loop__panel-output">{stage.output}</p>
        </div>
      </aside>

      <style jsx>{`
        .product-loop {
          display: flex;
          align-items: flex-start;
          gap: 2.5rem;
          margin: 0;
          position: relative;
        }

        .product-loop__list {
          flex: 0 1 38rem;
          list-style: none;
          margin: 0;
          padding: 0;
          position: relative;
        }

        /* Base spine: gradient track with a slow flowing shimmer */
        .product-loop__list::before {
          background: linear-gradient(
            180deg,
            ${colors.accentPurple},
            ${colors.accentBlue}
          );
          border-radius: 1px;
          bottom: 0.55rem;
          content: "";
          left: 0.46rem;
          opacity: 0.35;
          position: absolute;
          top: 0.55rem;
          width: 2px;
        }

        .product-loop__list::after {
          background: linear-gradient(
            180deg,
            transparent 0%,
            ${colors.accentBlue} 45%,
            ${colors.accentPurple} 55%,
            transparent 100%
          );
          background-size: 100% 220%;
          border-radius: 1px;
          bottom: 0.55rem;
          content: "";
          left: 0.46rem;
          opacity: 0.9;
          position: absolute;
          top: 0.55rem;
          width: 2px;
          animation: product-loop-flow 6s ease-in-out infinite;
        }

        @keyframes product-loop-flow {
          0% {
            background-position: 0 -110%;
          }
          100% {
            background-position: 0 110%;
          }
        }

        .product-loop__stage {
          padding-bottom: 1.6rem;
          padding-left: 2rem;
          position: relative;
          opacity: 0;
          outline: none;
          transform: translateY(8px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          transition-delay: calc(var(--i) * 70ms);
        }

        .product-loop.is-visible .product-loop__stage {
          opacity: 1;
          transform: translateY(0);
        }

        .product-loop__stage:last-child {
          padding-bottom: 0;
        }

        .product-loop__node {
          background: ${colors.accentPurple};
          border: 3px solid ${colors.pageBackground};
          border-radius: 999px;
          box-shadow: 0 0 0 0 rgba(145, 87, 255, 0.35);
          height: 0.85rem;
          left: 0;
          position: absolute;
          top: 0.4rem;
          width: 0.85rem;
          transition: background 0.3s ease, box-shadow 0.35s ease,
            transform 0.3s ease;
        }

        /* Concentric ring that ripples out on hover */
        .product-loop__node::after {
          border: 1.5px solid ${colors.accentBlue};
          border-radius: 999px;
          content: "";
          inset: -3px;
          opacity: 0;
          position: absolute;
          transform: scale(0.4);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .product-loop__stage:hover .product-loop__node,
        .product-loop__stage.is-active .product-loop__node {
          background: ${colors.accentBlue};
          box-shadow: 0 0 0 6px rgba(30, 149, 237, 0.14);
          transform: scale(1.12);
        }

        .product-loop__stage:hover .product-loop__node::after,
        .product-loop__stage.is-active .product-loop__node::after {
          opacity: 0.7;
          transform: scale(1.5);
        }

        .product-loop__index {
          color: ${colors.accentPurple};
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          transition: color 0.3s ease, letter-spacing 0.3s ease,
            transform 0.3s ease;
        }

        .product-loop__stage:hover .product-loop__index,
        .product-loop__stage.is-active .product-loop__index {
          color: ${colors.accentBlue};
          letter-spacing: 0.16em;
          transform: translateX(2px);
        }

        .product-loop__label {
          font-size: 1.05rem;
          font-weight: 600;
          margin: 0.25rem 0 0.4rem;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .product-loop__stage:hover .product-loop__label,
        .product-loop__stage.is-active .product-loop__label {
          color: ${colors.accentPurple};
          transform: translateX(2px);
        }

        .product-loop__behavior {
          color: ${colors.textMuted};
          font-size: 0.95rem;
          line-height: 1.55;
          margin: 0;
        }

        /* Detail panel — bubbles in on hover, sticky beside the timeline */
        .product-loop__panel {
          flex: 1 1 0;
          position: sticky;
          top: 6rem;
          align-self: flex-start;
          margin-top: 1rem;
          min-width: 0;
          opacity: 0;
          transform: translateY(10px);
          pointer-events: none;
          transition: opacity 0.45s ease, transform 0.45s ease;
        }

        .product-loop__panel.is-active {
          opacity: 1;
          transform: translateY(0);
        }

        .product-loop__panel-inner {
          background: linear-gradient(
            155deg,
            rgba(145, 87, 255, 0.08),
            rgba(30, 149, 237, 0.05)
          );
          border: 1px solid rgba(145, 87, 255, 0.18);
          border-radius: 18px;
          padding: 1.6rem 1.7rem 1.7rem;
          position: relative;
          overflow: hidden;
          animation: product-loop-rise 0.5s ease both;
        }

        .product-loop__panel-inner::before {
          background: linear-gradient(
            180deg,
            ${colors.accentPurple},
            ${colors.accentBlue}
          );
          border-radius: 3px;
          bottom: 1.6rem;
          content: "";
          left: 0;
          position: absolute;
          top: 1.6rem;
          width: 3px;
        }

        @keyframes product-loop-rise {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .product-loop__panel-num {
          color: rgba(145, 87, 255, 0.22);
          font-size: 3rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          line-height: 1;
          position: absolute;
          right: 1.5rem;
          top: 1.3rem;
        }

        .product-loop__glyph {
          display: block;
          height: 3.5rem;
          margin-bottom: 1rem;
          width: 3.5rem;
        }

        .product-loop__glyph :global(path) {
          fill: none;
          stroke: ${colors.accentPurple};
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 2;
          animation: product-loop-draw 0.7s ease forwards;
        }

        .product-loop__glyph :global(path.accent) {
          stroke: ${colors.accentBlue};
          animation-delay: 0.28s;
        }

        @keyframes product-loop-draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        .product-loop__panel-kicker {
          color: ${colors.accentBlue};
          display: block;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .product-loop__panel-label {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0.35rem 0 0.55rem;
        }

        .product-loop__panel-output {
          color: ${colors.textMuted};
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        @media only screen and (max-width: 60rem) {
          .product-loop {
            display: block;
          }

          .product-loop__list {
            max-width: 38rem;
          }

          .product-loop__panel {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .product-loop__list::after {
            animation: none;
          }

          .product-loop__stage {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .product-loop__node,
          .product-loop__node::after,
          .product-loop__index,
          .product-loop__label,
          .product-loop__panel {
            transition: none;
          }

          .product-loop__panel-inner {
            animation: none;
          }

          .product-loop__glyph :global(path) {
            animation: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductLoop;
