import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import CaseStudyMeta from '../CaseStudyMeta';

describe('CaseStudyMeta', () => {
  test('renders the shared case-study framing in a fixed field order', () => {
    const markup = renderToStaticMarkup(
      <CaseStudyMeta
        status="Earlier case study"
        summary="A compact archive summary."
        note="Missing metrics are left blank."
        fields={{
          myRole: 'Interaction design',
          team: ['1 designer', '1 developer'],
          timeline: 'Spring 2024',
          context: 'A small pilot project.',
          problem: 'Reduce friction.',
          users: ['Primary users', 'Secondary users'],
          businessContext: 'The brief came from a client request.',
          constraints: ['Short timeline', 'Limited evidence'],
          hardMetrics: 'No product metrics were published.',
          qualitativeEvidence: 'Participants described the concept as useful.',
          proxyEvidence: 'The concept was selected for further review.',
          reflection: 'A useful archive example.',
        }}
      />
    );

    expect(markup).toContain('Earlier case study');
    expect(markup).toContain('A compact archive summary.');
    expect(markup).toContain('Missing metrics are left blank.');
    expect(markup).toContain('col-md-offset-1');
    expect(markup).toContain('col-xl-offset-3');
    expect(markup).toContain('My role');
    expect(markup).toContain('Interaction design');
    expect(markup).toContain('Team');
    expect(markup).toContain('1 designer');
    expect(markup).toContain('Hard metrics');
    expect(markup).toContain('No product metrics were published.');
    expect(markup).toContain('Qualitative evidence');
    expect(markup).toContain('Participants described the concept as useful.');
    expect(markup).toContain('Proxy evidence');
    expect(markup).toContain('The concept was selected for further review.');
    expect(markup).toContain('Reflection');
    expect(markup).toContain('A useful archive example.');
  });

  test('omits fields that are not provided', () => {
    const markup = renderToStaticMarkup(
      <CaseStudyMeta
        fields={{
          myRole: 'Service design',
        }}
      />
    );

    expect(markup).toContain('My role');
    expect(markup).not.toContain('Team');
    expect(markup).not.toContain('Hard metrics');
    expect(markup).not.toContain('Proxy evidence');
  });
});
