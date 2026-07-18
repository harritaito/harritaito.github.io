import React from "react";
import PropTypes from "prop-types";
import { colors, radii } from "./tokens";

// Presentational scaffolding for the design-system case shell.
// Both components make incomplete areas obvious on the page itself, so the
// shell stays honest while real screenshots and evidence are still pending.

export const ArtifactPlaceholder = ({ title, prompt, className }) => (
  <div className={className}>
    <figure className="artifact-placeholder">
      <span className="artifact-placeholder-tag">Artifact pending</span>
      <figcaption className="artifact-placeholder-title">{title}</figcaption>
      <p className="artifact-placeholder-prompt">{prompt}</p>
    </figure>

    <style jsx>{`
      .artifact-placeholder {
        margin: 0.75em 0;
        padding: 1.25rem 1.4rem;
        border: 1.5px dashed rgba(0, 0, 0, 0.22);
        border-radius: 1rem;
        background: rgba(255, 255, 255, 0.55);
      }

      .artifact-placeholder-tag {
        display: inline-block;
        margin-bottom: 0.6rem;
        padding: 0.25rem 0.7rem;
        border-radius: ${radii.pill};
        background: ${colors.markerHighlight};
        color: ${colors.textStrong};
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .artifact-placeholder-title {
        margin: 0 0 0.4rem;
        color: ${colors.textStrong};
        font-size: 1.05rem;
        font-weight: 700;
        line-height: 1.3;
      }

      .artifact-placeholder-prompt {
        margin: 0;
        color: ${colors.textMuted};
        font-size: 0.92rem;
        line-height: 1.5;
      }
    `}</style>
  </div>
);

ArtifactPlaceholder.propTypes = {
  title: PropTypes.string.isRequired,
  prompt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ArtifactPlaceholder.defaultProps = {
  className: "",
};

export const TbdNote = ({ children, className }) => (
  <p className={`tbd-note ${className}`}>
    <span className="tbd-note-flag">To be completed with real evidence</span>
    {children}

    <style jsx>{`
      .tbd-note {
        margin-top: 0.5em;
        color: ${colors.textMuted};
        font-style: italic;
        line-height: 1.5;
      }

      .tbd-note-flag {
        display: inline-block;
        margin-right: 0.6rem;
        padding: 0.15rem 0.6rem;
        border-radius: ${radii.pill};
        border: 1px solid rgba(0, 0, 0, 0.18);
        color: ${colors.textStrong};
        font-size: 0.72rem;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        vertical-align: middle;
      }
    `}</style>
  </p>
);

TbdNote.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

TbdNote.defaultProps = {
  children: null,
  className: "",
};
