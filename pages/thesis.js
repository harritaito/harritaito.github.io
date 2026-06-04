import React, { Component } from "react";

import CaseStudyMeta from "../components/CaseStudyMeta";
import ProjectPage from "../components/ProjectPage";
import Process from "../components/Process";
import ProjectSection from "../components/ProjectSection";
import Row from "../components/Row";
import HighlightUnderline from "../components/design-system/HighlightUnderline";
import { colors } from "../components/design-system/tokens";

import hero from "../static/media/pohja.svg";

class Thesis extends Component {
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
                  discovery: [
                    "Semi-structured expert interviews with 6 Finnish industrial XR professionals",
                    "Grounded theory methodology — theory emerges from data, not hypothesis testing",
                    "Supplementary literature review guided by interview findings",
                    "XR industry meetup observation and participant recruitment",
                  ],
                  outcome:
                    "A grounded theory of industrial XR interaction, three core design principles, and a literature-backed review of input techniques suitable for field maintenance contexts.",
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
                          A grounded theory approach — the theory emerges from the data rather than testing a predetermined hypothesis. Six senior Finnish industrial XR professionals were interviewed: four lead UX designers, a research director, and a software development engineer. All had eight or more years of experience, and all had shipped or closely observed industrial XR in the field.
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
                title={"What the interviews found"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          Three core categories emerged from the data.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          <strong>Touchless interaction.</strong> Speech is the most mature hands-free technology and the easiest for users to accept — familiar from personal devices, straightforward to implement, and functional even in noisy environments with the right mic setup. Mid-air gestures have real potential but come with reliability and safety concerns: optical capture fails in poor lighting, broad arm movements near running machinery are a hazard, and gloves break most current implementations. Gaze works as a side-channel signal, not a primary input. Every participant agreed that multimodal input is required — no single modality covers all situations, users, or environments.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          <strong>Occupational safety and ergonomics.</strong> Unencumbered perception is the single most important factor. The interface has to stay out of the way of the user's awareness of their environment. PPE compatibility is non-negotiable. Display readability matters more than immersiveness — a monocular pass-through display the technician can actually read beats a binocular HMD with a narrow FOV and poor outdoor brightness. Users need to be able to choose the display that works for them.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          <strong>Empowering worker and technology acceptance.</strong> Technicians need just-in-time information access — quick help mid-maintenance, not step-by-step guidance for tasks they already know. Reporting is a significant burden (one participant cited 2–4 hours of an 8-hour shift). Wearables are intimidating: technicians worry about looking silly, about damaging a €1,500 device, about what clients will think. Technology acceptance is individual and can be supported, but not forced. For large-scale field deployment, the smartphone on a suitable holder, extended with touchless input, is still more practical than most current HMDs.
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
        `}</style>
      </div>
    );
  }
}

export default Thesis;
