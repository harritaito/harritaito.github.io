import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProjectSection extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
  }

  static defaultProps = {
    title: undefined,
    content: undefined,
  }

  render () {

    return (
      <div className={"project-section " + this.props.title}>
        <div className="row">
          <h3 className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6">{this.props.title}</h3>
        </div>
        <div className="project-section-content">
          {this.props.content}
        </div>

      <style jsx>{`
        .project-section h3 {
          font-weight: bold;
          margin: 3rem auto .5rem;
        }

        .project-section .quote {
          font-style: italic;
          font-size: 1.25em;
        }

        .project-section .feature-image {
          max-width: 100%;
          height: auto;
          margin: .75em 0;
          -webkit-box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.30);
                  box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.30);
        }

        .project-section iframe {
          margin: .75em 0;
          -webkit-box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.30);
                  box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.30);
        }

        .project-section .mini-image {
          -webkit-box-shadow: 0 0.25em .5em 0 rgba(0,0,0,0.15);
                  box-shadow: 0 0.25em .5em 0 rgba(0,0,0,0.15);
          max-width: 100%;
          height: auto;
          margin: .75em 0;
        }

        .project-section .mini-image:hover {
          cursor: pointer;
        }

        .project-section .caption {
          font-size: .875em;
          text-align: center;
        }

        .project-section .callouts {
          margin: 1em 0;
        }

        .project-section .list {
          padding-left: 2.5em;
          padding-right: 2.5em;
          margin-top: 0;
        }

        .project-section .list li {
          margin: 0.5em 0;
          line-height: 1.4em;
        }

        .project-section .video-holder {
          margin-bottom: 2em;
        }

        .project-section .aspect-keeper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 */
          height: 0;
          display: block;
          max-width: 100%;
        }

        .project-section .links a {
          margin-right: 1em;
          margin-bottom: .5em;
        }

        .project-section .tall-image {
          max-height: 400px;
          margin-left: auto;
          display: block;
          margin-right: auto;
        }

        .aspect-keeper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .button-wrapper {
          text-align: center;
          margin: 1em 0;
        }
      `}</style>

      </div>
    )
  }

}

export default ProjectSection;
