import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import VisibilitySensor from 'react-visibility-sensor';
import ImageZoom from 'react-medium-image-zoom';
import Isvg from 'react-inlinesvg';

import Button from '../components/Button';
import ProjectPage from '../components/ProjectPage';
import Process from '../components/Process';
import ProjectStats from '../components/ProjectStats';
import ProjectSection from "../components/ProjectSection";
import Row from '../components/Row';
import Lightbox from '../components/Lightbox';
import Video from '../components/Video';
import Callout from '../components/Callout';
import PolarChart from '../components/PolarChart';

import hero from '../static/media/kivakaupunki/hero.jpg';

import api from '../static/media/kivakaupunki/api.png';

import phone from '../static/media/kivakaupunki/sketches/Startscreen.jpg';
import phone_booth from '../static/media/kivakaupunki/sketches/Location.jpg';
import physical from '../static/media/kivakaupunki/sketches/Topic.jpg';
import popup from '../static/media/kivakaupunki/sketches/Topic_2.jpg';
import watch from '../static/media/kivakaupunki/sketches/Comment.jpg';
import footsteps from '../static/media/kivakaupunki/sketches/End.jpg';

import testing from '../static/media/home/kivakaupunki.jpg';

class Aikakone extends Component {

  constructor () {
    super();

    this.state = {
      lightboxIsOpen: false,
      index: 0,
      researchOpen: false,
      insightsOpen: false,
      environmentOpen: false,
      evaluateOpen: false,
      resultsOpen: false,
    };

    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox  = this.closeLightbox.bind(this);
    this.collapseResearch = this.collapseResearch.bind(this);
    this.collapseInsights = this.collapseInsights.bind(this);
    this.collapseEnvironment = this.collapseEnvironment.bind(this);
    this.collapseEvaluate = this.collapseEvaluate.bind(this);
    this.collapseResults = this.collapseResults.bind(this);
  }

  openLightbox(index, event) {
    this.setState({
      lightboxIsOpen: true,
      index: index
    })
  }

  closeLightbox() {
    this.setState({
      lightboxIsOpen: false
    })
  }

  collapseResearch() {
    this.closeLightbox();
    this.setState({
      researchOpen: !this.state.researchOpen
    })
  }

  collapseInsights() {
    this.closeLightbox();
    this.setState({
      insightsOpen: !this.state.insightsOpen
    })
  }

  collapseEnvironment() {
    this.closeLightbox();
    this.setState({
      environmentOpen: !this.state.environmentOpen
    })
  }

  collapseEvaluate() {
    this.closeLightbox();
    this.setState({
      evaluateOpen: !this.state.evaluateOpen
    })
  }


  collapseResults() {
    this.closeLightbox();
    this.setState({
      resultsOpen: !this.state.resultsOpen
    })
  }

