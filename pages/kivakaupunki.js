import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import VisibilitySensor from 'react-visibility-sensor';
import ImageZoom from 'react-medium-image-zoom';

import Button from '../components/Button';
import ProjectPage from '../components/ProjectPage';
import Process from '../components/Process';
import ProjectStats from '../components/ProjectStats';
import ProjectSection from "../components/ProjectSection";
import Row from '../components/Row';
import Carousel, { Modal, ModalGateway } from 'react-images';

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
      _modalIsOpen: false,
      get modalIsOpen() {
        return this._modalIsOpen;
      },
      set modalIsOpen(value) {
        this._modalIsOpen = value;
      },
      environmentOpen: false
    };
    
    this.collapseEnvironment = this.collapseEnvironment.bind(this);
  }

  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
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
          title={"Kiva Kaupunki"}
          hero={hero}
          heroAlt={"map"}
          description={"User location and comments about surroundings put to a map"}
          navbarColor={"blue"}
          content={
            <span>
              <ProjectSection
                title={"Problem"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        The Living Lab Bus (LLB) project consortium arranged a Student Software Competition, for developing <b> an application that benefits bus passengers</b>, with monetary prices. Limitations of application: must be original work and unpublished, must benefit bus passengers somehow, must be a web application, must utilize at least one publicly available API, must be developed using <a href="https://github.com/llb-uta/development-kit">LLB Developer Kit<div style={{display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2}} /></a> and submitted through <a href="https://llb.sis.uta.fi/portal/">LLB Developer Portal<div style={{display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2}} /></a>.
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
                        To make our surroundings even better and more enjoyable. Kiva kaupunki is an application where user input about geolocation is collected and visualized on a map. Comments of positive or negative in nature to bring location knowledge to user base, city officials as well as for the public.
                      </p>
                    }/>

                    <Row className="one-margin-top" content={
                      <VisibilitySensor>
                        {({isVisible}) =>
                          <div className={pStyle}>
                            
                          </div>
                        }
                      </VisibilitySensor>
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
                        Project was very condensed and we had very little freetime to work on it.
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
                title={"Logistics"}
                content={
                  <ProjectStats
                    team={["1 Designer", "1 Developer"]}
                    responsibilities={["Service Design", "Interaction Design", "UI Design"]}
                    time={"April ’17 – June ’17"}
                  />
                }
              />

              <ProjectSection
                title={"Research"}
                content={
                  <span>
                    
                    <Row content={
                      <p className={pStyle}>
                        We asked ouselves what was possible to accomplish with bus capabilities, in the available timeframe as we had schedule restrictions.
                      </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        In search of an API we browsed the implementations available at avoindata.fi, though disconcerting was the lack of new ones related to public transport as Pasi, the developer, was not interested to work with the ones he had previously worked with.
                      </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        There where concepts were inquiries were made to collect data about cities with a location tagged on to the comments collected, so planning officials could take better notice on some of the things in their cities from the perspectives of the citizens. I suggested we create our own system of collection for the potential audiences of LLB.
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
                        Focus should be put on clear representation of the users task to be acomplished, status of the task and how to navigate forward to acomplish the whole job to be done. I made a use case description to figured out what screens would be necessary. After this I draw quick pencil drafts of the screens, with the focus of user interactions available.
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
                        With an app called Pixelmator on my Ipad I made a more honed UI mockup. Interaction inspiration I sought from different Instagram accounts. For visual style I followed Material Design and utilized colors of the Design Guidelines made available by the LLB team.
                      </p>
                    }/>

                    <ModalGateway>
                    {modalIsOpen ? (
                      <Modal onClose={this.toggleModal}>
                        <Carousel views={[
                        {
                          src: phone,
                          caption: 'Start greeting scene of app'

                        },
                        {
                          src: phone_booth,
                          caption: 'Location tagging by gps or by selecting and tapping.'
                        },
                        {
                          src: physical,
                          caption: 'Second screen, notice the return button'
                        },
                        {
                          src: popup,
                          caption: 'Comment categories'
                        },
                        {
                          src: watch,
                          caption: 'Comment input'
                        },
                        {
                          src: footsteps,
                          caption: 'Final thank you screen'
                        }
                      ]} />
                      </Modal>
                    ) : null}
                    </ModalGateway>

                    <Row className="one-margin-top" content={views.map(function (image, index) {
                        return (
                          <div key={"sketch" + index} onClick={(e) => self.toggleModal(index, e)} className={"col-xs-4 col-sm-4 col-md-2 col-lg-2 col-xl-2"}>
                            <img className="mini-image" src={image} alt=""/>
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
                            src: api,
                            alt: 'Screen capture of our game environment with a controller, a blue ball, and a yellow circle goal in the distance',
                            className: 'feature-image'
                          }}
                          zoomImage={{
                            src: api,
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
                        We used ReactJs to implement the web app as Pasi is more familiar with it. I worked on the HTML/REACTJS layout and CSS styling of to fit the app to the mockup. Extended deadline breathing on our necks, Pasi and I worked out the kinks in the app and I sent it to approval on the LLB Developer Portal.
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
                        Visibility on system status is clear as communicated by headlines, top right corner indicator and existance of back button. The system does it's best to use users' language if possible. Emergency exit is always possible as application exists in browser. Screens are consistent and try to fit the flatdesign and atleast LLB standards. Unfortunately error messages were not implemented. Recognition over recall is implied by clear systems states and guidance on questions. System is flexible as user is able to skip and complete the task without filling out everything. The design is as minimalistic as possible and gives out and aesthetic appearance. Unfortunately errors are not handled properly, help and documentation are non existant, but on LLB right top corner there is a feedback form link with topics defined by us the developers.
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
                      We won the competition, but not in a satisfactory way. From the start, we had a confident team together, we were sure to produce something. We had a solid concept, but because of our day jobs too little time was reserved for software development. I learned that every project should start, by appointing a <b>product owner or project manager title</b>, so that there would be someone who is responsible for scheduling.
                    </p>
                  }
                  />

                  <Row content={
                    <p className={pStyle}>
                      A lot of confidence was gained as we truly can make awesome things together and thus learned to value each other's skills and professionalism. We hope we can tackle more projects together in the future.
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
                      <a href="https://github.com/paaplo/lblkk">Github<div style={{display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2}} /></a>
                      <div style={{marginTop: "1.5em"}}><a href="http://www.pasikuparinen.fi/">Pasi Kuparinen<div style={{display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2}} /></a></div>
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
            color: #1e95ed;
          }

          .KivaKaupunki .nav .navbar-link:hover a {
            color: #1e95ed;
          }

          .KivaKaupunki .nav .navbar-link:hover svg {
            fill: #1e95ed;
          }


          .KivaKaupunki b {
            color: #1e95ed;
          }

          .KivaKaupunki ul {
            padding-left: 25px;
            margin-top: 0;
          }
          .KivaKaupunki li {
            margin-bottom: 10px;
          }

          .KivaKaupunki .highlight {
            color: #1e95ed;
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
          -webkit-box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.30);
                  box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.30);
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
