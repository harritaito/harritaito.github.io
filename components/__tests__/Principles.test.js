import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import Principles from '../Principles';

const PRINCIPLE_TITLES = [
  'Map the business process before the UI',
  'Design for experts without punishing beginners',
  'Use systems to pay down decision debt',
  'Treat implementation as part of the design',
  'Use AI to support judgment, not replace it',
  'Name states, permissions, and errors early',
  'Measure quality by outcomes, not output',
];

describe('Principles', () => {
  test('renders every principle title', () => {
    const html = renderToStaticMarkup(<Principles />);
    PRINCIPLE_TITLES.forEach((title) => {
      expect(html).toContain(title);
    });
  });

  test('exposes an accessible label', () => {
    const html = renderToStaticMarkup(<Principles />);
    expect(html).toContain('aria-label="How I approach the work"');
  });

  test('pairs each principle with a concrete detail sentence', () => {
    const html = renderToStaticMarkup(<Principles />);
    const details = html.match(/principles__detail/g) || [];
    expect(details).toHaveLength(PRINCIPLE_TITLES.length);
  });
});
