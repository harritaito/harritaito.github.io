import fs from 'fs';
import path from 'path';

describe('About page portrait', () => {
  const source = fs.readFileSync(path.join(__dirname, '../../pages/about.js'), 'utf8');

  test('keeps the photo constrained to the circular frame', () => {
    const frameRule = source.match(/\.About \.my-photo \{([\s\S]*?)\n\s*\}/);
    const imageRule = source.match(/\.About \.my-photo img \{([\s\S]*?)\n\s*\}/);

    expect(source).toMatch(/<style jsx>\{`\s*\.About \.content/);
    expect(frameRule[1]).toContain('overflow: hidden;');
    expect(imageRule[1]).toContain('height: 100%;');
    expect(imageRule[1]).toContain('object-fit: cover;');
  });
});
