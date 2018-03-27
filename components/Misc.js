import React, { Component } from 'react';
import ProjectIcon from './ProjectIcon';

import daretolearn from '../static/media/misc/pics/daretolearn.png';
import daretolearned from '../static/media/misc/icons/daretolearn.svg';
import iamriitta from '../static/media/misc/pics/iamriitta.png';
import riitta from '../static/media/misc/icons/riitta.svg';
import weekkiss from '../static/media/misc/pics/weekkiss.png';
import edd from '../static/media/misc/icons/edd.svg';

import dribbble from '../static/media/misc/icons/dribbble.svg';
import insurance from '../static/media/misc/icons/insurance.svg';

class Misc extends Component {

  constructor() {
    super();

    this.state = {
      visible: true
    }
  }

  static propTypes = {
  }

  static defaultProps = {
  }


  render() {
    return (
      <div className="misc">
        <div className="row">
          <ProjectIcon
            svg={daretolearned}
            title={"SCIL – Dare to Learn Lean Service Creation Workshop"}
            image={daretolearn}
            first={true}
            alt={"SCIL"}
            description={
              <span>
                <p>In the Fall of 2017 I facilitated educaters at Lean Service Creation workshop theme being Smart Campus for Tampere3 in Dare to Learn conference at Kaapeli Tehdas for intensive two hours. </p>
              </span>
            }
          />
          <ProjectIcon
            square={true}
            svg={riitta}
            title={"Human-Centered Design (HCD) project course"}
            image={iamriitta}
            alt={"Riitta logo"}
            description={
              <span>
                <p>At a university course in winter 2016-2017. Design concept of an IM bot Riitta for accessing recycling information via user's existing apps in their smartphone. There was also an acomodating website, a "home", for Riitta</p>
                <p>To make recycling easier and encouraging sustainable choices, so that waste management companies should have easier time sorting waste and being more productive.</p>
                <p>Achieved with inquiries and contextual design. Aki Lindberg's portfolio has a piece about this, check it out.</p>
              </span>
            }

            links={[
              {
                title: "Aki Lindberg",
                url: "http://www.akilindberg.com/projects"
              },
              {
                title: "Invision Prototype",
                url: "https://projects.invisionapp.com/share/2RABGLFAK#/screens/218769135_RiittaRecycleWeb_With_Some"
              }
            ]}
          />
          
        </div>

        <div className="row">
          <ProjectIcon
            square={true}
            svg={edd}
            title={"Experience-Driven Design (EDD) project course"}
            image={weekkiss}
            first={true}
            alt={"picture of cvc mill"}
            description={
              <span>
                <p>Weekkiss, app and hardware to increase motivation with kids in household chores. Using gamemechanics, with "questing" tasks and giving instant rewards of allowance by hardware.</p>
                <p>Achieved with principles of Experience-Driven Design, for example we did work with PLEX Cards. Aki Lindberg's portfolio has a piece about this, I encourage you to check it out.</p>
              </span>
            }

            links={[
              {
                title: "Aki Lindberg",
                url: "http://www.akilindberg.com/projects"
              },
              {
                title: "Video for TUTlab",
                url: "https://youtu.be/vE2ZxYDvRnc"
              }
            ]}

          />
          <ProjectIcon
            round={true}
            svg={insurance}
            title={"Demola Tampere - Re-designing Claims Notification"}
            description={
              <span>
                <p>In Fall and Winter 2014-2015 I took part in an innovation project as UX designer.</p>
                <p>In a five person multicultural team we designed a new customer oriented insurance claim-notification concept to big Finnish insurance company called OP Insurance.</p>
                <p>During the project I gained experience on project based group work, brainstorming, user-centered design and conceptualizing. I was responsible and created personas, mock-ups and fine-honed UI designs to mobile & desktop platforms.</p>
                <p>I can happily say that my work is under NDA as they purchaced our concept from us.</p>
            </span>
            }
          />
        </div>
      </div>
    );
  }
}

export default Misc;
