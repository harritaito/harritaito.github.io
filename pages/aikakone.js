import React, { Component } from "react";

import CaseStudyMeta from "../components/CaseStudyMeta";
import ProjectPage from "../components/ProjectPage";
import Process from "../components/Process";
import ProjectSection from "../components/ProjectSection";
import Row from "../components/Row";
import { resolveAssetSrc } from "../components/assetSource";
import HighlightUnderline from "../components/design-system/HighlightUnderline";
import { colors, shadows } from "../components/design-system/tokens";
import { Carousel } from "react-responsive-carousel";
import Modal from "react-modal";

import hero from "../static/media/aikakone/hero.jpg";
import menu from "../static/media/aikakone/menu.jpg";
import aikakone from "../static/media/aikakone/aikakone.jpg";
import profile from "../static/media/aikakone/profile.jpg";
import elamankaari from "../static/media/aikakone/elamankaari.jpg";

class Aikakone extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      selectedSlideIndex: 0,
    };
  }

  toggleModal = (selectedSlideIndex) => {
    this.setState((state) => ({
      modalIsOpen: !state.modalIsOpen,
      selectedSlideIndex: Number.isInteger(selectedSlideIndex)
        ? selectedSlideIndex
        : state.selectedSlideIndex,
    }));
  };

  render() {
    const pStyle =
      "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";

    const steps = [
      {
        title: "Discovery",
        processes: [
          "Lean Service Creation canvases",
          "Contextual inquiry",
          "Existing-solution review",
          "Semi-structured interviews",
        ],
      },
      {
        title: "Blueprinting",
        processes: ["Use cases", "Service blueprint", "Paper mockups", "Digital mockup"],
      },
      {
        title: "Prototype",
        processes: ["Usability testing"],
      },
    ];

    const views = [
      {
        image: menu,
        alt: "Aikakone menu screen.",
        openLabel: "Open the Aikakone menu screen preview.",
      },
      {
        image: aikakone,
        alt: "Aikakone session screen.",
        openLabel: "Open the Aikakone session screen preview.",
      },
      {
        image: profile,
        alt: "Profile screen for a resident.",
        openLabel: "Open the resident profile screen preview.",
      },
      {
        image: elamankaari,
        alt: "Elämänkaari life-story screen.",
        openLabel: "Open the Elämänkaari life-story screen preview.",
      },
    ];
    const { modalIsOpen } = this.state;

    return (
      <div className="Aikakone">
        <ProjectPage
          projectName={"Aikakone"}
          title={"A Memory-Care Reminiscence Service"}
          hero={hero}
          heroAlt={"Ideation on a service-design canvas."}
          eyebrow={"Concept work"}
          description={
            "How field inquiry and service blueprinting shaped a calmer reminiscence service for caregivers, families, and people living with memory disease."
          }
          navbarColor={"purple"}
          content={
            <span>
              <CaseStudyMeta
                status={"Concept work"}
                summary={
                  "A service-design archive case study showing how trust-sensitive reminiscence sessions can support conversation and handoff in memory care."
                }
                note={
                  "What this case proves: I can work through a sensitive service problem, keep the facilitator role clear, and avoid overstating outcomes that the archive does not support."
                }
                fields={{
                  myRole: [
                    "Service design",
                    "UX research",
                    "Interaction design",
                    "User testing",
                    "Facilitated prototype testing",
                  ],
                  team: "4 designers",
                  timeline: "March 2016 to May 2016",
                  context:
                    "University of Tampere and Futurice's Let’s Re-Design Health Services course, working with Espericare on a memory-care service concept.",
                  problem:
                    "Problem type: trust-sensitive service design for everyday care conversations and memory sharing.",
                  users: [
                    "People living with memory disease",
                    "Caregivers and nurses",
                    "Family members",
                    "Volunteers and new staff who need a quick way to learn the person's story",
                  ],
                  businessContext:
                    "The client brief asked for an entertainment and stimulation service for memory care.",
                  constraints: [
                    "Care time was limited",
                    "The concept had to work in short, interrupted sessions",
                    "The tone needed to stay calm, respectful, and easy to hand over",
                    "The page does not show a production launch",
                  ],
                  discovery: [
                    "Contextual inquiry at Espericare",
                    "Existing-solution review",
                    "Structured interviews",
                    "Paper prototype testing",
                  ],
                  keyInsights: [
                    "Caregivers needed a low-friction way to start a session.",
                    "The service had to help people living with memory disease remain the focus of their own story.",
                    "Shared stories could help staff, families, and residents build trust faster.",
                  ],
                  conceptModel:
                    "Pictures, sound, and text around the same story so a facilitator can adapt the session to the person and the moment.",
                  keyDecisions: [
                    "Keep the caregiver, family member, or volunteer in the facilitator role.",
                    "Design for bedside use and shared-screen use.",
                    "Keep the flow short and calm enough for vulnerable users.",
                    "Avoid treating personal history as generic entertainment content.",
                  ],
                  designDetails: [
                    "Lean Service Creation canvases",
                    "Service blueprint",
                    "Paper mockups",
                    "Digital mockup",
                  ],
                  outcome:
                    "The concept was voted second-best in the course and received positive feedback, but it did not reach market.",
                  reflection:
                    "A useful archive example of service design under care constraints, not proof of clinical or commercial impact.",
                }}
              />

              <ProjectSection
                title={"My role"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          I contributed across service design, UX research, interaction design, and testing: contextual inquiry, interviews, Lean Service Creation canvases, service blueprinting, prototype screens, and facilitated prototype testing. The concept and course result were produced by the four-person team, so this page does not claim solo ownership or a launched care product.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={"Care context"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          Aikakone began in the University of Tampere and Futurice's Let’s Re-Design Health Services course. Espericare's brief asked for an entertainment and stimulation service for memory care.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          The goal was not to promise a cure or a medical result. It was to create a calmer way to support conversation, familiarity, and meaningful connection around personal memories.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          The care context made the brief a service-design problem as much as a content or interface one. Time was fragmented, attention was limited, and the service had to fit into ordinary care routines without creating more work.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={"Users and stakeholders"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          The service had to work for several people at once, each with a different reason to use it.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          People living with memory disease needed gentle prompts, not a test. Caregivers needed a quick way to start a session. Family members could add photos and stories. New staff and volunteers needed a simple way to learn what mattered to the person.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <ul className={pStyle + " list"}>
                          <li>The resident stayed at the center of the conversation.</li>
                          <li>The caregiver acted as a facilitator, not as a gatekeeper.</li>
                          <li>Family members could add context and personal history.</li>
                          <li>New staff and volunteers could learn faster without relying on informal handover alone.</li>
                        </ul>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={"Emotional constraints"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          Working in memory care meant keeping the tone calm, adult, and respectful. The interface had to avoid pressure, avoid clutter, and leave room for silence or pauses.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          We treated reminiscence as a supported conversation, not as a test or a claim about treatment. The design had to feel safe enough to bring into a care routine without adding friction or embarrassment.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          Human agency mattered throughout: the facilitator had to follow the person's pace, pause when needed, and let the conversation move where the memory led instead of forcing a scripted flow.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          That constraint shaped what the product should not do. It should not diagnose, score, correct, or push someone through content just because the interface has a next screen.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={"Accessibility and simplicity"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          The concept leaned on a low cognitive load: short paths, clear labels, large visuals, and only a few moving parts at a time. That mattered because the session could happen in a room, at a bedside, or on a shared screen with limited attention.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          The service needed to be easy to hand over. A family member, nurse, or volunteer should be able to pick it up quickly, understand the next step, and still adapt the pace to the person in front of them.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          The aim was to reduce cognitive load, not add another tool to learn.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={"Research"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          We started with a contextual inquiry at an Espericare facility, accompanied by a Futurice employee. We observed the environment, photographed the premises, drew a floor plan of the area residents used, and asked staff and residents questions.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          We also reviewed existing solutions, entertainment concepts, and ways to support time spent with people living with memory disease. One reference point was reminiscence therapy, which we treated carefully as a source of ideas about shared memory and caregiver familiarity rather than as proof of outcome.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          We returned later for structured interviews and a paper-prototype test. The research pointed to the same basic need from several directions: short sessions, low setup friction, and a way for staff to learn personal history without relying on informal coffee-break handovers.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <ul className={pStyle + " list"}>
                          <li>Caregivers did not have much time for long setup or explanation.</li>
                          <li>Residents needed support that could start quickly and remain gentle.</li>
                          <li>Families wanted to contribute in a way that felt useful, not symbolic.</li>
                          <li>Shared memories could help staff understand the person behind the diagnosis.</li>
                        </ul>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={"Service blueprinting"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          The blueprint connected what the resident experiences, what the facilitator does, and what has to happen before a session can start. That made the service easier to reason about in a care environment where the handoff matters as much as the interface.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          Lean Service Creation canvases helped us keep the concept honest about the real service around it: who prepares content, who opens the session, who adapts the pace, and who closes the loop for the next time.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <ul className={pStyle + " list"}>
                          <li>Before the session: family or staff help gather memory material.</li>
                          <li>During the session: the facilitator chooses media and reads the person's response.</li>
                          <li>After the session: staff can leave with a little more context for future care moments.</li>
                        </ul>
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
                title={"Concept decisions"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          Aikakone combined pictures, sound, and text around the same story so a facilitator could pick the right entry point for the person in front of them. The shared-history view supported common memories, while Elämänkaari and Profiili focused on personal history and what staff should know about the person.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          The most important decision was to keep the experience guided rather than self-serve. The tool was there to support the relationship, not replace the caregiver, family member, or volunteer who brought the memory to life.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          We also kept the concept flexible across shared and individual settings. Images, music, and video material could work bedside, in a common room, or in a quick one-on-one moment between other tasks.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <ul className={pStyle + " list"}>
                          <li>Aikakone: shared history prompts for common memories.</li>
                          <li>Elämänkaari: a personal life-story view for individual history.</li>
                          <li>Profiili: practical context about the person for staff and facilitators.</li>
                          <li>Media categories: images, music, and video as alternate ways into the same conversation.</li>
                        </ul>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={"Prototype"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          The first digital draft was built in PowerPoint because the course was focused on service design and fast learning, not polished production UI. We made it behave enough like an app for staff to move through a guided Aikakone session.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          We also tested the idea with simple printed images from different decades. Sitting close and speaking at an easy pace helped keep the interaction calm and gave residents room to respond in their own way.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          Near the end of the course we visited Villa Niemi and asked nurses to try the PowerPoint prototype. We then interviewed them about feasibility, important features, fit for stimulation sessions, and when they could imagine using the concept with a resident.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          The prototype was deliberately rough. Its job was to test whether the service moment made sense to staff, not to prove a finished interface or a measured care outcome.
                        </p>
                      }
                    />

                    {modalIsOpen ? (
                      <Modal isOpen={modalIsOpen} onRequestClose={this.toggleModal}>
                        <Carousel
                          showThumbs={false}
                          showStatus={false}
                          selectedItem={this.state.selectedSlideIndex}
                        >
                          <div>
                            <img src={resolveAssetSrc(menu)} alt="Aikakone menu screen." />
                            <p className="legend">Aikakone menu screen.</p>
                          </div>
                          <div>
                            <img src={resolveAssetSrc(aikakone)} alt="Aikakone session screen." />
                            <p className="legend">Aikakone session screen.</p>
                          </div>
                          <div>
                            <img src={resolveAssetSrc(profile)} alt="Profile screen for a resident." />
                            <p className="legend">Profile screen for a resident.</p>
                          </div>
                          <div>
                            <img src={resolveAssetSrc(elamankaari)} alt="Elämänkaari life-story screen." />
                            <p className="legend">Elämänkaari life-story screen.</p>
                          </div>
                        </Carousel>
                      </Modal>
                    ) : null}

                    <Row
                      className="one-margin-top col-md-offset-1 col-lg-offset-3"
                      content={views.map((view, index) => {
                        return (
                          <button
                            type="button"
                            key={"sketch" + index}
                            aria-label={view.openLabel}
                            onClick={() => this.toggleModal(index)}
                            className="thumbnail-button col-xs-4 col-sm-4 col-md-2 col-lg-2 col-xl-2"
                          >
                            <img
                              className="mini-image"
                              src={resolveAssetSrc(view.image)}
                              alt={view.alt}
                            />
                          </button>
                        );
                      })}
                    />

                    <Row
                      content={
                        <p className={"caption " + pStyle}>
                          The menu, session, profile, and Elämänkaari screens show how the concept could be organized around shared memories, personal history, and a facilitator-led session.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={"Reflection"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          The strongest lesson from Aikakone was that trust is part of the product. A care service only works when it respects the person's pace, gives staff a simple way to act, and leaves space for family and volunteers to contribute without taking over.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          It also showed the limits of an older course concept. The project earned positive feedback and a second-place course result, but it stayed at archive level and did not become a launched service.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          The later attempt to push the idea further taught a less comfortable lesson: belief in a concept is not enough if the team, ownership model, and execution discipline are not strong enough to carry it into practice.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          That makes it useful as evidence for trust-sensitive design: the work is strongest where human agency, emotional tone, and service handoff are treated as first-class constraints rather than afterthoughts.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <div className={pStyle + " links"} style={{ marginTop: "1.5em" }}>
                          <a href="http://leanservicecreation.com">
                            Lean Service Creation
                            <HighlightUnderline />
                          </a>
                        </div>
                      }
                    />
                  </span>
                }
              />
            </span>
          }
        />
        <style jsx>{`
          .Aikakone .project-section .feature-image.aikakone-preview,
          .Aikakone .project-section .feature-image.solution {
            -webkit-box-shadow: none;
            box-shadow: none;
          }

          .Aikakone .project-section .inline-svg {
            display: -ms-inline-flexbox;
            display: inline-flex;
          }

          .Aikakone .project-section .inline-svg svg {
            height: 15px;
          }

          .Aikakone .nav .navbar-link:hover {
            color: ${colors.accentPurple};
          }

          .Aikakone .nav .navbar-link:hover a {
            color: ${colors.accentPurple};
          }

          .Aikakone .nav .navbar-link:hover svg {
            fill: ${colors.accentPurple};
          }

          .Aikakone b {
            color: ${colors.accentPurple};
          }

          .Aikakone ol {
            padding-left: 28px;
            margin-top: 0;
          }

          .Aikakone ul {
            padding-left: 25px;
            margin-top: 0;
          }

          .Aikakone li {
            margin-bottom: 10px;
          }

          .feature-image {
            max-width: 100%;
            height: auto;
            margin: 0.75em 0;
            -webkit-box-shadow: ${shadows.media};
            box-shadow: ${shadows.media};
          }

          iframe {
            margin: 0.75em 0;
            -webkit-box-shadow: ${shadows.media};
            box-shadow: ${shadows.media};
          }

          .mini-image {
            -webkit-box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.15);
            box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.15);
            max-width: 100%;
            height: auto;
            margin: 0.75em 0;
          }

          .thumbnail-button {
            appearance: none;
            background: transparent;
            border: 0;
            text-align: left;
          }

          .mini-image:hover {
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
}

export default Aikakone;
