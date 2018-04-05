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
import Callout from '../components/Callout';
import Video from '../components/Video';

import hero from '../static/media/aikakone/hero.jpg';


import menu from '../static/media/aikakone/menu.jpg'
import aikakone from '../static/media/aikakone/aikakone.jpg'
import profile from '../static/media/aikakone/profile.jpg'
import elamankaari from '../static/media/aikakone/elamankaari.jpg'

class Aikakone extends Component {

  constructor () {
    super();

    this.state = {
      researchOpen: false,
      presentOpen: false,
      discussOpen: false,
      deployOpen: false,
    }

    this.collapseResearch = this.collapseResearch.bind(this);
    this.collapsePresent = this.collapsePresent.bind(this);
    this.collapseDiscuss = this.collapseDiscuss.bind(this);
    this.collapseDeploy = this.collapseDeploy.bind(this);
  }

  collapseResearch() {
    this.setState({
      researchOpen: !this.state.researchOpen
    })
  }

  collapsePresent() {
    this.setState({
      presentOpen: !this.state.presentOpen
    })
  }

  collapseDiscuss() {
    this.setState({
      discussOpen: !this.state.discussOpen
    })
  }

  collapseDeploy() {
    this.setState({
      deployOpen: !this.state.deployOpen
    })
  }

