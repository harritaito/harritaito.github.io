import HighlightUnderline from '../design-system/HighlightUnderline';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { colors } from '../design-system/tokens';

describe('HighlightUnderline', () => {
  test('renders as decorative markup using the shared highlight token', () => {
    const markup = renderToStaticMarkup(<HighlightUnderline />);

    expect(markup).toContain('aria-hidden="true"');
    expect(markup).toContain(`background:${colors.markerHighlight}`);
  });
});
