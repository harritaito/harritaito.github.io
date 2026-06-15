import React, { Component } from "react";
import { Collapse } from "react-collapse";

import Button from "../components/Button";
import CaseStudyMeta from "../components/CaseStudyMeta";
import ProjectPage from "../components/ProjectPage";
import Process from "../components/Process";
import ProjectSection from "../components/ProjectSection";
import Row from "../components/Row";
import HighlightUnderline from "../components/design-system/HighlightUnderline";
import { colors } from "../components/design-system/tokens";

import hero from "../static/media/pohja.svg";

class Thesis extends Component {
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
      "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";

    const steps = [
      {
        title: "Pre-interviews",
        processes: ["Terminology review", "XR industry meetups", "Participant recruitment"],
      },
      {
        title: "Interviews",
        processes: ["6 expert interviews", "Grounded theory coding", "Category formation"],
      },
      {
        title: "Literature review",
        processes: ["Guided by interview findings", "Input technique research", "Theory consolidation"],
      },
    ];

    return (
      <div className="Thesis">
        <ProjectPage
          projectName={"Thesis"}
          title={"Interaction Design Principles for Industrial XR"}
          hero={hero}
          heroAlt={"Abstract texture background."}
          eyebrow={"Master's thesis"}
          description={
            "A grounded theory study on what interaction techniques actually work when the user is wearing gloves, working in noise, and can't afford to be confused by the interface."
          }
          navbarColor={"green"}
          content={
            <span>
              <CaseStudyMeta
                status={"Published research"}
                summary={
                  "Most XR interaction research assumes a comfortable, controlled setting. Industrial environments don't offer that. This thesis asked interaction designers and developers what actually works — and why — when the physical context is as demanding as the task itself."
                }
                fields={{
                  myRole: "Primary researcher and author",
                  team: "Solo research, supervised by professor Markku Turunen",
                  timeline: "2019–2021",
                  context:
                    "Master's programme in Human-Technology Interaction, Tampere University. Published May 2021.",
                  problem:
                    "What interaction techniques suit industrial XR environments best, and what makes XR solutions easy to adopt in field work?",
                  users: [
                    "Maintenance technicians and field workers",
                    "Interaction designers and developers building industrial XR",
                    "Industrial companies evaluating XR adoption",
                  ],
                  constraints: [
                    "6 participants — findings are not statistically generalizable",
                    "All Finnish — cultural context is a variable",
                    "COVID moved interviews to video conference, removing in-person observation",
                    "NDA limitations meant participants described publicized projects only",
                  ],
                  discovery: [
                    "Semi-structured expert interviews with 6 Finnish industrial XR professionals",
                    "Grounded theory methodology — theory emerges from data, not hypothesis testing",
                    "Supplementary literature review guided by interview findings",
                    "XR industry meetup observation and participant recruitment",
                  ],
                  keyInsights: [
                    "Speech is the most mature and accepted hands-free technology — familiar from personal devices, functional even in noisy environments with the right mic setup",
                    "Technology acceptance is the biggest barrier: wearables are intimidating, expensive, and make technicians feel self-conscious in front of clients",
                    "The smartphone on a holder, extended with touchless input, is still more practical for large-scale field deployment than most current HMDs",
                  ],
                  hardMetrics:
                    "No adoption, deployment, or field-performance metrics are claimed from this thesis.",
                  qualitativeEvidence:
                    "Six expert interviews and grounded theory coding produced the interaction categories, design principles, and literature-backed input-technique review.",
                  proxyEvidence:
                    "The public thesis documents the research method, participant profile, coding logic, and resulting industrial XR interaction model.",
                  reflection:
                    "The grounded theory remains untested in a production deployment. The value is in clarifying why certain techniques fail and what an interaction designer needs to prioritise — not in claiming a shipped industrial product.",
                }}
              />

              <ProjectSection
                title={"The problem"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          Industrial field maintenance is physically demanding. Technicians work in noise, confined spaces, hot and dusty environments, wearing PPE that limits their dexterity. Both hands are usually occupied. The job doesn't pause while they figure out an interface.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          XR technology was entering industrial use quickly — maintenance, assembly, training, remote assistance — but most interaction research assumed office conditions. Gloves break touchscreens. Noise drowns out audio feedback. Broad mid-air gestures near machinery are a safety risk. The standard assumptions about how people interact with digital interfaces mostly don't transfer.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          The thesis asked: what do the designers and developers who have actually shipped industrial XR know about this? What decisions have they made, and why?
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={"Method"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          A grounded theory approach — the theory emerges from the data rather than testing a predetermined hypothesis. Six experienced Finnish industrial XR professionals were interviewed: four lead UX designers, a research director, and a software development engineer. All had substantial field experience and had shipped or closely observed industrial XR in the field.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          Interview material was transcribed, translated, open coded, and progressively grouped into subcategories, concepts, and categories using constant comparison. A supplementary literature review followed, guided by the grounded theory rather than preceding it.
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
                title={"Touchless interaction"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          Speech is the most mature hands-free technology and the easiest for users to accept. Familiar from personal devices, straightforward to implement, and functional even in noisy environments with the right microphone setup. Every participant described it as the most viable primary input channel. The bar is high though: <em>"Good voice control is such that the user does not have to remember anything."</em>
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          Mid-air gestures have real potential but come with reliability and safety concerns. Optical capture fails in poor lighting. Broad arm movements near running machinery are a hazard. Gloves break most current implementations. The threshold the interviews kept returning to: reliable as a touchscreen, or don't implement it at all. Direct manipulation gestures — pointing at an object to select it — outperform symbolic gestures that require the user to memorize a vocabulary.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          Gaze is useful as a side-channel or implicit signal — directing system attention, confirming focus — but not as a primary selection mechanism. The precision demands are too high and the fatigue too significant for sustained use. Every participant agreed that multimodal input is required: no single modality covers all situations, users, or environments.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={"Safety and ergonomics"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          Unencumbered perception is the single most important factor. The interface has to stay out of the way of the user's awareness of their physical environment — a technician who is focused on a display instead of the machine they're servicing is a safety problem, not a UX problem.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          PPE compatibility is non-negotiable. Gloves, helmets, hearing protection — the device has to work with all of them. That alone rules out most touchscreen-first design assumptions and pushes heavily toward voice and touchless freehand as the baseline.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          Display readability matters more than immersiveness. A monocular pass-through display the technician can actually read beats a binocular HMD with a narrow FOV and poor outdoor brightness. Participants were clear: <em>"It is very important to get the FOV wide enough."</em> Users need to be able to choose the display that works for their job and conditions. For large-scale field deployment, the smartphone on a suitable holder, extended with touchless input, is still more practical than most current HMDs.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={"Worker empowerment and technology acceptance"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          Technicians need just-in-time information access — quick help mid-maintenance, not step-by-step guidance for tasks they already know. The interviews were emphatic about this. Industrial XR content often overcorrects toward explaining everything: <em>"Videos of AR maintenance contain an awful amount of great looking 3D animations... 'We know how to open a screw. We do not need help with that.'"</em> The interface should surface what the technician doesn't know, not rehearse what they do.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          Reporting is a significant and underappreciated burden. One participant cited 2–4 hours of an 8-hour shift spent on documentation. <em>"If 2-4 hours of an 8-hour workday is spent on reporting, it is a clear indicator that something has failed."</em> XR has real potential to reduce this — in-situ documentation, automatic logging, photo capture — but only if reporting is designed as a first-class use case, not an afterthought.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          Wearables are intimidating in ways that go beyond ergonomics. Technicians worry about looking unprofessional in front of clients, about damaging a €1,500 device in a harsh environment, about being visibly different from their colleagues. <em>"Some of the technicians even think that they don't want to be seen using smartphones on the client's location as the client may think ill of them."</em> Technology acceptance is individual and situational. It can be supported, but not mandated.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          When it works, it works well. A technician with the right tool, arriving on site prepared and capable: <em>"Maintenance technician feels like they are a hero because they can solve those problems."</em> That's the experience industrial XR is capable of — and the bar to design toward.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={"The core theory"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          The grounded theory produced a central statement of what industrial XR interaction has to be:
                        </p>
                      }
                    />
                    <Row
                      content={
                        <blockquote className={pStyle + " blockquote"}>
                          A feasible industrial XR solution requires affordable and robust hands-free operation, with a freehand touchless alternative, of a readable display and an opportunity for eyes-free output — all in a usable and safe manner.
                        </blockquote>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          In practice: every design decision for an industrial XR interface should be stress-tested against those five constraints simultaneously. A solution that satisfies one while failing another isn't a trade-off — it's a deployment risk.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={"The three principles"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          The grounded theory produced three interaction design principles for industrial XR:
                        </p>
                      }
                    />
                    <Row
                      content={
                        <ul className={pStyle + " list"}>
                          <li>
                            <strong>Design for focus.</strong> The technology is a tool for getting the job done, not a feature to learn. XR interaction should minimize cognitive burden — perception, cognition, physical effort — and stay in the background until it's needed. An interface that demands attention takes the technician away from the task it's supposed to support.
                          </li>
                          <li>
                            <strong>Readable display.</strong> Visual output is the only essential feedback channel; audio should be user-switchable. The display has to be visible and legible in the actual conditions of the work — bright light, outdoor, moving — not just in a demo room. Users should be able to choose their display solution based on their job and preferences.
                          </li>
                          <li>
                            <strong>Robust technology use.</strong> Industrial users have a low tolerance for unreliable tools. Every input technique implemented needs to be reliable enough that failure feels like the exception, not the norm. Multimodal input is required — speech as the primary hands-free channel, touchless freehand as the alternative, with PPE-compatible and one-handed operation throughout.
                          </li>
                        </ul>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={"Interview evidence"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          The grounded theory structured 6 expert interviews into concepts, subcategories, and categories through constant comparison coding. The full table from the thesis:
                        </p>
                      }
                    />
                    <Row
                      content={
                        <div
                          className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-12 button-wrapper"
                          onClick={this.toggleEvidence}
                        >
                          <Button
                            label={this.state.evidenceOpen ? "Hide interview categories" : "Show interview categories"}
                            color={"outline green"}
                          />
                        </div>
                      }
                    />
                    <Collapse isOpened={this.state.evidenceOpen}>
                      <Row
                        content={
                          <ul className={pStyle + " list evidence-list"}>
                            <li>
                              <strong>Touchless interaction</strong>
                              <ul>
                                <li>Speech recognition — maturity, naturalness, noise robustness, vocabulary-free use</li>
                                <li>Mid-air gestures — optical reliability, safety near machinery, direct vs. symbolic, glove compatibility</li>
                                <li>Gaze — side-channel signal, implicit targeting, not primary selection</li>
                                <li>Multimodality — no single modality sufficient; context determines the combination</li>
                              </ul>
                            </li>
                            <li>
                              <strong>Occupational safety and ergonomics</strong>
                              <ul>
                                <li>Unencumbered perception — situational awareness as a safety requirement</li>
                                <li>PPE compatibility — gloves, helmets, hearing protection as hard constraints</li>
                                <li>Display readability — FOV, outdoor brightness, monocular vs. binocular</li>
                                <li>Device choice — smartphone holder as practical deployment baseline</li>
                              </ul>
                            </li>
                            <li>
                              <strong>Empowering worker and technology acceptance</strong>
                              <ul>
                                <li>Just-in-time information — on-demand help, not step-by-step walkthroughs</li>
                                <li>Reporting burden — documentation as a first-class use case</li>
                                <li>Technology acceptance — self-consciousness, device cost, client perception</li>
                                <li>Worker empowerment — XR as a capability multiplier, not a surveillance tool</li>
                              </ul>
                            </li>
                          </ul>
                        }
                      />
                    </Collapse>
                  </span>
                }
              />

              <ProjectSection
                title={"Scope and limitations"}
                content={
                  <Row
                    content={
                      <p className={pStyle}>
                        Six participants is a small sample. All were Finnish, which means the findings carry a cultural context that may not generalize to industrial XR adoption elsewhere. COVID moved interviews online, removing any in-person observation. NDA constraints meant participants could only describe work they were already comfortable discussing publicly. The grounded theory is also untested in a production deployment — its value is in structuring what experienced practitioners know, not in predicting what will ship in any specific industrial context. Read it as a design lens, not a guarantee.
                      </p>
                    }
                  />
                }
              />

              <ProjectSection
                title={"Read it"}
                content={
                  <Row
                    content={
                      <div className={pStyle + " links"} style={{ marginTop: "1.5em" }}>
                        <a
                          href="https://trepo.tuni.fi/handle/10024/133277"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Full thesis — Tampere University repository
                          <HighlightUnderline />
                        </a>
                        <div style={{ marginTop: "1.5em" }}>
                          <a
                            href="https://trepo.tuni.fi/bitstream/handle/10024/133277/HalonenHarri.pdf?sequence=2&isAllowed=y"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Direct PDF
                            <HighlightUnderline />
                          </a>
                        </div>
                      </div>
                    }
                  />
                }
              />
            </span>
          }
        />
        <style jsx>{`
          .Thesis .nav .navbar-link:hover {
            color: ${colors.accentGreen};
          }

          .Thesis .nav .navbar-link:hover a {
            color: ${colors.accentGreen};
          }

          .Thesis .nav .navbar-link:hover svg {
            fill: ${colors.accentGreen};
          }

          .Thesis .list {
            padding-left: 25px;
            margin-top: 0;
          }

          .Thesis .list li {
            margin-bottom: 1em;
            line-height: 1.7;
          }

          .Thesis .evidence-list li {
            margin-bottom: 0.75em;
          }

          .Thesis .evidence-list ul {
            margin-top: 0.4em;
            padding-left: 1.2rem;
          }

          .Thesis .evidence-list ul li {
            margin-bottom: 0.3em;
            color: ${colors.textMuted};
            font-size: 0.92rem;
          }

          .Thesis .blockquote {
            display: block;
            border-left: 3px solid ${colors.accentGreen};
            padding-left: 1.25rem;
            margin: 0.5rem 0 0.5rem 0;
            font-style: italic;
            line-height: 1.7;
            color: ${colors.textStrong};
          }

          .Thesis .button-wrapper {
            margin-top: 1rem;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
}

export default Thesis;
