import React from 'react';

import CaseStudyMeta from '../components/CaseStudyMeta';
import ProjectPage from '../components/ProjectPage';
import ProjectSection from '../components/ProjectSection';
import Row from '../components/Row';
import {
  ArtifactPlaceholder,
  TbdNote,
} from '../components/design-system/CasePlaceholders';
import { colors, radii, shadows } from '../components/design-system/tokens';

import placeholderTexture from '../static/media/pohja.svg';

// NOTE: This case is intentionally kept out of the Projects manifest
// (components/Projects.js) and the primary nav. It is a publish-safe shell:
// every incomplete area is labelled, and it stays unlisted until real
// component screenshots, token tables, and QA evidence are attached.

const pStyle =
  'col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6';

// Real values from components/design-system/tokens.js. This table is honest
// infrastructure evidence: these tokens already drive shadows, radii, and
// accents across this site, so the mapping section can start from fact.
const TOKEN_ROWS = [
  { token: 'colors.accentPurple', value: colors.accentPurple, role: 'Signal accent, progress + emphasis' },
  { token: 'colors.markerHighlight', value: 'rgba(139,200,246,0.57)', role: 'Inline marker highlight' },
  { token: 'colors.textStrong', value: colors.textStrong, role: 'Primary text + anchors' },
  { token: 'colors.textMuted', value: colors.textMuted, role: 'Secondary text, quiet UI' },
  { token: 'radii.pill', value: radii.pill, role: 'Buttons, tags, metadata pills' },
  { token: 'shadows.media', value: shadows.media, role: 'Default media elevation' },
  { token: 'shadows.card', value: shadows.card, role: 'Foreground summary panels' },
  { token: 'transitions.smooth', value: 'all .6s linear', role: 'Accent + hover transitions' },
];

