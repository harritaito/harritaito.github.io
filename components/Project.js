import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Plx from 'react-plx';
import Isvg from 'react-inlinesvg';
import arrow from '../static/media/icons/arrow-slim.svg';

class Project extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    percentage: PropTypes.string,
    parallax: PropTypes.bool,
    endValue: PropTypes.number,
  }

  static defaultProps = {
    title: "abc",
    description: "abc",
    link: "",
    image: "daretolearned",
    alt: "a",
    color: "green",
    parallax: true,
    endValue: -100
  }

  renderProjectLink() {
    return (
      <Link href={this.props.link} className="project-link-container">
        <article className={`case-card ${this.props.color}`}>
          <div className="case-card__media">
            <img className="case-card__image" src={this.props.image} alt={this.props.alt} />
          </div>
          <div className="case-card__content">
            <h3 className="case-card__title">{this.props.title}</h3>
            <p className="case-card__description">{this.props.description}</p>
            <div className="bottom">
              <div className={"next navbar-link " + this.props.color}>
                <span className="case-study-text">Case Study</span>
                <span className="next-arrow" aria-hidden="true">
                  <Isvg className="next-arrow-icon" src={arrow} />
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  render() {

    return (
      <div className={this.props.title + " Project"}>
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 col-xl-7 col-xl-offset-2">
            {this.props.parallax ? (
              <Plx
                className="plx"
                animateWhenNotInViewport={true}
                parallaxData={[
                  {
                    start: this.props.percentage,
                    duration: this.props.parallax ? "9%" : "0%",
                    properties: [
                      {
                        startValue: 0,
                        endValue: this.props.endValue,
                        property: "translateY",
                        unit: "px",
                      },
                      {
                        startValue: 0,
                        endValue: 1,
                        property: "opacity",
                      },
                    ],
                  },
                ]}
              >
                {this.renderProjectLink()}
              </Plx>
            ) : (
              this.renderProjectLink()
            )}
          </div>
        </div>
        <style jsx>{`
          .Project {
            margin-top: 9em;
            margin-bottom: 9em;
          }
          @media only screen and (max-width: 45rem) {
            .Project {margin-top: 5em; margin-bottom: 5em;}
          }

          .project-link-container {
            color: inherit;
            display: block;
            text-decoration: none;
          }

          .project-link-container:focus {
            outline: none;
          }

          .plx {
            opacity: 0;
          }

          .case-card {
            border-radius: 1.5rem;
            overflow: hidden;
            background-color: var(--surface-elevated-color);
            -webkit-box-shadow: 0 1em 2em 0 rgba(0,0,0,0.30);
                    box-shadow: 0 1em 2em 0 rgba(0,0,0,0.30);
            -webkit-transition: box-shadow .5s ease;
            transition: box-shadow .5s ease;
            display: flex;
            flex-direction: column;
          }

          .project-link-container:hover .case-card {
            -webkit-box-shadow: 0 1.5em 2.5em 0 rgba(0,0,0,0.30);
                    box-shadow: 0 1.5em 2.5em 0 rgba(0,0,0,0.30);
          }

          .case-card__media {
            position: relative;
            aspect-ratio: 16 / 9;
            overflow: hidden;
          }

          .case-card__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .case-card__content {
            padding: 1.5em;
          }

          .case-card__title {
            margin: 0 0 0.5em;
            font-size: clamp(1.125rem, 4vw, 1.75rem);
            line-height: 1.2;
          }

          .case-card__description {
            margin: 0 0 1.25em;
            line-height: 1.7;
          }

          .case-card .next-arrow {
            margin-left: 1rem;
            height: 200px;
            weight: 200px;
          }

          /* Gradient background code */


          /*
          .project-blurb .bg {
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            transition: all .6s ease;
          }

          .project-blurb .bg-transition {
            z-index: -2;
          }

          .project-blurb .bg-white, .project-blurb .bg-transition  {
            background: var(--surface-elevated-color);
          }

          .project-blurb .bg-gradient {
            opacity: 0;
          }

          .project-blurb .bg-gradient.blue {
            background-image: linear-gradient(90deg, #330867 0%, #30cfd0 100%);
          }

          .project-blurb .bg-gradient.red {
            background-color: #F19595;
            /*background-image: linear-gradient(90deg, #B36FE8 0%, #EC6565 100%);
          }


          .project-blurb:hover .bg-white {
            opacity: 0;
          }

          .project-blurb:hover .bg-gradient {
            opacity: 1;
          }

          */

          /* Hover Styling */

          .case-card:hover .next-arrow {
            -webkit-transform: translateX(5px);
                -ms-transform: translateX(5px);
                    transform: translateX(5px);
          }

          /* Link Styling */

          .bottom {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: justify;
                justify-content: space-between
          }

          .bottom .next {
            display: -ms-flexbox;
            display: flex;
            padding: .5em 0 1em;
          }

          .case-study-text {
            display: inline-block;
            -webkit-transition: all .6s ease;
            -o-transition: all .6s ease;
            transition: all .6s ease;
          }

          .bottom .next-arrow {
            width: 1em;
            height: 1em;
            margin-left: 4px;
            -webkit-transition: all .4s linear;
            -o-transition: all .4s linear;
            transition: all .4s linear;
            display: block;
          }

          .bottom .next-arrow-icon {
            -webkit-transition: all .6s ease;
            -o-transition: all .6s ease;
            transition: all .6s ease;
          }

          .case-card .next.green .case-study-text {
            color: #12a42d;
          }

          .case-card .green .next-arrow-icon {
            fill: #12a42d;
          }

          .case-card .next.blue .case-study-text {
            color: #1e95ed;
          }

          .case-card .blue .next-arrow-icon {
            fill: #1e95ed;
          }

          .case-card .next.red .case-study-text {
            color: #fa5858;
          }

          .case-card .red .next-arrow-icon {
            fill: #fa5858;
          }

          .case-card .purple .case-study-text {
            color: #9157ff;
          }

          .case-card .purple .next-arrow-icon {
            fill: #9157ff;
          }

          .project-link-container{
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }


          @media only screen and (max-width: 45rem) {
            .case-card {
              -webkit-box-shadow: 0 0.75em 1.5em 0 rgba(0,0,0,0.22);
                      box-shadow: 0 0.75em 1.5em 0 rgba(0,0,0,0.22);
            }

            .plx {
              opacity: 1 !important;
              -webkit-transform: none !important;
                  -ms-transform: none !important;
                      transform: none !important;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Project;
