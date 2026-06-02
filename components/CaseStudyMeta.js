import React from 'react';
import PropTypes from 'prop-types';
import { colors, radii } from './design-system/tokens';

const FIELD_ORDER = [
  { key: 'myRole', label: 'My role' },
  { key: 'team', label: 'Team' },
  { key: 'timeline', label: 'Timeline' },
  { key: 'context', label: 'Context' },
  { key: 'problem', label: 'Problem' },
  { key: 'users', label: 'Users' },
  { key: 'businessContext', label: 'Business context' },
  { key: 'constraints', label: 'Constraints' },
  { key: 'discovery', label: 'Discovery' },
  { key: 'keyInsights', label: 'Key insights' },
  { key: 'conceptModel', label: 'Concept model' },
  { key: 'keyDecisions', label: 'Key decisions' },
  { key: 'designDetails', label: 'Design details' },
  { key: 'implementationSupport', label: 'Implementation support' },
  { key: 'outcome', label: 'Outcome' },
  { key: 'reflection', label: 'Reflection' },
];

const CASE_STUDY_COLUMN = 'col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6';

const renderValue = (value, key) => {
  if (value == null || value === '') {
    return null;
  }

  if (Array.isArray(value)) {
    return (
      <ul className="case-study-meta-list">
        {value.map((item, index) => (
          <li key={`${key}-${index}`}>{item}</li>
        ))}
      </ul>
    );
  }

  if (React.isValidElement(value)) {
    return value;
  }

  return <p>{value}</p>;
};

const CaseStudyMeta = ({ status, summary, note, fields = {} }) => {
  const hasFields = FIELD_ORDER.some(({ key }) => fields[key]);

  return (
    <section className="case-study-meta row" aria-label="Case study details">
      <div className={CASE_STUDY_COLUMN}>
        {status ? <div className="case-study-meta-status">{status}</div> : null}
        {summary ? <p className="case-study-meta-summary">{summary}</p> : null}
        {note ? <div className="case-study-meta-note">{note}</div> : null}
        {hasFields ? (
          <dl className="case-study-meta-grid">
            {FIELD_ORDER.map(({ key, label }) => {
              const value = fields[key];

              if (value == null || value === '') {
                return null;
              }

              return (
                <div className="case-study-meta-field" key={key}>
                  <dt>{label}</dt>
                  <dd>{renderValue(value, key)}</dd>
                </div>
              );
            })}
          </dl>
        ) : null}
      </div>

      <style jsx>{`
        .case-study-meta {
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .case-study-meta-status {
          display: inline-block;
          margin-bottom: 0.75rem;
          padding: 0.35rem 0.8rem;
          border-radius: ${radii.pill};
          background: ${colors.progressMint};
          color: ${colors.textStrong};
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .case-study-meta-summary {
          margin: 0 0 1rem;
          max-width: 46rem;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .case-study-meta-note {
          max-width: 46rem;
          margin-bottom: 1.5rem;
          padding: 0.85rem 1rem;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.72);
          box-shadow: 0 0.25em 0.5em 0 rgba(0,0,0,0.15);
          color: ${colors.textMuted};
          font-size: 0.92rem;
          line-height: 1.5;
        }

        .case-study-meta-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
          gap: 1rem 1.25rem;
          margin: 0;
        }

        .case-study-meta-field {
          min-width: 0;
        }

        .case-study-meta-field dt {
          margin-bottom: 0.3rem;
          color: ${colors.textMuted};
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .case-study-meta-field dd {
          margin: 0;
          color: ${colors.textStrong};
          font-size: 0.95rem;
          line-height: 1.55;
        }

        .case-study-meta-field p {
          margin: 0;
        }

        .case-study-meta-list {
          margin: 0;
          padding-left: 1.15rem;
        }

        .case-study-meta-list li + li {
          margin-top: 0.35rem;
        }

        @media only screen and (max-width: 45rem) {
          .case-study-meta {
            margin-top: 1.5rem;
          }

          .case-study-meta-summary {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

CaseStudyMeta.propTypes = {
  status: PropTypes.string,
  summary: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  note: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  fields: PropTypes.shape({
    myRole: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
    team: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
    timeline: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
    context: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
    problem: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
    users: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
    businessContext: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
    constraints: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
    discovery: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
    keyInsights: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
    conceptModel: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
    keyDecisions: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
    designDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
    implementationSupport: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
    outcome: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
    reflection: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
  }),
};

export default CaseStudyMeta;
