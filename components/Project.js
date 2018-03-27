import React, { Component } from 'react';
import Link from 'next/link'
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
    title: "",
    description: "",
    link: "",
    image: "daretolearned",
    alt: "",
    color: "",
    parallax: true,
    endValue: -100
  }

  render() {

    return (
      <div className={this.props.title + " Project"}>
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-md-10 col-lg-offset-0 col-lg-8 col-xl-offset-1 col-xl-7">
            <img className="project-image" src={this.props.image} alt={this.props.alt}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-offset-2 col-sm-10 col-md-offset-4 col-md-8 col-lg-offset-6 col-lg-6 col-xl-5">
            {this.props.parallax ?
              <Plx
                className="plx"
                animateWhenNotInViewport={true}
                parallaxData={[
                  {
                    start: this.props.percentage,
                    duration: this.props.parallax ? '9%' : "0%",
                    properties: [
                      {
                        startValue: 0,
                        endValue: this.props.endValue,
                        property: 'translateY',
                        unit: "px"
                      },
                      {
                        startValue: 0,
                        endValue: 1,
                        property: 'opacity',
                      }
                    ]
                  }
                ]}
              >
              <Link prefetch href={this.props.link} as={this.props.link}>
                <div className="project-link-container">
                  <div className={"project-blurb " + this.props.color}>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                    <div className="bottom">
                      <div className={"next navbar-link " + this.props.color}>
                        <Link prefetch href={this.props.link} as={this.props.link}><a>Case Study</a></Link>
                        <Isvg className={"next-arrow"} src={arrow} style={{marginLeft: '5px', height: '27px', width: '23px', marginTop: 2}}/>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              </Plx> :

              <Link prefetch href={this.props.link} as={this.props.link}>
                <div className="project-link-container">
                  <div className="project-blurb">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                    <div className="bottom">
                      <div className={"next navbar-link " + this.props.color}>
                        <Link prefetch href={this.props.link} as={this.props.link}><a>Case Study</a></Link>
                        <Isvg className={"next-arrow"} src={arrow} style={{marginLeft: '5px', height: '27px', width: '23px', marginTop: 2}}/>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            }
          </div>
        </div>
        <style jsx>{`
          .Project {
            margin-top: 12em;
            margin-bottom: 12em;
          }

          .project-link-container {
            color: inherit;
          }

          .Project:hover .project-image {
            -webkit-box-shadow: 0 0.75em 1.25em 0 rgba(0,0,0,0.30);
                    box-shadow: 0 0.75em 1.25em 0 rgba(0,0,0,0.30);
          }

          .Project:hover .project-blurb {
            -webkit-box-shadow: 0 1.5em 2.5em 0 rgba(0,0,0,0.30);
                    box-shadow: 0 1.5em 2.5em 0 rgba(0,0,0,0.30);
          }


          .project-image {
            display: block;
            -o-object-fit: cover;
              object-fit: cover;
            max-width: 100%;
            height: auto;
            padding: 0;
            overflow: hidden;
            -webkit-box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.30);
                    box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.30);
            -webkit-transition: -webkit-box-shadow .5s ease;
            transition: -webkit-box-shadow .5s ease;
            -o-transition: box-shadow .5s ease;
            transition: box-shadow .5s ease;
            transition: box-shadow .5s ease, -webkit-box-shadow .5s ease;
          }

          .plx {
            opacity: 0;
          }

          .project-blurb {
            background-color: white;
            padding: 1em 1.5em;
            overflow: hidden;
            -webkit-box-shadow: 0 1em 2em 0 rgba(0,0,0,0.30);
                    box-shadow: 0 1em 2em 0 rgba(0,0,0,0.30);
            height: auto;
            margin-top: -10em;
            -webkit-transition: all .6s ease;
            -o-transition: all .6s ease;
            transition: all .6s ease;
            position: relative;
          }

          .project-blurb.green:hover {
            background-color: #0BAB28;
          }


          .project-blurb.blue:hover {
            background-color: #1e95ed;
          }


          .project-blurb.red:hover {
            background-color: #fa5858;
          }

          .project-blurb.purple:hover {
            background-color: #9157ff;
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
            background: #FAFAFA;
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

          .project-blurb:hover {
            color: #FAFAFA;
          }

          .Project .project-blurb:hover .next a {
            color: #FAFAFA;
          }

          .Project .project-blurb:hover .next svg {
            fill: #FAFAFA;
          }

          .project-blurb:hover .next-arrow{
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

          .bottom .next a {
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

          .bottom .next-arrow svg {
            -webkit-transition: all .6s ease;
            -o-transition: all .6s ease;
            transition: all .6s ease;
          }

          .project-blurb .next.green a {
            color: #12a42d;
          }

          .project-blurb .green .next-arrow svg {
            fill: #12a42d;
          }

          .project-blurb .next.blue a {
            color: #1e95ed;
          }

          .project-blurb .blue .next-arrow svg {
            fill: #1e95ed;
          }

          .project-blurb .next.red a {
            color: #fa5858;
          }

          .project-blurb .red .next-arrow svg {
            fill: #fa5858;
          }


          .project-blurb .purple a {
            color: #9157ff;
          }

          .project-blurb .purple .next-arrow svg {
            fill: #9157ff;
          }




          @media only screen and (max-width: 575px) {
            .plx {
              margin-top: 35vh;

            }
          }


          @media only screen and (max-width: 767px) and (min-width: 576px) {
            .plx {
              margin-top: 150px;
            }
          }


          @media only screen and (max-width: 992px) and (min-width: 768px) {
            .plx {
              margin-top: 100px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Project;
