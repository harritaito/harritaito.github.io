import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import WritingIndex from '../../pages/writing/index';
import { getAllArticles } from '../../lib/articles';

jest.mock('next/link', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: ({ href, children, className }) => React.createElement('a', { href, className }, children)
  };
});

jest.mock('react-headroom', () => {
  const React = require('react');
  return ({ children }) => React.createElement('div', null, children);
});

const ARTICLE = {
  slug: 'sample-article',
  frontmatter: {
    title: 'A sample article',
    summary: 'A short summary of the piece.',
    date: '2026-07-02',
    tags: ['Field research', 'Feedback design'],
  },
  readingTime: '4 min read',
};

describe('Writing index', () => {
  test('renders date, reading time, summary, and tags for each article', () => {
    const markup = renderToStaticMarkup(<WritingIndex articles={[ARTICLE]} />);

    expect(markup).toContain('A sample article');
    expect(markup).toContain('July 2026');
    expect(markup).toContain('4 min read');
    expect(markup).toContain('A short summary of the piece.');
    expect(markup).toContain('Field research');
    expect(markup).toContain('Feedback design');
  });

  test('renders the empty state without articles', () => {
    const markup = renderToStaticMarkup(<WritingIndex articles={[]} />);
    expect(markup).toContain('No articles yet');
  });

  test('getAllArticles exposes reading time for committed articles', () => {
    const articles = getAllArticles();
    expect(articles.length).toBeGreaterThan(0);
    articles.forEach((article) => {
      expect(article.readingTime).toMatch(/min read$/);
      expect(article.frontmatter.protected).toBe(false);
    });
  });
});