const DesignSystemCase = () => (
  <div className="DesignSystemCase">
    <ProjectPage
      projectName={'Design System'}
      title={'Scaling Product Consistency Through a Design System'}
      hero={placeholderTexture}
      heroAlt={'Placeholder texture for the design system case — real component artwork pending.'}
      eyebrow={'Case shell — in progress'}
      navbarColor={'purple'}
      showNextProject={false}
      description={
        'How components, tokens, documentation, and implementation QA turn scattered UI decisions into shared product infrastructure that teams can build on.'
      }
      content={
        <span>
          <CaseStudyMeta
            status={'Case shell — in progress'}
            summary={
              'A capability case about design systems as product infrastructure: components and tokens are the visible surface, but the real work is documentation, developer handoff, and QA that keep consistency holding as more people ship.'
            }
            note={
              'This page is a structured shell. The framing and section scaffolding are real; component screenshots, variant matrices, and measured outcomes are marked as pending and will be replaced with concrete evidence. Nothing here claims a specific employer, shipped product, or metric that is not yet documented.'
            }
            fields={{
              myRole:
                'Design-systems and design-engineering work: component behavior, token structure, documentation, and implementation QA across the design-to-code boundary.',
              team: 'To be completed with real evidence — collaborators, engineering partners, and scope of shared ownership are documented per project, not inflated here.',
              context:
                'Design system as shared product infrastructure: a component library, a token layer, and the docs and QA around them that let more than one person ship consistent UI.',
              problem:
                'Problem type: keeping product UI consistent and maintainable as surface area, contributors, and platforms grow — a systems and infrastructure problem, not only a component-making one.',
            }}
          />

          <ProjectSection
            title={'Problem'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Consistency is easy at small scale and fragile at large scale. As a product grows more screens, more contributors, and more platforms, the same button, input, or spacing decision gets re-made slightly differently each time. The cost is not only visual: divergence slows engineering, weakens accessibility, and makes every future change more expensive.
                    </p>
                  }
                />
                <Row
                  content={
                    <p className={pStyle}>
                      The real problem a design system solves is infrastructure, not decoration. It has to make the correct UI the easy UI to build, hold up under real handoff pressure, and stay trustworthy through QA — so teams inherit consistency instead of negotiating it each sprint.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={'Before / after inconsistency'}
                      prompt={
                        'Insert a before/after showing the same component or flow rendered inconsistently across screens, then unified after the system. Annotate the specific divergences (radius, color, spacing, states) the system removed.'
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'My role'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      This case sits on the design-to-code boundary: shaping component behavior and token structure, writing the documentation that makes them usable, and running the implementation QA that keeps the built product matching the intended system. It is design-engineering work, framed honestly around what can be evidenced.
                    </p>
                  }
                />
                <Row
                  content={
                    <TbdNote className={pStyle}>
                      Exact contribution boundaries, collaborators, and the split between individual and shared ownership will be described per project once the supporting artifacts are attached. No management or team-size claims are made beyond documented reality.
                    </TbdNote>
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'Team'}
            content={
              <span>
                <Row
                  content={
                    <TbdNote className={pStyle}>
                      Team composition, engineering partners, and the working model (who owned tokens, who owned implementation, how review happened) belong here with real names of roles, not inflated titles.
                    </TbdNote>
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'System context'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      A component library is only the visible layer. Underneath it sits a token layer, a documentation surface, and a handoff and QA loop with engineering. A design system works as product infrastructure when those layers stay in sync: a token change propagates, the docs explain intent, and QA catches drift before it ships.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={'System context map'}
                      prompt={
                        'Insert a diagram of the system: design source, token layer, component library, documentation, and the implemented product — with the sync points and ownership boundaries between design and engineering marked.'
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'Component behavior'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Good components are defined by behavior, not just appearance: what is fixed, what flexes, how they respond to content length, and how they compose. The system documents anatomy and the rules that keep a component correct wherever it lands — so a contributor cannot accidentally build an off-system variant.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={'Component anatomy'}
                      prompt={
                        'Insert an anatomy breakdown of one signature component: labelled parts, spacing rules, slot behavior, and content constraints. Show how tokens map onto each part.'
                      }
                    />
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={'Variant matrix'}
                      prompt={
                        'Insert a variant matrix for that component (size x emphasis x state, or equivalent). Show which combinations are supported, which are intentionally excluded, and why.'
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'Token mapping'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Tokens are the contract between design intent and implementation. Instead of hard-coded values scattered through the product, components reference named tokens, so a single change moves the whole system consistently. The values below are the real token layer already driving this site — a starting point for the fuller mapping.
                    </p>
                  }
                />
                <Row
                  content={
                    <div className={pStyle}>
                      <div className="token-table-wrap">
                        <table
                          className="token-table"
                          aria-label="Live token values from the site's design system"
                        >
                          <thead>
                            <tr>
                              <th scope="col">Token</th>
                              <th scope="col">Value</th>
                              <th scope="col">Role</th>
                            </tr>
                          </thead>
                          <tbody>
                            {TOKEN_ROWS.map((row) => (
                              <tr key={row.token}>
                                <td><code>{row.token}</code></td>
                                <td>{row.value}</td>
                                <td>{row.role}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  }
                />
                <Row
                  content={
                    <p className={'caption ' + pStyle}>
                      Live token values from components/design-system/tokens.js
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={'Full token table'}
                      prompt={
                        'Insert the complete token reference: primitive tokens, semantic aliases, and their mapping to components. Show at least one worked example of a token change propagating through the system.'
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'States'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Consistency breaks most often in the states nobody screenshots: hover, focus, active, disabled, loading, error, and empty. A component is only finished when every state is defined, tokenized, and documented — so the built version cannot quietly omit the ones that matter for usability and accessibility.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={'State coverage'}
                      prompt={
                        'Insert a full state gallery for a key component: default, hover, focus-visible, active, disabled, loading, error, and empty — each mapped to its tokens and documented behavior.'
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'Accessibility'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Accessibility is a system property, not a per-screen fix. Building it into components — dependable contrast, visible focus, meaning that never relies on color alone, sensible semantics and keyboard behavior — means every team that uses the system inherits a strong baseline instead of rediscovering it. This mirrors the accessibility bias this portfolio already holds itself to.
                    </p>
                  }
                />
                <Row
                  content={
                    <TbdNote className={pStyle}>
                      Specific accessibility decisions — contrast targets, focus treatment, keyboard patterns, and how they were verified — go here with the checks that back them, not as generic claims.
                    </TbdNote>
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'Documentation'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Documentation is what turns a component library into a system other people can use without asking. Good docs explain not just how a component looks but when to use it, how it behaves, and where its edges are. Without that surface, consistency depends on memory and does not survive new contributors.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={'Storybook / documentation'}
                      prompt={
                        'Insert Storybook stories or documentation pages: usage guidance, props/controls, do and don’t examples, and live component states. Show the docs as the working reference, not a static spec.'
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'Developer handoff'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Handoff is where design systems succeed or quietly fail. The goal is a tight loop where design intent, tokens, and code share one vocabulary, so engineers implement from the system rather than re-interpreting screenshots. When the token names in design match the token names in code, drift has far fewer places to enter.
                    </p>
                  }
                />
                <Row
                  content={
                    <TbdNote className={pStyle}>
                      The concrete handoff mechanics — shared token naming, review process, and how design and engineering stayed in sync — will be documented with real examples from the working process.
                    </TbdNote>
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'QA checklist'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Implementation QA is the step that keeps the built product honest to the system. A repeatable checklist — token usage, state coverage, accessibility, responsive behavior, and edge cases — turns consistency from an aspiration into something that is actually verified before it ships.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={'QA checklist'}
                      prompt={
                        'Insert the real implementation-QA checklist used to sign off components: token usage, every interaction state, contrast and focus, responsive breakpoints, and content edge cases — with an example of a caught drift.'
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'Outcomes & proxy evidence'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Where hard metrics exist, they belong here. Where they do not, honest proxy evidence carries the case: a working token layer, documented components, a QA checklist that catches real drift, and consistency that holds across screens are all verifiable signals of infrastructure quality — without inventing adoption numbers or shipped claims that are not yet documented.
                    </p>
                  }
                />
                <Row
                  content={
                    <p className={pStyle}>
                      One honest proxy is already live: the token layer in this portfolio drives its shadows, radii, and accents from a single source, so the same discipline this case argues for is visible in the site presenting it.
                    </p>
                  }
                />
                <Row
                  content={
                    <TbdNote className={pStyle}>
                      Measured outcomes (adoption, defect reduction, delivery speed) or qualitative evidence (contributor feedback, review notes) will be added only where they are real and attributable.
                    </TbdNote>
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'Reflection'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      The lesson that keeps repeating in this work: a design system is judged less by how its components look and more by how well the product holds together once many people are building on it. Components and tokens are the artifact; the documentation, handoff, and QA around them are the infrastructure that makes consistency survive contact with a growing team.
                    </p>
                  }
                />
                <Row
                  content={
                    <TbdNote className={pStyle}>
                      A specific, honest reflection tied to the real project — what worked, what was hard, and what would change next time — will replace this placeholder once the case is populated.
                    </TbdNote>
                  }
                />
              </span>
            }
          />
        </span>
      }
    />

    <style jsx>{`
      .DesignSystemCase :global(.token-table-wrap) {
        margin: 0.75em 0;
        overflow-x: auto;
        border-radius: 0.75rem;
        box-shadow: ${shadows.light};
        background: rgba(255, 255, 255, 0.6);
      }

      .DesignSystemCase :global(.token-table) {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.9rem;
      }

      .DesignSystemCase :global(.token-table th),
      .DesignSystemCase :global(.token-table td) {
        padding: 0.6rem 0.85rem;
        text-align: left;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        vertical-align: top;
      }

      .DesignSystemCase :global(.token-table th) {
        color: ${colors.textMuted};
        font-size: 0.74rem;
        font-weight: 700;
        letter-spacing: 0.07em;
        text-transform: uppercase;
      }

      .DesignSystemCase :global(.token-table code) {
        font-size: 0.85rem;
      }

      .DesignSystemCase :global(.token-table tr:last-child td) {
        border-bottom: none;
      }
    `}</style>
  </div>
);

export default DesignSystemCase;
