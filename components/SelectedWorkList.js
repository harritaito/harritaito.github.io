import React from "react";
import Link from "next/link";
import Isvg from "react-inlinesvg";
import Projects from "./Projects";
import { resolveAssetSrc } from "./assetSource";
import { colors, radii } from "./design-system/tokens";
import arrow from "../static/media/icons/arrow-slim.svg";

const SelectedWorkList = () => {
  const projects = new Projects().featuredProjects;

  return (
    <div className="selected-work" aria-label="Selected work at a glance">
      {projects.map((project) => (
        <Link
          href={project.link}
          className={`selected-work__item ${project.color}`}
          key={project.name}
        >
          <span className="selected-work__meta">
            <span className="selected-work__label">{project.label}</span>
            <span className="selected-work__name">{project.projectName}</span>
          </span>
          <span className="selected-work__body">
            <span className="selected-work__title">{project.problemTitle}</span>
            <span className="selected-work__summary">{project.description}</span>
          </span>
          <span className="selected-work__cta" aria-hidden="true">
            View
            <Isvg className="selected-work__arrow" src={resolveAssetSrc(arrow)} />
          </span>
        </Link>
      ))}
      <style jsx>{`
        .selected-work {
          display: grid;
          gap: 0.85rem;
          margin-bottom: 2.5rem;
        }

        .selected-work :global(.selected-work__item) {
          align-items: center;
          background: var(--surface-elevated-color);
          border: 1px solid rgba(105, 106, 109, 0.2);
          border-radius: 1.25rem;
          color: inherit;
          display: grid;
          gap: 1rem;
          grid-template-columns: minmax(7rem, 0.7fr) minmax(0, 2fr) auto;
          padding: 1rem 1.15rem;
          text-decoration: none;
          transition: border-color 0.2s ease-out, transform 0.2s ease-out;
        }

        .selected-work :global(.selected-work__item:hover),
        .selected-work :global(.selected-work__item:focus) {
          transform: translate3d(0, -2px, 0);
        }

        .selected-work :global(.selected-work__item.green:hover),
        .selected-work :global(.selected-work__item.green:focus) {
          border-color: ${colors.accentGreen};
        }

        .selected-work :global(.selected-work__item.blue:hover),
        .selected-work :global(.selected-work__item.blue:focus) {
          border-color: ${colors.accentBlue};
        }

        .selected-work :global(.selected-work__item.red:hover),
        .selected-work :global(.selected-work__item.red:focus) {
          border-color: ${colors.accentRed};
        }

        .selected-work :global(.selected-work__item.purple:hover),
        .selected-work :global(.selected-work__item.purple:focus) {
          border-color: ${colors.accentPurple};
        }

        .selected-work :global(.selected-work__item.grey:hover),
        .selected-work :global(.selected-work__item.grey:focus) {
          border-color: ${colors.accentGrey};
        }

        .selected-work__meta,
        .selected-work__body {
          display: grid;
          gap: 0.35rem;
        }

        .selected-work__label {
          color: ${colors.textMuted};
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .selected-work__name {
          font-weight: 600;
        }

        .selected-work__title {
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.3;
        }

        .selected-work__summary {
          color: ${colors.textMuted};
          line-height: 1.55;
        }

        .selected-work__cta {
          align-items: center;
          border: 1px solid rgba(105, 106, 109, 0.25);
          border-radius: ${radii.circle};
          display: inline-flex;
          font-size: 0.9rem;
          font-weight: 600;
          gap: 0.35rem;
          justify-self: end;
          padding: 0.45em 0.8em;
          white-space: nowrap;
        }

        .selected-work :global(.selected-work__arrow) {
          display: inline-flex;
          height: 0.85rem;
          transition: transform 0.2s ease-out;
          width: 0.85rem;
        }

        .selected-work :global(.selected-work__item:hover .selected-work__arrow),
        .selected-work :global(.selected-work__item:focus .selected-work__arrow) {
          transform: translate3d(2px, 0, 0);
        }

        @media only screen and (max-width: 45rem) {
          .selected-work :global(.selected-work__item) {
            align-items: start;
            grid-template-columns: 1fr;
          }

          .selected-work__cta {
            justify-self: start;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .selected-work :global(.selected-work__item),
          .selected-work :global(.selected-work__arrow) {
            transition: none;
          }

          .selected-work :global(.selected-work__item:hover),
          .selected-work :global(.selected-work__item:focus),
          .selected-work :global(.selected-work__item:hover .selected-work__arrow),
          .selected-work :global(.selected-work__item:focus .selected-work__arrow) {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default SelectedWorkList;
