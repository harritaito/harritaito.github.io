import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Row from "./Row";
import { resolveAssetSrc } from "./assetSource";
import { colors } from "./design-system/tokens";

const pStyle =
  "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";

const inRow = (node) => <Row content={node} />;

const components = {
  p: ({ children }) => inRow(<p className={pStyle}>{children}</p>),
  h2: ({ children }) => inRow(<h2 className={pStyle}>{children}</h2>),
  h3: ({ children }) => inRow(<h3 className={pStyle}>{children}</h3>),
  h4: ({ children }) => inRow(<h4 className={pStyle}>{children}</h4>),
  ul: ({ children }) => inRow(<ul className={`${pStyle} list`}>{children}</ul>),
  ol: ({ children }) => inRow(<ol className={`${pStyle} list`}>{children}</ol>),
  blockquote: ({ children }) =>
    inRow(<blockquote className={`${pStyle} blockquote`}>{children}</blockquote>),
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
  img: ({ src, alt }) =>
    inRow(
      <img className={`${pStyle} article-image`} src={resolveAssetSrc(src)} alt={alt || ""} />,
    ),
  table: ({ children }) =>
    inRow(
      <div className={`${pStyle} table-wrap`}>
        <table className="article-table">{children}</table>
      </div>,
    ),
};

const ArticleBody = ({ content }) => (
  <div className="ArticleBody">
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
    <style jsx global>{`
      .ArticleBody h2 {
        margin: 2rem auto 0.5rem;
        font-weight: bold;
      }

      .ArticleBody h3,
      .ArticleBody h4 {
        margin: 1.5rem auto 0.5rem;
        font-weight: bold;
      }

      .ArticleBody p {
        line-height: 1.7;
      }

      .ArticleBody .list {
        padding-left: 25px;
        margin-top: 0;
      }

      .ArticleBody .list li {
        margin-bottom: 0.75em;
        line-height: 1.7;
      }

      .ArticleBody .blockquote {
        display: block;
        border-left: 3px solid ${colors.accentGreen};
        padding-left: 1.25rem;
        margin: 0.5rem auto;
        font-style: italic;
        line-height: 1.7;
        color: ${colors.textStrong};
      }

      .ArticleBody .article-image {
        display: block;
        width: 100%;
        height: auto;
      }

      .ArticleBody .table-wrap {
        overflow-x: auto;
      }

      .ArticleBody .article-table {
        border-collapse: collapse;
        width: 100%;
      }

      .ArticleBody .article-table th,
      .ArticleBody .article-table td {
        border: 1px solid ${colors.textMuted};
        padding: 0.5rem 0.75rem;
        text-align: left;
      }
    `}</style>
  </div>
);

export default ArticleBody;