  render() {

    let pStyle = "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";
    let quoteStyle = "quote col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-offset-4 col-xl-4";

    let steps = [
      {
        title: "Research",
        processes: ["Business approach", "Existing Solutions", "Academic studys", "Location visits", "Semi-structured Interviews", "User Needs"]
      },
      {
        title: "Design",
        processes: ["Screens"]
      },
      {
        title: "Prototype",
        processes: ["Use Cases", "User Testing"]
      }
    ];

    let compareStylesScroll = { borderRight: "3px dotted red" };


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
                    <Row content={
                      <p className={pStyle}>
                        Elderly adults suffering dementia/Alzheimer diseases require brain-activating stimulus and entertainment.
                      </p>
                    }/>

                    <Row content={
                      <div className={pStyle} >
                        The number of old people is increasing all the time, as is the number of people suffering from memory diseases. Providing individual high-quality care for everybody is the challenge that has been recognized widely.
                      </div>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Especially the fulfilment of the mental needs of the elderly and their psychological well-being has been a subject of lively debate in public over the last few years. In the case of Alzheimer patients, difficulties in creating a connection and a lack of motivation towards activities make this a particularly difficult task.
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
                        Facilitating connection between people with memory disorder and caregivers is at the very core of Time Machine. We aim at creating meaningful connections and building a bridge between generations, which benefits also healthy older adults.
                      </p>
                    }/>

                    <Row content={
                      <div className={pStyle} >
                        This we do by taking the elderly person back to the old times. We use the unique approach of combining pictures, sounds and texts all telling the same tale, which provides multisensory stimuli that retrieve memories more efficiently than a mere picture or a sound.
                      </div>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        This kind of conversation inspired by old photos, sounds and music, is called reminiscence therapy. It has been scientifically shown to decrease depression in older adults. It improves self-esteem, as the persons can act as an expert on their own life instead of being mere objects of care.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Time Machine can be used anywhere, anytime and with anyone - with a healthy senior citizen as well as a strongly demented person. As a web-service, it can be utilized even with bed-tied patients or with a group of people by a TV set.
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
                        In Futurice & University of Tampere, Let’s Re-Design Health Services -course, the client company Espericare ltd gave a clear goal of achieving some kind of entertainment type off service for stimulus purposes for the residents, residents who have severe conditions of memory decease. The workshop course would organize students into random teams and we would all design service concepts to present at the end of the course.
                       </p>
                     }/>

                     <Row content={
                       <p className={pStyle}>
                         In Service Creation we followed Futurice Ltd’s Open Source Lean Service Design canvases on organized sessions, this process was supported with expeditions to client company Espericare Ltd premises and meetings on our own, here’s roughly how it went:
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
                     team={["4 Designers"]}
                     responsibilities={["Service Design", "UX Research", "Interaction Design", "User Testing"]}
                     time={"April'16 - June'17"}
                   />
                 }
               />

              <ProjectSection
                title={"Research"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Already after the first session we visited a facility of the client company Espericare, Villa Niemi, in Nokia. We got impressions of the facilities, took pictures, drew a floor plan of the area users inhabit and interviewed the staff and residents. We would return later to do more structured interviews and perform a test with paper prototypes.
                      </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        Then own our own we looked at existing market solutions, concepts of entertainment and ways to spend time with people with memory diseases. An interesting idea was reminiscence therapy. A form of therapy that has been shown to improve the attitude of caregivers towards their patients. This is assumed to be due to caregivers’ increased knowledge of their patients’ backgrounds and personalities. Often in care homes, the turnover of personnel is quite high, which makes the need of a tool for such familiarization even more pressing.
                      </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                          In our vision, as a result of well-performed care, the elderly are surrounded by people who know them by their individual qualities, not just by their diagnoses. Every day brings the elderly meaningful interaction and positive moments that include a caring human contact.
                      </p>
                    }/>
                    <Row content={
                      <h4 className={pStyle}>Key takeways from location visits, interviews and user needs</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Residents are not able to tell about themselves so nurses have a hard time to get to know them and their history. Introduction to new nurses about the resident’s preferences is relies almost completely to coffeetabletalk. Family and friends of the residents want to do something for the resident’s benefit. It was hard for the nurses to get the residents excited about existing entertainment and stimuli options. Stimuli session should be something that is quickly started, because time to perform stimulus is scattered in to small time windows during shifts. Some of the residents were in poor health and spend most of their time in their own rooms.
                      </p>
                    }/>

                    <Row content={
                      <div className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6 button-wrapper" onClick={this.collapseResearch}>
                        <Button
                          label={this.state.researchOpen ? "Hide Preferences of Residents" : "See Preferences of Residents"}
                          color={"outline purple"}
                        />
                      </div>
                    }/>
                    
                    <Collapse isOpened={this.state.researchOpen}>
                    <Row content={
                      <h4 className={pStyle}>Preferences of Residents</h4>
                    }/>
                    <Row content={
                      <ol className={pStyle + " list"}>
                        <li>Music, listened and sung</li>
                        <li>Doing things together, interacting</li>
                        <li>Telling about themselves</li>
                        <li>Remeniscing about the times past and looking at old pictures</li>
                        <li>Looking pictures of children and animals</li>
                        <li>Watching TV, different subject matter preferences</li>
                      </ol>
                    }/>
                    </Collapse>

                    <Row content={
                      <ul className={pStyle + " list"}>
                        <b>Things that came up in the research:</b>
                        <li>
                          Dementia/Alzheimer diseases increasing and growing concern about quality of health care systems
                        </li>

                        <li>
                          Elderly adults suffering dementia/Alzheimer diseases require brain-activating stimulus and entertainment
                        </li>

                        <li>
                          Nurses don’t have sufficient time to engage individually and it’s difficult to get patients excited in common activities
                        </li>
                      </ul>
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
                        Design was strongly influenced by our research phase, in fact it can be directly derived from it.
                      </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        We introduced Aikakone (Timemachine) a tool for reminiscence therapy and entertainment with features of shared history (Aikakone), personal history (Elämänkaari), profile of and elderly person (Profiili), pictures of aikakone in categories (Kuvat), musicplayed with old enjoyable tunes (Musiikki), animal, baby and other videos in Videot.
                      </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        Instead of old people using the service alone by themselves, a facilitator uses it with them. This person can be a nurse, a relative, a friend or a voluntary worker. By encouraging the involvement of these people, the service may even multiply the quality time spent with the elderly.
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>User Interface</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <b>The course was service design focused, so creating the MVP design was critical to accomplishing the course project.</b> Here the first ever draft of concept, done in PowerPoint of all the possible design tools available. 
                      </p>
                    }/>

                    <Row className={"one-margin-top"} content={
                      <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"}>
                        <img className='feature-image acclaim' src={menu} alt='Menu of Aikakone' />
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        First look of the menu of Aikakone.
                      </p>
                    }/>

                    <Row className={"one-margin-top"} content={
                      <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"}>
                        <img className='feature-image acclaim' src={aikakone} alt='Using Aikakone' />
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Main focus of Aikakone was to present common memories that would resonate with elderly persons with memory disabilities and spark a conversation with a nurse, family member or a volunteer. With multimodal output of a visual and related auditive que for the elderly. The text is mostly for the companion to provide context and words to encourage conversation about the subject as nurses are often fairly young and unfamiliar with such subjects.
                      </p>
                    }/>
                    <Row className={"one-margin-top"} content={
                      <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"}>
                        <img className='feature-image acclaim' src={profile} alt='Profile of elderly people' />
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Profile offers for new nurses a glimpse to the character’s of the people they interact with. Filled in by family members and added to by nurses. Profile expedites the process of real caring and connecting between new staff and residents.
                      </p>
                    }/>

                    <Row className={"one-margin-top"} content={
                      <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"}>
                        <img className='feature-image acclaim' src={elamankaari} alt='Elämänkaari or lifespan view' />
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Elämänkaari a feature that has the lifespan of induvidual user
                      </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        In nursing homes, time is often scattered in small fragments. Our service can be used efficiently also in short times like 20 minutes, which enables nurses to provide patients with more stimuli with the same amount of resources as before.
                      </p>
                    }/>
                    <ProjectSection
                      title={"Prototype"}
                      content={
                        <span>
                          <Row content={
                            <p className={pStyle}>
                              In the spirit of lean, I suggested to the team while we were still doing research that we try reminiscence idea. I performed this by printing out images from different decades from the web and engaged the elderly in talks after they had a moment to themselves to take the image in. I sat close next to them on a bed to be on the same side and in ease. The talks went fine, I had a decent success of guiding their attention to the image and got a reminiscence response from them and shared a few laughs. 
                            </p>
                          }/>
                          <Row content={
                            <p className={pStyle}>
                             Close to the end of the course we visited Villa Niemi to perform prototyping of our PowerPoint made MVP. We let the nurses get a feel to the concept by making the PowerPoint presentation to work like an app, they would get to “test” Aikakone in a guided session. 
                            </p>
                          }/>
                          <Row content={
                            <p className={pStyle}>
                             One of us would then interview them about feasibility, how would they use this kind of application, what would be most important and how well would it suite for stimulation purposes. We also asked them to reflect on when and for how long would they see themselves using the application with an elderly person.
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
                              Lean Service Creation (LSC) canvases got us thinking about the to be created service from an outside-in perspective, the first one’s are about business goals and limitations and segmentation to concept and value proposition, even thinking about customer engagement.  LSC gave us a huge amount of confidence for continuing the project towards forming of a startup. It helped us easily into a local accelerator program.
                            </p>
                          }/>
                          <Row content={
                            <h4 className={pStyle}>More of the story</h4>
                          }/>
                          <Row content={
                            <p className={pStyle}>
                              After positive feedback from Futurice, course mates and most importantly Usability tests, we stuck together and started developing the concept in to a working software. We entered into an incubator program and with encouraging, but cautious feedback from mentors we were on track for forming a company. More or less this was inadequately executed. In hindsight our mental states approached the project more from a hobby project. The fact that teams were randomized in the course factored into our team chemistry and sparks flew once in a while. Everybody believed in the product, but the team was off and so we called quits after 8 months of development and user testing. Oct ‘16 – May ’17 Push to market ultimately failed. Team decided to go its separate ways.
                            </p>
                          }/>

                        </span>
                      }
                    />

                    <ProjectSection
                      title={"Links"}
                      content={
                        <Row content={
                          <div className={pStyle + " links"} style={{marginTop: "1.5em"}}>
                            <a href="http://leanservicecreation.com">Lean Service Creation<div style={{content: '', display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2}} /></a>
                          </div>
                        }/>
                      }
                    />

                  </span>
                }
              />

            </span>
          }
        />
        <style jsx>{`
          .Aikakone .project-section .feature-image.aikakone-preview, .Aikakone .project-section .feature-image.solution {
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

          .Aikakone .highlight {
            color: #9157ff;
            font-weight: bold;
          }

          .Aikakone p a::after {
            background: rgba(30, 149, 237, 0.565);
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
