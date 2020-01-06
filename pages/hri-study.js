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

import candy from '../static/media/hri-study/candy.png';
import observation from '../static/media/hri-study/observation.jpg';
import pupils from '../static/media/hri-study/pupils.png';
import affinity from '../static/media/hri-study/affinity.jpg';
import theatherical from '../static/media/hri-study/theatherical.png';


class Languagerobot extends Component {

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
        processes: ["Observation & Interview x 2"]
      },
      {
        title: "Design",
        processes: ["Affinity Diagram", "Design Implications", "Concept specification", "Dialoque"]
      },
      {
        title: "Evaluation",
        processes: ["Theatrical Robot"]
      }
    ];

    const { modalIsOpen } = this.state;

    let self = this;

    return (
      <div className="Languagerobot">
        <ProjectPage
          title={"Human-Robot Interaction"}
          hero={pupils}
          heroAlt={"map"}
          description={"Preschoolers emerge themselves in language learning accompanied by an interactive agent"}
          navbarColor={"red"}
          content={
            <span>
            <Row content={
              <p className={pStyle}>
                 This project was a project work for Tampere University's User Experience in Robotics -course, client  was a company that makes a language learning software on top of Softbanks's NAO robot. It was used as a teaching assistant with local elementary school and preschool pupils. In addition to the robot and the software, also a cloud-based web application has been developed to control the robot’s programs remotely.</p>
            }/> 
              <ProjectSection
                title={"Problem"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                         
                      </p>
                    }/> 
                    <Row content={
                      <p className={pStyle}>
                        What kind of interactional functionalities can be added or changed in the robot to support children’s learning? Design a concept based on your findings.
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
                         The designed concept consists of combined verbal and nonverbal cues. Solution consists of more natural dialogue, a button added into the application for extra feedback and finally, direction of gaze prioritizing children over the operator.
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
                        The report was initiated with an examination into the previous literature. This gave a foundation for the rest of the project. To begin our design process, we first needed data from the field. The communication with all included parties were fluent and the observation studies were successful. From the data received from the preliminary studies, a list of design implications was found. A concept was design based on our own study data and the data from the literature. Finally, the concept was evaluated and developed accordingly.
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
                    team={["3 Designers"]}
                    responsibilities={["Interaction Design"]}
                    time={"March ’19 – April ’19"}
                  />
                }
              />

              <ProjectSection
                title={"Research"}
                content={
                  <span>
                    
                    <Row content={
                      <p className={pStyle}>
                        We set out to observe the robot in use and form a concept to improve it's interaction with the primary target groups, a local preschool class learning Finnish as a second language and a preschool class familiarizing with English, French or German as a second language, (end users) and for the secondary target group their teachers, who operate the robot (the operators).
                      </p>
                    }/>
                    <Row content={
                      <h4 className={pStyle}>Observation frame and findings</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Observation sessions were agreed upon in a meeting with the teachers and an observation form was prepared in advance with the focus of examining how children interact with the robot, but not excluding the teacher. Session was videoed and notes on the observation form were made. After the teachers present was immediately interviewed.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        In the first observation, four children in the Finnish as a second language group and the teacher interacted with the robot for about 30 minutes and practiced various linguistic exercises in a closed classroom. 
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        In the second observation session, we observed a class of English as a second language group where ~15 children were present and the robot told a story for the whole group. Multiple children were sitting in a circle with the robot and listened to the story. After which, volunteered pupils could interact with the robot in a smaller classroom in a group of three.
                      </p>
                    }/>
                    <Row content={
                      <div className={pStyle}>

                        <ImageZoom
                          image={{
                            src: observation,
                            alt: 'Screen capture of our game environment with a controller, a blue ball, and a yellow circle goal in the distance',
                            className: 'feature-image',
                            style:{maxWidth: "100%"}
                          }}
                          zoomImage={{
                            src: observation,
                            alt: 'Screen capture of our game environment with a controller, a blue ball, and a yellow circle goal in the distance'
                          }}
                        />
                      </div>
                    }/>
                    <Row content={
                      <p className={"caption " + pStyle}>
                        Storytelling session
                      </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        Similar results were found in observation sessions. The pupils were highly excited with the robot coming to their lesson and went bravely close to the robot. All the children had already seen the robot before each observation session. In addition to being interested and excited of the robot, most children had nursing behavior towards the robot: they were gentle with it, one child put pillow under it when the robot was sitting and they were shielding the robot when it was doing some movements in order to avoid it falling down. Adding to this, one of the children said that (s)he wanted to trip the robot if it would start walking, but it was not clear if the statement was a joke to amuse other children or actual urge.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <b>The pupils had difficulties of getting the robot to understand them</b> and the speech recognition was unsuccessful more frequently than successful. The children tried to fix the issue by spelling the command to the robot or saying it to near its ear, these countermeasures did not work. Also the children asked for the teacher to vocalize the commands, as they had observed better recognizing that way. In addition, the children looked for acceptance more from the teacher than the robot.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        In the bigger group session, the robot was gazing at the teacher most of time rather than at the children who were trying to establish a contact with the robot. <b>The teacher had to turn manually the robot in order to have it's face and eyes towards the children.</b>
                      </p>
                    }/>
                     
                     <Row content={
                      <h4 className={pStyle}>Interview frame and findings</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Recorded semi-structured interviews held after the observation session took roughly 20 minutes each were afterwards transcribed.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Teachers had a positive attitude for using the robot in teaching. One stated that the robot might be the most useful  motivational tool, rather than as an independent teacher independently. All found the robot a useful asset and agreed that the children like the robot very much and enjoy interacting with it. They were not especially concerned of ethical issues arising from using the robot, they just pointed out that children of this age might have a sense of animism towards the robot. For example, teacher had told the pupils that the robot will be joining them to the next class and the children were waiting for the robot in the window as if the robot would walk to the classroom by itself like a person.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        The operators' <b>main frustration were speech recognition problems</b>. They recalled that children are persistent repeaters, but felt personally that the repetition is tiring.
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
                        When both observation session were done, the team gathered the notes on the observation form and the notes were utilized together with the interview results in the Affinity Diagram. We printed out observation and interview data, cut them to slices of single items, looked for related ideas, sorted them into piles and then organized them under themes on to a wall poster.
                      </p>
                    }/>
                    <Row content={
                      <div className={pStyle}>

                        <ImageZoom
                          image={{
                            src: affinity,
                            alt: 'Screen capture of our game environment with a controller, a blue ball, and a yellow circle goal in the distance',
                            className: 'feature-image',
                            style:{maxWidth: "100%"}
                          }}
                          zoomImage={{
                            src: affinity,
                            alt: 'Screen capture of our game environment with a controller, a blue ball, and a yellow circle goal in the distance'
                          }}
                        />
                        </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Themes identified were: Culture, Teaching, Feedback/Modality, Motivation, Technical issues, Issue mitigation, Expectations, Reactions, Ethics, Guidance, and Referring to the robot.
                      </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        Skills in intuition and topic knowledge from literary research was put to the test as the design team conversed about causes and effects. Using the diagram, the following design implications were discovered:
                      </p>
                    }/>
                    <Row content={
                      <ul className={pStyle + " list"}>
                        <b>the robot should:</b>
                        <li>
                          give instructions  
                        </li>
                        <li>
                        	give feedback
                          <ul>
                            <li>Contextual gestures (nods and so on)</li>
                            <li>Appropriate responses, for example when did not understand</li>
                          </ul>
                        </li>
                        <li>
                        	be more autonomous  
                        </li>
                        <li>
                        	have some idle behavior
                        </li>
                        <li>
                        	understand speech  
                        </li>
                        <li>
                        	give an affordance of being a motivational tool
                        </li>
                        <li>
                        	have wider possibilities on teachings tools 
                        </li>
                        <li>
                        	give and receive affection
                        </li>
                        <li>
                          teach correctly
                          <ul>
                            <li>Intonation</li>
                            <li>Programming mistakes </li>
                          </ul>
                        </li>

                        <li>
                        	listen commands even when in lesson mode
                        </li>

                      </ul>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        The concept presented here was created on top of the project goal and the design implications formed from the prestudy data and theory literature. 
                        Concept’s main goal was to improve pupils’ motivation and learning by enhancing the robot’ speech and behavior. 
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Concept specification</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Study data showed that the robot was driven mainly by a human initiative, either with a direct speech or by the web application, bulk of which was done by the operator. This approach was found to be error prone and diminishing the user experience because of various technical difficulties.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                       The robot’s unsatisfactory speech recognition and the lack of feedback were the most obvious problems that caused motivational lapses in children. Thus the robot must be made first to understand the speech of the children, a <a href="https://doi.org/10.3389/fnhum.2017.00073">known<div style={{display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2}} /></a> technical issue of NAO robot, where Automatic Speech Recognition runs into problems when facing flawed pronunciation or pitch of speech different than adults. Still, as the robot is unable to listen multiple inputs, it should be more autonomous and control the pace of the interaction to ask what it needs, for example one input at a time, and buy time to process that information. 
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Preventing confusion during the human-robot communication from occurring, by tweaking the interaction flow is a good method, but visibility into the system state should to be improved. Robot should communicate it's status via appropriate feedback within reasonable time, to keep users informed about what is going on, with signaling methods of colored lights and by posture or stance. The accompanying web application could log system status changes and present adequate error messages with simple and understandable language that the operator can understand the current status, so they communicate this to humans interacting with the robot. Programming idle and varied behavior patterns into the robot could communicate and differentiate the system state from each other.  
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        We vision the interaction with the robot to support natural language input on selections and the appropriate contextual feedback with user’s language and with well-timed contingent gestures that are coherent to the user. When the robot asks, “What is the color of my eyes now?”, it should gesture towards its eyes to give a hint of the phrase’s meaning and what it requires as an input. Making the nonverbal behavior of the robot appear more relaxed is a way to calm young children. For example, signaling them to sit down while being in a seated position itself or at least starting the session from a seated posi-tion. Contextual gestures supporting the language used, nodding for example, can help the robot to communicate. Gaze direction of the robot plays a key role in interacting with a group and instead of locking its gaze to the one that speaks the most or clearest, the robot should give glances to all present, acknowledging their presence. When a group shouts out an answer to a question simultaneously, the robot should focus on one of the students, possibly gesturing towards them with a hand, and ask that person to repeat the answer. Robot should demonstrate verbal social availability with a richer dialogue and have more versatility in the explicit and implicit feedback it gives. When the robot does not understand something, it should react by confessing to it, for example by telling that it did not un-derstand or hear the words said to it. This is an important feedback since the children are patient and will often reformulate their words when asked to. the robot should speak out content that are currently only visualized in the web application, including querying questions from the users so that they can make selections via speech input. Robot should also instruct the user by speaking.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        In the observation, we noted that the robot had two prominent nonverbal behavior means of rewarding the end users when task had a satisfactory solution or when an exercise came to an end: the “Candy Eyes” and random triumphant gestures. Candy eyes -feature was well liked and an anticipated reward, but it rarely appeared, almost in a random manner. We suggest making this feature a constant, appearing after every correct answer to give instant gratification to the child who gave the answer. In the end of a learning session, a more elaborate celebration could be performed. 
                      </p>
                    }/>

                    <Row content={
                      <div className={pStyle}>

                        <ImageZoom
                          image={{
                            src: candy,
                            alt: 'Screen capture of our game environment with a controller, a blue ball, and a yellow circle goal in the distance',
                            className: 'feature-image',
                            style:{maxWidth: "100%"}
                          }}
                          zoomImage={{
                            src: candy,
                            alt: 'Screen capture of our game environment with a controller, a blue ball, and a yellow circle goal in the distance'
                          }}
                        />
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Left Candy Eyes, right rich celebration
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        We designed a feature to the web application as well, to mediate the aforementioned technical issue with understanding higher pitches of speech and unclear language, when after multiple attempts of answering the robot still does not understand the children. In these cases, teacher (often guiding the lesson by being the operator)
 could touch/click a “Well done” -button in the application and the robot should respond with Candy Eyes, acknowledging the correct answer verbally. This is especially considerate towards the end-user with speech impediments, which are common with younger children, avoiding potential embarrassment.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Click the button below to see our concept dialogue, which we formed utilizing first the Minja Axelsson’s Social Robot Design Toolkit, visioning the robot with <a href="https://github.com/minjaaxelsson/social_robot_co-design_canvases/blob/master/robot_canvases_a1/04_robot_mvp_canvas_v2_a1.pdf">“robot design minimum viable product”<div style={{display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2}} /></a>-canvas, and then the interaction outline, for which we used the <a href="https://github.com/minjaaxelsson/social_robot_co-design_canvases/blob/master/robot_canvases_a1/07_robot_interaction_canvas_v2_a1.pdf">“robot interaction”<div style={{display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2}} /></a>-canvas.
                      </p>
                    }/>
                  
                  <Row content={
                    <div className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-12 button-wrapper" onClick={this.collapseEnvironment}>
                      <Button
                        label={this.state.environmentOpen ? "Hide example of a concept dialogue" : "See an example of a concept dialogue"}
                        color={"outline red"}
                      />
                    </div>
                  }/>

                  <Collapse isOpened={this.state.environmentOpen}>
                    <Row content={
                      <h4 className={pStyle}>An example of a concept dialogue:</h4>
                    }/>

                    <Row content={
                      <div className={pStyle + " list"}>
                        <br/>Robot: Hello! Let’s learn English! Would you like to learn colors or numbers?
                        <br/><div style={{textAlign: "right"}}>Pupil: Colors!</div>
                        <br/>Robot: Great! Let’s learn colors! What is the color of my eyes now? <div style={{fontSize: "0.8rem"}}><i>**Pointing to his eyes**</i></div>
                        <br/><div style={{textAlign: "right"}}>Many pupils together: Blue!</div>
                        <br/><div style={{textAlign: "center", fontSize: "0.8rem"}}><i>**Robot can’t understand when many pupils speak at the same time, so he turns his gaze to a random pupil from the crowd**</i></div>
                        <br/>Robot: Could you repeat the answer please?
                        <br/><div style={{textAlign: "right"}}>Pupil: Blue!</div>
                        <br/>Robot: Yes, good job! <div style={{fontSize: "0.8rem"}}><i>**Robot shows “candy eyes”**</i></div>
                        <br/>Robot: What about now? <div style={{fontSize: "0.8rem"}}><i>**Points to his eyes**</i></div>
                        <br/><div style={{textAlign: "right"}}>Pupil: Gween.</div>
                        <br/><div style={{textAlign: "center", fontSize: "0.8rem"}}><div style={{fontSize: "0.8rem"}}><i>**Robot does not understand**</i></div></div>
                        <br/>Robot: Could you repeat the answer please?
                        <br/><div style={{textAlign: "right"}}>Pupil: Gween!</div>
                        <br/><div style={{textAlign: "center", fontSize: "0.8rem"}}><i>**Robot still does not understand, so teacher clicks Well done -button from app**</i></div>
                        <br/>Robot: Yes, great! <div style={{fontSize: "0.8rem"}}><i>**Candy eyes**</i></div>
                        <br/>Robot: You did very well with colors! <div style={{fontSize: "0.8rem"}}><i>**Triumphant gesture**</i></div>
                      </div>
                    }/> 
                  </Collapse>
                  </span>
                }
              />

              <ProjectSection
                title={"Evaluation"}
                content = {
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Our concept revolves around giving the robot the more initiative thus avoiding simultaneous student speakers. It also enables a teacher to give encouraging feedback through the robot with the web application, when the robot does not give feedback by itself. We recognize validation is needed to clarify the benefits on the design for real world usage.
                      </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        User experience evaluation and a 25 minute semi-structured poststudy interview were done with teachers of both preschool groups utilizing <a href="https://doi.org/10.1109/ROMAN.2004.1374821">“Theatrical Robot”<div style={{display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2}} /></a> which is a method that allows research groups to test their Human-Robot Interaction without any software or hardware implementations, as a human plays a robot’s role in a way a robot would behave and appear. The interviews were recorded and the main findings transcribed from the recordings.
                      </p>
                    }/>
                    
                    <Row content={
                      <div className={pStyle}>

                        <ImageZoom
                          image={{
                            src: theatherical,
                            alt: 'Screen capture of our game environment with a controller, a blue ball, and a yellow circle goal in the distance',
                            className: 'feature-image',
                            style:{maxWidth: "100%"}
                          }}
                          zoomImage={{
                            src: theatherical,
                            alt: 'Screen capture of our game environment with a controller, a blue ball, and a yellow circle goal in the distance'
                          }}
                        />
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Theatrical Robot quizzes colors in English by asking "What color are my eyes?". Teacher has the app in case of "close enough" scenario.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        The main findings of the evaluation study were categorized to four categories: ideas worth keeping, development ideas, future development and general feedback about concept. The most liked ideas received a lot of excitement from the teachers, and we thought those ideas were worth keeping for our concept.  
                      </p>
                    }/>
                    <Row content={
                      <ul className={pStyle + " list"}>
                        <b>Improvements deemed ready for development were:</b>
                        <li>
                        	Feedback from the robot's eyes (so called “candy eyes”) 
                        </li>
                        <li>
                        	Robot asking a pupil to repeat, if it did not understand the input
                        </li>
                        <li>
                          Robot randomly picking one pupil from the group when interacting with them
                        </li>
                        <li>
                          Robot asking whether to study this or that
                        </li>
                      </ul>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        Co-creation took shape when the teachers shared great insights, one of the teachers mentioned that the group of pupils cannot be too large, if the robot randomly asks them questions, so everyone can participate equally. Also mentioned was, that the robot should equally ask questions from the pupils, because young children are very demanding about equal treatment and they easily raise a question: “Why didn’t the robot ask anything from me?”. Also, when a robot asks which option pupils want to study, it should only include two options, because the children are so young for them less is more.
                      </p>
                    }/>
                    <Row content={
                      <p className={pStyle}>
                        Teachers generally found our “Well done”-button to be useful for giving feedback to pupils, but another suggestion from them was that if the robot could give good feedback after three “incorrect” inputs, so that the robot could be more autonomous. These three or more inputs should be similar enough to desired inputs, so it would properly reward the pupils, in other words, it should not give feedback after three random inputs, which are not possibly related to desired inputs.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Concern was raised about how to show other things, besides colors, that are not be possible to be shown via eyes. As a solution, they suggested mentioned if the robot could have a mobile phone in his hands or hanging around the neck, so that question topics could show up on it’s screen. They saw that it would be beneficial if the teacher could choose which language the robot uses when giving verbal instructions, because pupils’ have different level of language skills. 
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Both teachers mentioned that even though our theatrical robot had a more natural dialog and better error handling already, it is still far away from understanding contexts or adapting to situations. Pupils might start to talk to each other during the session instead of the robot and with pupils this young interruptions like questions, fighting or crying might occur. Also, the pupils might feel more natural if the robot would sit on the ground like they do, instead of standing in front of them.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Teacher expressed that our concept would increase the interaction between the robot and the pupils, which would give additional value to educational purposes, and they were very positive about it and would be ready to take it to use. Another observed, that our concept was significantly improved version of the robot, but reminded us that the younger the children are, the more they need a teacher to teach them. Other belief expressed was that in some cases, pupils remember teaching better if they are taught by the robot instead of being taught by teacher and another one was that robots are will be future tools.
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
                       Observations showed us that the robot is well liked among the children. We noticed that the robot’s eye contact was sought after and its non-verbal gestures elicit positive emotion. Children  smiled, joked about or laughed at some it's verbal cues. This could be a positive or a negative, short term too much attention toward the verbal and nonverbal communications may decrease attention on the taught subject and on the other hand these might be the reason for prolonged motivation with improved learning. Novelty effect could also contribute to certain children’s emotions at the time of the observations, since the class has had only three previous sessions.
                      </p>
                    }/>
                    
                    <Row content={
                      <p className={pStyle}>
                        During the interviews, a small worry towards Elias’ taking over the role of the teacher was brought up. However, this is not the current purpose of this robot or its de-veloper. Even though Elias is used as an autonomous teacher’s assistant with the upper grade pupils in Tammela school, we argue that for the preschoolers, there should be a teacher present, operating the robot. The technical difficulties, especially with the speech recognition, prevent Elias from unleashing its full potential, at least for now. But we are thrilled about Elias’ future since technology is being developed fast.
                      </p>
                    }/>
                    
                    <Row content={
                      <p className={pStyle}>
                        We tried programming our dialogue into NAO, but with the time restriction in mind decided not to proceed with it. Evaluation with the Theatrical Robot method was an interesting experience. We found that it is a good method for early stage testing and concept evaluation, but it also raises potentially biased the outcome of the evaluation when the teachers were very enthusiastic about the usage method. Furthermore, we made the decision not to include the actual end users to our evaluation. The concern was that the children could not understand the conceptuality and aim of the play.
                      </p>
                    }/>
                    
                    <Row content={
                      <p className={pStyle}>
                       We tried to program our dialog we could not build a prototype of our concept for testing. An actual prototype test with the actual end users could have given us more in-depth knowledge of our concept.
                      </p>
                    }/>
            
                    <Row content={
                      <p className={pStyle}>
                        I personally found that this team was highly motivated, more than normally in past group work experience. Naturally, in a complex project it was difficult to push the project forward when working individually, but the fact that everybody was kept in the loop contributed fundamentally to our productivity.
                      </p>
                    }/>

                    <Row content={
                      <div className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-12 button-wrapper" onClick={this.collapseEnvironment}>
                        <Button
                          label={this.state.environmentOpen ? "Hide teacher's comment" : "See the teacher's comment"}
                          color={"outline red"}
                        />
                      </div>
                    }/>

                    <Collapse isOpened={this.state.environmentOpen}>
                      <Row content={
                        <h4 className={pStyle}>The teacher's comment:</h4>
                      }/>

                      <Row content={
                        <p className={pStyle}>
                          "Broad user studies in authentic settings and authentic users, clearly written report, the team working together extremely well, very great collaboration with the client and users, too. Seems that the team learned alot during the project, and ended up with great results. I appreciate your brave attitude and approach for the project. Some requested parts were missing from the Discussion part, and the prestudy analysis method was presented on weird location on the report, otherwise the flow was very good. Thanks for you great work and especially really great team work! You could act as a role model for team work on the upcoming courses :)The video could be taken as a reference of great work for the future courses. It is creative, funny, positive and at the same time gives a good impression about your study phases and the main challenges of using the robot in class ATM."
                        </p>
                      }/> 
                    </Collapse>
                    
                  </span>
                }
              />

              <ProjectSection
                title={"Media"}
                content={
                  <Row content={
                    <div className={pStyle + " links"} style={{marginTop: "1.5em"}}>
                      <a href="https://smarttampere.fi/lapsikeskeisempaa-robotiikkaa-opiskelijoilta-ideoita-opetusrobottien-kehittamiseksi/">Lapsikeskeisempää robotiikkaa<div style={{display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2}} /></a>
                      <span style={{marginLeft: "1.5em"}}><a href="https://smarttampere.fi/en/towards-child-centered-robotics-ideas-from-students-to-develop-teaching-robots/">Towards child-centered robotics<div style={{display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2}} /></a></span>
                    </div>
                  }/>
                }
              />

            </span>
          }
        />
        <style jsx>{`
          .Languagerobot .Evaluate .callout img {
            height: 60px;
          }

          .Languagerobot .charts {
            margin-bottom: 2.5em;
          }

          .Languagerobot .legend {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
                flex-direction: column;
            -ms-flex-pack: center;
                justify-content: center;
            -ms-flex-align: center;
                align-items: center;
          }

          .Languagerobot .legend p {
            width: 150px;
            text-align: left;
            margin: 0;
          }

          .Languagerobot .nav .navbar-link:hover {
            color: #fa5858;
          }

          .Languagerobot .nav .navbar-link:hover a {
            color: #fa5858;
          }

          .Languagerobot .nav .navbar-link:hover svg {
            fill: #fa5858;
          }


          .Languagerobot b {
            color: #fa5858;
          }

          .Languagerobot ul {
            padding-left: 25px;
            margin-top: 0;
          }
          .Languagerobot ul b{
            margin-left: -25px;
            margin-top: 0;
          }
          .Languagerobot li {
            margin-top: 5px;
            margin-bottom: 5px;
          }

          .Languagerobot .highlight {
            color: #fa5858;
            font-weight: bold;
          }


          .Languagerobot p a::after {
            background: rgba(18, 164, 45, 0.565);
          }

          .Languagerobot .button-wrapper {
           text-align: center;
           margin: 1em 0;
          }

        .feature-image {
          display: block;
          -o-object-fit: cover;
            object-fit: cover;
          max-width: 100%;
          height: auto;
          margin: .75em 0;
          -webkit-box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.30);
                  box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.30);
        }

        .caption{
          margin-top: 3px;
          font-size: 0.8rem;
          color: rgba(0,0,0,0.8);
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

export default Languagerobot;
