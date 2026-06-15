import React from "react";

import ProjectPage from "../../components/ProjectPage";
import ArticleBody from "../../components/ArticleBody";
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
