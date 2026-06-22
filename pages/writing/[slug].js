import React from "react";
import Link from "next/link";

import ProjectPage from "../../components/ProjectPage";
import ArticleBody from "../../components/ArticleBody";
import { colors, radii, shadows } from "../../components/design-system/tokens";
import { getArticleSlugs, getArticleBySlug } from "../../lib/articles";
import { estimateReadingTime } from "../../lib/readingTime";

const placeholderHero = "/static/media/pohja.svg";
const pStyle =
  "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";

function formatDate(value) {
  if (!value) return "Undated";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function normalizeTags(tags) {
  if (!Array.isArray(tags)) return [];
  return tags.filter(Boolean);
}

const ArticleMeta = ({ frontmatter, readingTime }) => {
  const tags = normalizeTags(frontmatter.tags);

  return (
    <section className={`${pStyle} article-meta`} aria-label="Article details">
      <dl className="article-meta-list">
        <div>
          <dt>Published</dt>
          <dd>
            <time dateTime={frontmatter.date || undefined}>
              {formatDate(frontmatter.date)}
            </time>
          </dd>
        </div>
        <div>
          <dt>Reading time</dt>
          <dd>{frontmatter.readingTime || readingTime}</dd>
        </div>
        {frontmatter.updated ? (
          <div>
            <dt>Updated</dt>
            <dd>
              <time dateTime={frontmatter.updated}>
                {formatDate(frontmatter.updated)}
              </time>
            </dd>
          </div>
        ) : null}
      </dl>
      {tags.length ? (
        <ul className="article-tags" aria-label="Topics">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      ) : null}
      {frontmatter.heroCredit ? (
        <p className="hero-credit">Image: {frontmatter.heroCredit}</p>
      ) : null}
    </section>
  );
};

const ArticleFooter = ({ frontmatter, slug }) => {
  const permalink = frontmatter.canonicalUrl || `/writing/${slug}`;

  return (
    <footer className={`${pStyle} article-footer`}>
      <p className="footer-kicker">Keep reading</p>
      <h2>More notes from the worktable</h2>
      <p>
        This piece is part of a small writing shelf for process notes, research
        reflections, and design decisions that do not need a full case study.
      </p>
      <div className="article-footer-actions">
        <Link href="/writing" legacyBehavior>
          <a>Back to writing</a>
        </Link>
        <a href={permalink}>Permalink</a>
      </div>
    </footer>
  );
};

const Article = ({ frontmatter, content, readingTime, slug }) => (
  <div className="Article">
    <ProjectPage
      projectName={frontmatter.title}
      title={frontmatter.title}
      description={frontmatter.summary || ""}
      hero={frontmatter.hero || placeholderHero}
      heroAlt={frontmatter.heroAlt || ""}
      eyebrow={frontmatter.eyebrow || "Writing"}
      navbarColor={frontmatter.navbarColor || "green"}
      showNextProject={false}
      content={
        <>
          <ArticleMeta frontmatter={frontmatter} readingTime={readingTime} />
          <ArticleBody content={content} />
          <ArticleFooter frontmatter={frontmatter} slug={slug} />
        </>
      }
    />
    <style jsx global>{`
      .Article .project-page {
        background:
          radial-gradient(
            circle at 12% 8%,
            rgba(139, 200, 246, 0.22),
            transparent 17rem
          ),
          linear-gradient(180deg, rgba(255, 255, 255, 0.64), transparent 24rem),
          ${colors.pageBackground};
        padding-top: 5rem;
      }

      .Article .project-page h1 {
        font-family: "Voltaire", sans-serif;
        font-size: clamp(3rem, 8vw, 6.5rem);
        font-weight: 500;
        letter-spacing: 0.02em;
        line-height: 0.95;
        text-wrap: balance;
      }

      .Article .project-eyebrow {
        color: ${colors.accentGreen};
        letter-spacing: 0.12em;
      }

      .Article .project-page .subtitle {
        font-size: clamp(1.25rem, 2.8vw, 2.25rem);
      }

      .Article .project-page .subtitle p {
        color: ${colors.textMuted};
        line-height: 1.35;
        max-width: 36rem;
        text-wrap: pretty;
      }

      .Article .hero-image {
        background: white;
        border-radius: 0 0 2.5rem 0;
        max-height: 28rem;
        object-position: center;
      }

      .Article .project-page .content {
        margin-top: 0;
      }

      .Article .article-meta {
        background: rgba(255, 255, 255, 0.82);
        box-shadow: ${shadows.light};
        margin: -2rem auto 3.5rem;
        padding: 1.15rem 1.25rem;
        position: relative;
        z-index: 1;
      }

      .Article .article-meta-list {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        margin: 0;
      }

      .Article .article-meta-list dt,
      .Article .footer-kicker,
      .Article .hero-credit {
        color: ${colors.textMuted};
        font-size: 0.78rem;
        font-weight: 500;
        letter-spacing: 0.08em;
        margin: 0;
        text-transform: uppercase;
      }

      .Article .article-meta-list dd {
        color: ${colors.textStrong};
        font-size: 0.98rem;
        margin: 0.2rem 0 0;
      }

      .Article .article-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        list-style: none;
        margin: 1rem 0 0;
        padding: 0;
      }

      .Article .article-tags li {
        border: 1px solid rgba(18, 164, 45, 0.24);
        border-radius: ${radii.pill};
        color: ${colors.accentGreen};
        font-size: 0.85rem;
        padding: 0.25rem 0.7rem;
      }

      .Article .hero-credit {
        margin-top: 1rem;
      }

      .Article .ArticleBody p,
      .Article .ArticleBody .list,
      .Article .ArticleBody .blockquote,
      .Article .ArticleBody .table-wrap {
        font-size: 1.06rem;
        max-width: 42rem;
      }

      .Article .ArticleBody p {
        color: ${colors.textStrong};
        line-height: 1.85;
        text-wrap: pretty;
      }

      .Article .ArticleBody h2 {
        border-top: 1px solid rgba(105, 106, 109, 0.22);
        font-size: clamp(2rem, 4vw, 3.2rem);
        line-height: 1.08;
        margin-top: 4rem;
        padding-top: 1.25rem;
        text-wrap: balance;
      }

      .Article .ArticleBody h3,
      .Article .ArticleBody h4 {
        color: ${colors.textStrong};
        letter-spacing: -0.01em;
        margin-top: 2.25rem;
        text-wrap: balance;
      }

      .Article .ArticleBody a {
        background-image: linear-gradient(
          transparent 58%,
          ${colors.markerHighlight} 58%,
          ${colors.markerHighlight} 88%,
          transparent 88%
        );
        color: ${colors.textStrong};
        text-decoration: none;
      }

      .Article .ArticleBody a:hover,
      .Article .ArticleBody a:focus {
        color: ${colors.accentGreen};
      }

      .Article .ArticleBody .blockquote {
        background: rgba(255, 255, 255, 0.68);
        box-shadow: ${shadows.light};
        padding: 1rem 1.25rem;
      }

      .Article .ArticleBody .article-image {
        border-radius: 0 1.5rem 0 0;
        box-shadow: ${shadows.media};
        margin: 1rem auto 2rem;
      }

      .Article .article-footer {
        border-top: 1px solid rgba(105, 106, 109, 0.22);
        margin: 4rem auto 2rem;
        padding-top: 1.5rem;
      }

      .Article .article-footer h2 {
        font-size: clamp(1.75rem, 4vw, 2.6rem);
        line-height: 1.1;
        margin: 0.35rem 0 0.75rem;
      }

      .Article .article-footer p {
        color: ${colors.textMuted};
        line-height: 1.7;
        max-width: 38rem;
      }

      .Article .article-footer-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: 1.25rem;
      }

      .Article .article-footer-actions a {
        border: 1px solid ${colors.accentGreen};
        border-radius: ${radii.pill};
        color: ${colors.accentGreen};
        padding: 0.45rem 1rem;
        text-decoration: none;
        transition: all 0.2s linear;
      }

      .Article .article-footer-actions a:hover,
      .Article .article-footer-actions a:focus {
        background: ${colors.accentGreen};
        color: white;
      }

      @media only screen and (max-width: 45rem) {
        .Article .project-page {
          padding-top: 3.5rem;
        }

        .Article .project-page h1 {
          font-size: clamp(2.4rem, 14vw, 4rem);
        }

        .Article .article-meta {
          margin-top: -1rem;
        }

        .Article .article-meta-list {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </div>
);

export async function getStaticPaths() {
  return {
    paths: getArticleSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { frontmatter, content } = getArticleBySlug(params.slug);
  return {
    props: {
      frontmatter,
      content,
      readingTime: estimateReadingTime(content),
      slug: params.slug,
    },
  };
}

export default Article;
