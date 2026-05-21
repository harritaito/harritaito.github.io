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
    expect(markup).not.toContain('target="_blank"');
    expect(markup).not.toContain('rel="noopener noreferrer"');
  });

  test('renders external links with a new-tab safety contract', () => {
    const markup = renderToStaticMarkup(
      <Button label="Read case study" link="https://example.com/case" color="green" />
    );

    expect(markup).toContain('href="https://example.com/case"');
    expect(markup).toContain('target="_blank"');
    expect(markup).toContain('rel="noopener noreferrer"');
    expect(markup).toMatch(/class="[^"]*button-link/);
  });

  test('renders a static accessible label when no link is provided', () => {
    const markup = renderToStaticMarkup(<Button label="Contact" color="green" />);
    expect(markup).toContain('aria-disabled="true"');
    expect(markup).toMatch(/class="[^"]*button-link--static/);
    expect(markup).not.toContain('href=');
  });
});