  render() {

    let pStyle = "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";
    let quoteStyle = "quote col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-offset-4 col-xl-4";

    let steps = [
      {
        title: "Research",
        processes: ["Ideation", "Opendata Brainstorming", "Getting inspired"]
      },
      {
        title: "Design",
        processes: ["Use Case", "Sketches", "Mockups"]
      },
      {
        title: "Prototype",
        processes: ["Back-end", "Front-end", "Deployment"]
      },
      {
        title: "Evaluate",
        processes: ["Heuristics"]
      }
    ];

    let images = [phone, phone_booth, popup, watch, physical, footsteps];

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
                        <b>The Living Lab Bus (LLB) project consortium arranged a Student Software Competition, for developing an application that (in short) benefits bus passengers, with monetary prices.</b> Limitations of application: must be original work and unpublished, must benefit bus passengers somehow, must be a web application, must utilize at least one publicly available API, must be developed using LLB Developer Kit (https://github.com/llb-uta/development-kit) and submitted through LLB Developer Portal (https://llb.sis.uta.fi/portal/). https://llb.sis.uta.fi
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
                        Kiva kaupunki, named in Finnish for the catchy K-sound is an application through which user input about geolocation can be collected and visualized on a map. These comments can be either positive or negative in nature and they work to bring location knowledge to city officials as well as for the public, so actions can be made to make our surroundings even better.
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
                    responsibilities={["Service Design", "Interaction Design", "UX Design", "UI Design"]}
                    time={"April ’17 – June ’17"}
                  />
                }
              />

              <ProjectSection
                title={"Ideation"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        We sat together for brainstorming, we pondered what was possible to accomplish in the timeframe available. Ideas were thrown around and topics discussed from useful, playful and full games, but schedule restrictions limited all of them.
                      </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        We also tried to get an idea of bus capabilities, unfortunately these were poorly communicated by LLB partner VTT. Pasi, the developer, had also done a lot of work with open data so finding something motivating from his standpoint was important.
                      </p>
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
                        I did most of the research on concept. Disconcerting was the lack of new API’s related to public transport as Pasi had little interest to work with the ones he was already familiar. Not to waste time, I went ahead by looking what kind of open data ideas have in past done in Finland. I made the call of instead of finding a great API we could try to make a data set gathering application and to make this data open.
                      </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        Concepts in avoindata.fi inspired me a lot. There where concepts that were inquiries to collect data about cities that had a location tagged on to the comments collected.
                      </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        They had collected location, subject and a comment. This was made so planning officials could take better notice on some of the things in their cities from the perspectives of the citizens. This idea felt like the perfect one to scale up to the potential audiences of LLB in cities of Tampere, Helsinki and Turku.
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
                        I started out by making couple user stories. After that I figured out what screens would be necessary. I draw quick pencil drafts of the screens, with the focus of user interactions available.
                      </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        Simplicity was the goal for the concept what is in itself a glorified webform.
                      </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        In the use case, user opens LLB platform and our app within it in a location he or she feels like they have something to say about or want to share with others. This can be either negative or positive comment. User shares their location with the GPS on, chooses a topic from eight choices and then goes on to write the comment and sends it in.
                      </p>
                    }/>
                    
                    <Row content={
                      <ul className={pStyle + " list"}>
                        <li>
                          Focus should be put on clear representation of the users task to be acomplished, status of the task and fow to navigate forward to acomplish the whole job to be done.
                        </li>

                        <li>
                          Create the Unity environment and framework for user testing
                        </li>
                      </ul>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>User Interface Design</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        I made a more honed UI mockup on my Ipad Air with an app called Pixelmator, while sunbathing in Sorsapuisto. For the style of the mockups I tried to find inspiration from different Instagram accounts and utilized the Design Guidelines made available from by the LLB team.
                      </p>
                    }/>

                    <Lightbox
                      images={[
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
                      ]}
                      open={this.state.lightboxIsOpen}
                      index={this.state.index}
                    />

                    <Row className="one-margin-top" content={images.map(function (image, index) {
                        return (
                          <div key={"sketch" + index} onClick={(e) => self.openLightbox(index, e)} className={"col-xs-4 col-sm-4 col-md-2 col-lg-2 col-xl-2"}>
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

                    <Row content={
                      <div className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6 button-wrapper" onClick={this.collapseEnvironment}>
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

                  </span>
                }
              />

              <ProjectSection
                title={"Prototype"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        The plan was to make the app, collect data and make a map data visualization when sufficient data has been collected and then pushing out and update with a feature for the users to inspect the map.
                        </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        On May 25 Pasi annouced the Heroku backend he had established at as a very basic CRUD API, with POST adding, GET getting all and id:GET getting a unique entry.
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
                        It can be confirmed here that the api has a location, topic and comment. 
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        June 7 we decided to use ReactJs to implement the app as Pasi is more familiar with it. I worked on the CSS styling and the HTML/REACTJS layout of the app  based on the mockups I made. On June 14, the final deadline of the course, Pasi and I work out the kinks in the app and I sent it in for the approval to the LLB Developer Portal. 
                      </p>
                    }/>
                  </span>
                }
              />

              <ProjectSection
                title={"Evaluate"}
                content = {
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Usability heuristical analysis was performed me due to time constraints.
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
                      We won the competition, but not in a satisfactory way. From the start, we had a confident team together, we were sure to produce something. We had a solid concept, but because of our day jobs too little time was reserved for software development. <b> I learned that every project should start, by appointing project manager title, so that there would be someone who is responsible for scheduling. </b>
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
                      <a href="https://github.com/paaplo/lblkk">Github<div style={{content: '', display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2}} /></a>
                      <div style={{marginTop: "1.5em"}}><a href="http://www.pasikuparinen.fi/">Pasi Kuparinen<div style={{content: '', display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2}} /></a></div>
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


          .KivaKaupunki .highlight {
            color: #1e95ed;
            font-weight: bold;
          }


          .KivaKaupunki p a::after {
            background: rgba(18, 164, 45, 0.565);
          }

          #phoneEmoji {
            -webkit-transform: scale(-1, 1);
                -ms-transform: scale(-1, 1);
                    transform: scale(-1, 1);
            display: inline-block;
          }

        .feature-image {
          max-width: 100%;
          height: auto;
          margin: .75em 0;
          -webkit-box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.30);
                  box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.30);
        }

        iframe {
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

export default Aikakone;
