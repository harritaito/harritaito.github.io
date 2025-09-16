import Button from '../Button';

// Mock next/link to avoid Next.js internals in unit tests
jest.mock('next/link', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: ({ href, children }) => React.createElement('a', { href }, children)
  };
});

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
