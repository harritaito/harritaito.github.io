import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import ImageZoom from 'react-medium-image-zoom';

import Button from '../components/Button';
import CaseStudyMeta from '../components/CaseStudyMeta';
import ProjectPage from '../components/ProjectPage';
import Process from '../components/Process';
import ProjectSection from "../components/ProjectSection";
import Row from '../components/Row';
import { resolveAssetHeight, resolveAssetSrc, resolveAssetWidth } from '../components/assetSource';
import HighlightUnderline from '../components/design-system/HighlightUnderline';
import { colors, shadows } from '../components/design-system/tokens';
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal';

import hero from '../static/media/kivakaupunki/hero.jpg';

import api from '../static/media/kivakaupunki/api.png';

import phone from '../static/media/kivakaupunki/sketches/Startscreen.jpg';
import phone_booth from '../static/media/kivakaupunki/sketches/Location.jpg';
import physical from '../static/media/kivakaupunki/sketches/Topic.jpg';
import popup from '../static/media/kivakaupunki/sketches/Topic_2.jpg';
import watch from '../static/media/kivakaupunki/sketches/Comment.jpg';
import footsteps from '../static/media/kivakaupunki/sketches/End.jpg';

class Kivakaupunki extends Component {

  constructor () {
    super();

    this.state = {
      modalIsOpen: false,
      selectedSlideIndex: 0,
      environmentOpen: false
    };
    
    this.collapseEnvironment = this.collapseEnvironment.bind(this);
  }

  toggleModal = (selectedSlideIndex) => {
    this.setState(state => ({
      modalIsOpen: !state.modalIsOpen,
      selectedSlideIndex: Number.isInteger(selectedSlideIndex)
        ? selectedSlideIndex
        : state.selectedSlideIndex,
    }));
  }

  collapseEnvironment() {
    this.setState({
      environmentOpen: !this.state.environmentOpen
    })
  }
  render() {

    let pStyle = "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";
    let quoteStyle = "quote col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-offset-4 col-xl-4";

    let steps = [
      {
        title: "Research",
        processes: ["Ideation"]
      },
      {
        title: "Design",
        processes: ["Use Case", "Sketches", "Mockups"]
      },
      {
        title: "MVP",
        processes: ["Back-end", "Front-end", "Deployment"]
      },
      {
        title: "Evaluation",
        processes: ["Heuristics"]
      }
    ];

    let views = [phone, phone_booth, popup, watch, physical, footsteps];
    const { modalIsOpen } = this.state;

    let self = this;

    return (
      <div className="KivaKaupunki">
        <ProjectPage
          projectName={"Kiva Kaupunki"}
          title={"Map-Based Citizen Feedback for Bus Passengers"}
          hero={hero}
          heroAlt={"map"}
          eyebrow={"Earlier case study"}
          description={
            "How a competition brief became a map-based feedback flow that kept the task simple enough for a fast MVP."
          }
          navbarColor={"blue"}
          content={
            <span>
              <CaseStudyMeta
                status={"Earlier case study"}
                summary={
                  "A civic service concept that tied citizen feedback to location and kept the flow simple enough to evaluate as a competition MVP."
                }
                note={
                  "What this case proves: I can keep a civic concept understandable, buildable, and testable under tight competition constraints without overstating the result."
                }
                fields={{
                  myRole: ["Service design", "Interaction design", "UI design", "HTML/CSS layout support"],
                  team: ["1 designer", "1 developer"],
                  timeline: "April 2017 to June 2017",
                  context:
                    "Living Lab Bus student software competition for a web app that would benefit bus passengers.",
                  problem:
                    "Problem type: civic feedback routing and map-based browsing for location-specific comments.",
                  users: [
                    "Bus passengers",
                    "Residents who submit feedback",
                    "Officials and the public who read the map",
                  ],
                  businessContext:
                    "The brief required something original, web-based, and built with the LLB Developer Kit and portal.",
                  constraints: [
                    "Schedule was tight",
                    "The team had to work with available API options",
                    "The project needed a quick path from sketch to MVP",
                  ],
                  discovery: [
                    "Use case description",
                    "API exploration",
                    "Pencil drafts",
                    "Heuristic evaluation",
                  ],
                  keyInsights: [
                    "Task clarity matters more than visual detail when the flow is short.",
                    "Users need to know the status of what they submit.",
                    "Navigation should make the next step obvious.",
                  ],
                  conceptModel:
                    "A map-based comment service that ties each comment to a location.",
                  keyDecisions: [
                    "Show task, status, and next action clearly.",
                    "Use a lightweight flow from comment to map.",
                    "Keep the representation simple enough for competition timing.",
                  ],
                  designDetails: [
                    "Quick pencil drafts",
                    "Pixelmator UI mockup",
                    "Material Design color cues",
                    "Use case description",
                  ],
                  implementationSupport:
                    "I worked on the HTML, React, and CSS layout while the developer set up the Heroku backend CRUD API.",
                  hardMetrics:
                    "No adoption, official-use, or long-term service metrics are documented for this competition MVP.",
                  qualitativeEvidence:
                    "The heuristic review identified clear status visibility, back navigation, and consistent screen structure, while also naming missing error handling and help documentation.",
                  proxyEvidence:
                    "The competition entry received part of the prize, which suggests the concept and implementation were strong enough for the jury to recognize under competition constraints.",
                  reflection:
                    "A useful archive example of implementation support under competition constraints, but not a claim of production adoption.",
                }}
              />

              <ProjectSection
                title={"My role"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        I handled the service, interaction, and UI framing: use case, pencil drafts, Pixelmator mockups, screen flow, and heuristic evaluation. I also worked on the HTML, React, and CSS layout, while the developer set up the Heroku backend and CRUD API. The MVP and competition result were team output.
                      </p>
                    }/>
                  </span>
                }
              />

              <ProjectSection
                title={"Problem"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        The brief asked for something original, web-based, and useful to bus passengers, but the real design challenge was turning scattered civic comments into a clear task that people would actually finish.
                      </p>
                    }/> 
                  </span>
                }
              />

              <ProjectSection
                title={"Solution"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Kiva Kaupunki collected user input tied to location and visualized it on a map so residents, officials, and the public could read place-based feedback in one place.
                      </p>
                    }/>

                  </span>
                }
              />

