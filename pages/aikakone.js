import React, { Component } from "react";
import { Collapse } from "react-collapse";

import Button from "../components/Button";
import ProjectPage from "../components/ProjectPage";
import Process from "../components/Process";
import ProjectStats from "../components/ProjectStats";
import ProjectSection from "../components/ProjectSection";
import Row from "../components/Row";
import Carousel, { Modal, ModalGateway } from "react-images";

import hero from "../static/media/aikakone/hero.jpg";

import menu from "../static/media/aikakone/menu.jpg";
import aikakone from "../static/media/aikakone/aikakone.jpg";
import profile from "../static/media/aikakone/profile.jpg";
import elamankaari from "../static/media/aikakone/elamankaari.jpg";

class Aikakone extends Component {
  constructor() {
    super();

    this.state = {
      _modalIsOpen: false,
      get modalIsOpen() {
        return this._modalIsOpen;
      },
      set modalIsOpen(value) {
        this._modalIsOpen = value;
      },
      keyTakeawaysOpen: false,
    };

    this.collapseKeyTakeaways = this.collapseKeyTakeaways.bind(this);
  }

  toggleModal = () => {
    this.setState((state) => ({ modalIsOpen: !state.modalIsOpen }));
  };

  collapseKeyTakeaways() {
    this.setState({
      keyTakeawaysOpen: !this.state.keyTakeawaysOpen,
    });
  }

