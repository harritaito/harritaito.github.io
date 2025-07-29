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
});
