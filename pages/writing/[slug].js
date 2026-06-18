import React from "react";

import ProjectPage from "../../components/ProjectPage";
import ArticleBody from "../../components/ArticleBody";
import { colors, shadows } from "../../components/design-system/tokens";
import { getArticleSlugs, getArticleBySlug } from "../../lib/articles";

const placeholderHero = "/static/media/pohja.svg";

const Article = ({ frontmatter, content }) => (
  <div className="Article">
    <ProjectPage
      projectName={frontmatter.title}
      title={frontmatter.title}
      description={frontmatter.summary || ""}
      hero={frontmatter.hero || placeholderHero}
      heroAlt={frontmatter.heroAlt || ""}
      eyebrow={frontmatter.eyebrow || "Writing"}
      navbarColor={frontmatter.navbarColor || ""}
      showNextProject={false}
      content={<ArticleBody content={content} />}
    />
    <style jsx global>{`
      .Article .project-page {
        background:
          radial-gradient(circle at 12% 8%, rgba(139, 200, 246, 0.22), transparent 17rem),
          ${colors.pageBackground};
        padding-top: 5rem;
      }

      .Article .project-page h1 {
        font-family: Trirong, serif;
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
        margin-top: 3.5rem;
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

      @media only screen and (max-width: 45rem) {
        .Article .project-page {
          padding-top: 3.5rem;
        }

        .Article .project-page h1 {
          font-size: clamp(2.4rem, 14vw, 4rem);
        }

        .Article .project-page .content {
          margin-top: 2rem;
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
  return { props: { frontmatter, content } };
}

export default Article;
