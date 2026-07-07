import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import MethodArtifacts from '../MethodArtifacts';

const ARTIFACT_NAMES = [
  'Workflow map',
  'Role model',
  'State model',
  'Design spec',
  'QA checklist',
  'Decision log',
];

describe('MethodArtifacts', () => {
  test('renders every artifact name', () => {
    const html = renderToStaticMarkup(<MethodArtifacts />);
    ARTIFACT_NAMES.forEach((name) => {
      expect(html).toContain(name);
    });
  });

  test('exposes an accessible label', () => {
    const html = renderToStaticMarkup(<MethodArtifacts />);
    expect(html).toContain('aria-label="Artifacts I produce"');
  });

  test('hides the schematic previews from assistive tech', () => {
    const html = renderToStaticMarkup(<MethodArtifacts />);
    expect(html).toMatch(/<pre[^>]*aria-hidden="true"/);
  });
});