              <ProjectSection
                title={"Process"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        The project was condensed, so the work focused on a clear use case, a lightweight flow, and a fast path from sketch to MVP.
                      </p>
                    }/>

                    <Row content={
                      <div
                        className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10 col-xl-offset-2 col-xl-8">
                        <Process
                          steps={steps}/>
                      </div>
                    }/>
                  </span>
                }
              />

              <ProjectSection
                title={"Research"}
                content={
                  <span>
                    
                    <Row content={
                      <p className={pStyle}>
                        The first question was what could realistically be built in the time available. We browsed APIs on avoindata.fi looking for something related to public transport, but the options were limited and Pasi had already worked with most of them.
                      </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        We found an existing pattern worth adapting: services that let citizens tag location-based comments so planning officials could see what residents actually noticed about their city. That felt like the right fit for the LLB audience, so I suggested we build our own version of it.
                      </p>
                    }/>
                  </span>
                }
              />

              <ProjectSection
                title={"Design"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        The design priority was clarity: what the user is doing right now, where they are in the flow, and what comes next. I wrote a use case description to work out which screens were actually needed, then sketched them quickly in pencil with the focus on available interactions.
                      </p>
                    }/>

                    <Row content={
                      <div className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-12 button-wrapper" onClick={this.collapseEnvironment}>
                        <Button
                          label={this.state.environmentOpen ? "Hide Use Case Description" : "See Use Case Description"}
                          color={"outline blue"}
                        />
                      </div>
                    }/>

                    <Collapse isOpened={this.state.environmentOpen}>
                      <Row content={
                        <h4 className={pStyle}>USE CASE DESCRIPTION</h4>
                      }/>

                      <Row content={
                        <p className={pStyle}>
                          A woman steps on a bus on her way to Hatanpää arboretum. She intends to enjoy the sight of beautiful flowers and read a book by the lake. During the bus ride, she sees a little girl crossing the road on a crossing. The girl manages to cross the road but it looks like she feared high traffic. Woman thinks that something should be done to make this specific crossing safer as she also has felt unsafe crossing it on her dog walks. Instead of passing on this thought she decides to do something about it as there is now an easy way to act. She goes home screen in her smartphone and touches the living lab buss icon, now she selects Kiva Kaupunki from the main screen of the application. She selects the crossing location on the app, selects the topic of "Difficult to walk on foot" and goes on to write a comment about the crossing. Application announces that the comment has been saved and will be available soon on the map. The woman continues her journey to location and decides to share also a comment on about arboretum on arriving there, as it is one of her favorite places to visit.
                        </p>
                      }/>
                    </Collapse>

                    <Row content={
                      <h4 className={pStyle}>User Interface Design</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        I moved the sketches into a higher-fidelity mockup in Pixelmator. Visual style followed Material Design and the LLB color guidelines.
                      </p>
                    }/>

                    {modalIsOpen ? (
                      <Modal isOpen={modalIsOpen} onRequestClose={this.toggleModal}>
                        <Carousel showThumbs={false} showStatus={false} selectedItem={this.state.selectedSlideIndex}>
                          <div>
                            <img src={resolveAssetSrc(phone)} alt="Start greeting scene of app" width={resolveAssetWidth(phone)} height={resolveAssetHeight(phone)} decoding="async" />
                            <p className="legend">Start greeting scene of app</p>
                          </div>
                          <div>
                            <img src={resolveAssetSrc(phone_booth)} alt="Location tagging by gps or by selecting and tapping." width={resolveAssetWidth(phone_booth)} height={resolveAssetHeight(phone_booth)} loading="lazy" decoding="async" />
                            <p className="legend">Location tagging by gps or by selecting and tapping.</p>
                          </div>
                          <div>
                            <img src={resolveAssetSrc(physical)} alt="Second screen, notice the return button" width={resolveAssetWidth(physical)} height={resolveAssetHeight(physical)} loading="lazy" decoding="async" />
                            <p className="legend">Second screen, notice the return button</p>
                          </div>
                          <div>
                            <img src={resolveAssetSrc(popup)} alt="Comment categories" width={resolveAssetWidth(popup)} height={resolveAssetHeight(popup)} loading="lazy" decoding="async" />
                            <p className="legend">Comment categories</p>
                          </div>
                          <div>
                            <img src={resolveAssetSrc(watch)} alt="Comment input" width={resolveAssetWidth(watch)} height={resolveAssetHeight(watch)} loading="lazy" decoding="async" />
                            <p className="legend">Comment input</p>
                          </div>
                          <div>
                            <img src={resolveAssetSrc(footsteps)} alt="Final thank you screen" width={resolveAssetWidth(footsteps)} height={resolveAssetHeight(footsteps)} loading="lazy" decoding="async" />
                            <p className="legend">Final thank you screen</p>
                          </div>
                        </Carousel>
                      </Modal>
                    ) : null}

                    <Row className="one-margin-top" content={views.map(function (image, index) {
                        return (
                          <div key={"sketch" + index} onClick={(e) => self.toggleModal(index, e)} className={"col-xs-4 col-sm-4 col-md-2 col-lg-2 col-xl-2"}>
                            <img className="mini-image" src={resolveAssetSrc(image)} alt="" width={resolveAssetWidth(image)} height={resolveAssetHeight(image)} loading="lazy" decoding="async" />
                          </div>
                        )
                      })
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        My mockups of the screens of the application
                      </p>
                    }/>

                  </span>
                }
              />

              <ProjectSection
                title={"Minimum Viable Product"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        The plan was to collect data of location, subject and a comment and make a map data visualization when sufficient data has been collected and then possibly pushing out an update for the users to inspect the map.
                        </p>
                    }/>
                    
                    <Row content={
                      <div className={pStyle}>

                        <ImageZoom
                          image={{
                            src: resolveAssetSrc(api),
                            alt: 'Screen capture of our game environment with a controller, a blue ball, and a yellow circle goal in the distance',
                            className: 'feature-image'
                          }}
                          zoomImage={{
                            src: resolveAssetSrc(api),
                            alt: 'Screen capture of our game environment with a controller, a blue ball, and a yellow circle goal in the distance'
                          }}
                        />
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Pasi established Heroku backend with a very basic CRUD API, with POST adding, GET getting all and id:GET getting a unique entry. It can be confirmed here that the api has a location, topic and a comment. 
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        We built in React — Pasi's comfort zone. I handled the HTML layout and CSS to match the mockup. With the deadline close, we worked through the remaining issues together and submitted through the LLB Developer Portal.
                      </p>
                    }/>
                  </span>
                }
              />

              <ProjectSection
                title={"Evaluation"}
                content = {
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        I conducted heuristic usability analysis, based on Jakob Nielsen's 10 general principles for interaction design, to evaluate the MVP.
                      </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        The review found a few practical strengths: the current state was visible through headings and the top-right indicator, back navigation was available, and the screens followed a consistent structure. It also made the limits clear. Error messages, help, and documentation were missing, so the MVP was useful as a competition prototype rather than as a complete public-service workflow.
                      </p>
                    }/>

                  </span>
                }
              />

              <ProjectSection
                title={"Conclusion"}
                content={
                  <span>
                  <Row content={
                    <p className={pStyle}>
                      "With different pros and cons the jury found on multiple apps, the jury chairman decided to divide the first prize between the three teams. Thus, each team will receive 200 € and a diploma."
                    </p>
                  }/>

                  <Row content={
                    <p className={pStyle}>
                      The entry received part of the prize, but that is only proxy evidence. It says the concept and prototype were credible in the competition setting, not that the service was adopted or used by city officials.
                    </p>
                  }
                  />

                  <Row content={
                    <p className={pStyle}>
                      The more durable lesson was about ownership. The concept moved from use case to interface to implementation support, but the compressed schedule made coordination fragile. If I were doing the same work again, I would define ownership and decision rhythm earlier instead of treating scheduling as a side task.
                    </p>
                  }
                  />
                  </span>
                }
              />

              <ProjectSection
                title={"Links"}
                content={
                  <Row content={
                    <div className={pStyle + " links"} style={{marginTop: "1.5em"}}>
                      <a href="https://github.com/paaplo/lblkk">Github<HighlightUnderline /></a>
                      <div style={{marginTop: "1.5em"}}><a href="http://www.pasikuparinen.fi/">Pasi Kuparinen<HighlightUnderline /></a></div>
                    </div>
                  }/>
                }
              />

            </span>
          }
        />
        <style jsx>{`
          .KivaKaupunki .Evaluate .callout img {
            height: 60px;
          }

          .KivaKaupunki .charts {
            margin-bottom: 2.5em;
          }

          .KivaKaupunki .legend {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
                flex-direction: column;
            -ms-flex-pack: center;
                justify-content: center;
            -ms-flex-align: center;
                align-items: center;
          }

          .KivaKaupunki .legend p {
            width: 150px;
            text-align: left;
            margin: 0;
          }

          .KivaKaupunki .nav .navbar-link:hover {
            color: ${colors.accentBlue};
          }

          .KivaKaupunki .nav .navbar-link:hover a {
            color: ${colors.accentBlue};
          }

          .KivaKaupunki .nav .navbar-link:hover svg {
            fill: ${colors.accentBlue};
          }


          .KivaKaupunki b {
            color: ${colors.accentBlue};
          }

          .KivaKaupunki ul {
            padding-left: 25px;
            margin-top: 0;
          }
          .KivaKaupunki li {
            margin-bottom: 10px;
          }

          .KivaKaupunki .highlight {
            color: ${colors.accentBlue};
            font-weight: bold;
          }


          .KivaKaupunki p a::after {
            background: rgba(18, 164, 45, 0.565);
          }

          .KivaKaupunki .button-wrapper {
           text-align: center;
           margin: 1em 0;
          }

        .feature-image {
          max-width: 100%;
          height: auto;
          margin: .75em 0;
          -webkit-box-shadow: ${shadows.media};
                  box-shadow: ${shadows.media};
        }

        .mini-image {
          -webkit-box-shadow: 0 0.25em .5em 0 rgba(0,0,0,0.15);
                  box-shadow: 0 0.25em .5em 0 rgba(0,0,0,0.15);
          max-width: 100%;
          height: auto;
          margin: .75em 0;
        }

        .mini-image:hover {
          cursor: pointer;
        }
        `}</style>
      </div>
    );
  }
}

export default Kivakaupunki;
