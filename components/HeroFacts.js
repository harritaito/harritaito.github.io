import React from "react";
import Link from "next/link";
import { colors, radii, shadows } from "./design-system/tokens";

const HERO_FACTS = [
  {
    label: "Currently",
    value: "Product designer focused on complex services and systems.",
  },
  {
    label: "Based in",
    value: "Finland, working with remote and local teams.",
  },
  {
    label: "Best for",
    value: "Research-led UX, service clarity, and product storytelling.",
  },
];

const HeroFacts = () => (
  <aside className="hero-facts" aria-label="Profile details">
    <div className="hero-facts__items">
      {HERO_FACTS.map((fact) => (
        <div className="hero-facts__item" key={fact.label}>
          <p className="hero-facts__label">{fact.label}</p>
          <p className="hero-facts__value">{fact.value}</p>
        </div>
      ))}
    </div>
    <Link href="/contact" className="hero-facts__contact">
      Start a conversation
    </Link>
    <style jsx>{`
      .hero-facts {
        background: var(--surface-elevated-color);
        border-radius: 1.5rem;
        box-shadow: ${shadows.media};
        display: grid;
        gap: 1.25rem;
        margin-top: 2rem;
        max-width: 45rem;
        padding: 1.25rem;
      }

      .hero-facts__items {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .hero-facts__item {
        min-width: 0;
      }

      .hero-facts__label {
        color: ${colors.textMuted};
        font-size: 0.78rem;
        font-weight: 600;
        letter-spacing: 0.06em;
        margin: 0 0 0.4rem;
        text-transform: uppercase;
      }

      .hero-facts__value {
        font-size: 0.95rem;
        line-height: 1.5;
        margin: 0;
      }

      .hero-facts__contact {
        align-self: start;
        border: 2px solid rgba(145, 87, 255, 0.35);
        border-radius: ${radii.circle};
        color: inherit;
        display: inline-flex;
        font-weight: 600;
        justify-self: start;
        padding: 0.65em 1.25em;
        text-decoration: none;
        transition: border-color 0.2s ease-out, color 0.2s ease-out;
      }

      .hero-facts__contact:hover,
      .hero-facts__contact:focus {
        border-color: ${colors.accentPurple};
        color: ${colors.accentPurple};
      }

      @media only screen and (max-width: 45rem) {
        .hero-facts {
          border-radius: 1.1rem;
          margin-top: 1.5rem;
        }

        .hero-facts__items {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </aside>
);

export default HeroFacts;
