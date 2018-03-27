import React, {Component} from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import Video from './Video';
import Navbar from './Navbar';
import Project from './Project';
import Projects from './Projects';

class ProjectPage extends Component {

  constructor(props) {
    super(props);

    const proj = new Projects();

    this.state = {
      nextProject: proj.getNextProject(props.title)
    };


    this.pStyle = "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    hero: PropTypes.string.isRequired,
    heroAlt: PropTypes.string.isRequired,
    video: PropTypes.bool,
    navbarColor: PropTypes.string
  }

  static defaultProps = {
    title: "",
    description: "",
    content: undefined,
    hero: "",
    heroAlt: "",
    video: false,
    navbarColor: ""
  }

  render () {


    return (
      <div className={"project-page container " + this.props.title}>
        <Navbar nextProjectName={this.state.nextProject.name} nextProjectLink={this.state.nextProject.link} color={this.props.navbarColor}/>
        <div className="header row">
          <h1 className={this.pStyle}>{this.props.title}</h1>
        </div>
        <div className="row subtitle">
          <p className={this.pStyle}>{this.props.description}</p>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xs-12 col-lg-12 col-xl-12">
            {this.props.video ?
              <VisibilitySensor>
                {({isVisible}) =>
                  <div>
                    <Video
                      autoplay={isVisible}
                      src={this.props.hero}
                      caption={null}/>
                  </div>
                }
              </VisibilitySensor>
              : <img  className="hero-image"
                     src={this.props.hero}
                     alt={this.props.heroAlt}
                     loader={<div className={"loader"}></div>}
              />
            }
          </div>
        </div>
        <div className="content" id="reading-content">
          {this.props.content}
        </div>

        <div className="row next-project">
          <h3 className={this.pStyle}>Next Project</h3>
        </div>

        <Project
          title={this.state.nextProject.name}
          description={this.state.nextProject.description}
          link={this.state.nextProject.link}
          image={this.state.nextProject.image}
          alt={this.state.nextProject.alt}
          color={this.state.nextProject.color}
          percentage={'0%'}/>


        <style jsx>{`
          .project-page {
            padding: 3em 0 1em;
          }

          .project-page h1 {
            margin: 0 auto;
          }

          .project-page .subtitle {
            font-size: 2em;
          }

          .project-page .subtitle p {
            margin-top: .5em;
          }

          .hero-image {
            display: block;
            -o-object-fit: cover;
              object-fit: cover;
            width: 100%;
            height: auto;
            max-height: 20em;
            -webkit-box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.30);
                    box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.30);
          }

          .project-page .loader {
            width: 100%;
            height: 20em;
            max-height: 20em;
            -webkit-animation-duration: 1s;
                    animation-duration: 1s;
            -webkit-animation-fill-mode: forwards;
                    animation-fill-mode: forwards;
            -webkit-animation-iteration-count: infinite;
                    animation-iteration-count: infinite;
            -webkit-animation-name: placeHolderShimmer;
                    animation-name: placeHolderShimmer;
            -webkit-animation-timing-function: linear;
                    animation-timing-function: linear;
            background: #f6f7f8;
            background: -webkit-gradient(linear, left top, right top, color-stop(8%, #eeeeee), color-stop(18%, #dddddd), color-stop(33%, #eeeeee));
            background: -webkit-linear-gradient(left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
            background: -o-linear-gradient(left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
            background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
          }

          @-webkit-keyframes placeHolderShimmer{
            0%{
              background-position: -25% 0
            }
            100%{
              background-position: 125% 0
            }
          }

          @keyframes placeHolderShimmer{
            0%{
              background-position: -25% 0
            }
            100%{
              background-position: 125% 0
            }
          }

          .project-page .next-project h3 {
            font-weight: bold;
            margin: 3rem auto .5rem;
          }

          .project-page .Project {
            margin-top: 2em;
            margin-bottom: 0;
          }
    `}</style>

      </div>
    )
  }

}

export default ProjectPage;
