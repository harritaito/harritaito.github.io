import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import Project from '../Project';

jest.mock('react-plx', () => {
  const React = require('react');
  return ({ children }) => React.createElement('div', null, children);
});

jest.mock('react-inlinesvg', () => {
  const React = require('react');
  return ({ className }) => React.createElement('svg', { className });
});

describe('Project rendering', () => {
  test('renders link and card classes used by scoped styles', () => {
    const markup = renderToStaticMarkup(
      <Project
        title="Test Project"
        description="A test case study"
        image="/static/test.jpg"
        link="/test-project"
        alt="Test project image"
        color="blue"
        parallax={true}
      />
    );

    expect(markup).toContain('href="/test-project"');
    expect(markup).toMatch(/class="[^"]*project-link-container/);
    expect(markup).toMatch(/class="[^"]*case-card[^"]*blue/);
  });
});
