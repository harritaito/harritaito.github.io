import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import ProductLoop from '../ProductLoop';

const STAGE_LABELS = [
  'Discovery',
  'Framing',
  'Concept models',
  'Prototypes',
  'Design specs',
  'Implementation support',
  'Design QA',
  'Measurement',
  'System contribution',
];

describe('ProductLoop', () => {
  test('renders every stage label', () => {
    const html = renderToStaticMarkup(<ProductLoop />);
    STAGE_LABELS.forEach((label) => {
      expect(html).toContain(label);
    });
  });

  test('renders inline output copy for every stage', () => {
    const html = renderToStaticMarkup(<ProductLoop />);
    const outputs = html.match(/product-loop__output"/g) || [];
    expect(outputs).toHaveLength(STAGE_LABELS.length);
    expect(html).toContain('What this produces:');
  });

  test('exposes an accessible list label', () => {
    const html = renderToStaticMarkup(<ProductLoop />);
    expect(html).toContain(
      'aria-label="How I work, from ambiguity to buildable output"',
    );
  });
});