  render() {
    let pStyle =
      "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";
    let quoteStyle =
      "quote col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-offset-4 col-xl-4";

    let steps = [
      {
        title: "Canvas sessions & Research",
        processes: [
          "Including but not limited to:",
          "Business approach",
          "Existing Solutions",
          "Academic studies",
          "Contextual inquiry",
          "User Research",
          "Semi-structured Interviews",
        ],
      },
      {
        title: "Design",
        processes: [
          "Use Cases",
          "Paper mockups",
          "Service blueprint",
          "Minimum lovable product",
          "Digital mockup",
        ],
      },
      {
        title: "Prototype",
        processes: ["Usability Testing"],
      },
    ];

    let views = [menu, aikakone, profile, elamankaari];
    let self = this;
    const { modalIsOpen } = this.state;

    return (
      <div className="Aikakone">
        <ProjectPage
          title={"Aikakone"}
          hero={hero}
          heroAlt={"Ideation on canvas."}
          description={"Interaction around throwbacks creates happiness"}
          navbarColor={"purple"}
          content={
            <span>
              <ProjectSection
                title={"Problem"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          As the number of elderly is growing, so grows the
                          number of people suffering from memory diseases.
                          Providing individual high-quality care for all is a
                          challenge widely recognized. Especially fulfillment of
                          mental needs of the elderly and their psychological
                          well-being has been a subject of lively debate in
                          public over the last few years.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          In University of Tampere's & Futurice's, Let’s
                          Re-Design Health Services -course, the client company
                          Espericare ltd, specialized on care and housing
                          services, gave the course attendees task of creating
                          some kind of entertainment service for stimulus
                          purposes for their residents who have different severe
                          conditions of memory diseases. The workshop course
                          organized students into randomized teams that would
                          design service concepts to present at the end of the
                          course.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          Elderly adults suffering memory diseases require
                          brain-activating stimulus and most important of all
                          suitable entertainment. Especially in the case of
                          Alzheimer patients, difficulties in creating a
                          connection and a lack of motivation towards activities
                          make this a particularly difficult task.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={"Solution"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          Facilitating connection between people with memory
                          disorder and caregivers was in the core of Aikakone
                          (Time Machine). As a web-service, Aikakone can be used
                          anywhere, with bed-tied patients or with a group of
                          people by a TV set, anytime, in short periods of time,
                          and with anyone, with healthy senior citizen as well
                          as a strongly cognitive impaired people, as a method
                          of meaningful connection by building a bridge between
                          generations.
                        </p>
                      }
                    />

                    <Row
                      content={
                        <p className={pStyle}>
                          Taking elderly person back to the old times by
                          combining pictures, sounds and texts all telling the
                          same tale, which provides multisensory stimuli that
                          retrieve memories. This kind of conversation inspired
                          by old photos, sounds and music, is called
                          reminiscence therapy, a method with scientifical merit
                          of decreasing depression in older adults. It improves
                          self-esteem, as the persons can act as an expert on
                          their own life instead of being mere objects of care.
                        </p>
                      }
                    />

                    <Row content={<p className={pStyle}></p>} />
                  </span>
                }
              />

              <ProjectSection
                title={"Process"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          In Service Creation we followed Futurice Ltd’s Open
                          Source{" "}
                          <a href="http://leanservicecreation.com">
                            Lean Service Creation
                            <div
                              style={{
                                display: "block",
                                height: 8,
                                width: "98%",
                                background: "rgba(139, 200, 246, 0.565)",
                                marginTop: -9,
                                marginLeft: 2,
                              }}
                            />
                          </a>{" "}
                          canvases on organized sessions, this process was
                          supported with expeditions to client company
                          Espericare Ltd premises and meetings on our own,
                          here’s roughly how it went:
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
                title={"Logistics"}
                content={
                  <ProjectStats
                    team={["4 Designers"]}
                    responsibilities={[
                      "Service Design",
                      "UX Research",
                      "Interaction Design",
                      "User Testing",
                    ]}
                    time={"March'16 - May'16"}
                  />
                }
              />

              <ProjectSection
                title={"Research"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          After the first session of team forming and canvas
                          work. We visited a facility of the client company
                          Espericare for a contextual inquiry acompanied by
                          Futurice employee. We got impressions of the
                          facilities, took pictures, drew a floor plan of the
                          area users inhabit and asked questions from the staff
                          and residents. We would return later to do more
                          structured interviews and perform a test with paper
                          prototypes.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          Meanwhile on our own we looked at existing market
                          solutions, concepts of entertainment and ways to spend
                          time with cognitive impaired people. Interesting idea
                          we came across reminiscence therapy. Form of therapy
                          that has been shown to improve the attitude of
                          caregivers towards their patients. This is assumed to
                          be due to caregivers’ increased knowledge of their
                          patients’ backgrounds and personalities. Often in care
                          homes, the turnover of personnel is quite high, which
                          raises the need of a tool for such familiarization
                          even more pressing.
                        </p>
                      }
                    />

                    <Row
                      content={
                        <div
                          className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-12 button-wrapper"
                          onClick={this.collapseKeyTakeaways}
                        >
                          <Button
                            label={
                              this.state.keyTakeawaysOpen
                                ? "Hide Key takeaways"
                                : "See Key takeaways"
                            }
                            color={"outline purple"}
                          />
                        </div>
                      }
                    />

                    <Collapse isOpened={this.state.keyTakeawaysOpen}>
                      <Row
                        content={
                          <ul className={pStyle + " list"}>
                            <b>
                              Key takeaways from research, location visits,
                              interviews and user needs:
                            </b>
                            <li>
                              Dementia/Alzheimer diseases increasing and growing
                              concern about quality of health care systems.
                            </li>

                            <li>
                              Nurses don’t have sufficient time to engage
                              individually and it’s difficult to get patients
                              excited in common activities.
                            </li>

                            <li>
                              Residents are not able to tell about themselves so
                              nurses have a hard time to get to know them and
                              their history.
                            </li>

                            <li>
                              Introduction to new nurses about the resident’s
                              preferences is relies almost completely on
                              coffeetabletalk.
                            </li>

                            <li>
                              Family and friends of the residents want to do
                              something for the resident’s benefit.
                            </li>

                            <li>
                              It was hard for the nurses to get the residents
                              excited about existing entertainment and stimuli
                              options.
                            </li>

                            <li>
                              Stimuli session should be something that is
                              quickly started, because time to perform stimulus
                              is scattered in to small time windows during
                              shifts.
                            </li>

                            <li>
                              Some of the residents were in poor health and
                              spend most of their time in their own rooms.
                            </li>
                          </ul>
                        }
                      />
                    </Collapse>
                  </span>
                }
              />

              <ProjectSection
                title={"Design"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          In our vision, as a result of well-performed care, the
                          elderly are surrounded by people who know them by
                          their individual qualities, not just by their
                          diagnoses. Every day brings the elderly meaningful
                          interaction and positive moments that include a caring
                          human contact.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          We introduced Aikakone (Timemachine) a tool for
                          reminiscence therapy and entertainment with features
                          of shared history (Aikakone), personal history
                          (Elämänkaari), profile of and elderly person
                          (Profiili), pictures of aikakone in categories
                          (Kuvat), musicplayed with old enjoyable tunes
                          (Musiikki), animal, baby and other videos in Videot.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          Instead of old people using the service alone by
                          themselves, a facilitator uses it with them. This
                          person can be a nurse, a relative, a friend or a
                          voluntary worker. By encouraging the involvement of
                          these people, the service may even multiply the
                          quality time spent with the elderly.
                        </p>
                      }
                    />

                    <Row content={<h4 className={pStyle}>User Interface</h4>} />

                    <Row
                      content={
                        <p className={pStyle}>
                          As the course was service design focused, creating an
                          MVP design was critical for the course presentation.
                          Here the first ever digital draft of the concept, done
                          in Microsoft PowerPoint of all the possible design
                          tools available. 😎
                        </p>
                      }
                    />

                    <ModalGateway>
                      {modalIsOpen ? (
                        <Modal onClose={this.toggleModal}>
                          <Carousel
                            views={[
                              {
                                src: menu,
                                caption: "First look of the menu of Aikakone.",
                              },
                              {
                                src: aikakone,
                                caption: "Using Aikakone",
                              },
                              {
                                src: profile,
                                caption: "Profile of elderly people",
                              },
                              {
                                src: elamankaari,
                                caption:
                                  "Elämänkaari, a feature that has the lifespan of induvidual user",
                              },
                            ]}
                          />
                        </Modal>
                      ) : null}
                    </ModalGateway>

                    <Row
                      className="one-margin-top col-md-offset-1 col-lg-offset-3"
                      content={views.map(function (image, index) {
                        return (
                          <div
                            key={"sketch" + index}
                            onClick={(e) => self.toggleModal(index, e)}
                            className={
                              "col-xs-4 col-sm-4 col-md-2 col-lg-2 col-xl-2"
                            }
                          >
                            <img className="mini-image" src={image} alt="" />
                          </div>
                        );
                      })}
                    />

                    <Row
                      content={
                        <p className={"caption " + pStyle}>
                          Main focus of Aikakone was to present common memories
                          that would resonate with elderly persons with memory
                          disabilities and spark a conversation with a nurse,
                          family member or a volunteer. With multimodal output
                          of a visual and related auditive que for the elderly.
                          The text is mostly for the companion to provide
                          context and words to encourage conversation about the
                          subject as nurses are often fairly young and
                          unfamiliar with such topics.
                        </p>
                      }
                    />

                    <Row
                      content={
                        <p className={"caption " + pStyle}>
                          Profile offers care givers a glimpse to character of
                          the person they interact with. Filled in by family
                          members and added to by nurses. Profile expedites the
                          process of real caring and connecting between new
                          staff members and residents.
                        </p>
                      }
                    />

                    <ProjectSection
                      title={"Prototype"}
                      content={
                        <span>
                          <Row
                            content={
                              <p className={pStyle}>
                                In the spirit of lean, I suggested to the team
                                while we were still doing research that we try
                                reminiscence idea. I performed this by printing
                                out images from different decades from the web
                                and engaged the elderly in talks after they had
                                a moment to themselves to take the image in. I
                                sat close next to them on a bed to be on the
                                same side and in ease. The talks went fine, I
                                had a decent success of guiding their attention
                                to the image and got a reminiscence response
                                from them and shared a few laughs.
                              </p>
                            }
                          />
                          <Row
                            content={
                              <p className={pStyle}>
                                Close to the end of the course we visited Villa
                                Niemi to perform prototyping of our PowerPoint
                                made MVP. We let the nurses get a feel to the
                                concept by making the PowerPoint presentation to
                                work like an app, they would get to “test”
                                Aikakone in a guided session.
                              </p>
                            }
                          />
                          <Row
                            content={
                              <p className={pStyle}>
                                Then interviewed them about feasibility. How
                                would they use this kind of application? What
                                would be most important? How well would it suite
                                for stimulation purposes? We also asked them to
                                reflect on when and for how long would they see
                                themselves using the application with an elderly
                                person.
                              </p>
                            }
                          />
                        </span>
                      }
                    />
                    <ProjectSection
                      title={"Conclusion"}
                      content={
                        <span>
                          <Row
                            content={
                              <p className={pStyle}>
                                In nursing homes, time is often scattered in
                                small fragments. Our service can be used
                                efficiently also in short times like 20 minutes,
                                which enables nurses to provide patients with
                                more stimuli with the same amount of resources
                                as before.
                              </p>
                            }
                          />
                          <Row
                            content={
                              <p className={pStyle}>
                                We were remarked as the second best concept in
                                the course on the presentation day, based on
                                vote by judges from Espericare, University of
                                Tampere and Futurice.
                              </p>
                            }
                          />
                          <Row
                            content={
                              <p className={pStyle}>
                                Lean Service Creation taught me to think about
                                creating services from outside-in perspective.
                                It was my first glimpse into business goals and
                                limitations, segmentation to concept and value
                                proposition and even thinking about customer
                                engagement. It inspired me to study 25 credits
                                worth of customer centric marketing.
                              </p>
                            }
                          />
                          <Row
                            content={
                              <h4 className={pStyle}>More of the story</h4>
                            }
                          />
                          <Row
                            content={
                              <p className={pStyle}>
                                After positive feedback from Futurice, course
                                mates and most importantly usability tests, we
                                stuck together and started developing the
                                concept into a working software. We entered into
                                an incubator program and with encouraging, but
                                cautious feedback from mentors we were on track
                                for forming a company. This is more or less
                                where our courage gave out and our execution was
                                inadequate. In hindsight our mental state
                                approached the project more from a hobby project
                                perspective. The fact that teams were randomized
                                in the course factored into our team chemistry
                                and sparks flew every once in a while. Everybody
                                believed in the product, but the team was off
                                and push to market ultimately failed, so we
                                decided to go our separate ways after 8 months
                                of development and user testing.
                              </p>
                            }
                          />
                        </span>
                      }
                    />

                    <ProjectSection
                      title={"Links"}
                      content={
                        <Row
                          content={
                            <div
                              className={pStyle + " links"}
                              style={{ marginTop: "1.5em" }}
                            >
                              <a href="http://leanservicecreation.com">
                                Lean Service Creation
                                <div
                                  style={{
                                    display: "block",
                                    height: 8,
                                    width: "98%",
                                    background: "rgba(139, 200, 246, 0.565)",
                                    marginTop: -9,
                                    marginLeft: 2,
                                  }}
                                />
                              </a>
                            </div>
                          }
                        />
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

          .Aikakone .project-section .acclaim {
            -webkit-box-shadow: noneh;
            box-shadow: none;
          }

          .Aikakone .nav .navbar-link:hover {
            color: #9157ff;
          }

          .Aikakone .nav .navbar-link:hover a {
            color: #9157ff;
          }

          .Aikakone .nav .navbar-link:hover svg {
            fill: #9157ff;
          }

          .Aikakone b {
            color: #9157ff;
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

          .Aikakone .highlight {
            color: #9157ff;
            font-weight: bold;
          }

          .Aikakone p a::after {
            background: rgba(30, 149, 237, 0.565);
          }
          .Aikakone .button-wrapper {
            text-align: center;
            margin: 1em 0;
          }
          .feature-image {
            max-width: 100%;
            height: auto;
            margin: 0.75em 0;
            -webkit-box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.3);
            box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.3);
          }

          iframe {
            margin: 0.75em 0;
            -webkit-box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.3);
            box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.3);
          }

          .mini-image {
            -webkit-box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.15);
            box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.15);
            max-width: 100%;
            height: auto;
            margin: 0.75em 0;
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
