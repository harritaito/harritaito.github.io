import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import ProjectsPage from '../../pages/projects';

jest.mock('next/dynamic', () => {
  const React = require('react');
  return () => () => React.createElement('div', { 'data-testid': 'morphing-mesh' });
});

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

jest.mock('react-inlinesvg', () => {
  const React = require('react');
  return ({ className, src }) => React.createElement('svg', { className, 'data-src': src });
});

describe('Projects archive page', () => {
  test('uses problem-first card titles with project names as supporting labels', () => {
    const markup = renderToStaticMarkup(<ProjectsPage />);

    expect(markup).toContain('Interaction design for environments that break the rules');
    expect(markup).toContain('Trust-sensitive classroom robot design');
    expect(markup).toContain('Operational complexity in civic reporting');
    expect(markup).toContain('Discovery for memory-care services');
    expect(markup).toMatch(/<p[^>]*case-card__project-name[^>]*>Thesis<\/p>/);
    expect(markup).toMatch(/<p[^>]*case-card__project-name[^>]*>HRI Study<\/p>/);
    expect(markup).not.toMatch(/<h3[^>]*case-card__title[^>]*>HRI Study<\/h3>/);
    expect(markup).not.toMatch(/<h3[^>]*case-card__title[^>]*>Kiva Kaupunki<\/h3>/);
    expect(markup).not.toContain('Coming soon');
  });
});
