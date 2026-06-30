import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import CapabilityChips from '../CapabilityChips';

const KEYWORDS = [
  'Product discovery',
  'B2B &amp; internal tools',
  'Design systems',
  'AI &amp; data-heavy workflows',
  'UX architecture',
  'Implementation support',
  'Accessibility',
  'Design QA',
  'Stakeholder alignment',
];

describe('CapabilityChips', () => {
  test('renders every capability keyword', () => {
    const html = renderToStaticMarkup(<CapabilityChips />);
    KEYWORDS.forEach((keyword) => {
      expect(html).toContain(keyword);
    });
  });

  test('exposes an accessible label', () => {
    const html = renderToStaticMarkup(<CapabilityChips />);
    expect(html).toContain('aria-label="Areas I work across"');
  });
});
