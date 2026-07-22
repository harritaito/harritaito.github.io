import React from "react";
import PropTypes from "prop-types";
import { colors, radii, shadows } from "./tokens";

// A compact before/after module for showing product-behavior craft:
// loading states, error recovery, empty states, and microcopy tone.
// Every instance is explicitly tagged as a concept example so the page
// never implies the revised copy shipped in the original project.

const CraftDetail = ({ kind, title, issue, before, after, why, className = "" }) => (
  <div className={className}>
    <section className="craft-detail">
      <header className="craft-detail-header">
        <span className="craft-detail-tag">Concept example</span>
        <span className="craft-detail-kind">{kind}</span>
      </header>
      <h4 className="craft-detail-title">{title}</h4>
      <p className="craft-detail-issue">{issue}</p>
      <div className="craft-detail-copy">
        <div className="craft-detail-panel craft-detail-before">
          <span className="craft-detail-copy-label">Typical version</span>
          <p className="craft-detail-copy-text">{before}</p>
        </div>
        <div className="craft-detail-panel craft-detail-after">
          <span className="craft-detail-copy-label">Revised</span>
          <p className="craft-detail-copy-text">{after}</p>
        </div>
      </div>
      <p className="craft-detail-why">
        <strong>Why it matters: </strong>
        {why}
      </p>
    </section>

    <style jsx>{`
      .craft-detail {
        margin: 0.75em 0;
        padding: 1.25rem 1.4rem;
        border-radius: 1rem;
        background: rgba(255, 255, 255, 0.55);
        box-shadow: ${shadows.light};
      }

      .craft-detail-header {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.6rem;
        margin-bottom: 0.6rem;
      }

      .craft-detail-tag {
        display: inline-block;
        padding: 0.25rem 0.7rem;
        border-radius: ${radii.pill};
        background: ${colors.markerHighlight};
        color: ${colors.textStrong};
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .craft-detail-kind {
        color: ${colors.textMuted};
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .craft-detail-title {
        margin: 0 0 0.4rem;
        color: ${colors.textStrong};
        font-size: 1.05rem;
        font-weight: 700;
        line-height: 1.3;
      }

      .craft-detail-issue {
        margin: 0 0 0.9rem;
        color: ${colors.textMuted};
        font-size: 0.92rem;
        line-height: 1.5;
      }

      .craft-detail-copy {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-bottom: 0.9rem;
      }

      .craft-detail-panel {
        flex: 1 1 14rem;
        padding: 0.85rem 1rem;
        border-radius: 0.75rem;
      }

      .craft-detail-before {
        border: 1.5px dashed rgba(0, 0, 0, 0.22);
        color: ${colors.textMuted};
      }

      .craft-detail-after {
        border: 1.5px solid rgba(0, 0, 0, 0.12);
        background: #ffffff;
        color: ${colors.textStrong};
      }

      .craft-detail-copy-label {
        display: block;
        margin-bottom: 0.4rem;
        color: ${colors.textMuted};
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .craft-detail-copy-text {
        margin: 0;
        font-size: 0.92rem;
        line-height: 1.5;
      }

      .craft-detail-why {
        margin: 0;
        color: ${colors.textStrong};
        font-size: 0.92rem;
        line-height: 1.5;
      }
    `}</style>
  </div>
);

CraftDetail.propTypes = {
  kind: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  before: PropTypes.string.isRequired,
  after: PropTypes.string.isRequired,
  why: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CraftDetail;
