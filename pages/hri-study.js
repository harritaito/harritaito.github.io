import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import ImageZoom from 'react-medium-image-zoom';

import Button from '../components/Button';
import CaseStudyMeta from '../components/CaseStudyMeta';
import ProjectPage from '../components/ProjectPage';
import Process from '../components/Process';
import ProjectSection from '../components/ProjectSection';
import Row from '../components/Row';
import { resolveAssetSrc } from '../components/assetSource';

import candy from '../static/media/hri-study/candy.png';
import observation from '../static/media/hri-study/observation.jpg';
import pupils from '../static/media/hri-study/pupils.png';
import affinity from '../static/media/hri-study/affinity.jpg';
import theatrical from '../static/media/hri-study/theatherical.png';

class Languagerobot extends Component {
  constructor() {
    super();

    this.state = {
      evidenceOpen: false,
    };
  }

  toggleEvidence = () => {
    this.setState((state) => ({
      evidenceOpen: !state.evidenceOpen,
    }));
  };

  render() {
    const pStyle =
      'col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6';

    const steps = [
      {
        title: 'Observation',
        processes: ['Literature review', 'Two classroom sessions', 'Teacher interviews'],
      },
      {
        title: 'Synthesis',
        processes: ['Affinity diagram', 'Design implications', 'Concept specification'],
      },
      {
        title: 'Evaluation',
        processes: ['Theatrical robot', 'Teacher post-study interview'],
      },
    ];

    return (
      <div className="Languagerobot">
        <ProjectPage
          projectName={'HRI Study'}
          title={'Teaching-Assistant Robot in the Classroom'}
          hero={pupils}
          heroAlt={'Children and a classroom robot during a learning session.'}
          eyebrow={'Earlier case study'}
          description={
            'How classroom research turned speech-failure, teacher mediation, and child attention into a calmer interaction concept for a teaching-assistant robot.'
          }
          navbarColor={'red'}
          content={
            <span>
              <CaseStudyMeta
                status={'Earlier case study'}
                summary={
                  'A research-led case study showing how observation data and teacher interviews became a clearer behavior model for a classroom robot.'
                }
                note={
                  'What this case proves: I can turn messy field evidence into concrete interaction decisions under classroom constraints, without claiming a shipped robot or measured learning outcome.'
                }
                fields={{
                  myRole: 'Interaction design and UX research for the concept and evaluation flow; the team carried the course project together.',
                  team: '3 designers',
                  timeline: 'March 2019 to April 2019',
                  context:
                    'Tampere University User Experience in Robotics course, working with a language-learning robot in local preschool and elementary-school settings.',
                  problem:
                    'Problem type: trust-sensitive interaction design for a classroom robot that had to stay legible when speech recognition failed.',
                  users: [
                    'Children learning in Finnish and second-language classrooms',
                    'Teachers who operated the robot and mediated the session',
                  ],
                  businessContext:
                    'A teaching-assistant robot and its cloud-based control application needed a more usable interaction concept.',
                  constraints: [
                    'Speech recognition failed more often than it succeeded.',
                    'The classroom setting left little room for confusing or unsafe behavior.',
                    'Teachers stayed involved as operators and mediators.',
                    'The final concept was not publicly validated in the field.',
                  ],
                  discovery: [
                    'Literature review',
                    'Two observation sessions',
                    'Teacher interviews',
                    'Affinity diagram',
                  ],
                  keyInsights: [
                    'Children were excited by the robot, but they needed clearer feedback and more legible state changes.',
                    'Teachers often became the fallback for commands, reassurance, and recovery when speech recognition failed.',
                    "The robot's gaze frequently drifted toward the teacher instead of the children who were trying to engage with it.",
                  ],
                  conceptModel:
                    'A more child-facing robot behavior model with explicit feedback, shorter dialogue, and a teacher-mediated fallback in the app.',
                  keyDecisions: [
                    "Keep the robot's attention on the children, not just the operator.",
                    'Add a feedback button in the application for cases where speech recognition failed.',
                    'Treat dialogue, gaze, and recovery behavior as part of the learning experience.',
                    "Make the robot's state easier to understand so the classroom stays predictable.",
                  ],
                  designDetails: [
                    'Observation form',
                    'Affinity diagram',
                    'Design implications',
                    'Concept specification',
                    'Theatrical robot evaluation',
                  ],
                  hardMetrics:
                    'No measured learning, adoption, or classroom usage metrics are documented for the final concept.',
                  qualitativeEvidence:
                    'Teachers responded positively to the concept and saw value in the interaction ideas, while still making clear that younger children needed a teacher present.',
                  proxyEvidence:
                    'Observation notes, the affinity diagram, theatrical evaluation, and external Smart Tampere coverage show the work translated field data into interaction decisions.',
                  reflection:
                    'The strongest lesson was that trust-sensitive behavior mattered more than novelty. The robot had to stay legible, bounded, and teacher-led if it was going to support learning rather than interrupt it.',
                }}
              />

              <ProjectSection
                title={'My role'}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          I worked on the UX research and interaction design: observation synthesis, teacher-interview synthesis, design implications, robot behavior decisions, and the theatrical robot evaluation flow. The concept, report, and course outcome were team output by three designers, so this page treats the findings and final direction as shared work.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={'Problem'}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          The real challenge was not to make the robot impressive. It was to make it useful in a classroom, where the teacher, the children, and the robot needed to stay coordinated with the lesson instead of competing for attention.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          That made the work a trust and behavior problem as much as an interface problem. The interaction had to keep lessons moving when speech failed, recover cleanly, and preserve teacher control without flattening the children's role in the exchange.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={'Context'}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          The study came from Tampere University's User Experience in Robotics course. The team worked with a language-learning robot in local preschool and elementary-school settings, controlled through a cloud-based application.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          It sat inside a classroom routine with a teacher, a lesson plan, and children who needed the interaction to feel safe, readable, and worth their attention.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={'Users'}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          The primary users were children learning Finnish or another second language. They were curious, direct, and quick to test social cues. In practice, engagement depended on feedback, turn-taking, and whether the robot felt responsive enough to hold attention.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          Teachers were the operators and the trust holders. They needed the robot to support a lesson without adding friction, confusion, or anything that felt unsafe or too open-ended for the classroom.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={'Constraints'}
                content={
                  <span>
                    <Row
                      content={
                        <ul className={pStyle + ' list'}>
                          <li>Speech recognition failed often enough that the team had to design for breakdown, not for a perfect voice UI.</li>
                          <li>The robot had to behave predictably in front of young children, where ambiguity could quickly turn into distraction or anxiety.</li>
                          <li>Teachers remained active mediators, so the concept had to respect their role instead of pretending the robot could replace it.</li>
                          <li>The final concept was evaluated as a concept, not validated as a production classroom system.</li>
                        </ul>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={'Research setup'}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          The research started with literature review and then moved into the field. The team ran two observation sessions and interviewed the teachers afterwards. Notes were captured during the sessions and then synthesized into an affinity diagram.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <div className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10 col-xl-offset-2 col-xl-8">
                          <Process steps={steps} />
                        </div>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={'Observation findings'}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          In both sessions, the children approached the robot with obvious enthusiasm. They were careful with it, curious about it, and eager to get a response. That enthusiasm was useful, but it also meant that the robot's behavior had to be clear enough to hold attention without becoming chaotic.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          Speech recognition was the most visible failure mode. Children tried spelling commands, speaking closer to the robot, and asking the teacher to repeat the same command because they had already learned that adult speech was recognized more reliably.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <div className={pStyle}>
                          <ImageZoom
                            image={{
                              src: resolveAssetSrc(observation),
                              alt: 'Observation session showing the classroom robot in use with children nearby.',
                              className: 'feature-image',
                              style: { maxWidth: '100%' },
                            }}
                            zoomImage={{
                              src: resolveAssetSrc(observation),
                              alt: 'Observation session showing the classroom robot in use with children nearby.',
                            }}
                          />
                        </div>
                      }
                    />
                    <Row
                      content={
                        <p className={'caption ' + pStyle}>
                          Observation session in the classroom
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          The robot also tended to orient toward the teacher, even when the children were the ones trying to establish contact. In practice, the teacher had to turn the robot manually so its face and eyes stayed with the group.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={'Key interaction issues'}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          The affinity diagram exposed a set of interaction issues that were broader than speech alone: feedback, motivation, ethics, expectations, guidance, and how the robot should acknowledge presence in a group setting.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <div className={pStyle}>
                          <ImageZoom
                            image={{
                              src: resolveAssetSrc(affinity),
                              alt: 'Affinity diagram grouping observation and interview notes into themes.',
                              className: 'feature-image',
                              style: { maxWidth: '100%' },
                            }}
                            zoomImage={{
                              src: resolveAssetSrc(affinity),
                              alt: 'Affinity diagram grouping observation and interview notes into themes.',
                            }}
                          />
                        </div>
                      }
                    />
                    <Row
                      content={
                        <p className={'caption ' + pStyle}>
                          Themes grouped from observation and interview notes
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          The design implication was straightforward: if the robot could not understand a child, it had to say so. Silence or vague recovery would break trust. The interaction also needed smaller, simpler turns so the robot could ask one thing at a time and avoid asking the whole group to solve a noisy failure mode at once.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          Gaze was another trust signal. A robot that kept looking at the teacher was sending the wrong message in a child-facing lesson. The children needed the robot to acknowledge them directly, distribute attention more evenly, and behave in a way that felt fair in a group.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={'Concept decisions'}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          The concept aimed to make the robot calmer, more explicit, and more teachable. The team wrote a dialogue where the robot asked one question at a time, used contextual gestures to make meaning visible, and gave clearer verbal recovery when it did not understand an answer.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          Immediate feedback became a core behavior decision. The "candy eyes" reward was meant to appear after correct answers, and the application gained a button the teacher could use when the robot missed a response but the child had still answered correctly. That kept the lesson moving without forcing the child to repeat endlessly.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <div className={pStyle}>
                          <ImageZoom
                            image={{
                              src: resolveAssetSrc(candy),
                              alt: 'Concept sketch showing the candy-eyes feedback idea.',
                              className: 'feature-image',
                              style: { maxWidth: '100%' },
                            }}
                            zoomImage={{
                              src: resolveAssetSrc(candy),
                              alt: 'Concept sketch showing the candy-eyes feedback idea.',
                            }}
                          />
                        </div>
                      }
                    />
                    <Row
                      content={
                        <p className={'caption ' + pStyle}>
                          Candy eyes as immediate positive feedback
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          The same logic shaped the robot's posture and gaze. It should feel less like a machine waiting for commands and more like a present participant in the lesson, while still staying visibly bounded by the teacher's control. That balance mattered because the children could treat the robot as a social actor, but the classroom still needed adult mediation.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={'Evaluation method'}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          The evaluation used the theatrical robot method. A person played the robot's role so the team could test the interaction concept without implementing the full hardware or software behavior first. That made it a practical early-stage check for the flow, but not proof of classroom impact.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <div className={pStyle}>
                          <ImageZoom
                            image={{
                              src: resolveAssetSrc(theatrical),
                              alt: 'Theatrical robot evaluation with the teacher operating the concept.',
                              className: 'feature-image',
                              style: { maxWidth: '100%' },
                            }}
                            zoomImage={{
                              src: resolveAssetSrc(theatrical),
                              alt: 'Theatrical robot evaluation with the teacher operating the concept.',
                            }}
                          />
                        </div>
                      }
                    />
                    <Row
                      content={
                        <p className={'caption ' + pStyle}>
                          Theatrical robot evaluation with teacher mediation
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          Teachers responded positively to the idea of the robot as a motivational assistant and pointed to several ideas worth keeping, including clearer feedback, repeat prompting, and more child-facing attention. They also reminded the team that younger children still need a teacher present and that the robot should not be framed as a replacement for classroom instruction.
                        </p>
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
                          Looking back, the strongest pattern in the work was research data turning into interaction decisions. The team used observations and teacher interviews to define failure modes, then translated them into behavior decisions: failure messaging, gaze, feedback timing, teacher mediation, and group fairness.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          The limits are equally clear. The concept never became a field-tested classroom product, so it should be read as archive work that shows method rather than impact. Even so, it shows a pattern that still matters in my work: identify where trust is likely to break, then design behavior around that reality instead of around a polished demo.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={'Archive evidence'}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          The project did not ship as a classroom product, so the strongest public evidence is the research archive around it: observation notes, theatrical evaluation, and external coverage. Together they support the claim that the work translated field data into interaction decisions rather than novelty-driven concept art.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <div className={pStyle + ' links'} style={{ marginTop: '1.5em' }}>
                          <a href="https://smarttampere.fi/lapsikeskeisempaa-robotiikkaa-opiskelijoilta-ideoita-opetusrobottien-kehittamiseksi/">
                            Lapsikeskeisempää robotiikkaa
                          </a>
                          <span style={{ marginLeft: '1.5em' }}>
                            <a href="https://smarttampere.fi/en/towards-child-centered-robotics-ideas-from-students-to-develop-teaching-robots/">
                              Towards child-centered robotics
                            </a>
                          </span>
                        </div>
                      }
                    />
                    <Row
                      content={
                        <div
                          className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-12 button-wrapper"
                          onClick={this.toggleEvidence}
                        >
                          <Button
                            label={this.state.evidenceOpen ? 'Hide teacher feedback note' : 'Show teacher feedback note'}
                            color={'outline red'}
                          />
                        </div>
                      }
                    />
                    <Collapse isOpened={this.state.evidenceOpen}>
                      <Row
                        content={
                          <p className={pStyle}>
                            The course teacher’s feedback described the report as broad, clearly written, and strong on teamwork and authentic user studies, while noting a few missing discussion details. That is the level of outcome evidence this archive supports.
                          </p>
                        }
                      />
                    </Collapse>
                  </span>
                }
              />
            </span>
          }
        />
      </div>
    );
  }
}

export default Languagerobot;
