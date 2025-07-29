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
  const originalLocation = window.location;
  beforeEach(() => {
    delete window.location;
    window.location = { host: 'example.com' };
  });

  afterEach(() => {
    window.location = originalLocation;
  });

  test('returns true for relative links', () => {
    const btn = new Button({ label: 'Test', link: '/about', color: 'green' });
    expect(btn.isLinkInternal()).toBe(true);
  });

  test('returns true for same host links', () => {
    const btn = new Button({ label: 'Test', link: 'https://example.com/page', color: 'green' });
    expect(btn.isLinkInternal()).toBe(true);
  });

  test('returns false for external links', () => {
    const btn = new Button({ label: 'Test', link: 'https://other.com', color: 'green' });
    expect(btn.isLinkInternal()).toBe(false);
  });
});
