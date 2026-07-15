import React from 'react';

import CaseStudyMeta from '../components/CaseStudyMeta';
import ProjectPage from '../components/ProjectPage';
import ProjectSection from '../components/ProjectSection';
import Row from '../components/Row';
import {
  ArtifactPlaceholder,
  TbdNote,
} from '../components/design-system/CasePlaceholders';

import placeholderTexture from '../static/media/pohja.svg';

// NOTE: This case is intentionally kept out of the Projects manifest
// (components/Projects.js) and the primary nav. It is a publish-safe shell
// for a methods case about moving teams from ambiguity to shared direction:
// every incomplete area is labelled on the page, and it stays unlisted until
// anonymized artifacts and evidence are attached.
//
// WHAT IS REAL VS PENDING — read before filling any section:
//
// 1. The framing, method descriptions, and section structure describe how
//    Harri actually works. The artifacts and per-project evidence are
//    pending and marked as such on the page.
// 2. No client names, participant details, real research data, or invented
//    outcomes. Artifacts are recreated with neutral labels, never exported
//    from client tools.
// 3. Facilitation claims must stay tied to outcomes: what a session
//    produced and what decision it unblocked — not how many post-its were
//    used. If a section can't name its output, it doesn't belong here.
// 4. Metrics only if real and cleared. Otherwise proxy evidence: the
//    decision that got made, the disagreement that got resolved, the plan
//    that survived contact with engineering.

const pStyle =
  'col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6';

