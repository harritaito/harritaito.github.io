import React from "react";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Row from "../../components/Row";
import HighlightUnderline from "../../components/design-system/HighlightUnderline";
import { colors } from "../../components/design-system/tokens";
import { getAllArticles } from "../../lib/articles";

const colStyle = "col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7";

function formatDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleDateString("en-GB", { year: "numeric", month: "long" });
}

const WritingIndex = ({ articles }) => (
  <div className="Writing container">
    <Navbar nextProjectLink={null} color="green" />
    <Row
      content={
        <div className={`${colStyle} writing-intro`}>
          <h1>Writing</h1>
          <p>Research notes and longer-form pieces.</p>
          <a className="writing-rss" href="/feed.xml">
            RSS
            <HighlightUnderline />
          </a>
        </div>
      }
    />
    {articles.length === 0 ? (
      <Row content={<p className={colStyle}>No articles yet — check back soon.</p>} />
    ) : (
      articles.map((article) => (
        <Row
          key={article.slug}
          content={
            <article className={`${colStyle} writing-entry`}>
              <p className="writing-date">
                {formatDate(article.frontmatter.date)}
                {article.readingTime ? (
                  <span className="writing-reading-time">
                    {" · "}
                    {article.readingTime}
                  </span>
                ) : null}
              </p>
              <h2 className="writing-title">
                <Link href={`/writing/${article.slug}`} legacyBehavior>
                  <a>
                    {article.frontmatter.title}
                    <HighlightUnderline />
                  </a>
                </Link>
              </h2>
              {article.frontmatter.summary ? (
                <p className="writing-summary">{article.frontmatter.summary}</p>
              ) : null}
              {Array.isArray(article.frontmatter.tags) &&
              article.frontmatter.tags.length ? (
                <ul className="writing-tags" aria-label="Topics">
                  {article.frontmatter.tags.filter(Boolean).map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          }
        />
      ))
    )}
    <Footer />
    <style jsx>{`
      .Writing {
        padding-top: 5rem;
        padding-bottom: 2rem;
      }
      @media only screen and (max-width: 45rem) {
        .Writing {
          padding-top: 2rem;
        }
      }

      .writing-intro {
        margin-top: 1.5rem;
      }

      .writing-intro h1 {
        margin-bottom: 0.5rem;
      }

      .writing-rss {
        display: inline-block;
        margin-top: 0.5rem;
        font-size: 0.85rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: ${colors.textMuted};
      }

      .writing-entry {
        margin-top: 2.5rem;
      }

      .writing-date {
        color: ${colors.textMuted};
        font-size: 0.9rem;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        margin: 0 0 0.25rem;
      }

      .writing-title {
        margin: 0 0 0.5rem;
        font-weight: bold;
      }

      .writing-summary {
        margin: 0;
        line-height: 1.7;
        color: ${colors.textMuted};
      }

      .writing-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        list-style: none;
        margin: 0.75rem 0 0;
        padding: 0;
      }

      .writing-tags li {
        border: 1px solid rgba(18, 164, 45, 0.24);
        border-radius: 999px;
        color: ${colors.accentGreen};
        font-size: 0.85rem;
        padding: 0.25rem 0.7rem;
      }
    `}</style>
  </div>
);

export async function getStaticProps() {
  // Protected articles are reachable only by direct URL — never listed here.
  const articles = getAllArticles().filter((a) => !a.frontmatter.protected);
  return { props: { articles } };
}

export default WritingIndex;
