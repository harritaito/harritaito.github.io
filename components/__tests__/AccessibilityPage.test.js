import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import AccessibilityStatement from '../../pages/accessibility';

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

describe('Accessibility statement page', () => {
  test('renders the sections required by the statement model', () => {
    const markup = renderToStaticMarkup(<AccessibilityStatement />);

    expect(markup).toContain('Accessibility statement');
    expect(markup).toContain('Compliance status');
    expect(markup).toContain('Non-accessible content');
    expect(markup).toContain('Feedback and contact information');
    expect(markup).toContain('Supervisory authority');
    expect(markup).toContain('harritaito.com');
    expect(markup).toContain('WCAG');
  });

  test('footer links to the statement from every page', () => {
    const markup = renderToStaticMarkup(<AccessibilityStatement />);
    expect(markup).toContain('href="/accessibility"');
  });
});