const DirectionSettingCase = () => (
  <div className="DirectionSettingCase">
    <ProjectPage
      projectName={'Direction Setting'}
      title={'From Ambiguity to Shared Direction'}
      hero={placeholderTexture}
      heroAlt={
        'Placeholder texture for the direction-setting case — anonymized workshop and mapping artwork pending.'
      }
      eyebrow={'Methods case shell — in progress'}
      navbarColor={'green'}
      showNextProject={false}
      description={
        'How a project that starts as a vague brief, competing stakeholder agendas, and untested assumptions becomes a direction the whole team can commit to — the interviews, mapping, facilitation, and decision-keeping that get it there.'
      }
      content={
        <span>
          <CaseStudyMeta
            status={'Methods case shell — in progress'}
            summary={
              'A capability case about the least visible design work: turning ambiguity into direction. Not one project — a working method, shown through the artifacts it produces: interview synthesis, current-state journeys, assumption matrices, risk maps, opportunity rankings, and decision logs.'
            }
            note={
              'The method described here is how Harri actually works; the section framing is real. The artifacts are pending and will be recreated from real projects with neutral labels — no client names, participant details, or invented outcomes. Until an artifact is attached, its slot says so on the page.'
            }
            fields={{
              myRole:
                'Design lead for the ambiguous front end of projects: stakeholder interviews, research, assumption and risk mapping, workshop facilitation, and keeping the record of decisions as direction forms.',
              team: 'This work is never solo by definition — it happens with product managers, engineers, and business stakeholders. Specific collaborators are documented per project, not inflated here.',
              context:
                'The phase where a project has momentum but no shape: a goal everyone phrases differently, assumptions nobody has written down, and three functions each optimizing for their own picture of success.',
              problem:
                'Problem type: disagreement that looks like alignment. Teams rarely lack opinions — they lack a shared, testable picture of the problem. The design work is building that picture and getting real commitment to a direction, including from the people who argued against it.',
            }}
          />

          <ProjectSection
            title={'What ambiguity actually looks like'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Ambiguity in a real project is rarely an empty page. It is a PM with a
                      roadmap commitment, an engineering lead who has quietly already chosen an
                      architecture, and a business owner whose success metric nobody else has
                      seen — all using the same words to mean different things. The kickoff
                      feels aligned because nothing concrete enough to disagree about has been
                      said yet. The job is to surface the disagreement early, on paper, where
                      it is cheap — instead of in the backlog six weeks later, where it is not.
                    </p>
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'Stakeholder interviews'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Direction work starts one conversation at a time, before any group
                      session. Individual interviews with the PM, engineers, and business
                      stakeholders answer three things: what does success look like from your
                      seat, what do you believe about the users and the problem, and what are
                      you worried nobody is saying out loud. People say things one-on-one that
                      they will not volunteer in a workshop — especially the worries. The
                      output is not notes; it is a map of where the pictures of success
                      genuinely differ, which becomes the agenda for everything that follows.
                    </p>
                  }
                />
                <Row
                  content={
                    <TbdNote className={pStyle}>
                      An anonymized interview-synthesis example — how conflicting stakeholder
                      framings from a real project were captured and clustered, with neutral
                      role labels — will be attached here.
                    </TbdNote>
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'Current-state journey'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Before anyone debates the future, the present has to be on one page.
                      A current-state journey — assembled from the interviews and from
                      watching the work happen — shows what users and the organization
                      actually do today, including the workarounds nobody put in the brief.
                      This artifact does quiet political work: it moves the argument from
                      &ldquo;my opinion versus yours&rdquo; to &ldquo;here is the wall, point
                      at the part you disagree with.&rdquo; Most alignment problems shrink
                      once everyone is criticizing the same picture.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={'Current-state journey'}
                      prompt={
                        'Insert a recreated current-state journey from a real project: stages, actions, tools, and pain points with neutral labels. Annotate one place where the mapped reality contradicted what stakeholders believed in the kickoff.'
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'User research'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Stakeholder views are hypotheses, not evidence. Research in this phase
                      is scoped tightly to the disagreements that matter: user interviews,
                      observation, or lightweight testing aimed at the specific questions the
                      team cannot settle from the inside. The standard is honest, not heroic —
                      a handful of well-chosen conversations that kill a wrong assumption
                      beats a research theater program nobody reads. Findings go back to the
                      team attributed to evidence, not to the designer, which is what lets
                      them override seniority in the room.
                    </p>
                  }
                />
                <Row
                  content={
                    <TbdNote className={pStyle}>
                      A concrete example — a research question a team could not settle
                      internally, how it was studied, and which assumption the findings
                      overturned — will be documented here, anonymized.
                    </TbdNote>
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'Assumption mapping'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Every plan stands on assumptions; the dangerous ones are unwritten. The
                      team&rsquo;s beliefs — about users, feasibility, and the business — get
                      pulled out of heads and onto a matrix: how important is this if wrong,
                      and how much evidence do we actually have. The top-right corner
                      (critical, unproven) is the risk register nobody knew they had, and it
                      turns &ldquo;we should do more research&rdquo; from a stalling tactic
                      into a targeted list. Engineers tend to like this artifact most: it is
                      the first time the project&rsquo;s uncertainty is stated in a form you
                      can act on.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={'Assumption matrix'}
                      prompt={
                        'Insert a recreated assumption matrix (importance × evidence) from a real project, neutral labels only. Highlight the critical-but-unproven quadrant and note which assumptions were tested versus consciously accepted as risks.'
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'Risk map'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Assumptions are one kind of risk; delivery has others — dependencies,
                      capability gaps, deadlines that were promised before the problem was
                      understood. Mapping risks with the team, and being explicit about which
                      are design risks, which are engineering risks, and which are business
                      risks, does two things: it stops any one function from silently carrying
                      risk the others created, and it gives the eventual direction its honest
                      price tag. A direction chosen without a risk map is a preference, not a
                      decision.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={'Risk map'}
                      prompt={
                        'Insert a recreated risk map from a real project: risks plotted by likelihood and impact, tagged by owner (design / engineering / business), neutral labels. Annotate one risk that changed the chosen direction.'
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'Workshop facilitation'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Workshops are where this work is easiest to fake and easiest to judge.
                      The test of a session is not energy or wall coverage — it is whether
                      something is decided that was not decided before, and whether the people
                      who lost the argument still commit to the outcome. That means designing
                      the session backwards from its decision, doing the divergent thinking
                      asynchronously where possible, and spending shared room time on the
                      genuinely contested parts. It also means naming disagreement instead of
                      averaging it: two strong options with a criteria-based choice beat a
                      compromise nobody believes in.
                    </p>
                  }
                />
                <Row
                  content={
                    <p className={pStyle}>
                      Facilitating means being neutral about people and opinionated about
                      process. The designer&rsquo;s own design preferences enter as one voice
                      among the options — labelled as such — because a facilitator who
                      smuggles their preferred outcome through the format loses the room
                      permanently, and deserves to.
                    </p>
                  }
                />
                <Row
                  content={
                    <TbdNote className={pStyle}>
                      A real session design — its intended decision, the agenda built
                      backwards from it, and what the session actually produced — will be
                      documented here with anonymized materials.
                    </TbdNote>
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'Prioritization'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      With the problem mapped and the risks named, opportunities get ranked —
                      against criteria the team agreed on before seeing the list, because
                      criteria chosen afterwards are just rationalization. User value,
                      business value, effort, and risk each have a stakeholder who naturally
                      champions them; the ranking conversation is where PM, engineering, and
                      business trade honestly instead of each keeping a private priority
                      order. The output is not just a sequence — it is a shared understanding
                      of why the second thing is second, which is what keeps the roadmap
                      stable when pressure arrives.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={'Opportunity ranking'}
                      prompt={
                        'Insert a recreated opportunity ranking from a real project: options scored against the agreed criteria, neutral labels. Annotate one ranking that surprised a stakeholder and how the criteria settled it.'
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'Trade-offs & shared principles'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Direction means giving things up, and the giving-up has to be said out
                      loud: what this direction will not do, which stakeholder&rsquo;s
                      preferred option was declined and why, what the team is accepting as a
                      known cost. Writing trade-offs down at decision time is what prevents
                      them from being re-litigated as betrayals later. The durable ones get
                      promoted into shared principles — short, argument-settling statements
                      the team wrote together — so the hundredth small decision doesn&rsquo;t
                      need another meeting, because the principle already answers it.
                    </p>
                  }
                />
                <Row
                  content={
                    <TbdNote className={pStyle}>
                      An example set of project principles from real work — what each one
                      settled, and a decision that was resolved by citing one instead of
                      escalating — will be attached here, anonymized.
                    </TbdNote>
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'Decision log'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Alignment decays without a record. A decision log — the call, the date,
                      the reasoning, the trade-off accepted, who was in the room — is the
                      cheapest alignment tool there is. It gives new joiners the
                      &ldquo;why&rdquo; without archaeology, protects decisions from being
                      quietly reversed by whoever edits the document last, and makes revisiting
                      a call an explicit act with new information rather than an accident. It
                      also keeps the facilitator honest: if the log can&rsquo;t say why, the
                      decision wasn&rsquo;t really made.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={'Decision log'}
                      prompt={
                        'Insert recreated decision-log entries from a real project: decision, date, reasoning, trade-off, participants — neutral labels. Include one entry where the log prevented a settled decision from being re-litigated.'
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={'Direction, held'}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      The outcome of this work is not a deck — it is a team that can act
                      without meeting: a PM who can defend the roadmap upward because the
                      reasoning is written down, engineers building against assumptions that
                      were tested instead of inherited, and business stakeholders who know
                      which trade-offs they accepted. Where hard metrics from this work exist
                      and can be shared, they will be shown; where they cannot, the proxy
                      evidence is the artifacts themselves and the decisions they carried.
                      That is a verifiable claim about the method — nothing here will be
                      decorated with invented outcomes.
                    </p>
                  }
                />
                <Row
                  content={
                    <TbdNote className={pStyle}>
                      Documented outcomes per project — directions that held through
                      delivery, disagreements resolved without escalation, and an honest note
                      on the times a chosen direction had to change and what the method missed
                      — will be added here as evidence is cleared.
                    </TbdNote>
                  }
                />
              </span>
            }
          />
        </span>
      }
    />
  </div>
);

export default DirectionSettingCase;
