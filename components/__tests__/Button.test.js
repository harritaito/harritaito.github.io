import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import Button from '../Button';

describe('Button.isLinkInternal', () => {
  test('returns true for relative links', () => {
    const btn = new Button({ label: 'Test', link: '/about', color: 'green' });
    expect(btn.isLinkInternal()).toBe(true);
  });

  test('returns true for same host links', () => {
    const host = window.location.host;
    const protocol = window.location.protocol || 'https:';
    const btn = new Button({ label: 'Test', link: `${protocol}//${host}/page`, color: 'green' });
    expect(btn.isLinkInternal()).toBe(true);
  });


  test('returns false for external links', () => {
    const btn = new Button({ label: 'Test', link: 'https://other.com', color: 'green' });
    expect(btn.isLinkInternal()).toBe(false);
  });

  test('returns false when window is undefined (SSR)', () => {
    const originalWindow = global.window;
    global.window = undefined;

    try {
      const btn = new Button({ label: 'Test', link: 'https://example.com', color: 'green' });
      expect(btn.isLinkInternal()).toBe(false);
    } finally {
      global.window = originalWindow;
    }
  });
});

describe('Button rendering', () => {
  test('renders an anchor for internal links', () => {
    const markup = renderToStaticMarkup(<Button label="Test" link="/about" color="green" />);
    expect(markup).toContain('href="/about"');
    expect(markup).toMatch(/class="[^"]*button-link/);
  });

  test('renders a span when no link is provided', () => {
    const markup = renderToStaticMarkup(<Button label="Test" color="green" />);
    expect(markup).toContain('aria-disabled="true"');
  });
});
