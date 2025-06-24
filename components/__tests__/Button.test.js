import Button from '../Button';

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
