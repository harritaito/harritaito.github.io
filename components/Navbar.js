import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import Headroom from 'react-headroom';
import ReadingProgress from 'react-reading-progress';
import Isvg from 'react-inlinesvg';

import arrow from '../static/media/icons/arrow-slim.svg';

class Navbar extends Component {

  constructor() {
    super();

    this.state = {
      visible: true
    }
  }

  static propTypes = {
    nextProjectLink: PropTypes.string,
    nextProjectName: PropTypes.string,
    color: PropTypes.string
  }

  static defaultProps = {
    nextProjectLink: "/",
    nextProjectName: "Next Project",
    color: ""
  }


  render() {

    return (
      <div className="nav">
        <div className="progress-bar">
          <ReadingProgress className={this.props.color} />
        </div>
        <Headroom style={{position: 'fixed'}}>
          <div>
          <navbar className="navbar">
            <div className="navbar-link">
            <Link prefetch href='/' as={this.props.link}><a>Home</a></Link>
            </div>
            { this.props.nextProjectLink ?
              <div className="next navbar-link">
                <Link prefetch href={this.props.nextProjectLink} as={this.props.link}>{this.props.nextProjectName}</Link>
                <Isvg className={"next-arrow"} src={arrow} style={{marginLeft: '3px', height: '27px', width: '18px', marginTop: 1}} />
              </div>
              :
              null
            }
          </navbar>
          </div>
        </Headroom>
        <style jsx>{`
          .headroom {
            position: relative;
            top: 0px;
            left: 0px;
            right: 0px;
            background: #FAFAFA;
            z-index: 1 !important;
            transform: translateY(0px);
          }
          .headroom--unfixed {
            position: absolute !important;
            transform: translateY(0);
          }
          .headroom--scrolled {
            transition: transform 200ms ease-in-out;
          }
          .headroom--unpinned {
            position: fixed; 
            top: 0px; 
            left: 0px; 
            right: 0px; 
            z-index: 1; 
            transform: translateY(-100%); 
            transition: all 0.2s ease-in-out;
          }
          .headroom--pinned {
            position: fixed; 
            top: 0px; 
            left: 0px; 
            right: 0px; 
            z-index: 1; 
            transform: translateY(0px); 
            transition: all 0.2s ease-in-out;
          }

          .headroom--unfixed .navbar {
            -webkit-box-shadow: none;
                    box-shadow: none;
          }

          .headroom--unfixed .progress-bar {
            display: none;
          }

          .navbar {
            padding-top: .6em;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: justify;
                justify-content: space-between;
            -webkit-box-shadow: 0 .2em .2em 0 rgba(0,0,0,0.10);
                    box-shadow: 0 .2em .2em 0 rgba(0,0,0,0.10);
          }

          .navbar-link {
            display: inline-block;
            padding: .6em 2em .8em;
            -webkit-transition: all .2s linear;
            -o-transition: all .2s linear;
            transition: all .2s linear;
          }

          .navbar .next {
            padding: .6em 2em .8em 2em;
            display: -ms-flexbox;
            display: flex;
          }

          .navbar .next:hover {
            cursor: pointer;
          }

          .navbar .next a {
            padding: 0

          }

          .navbar .next .next-arrow {
            height: 1em;
            width: 1em;
            margin-left: 4px;
            -webkit-transition: all .3s linear;
            -o-transition: all .3s linear;
            transition: all .3s linear;
            margin-right: 2em
          }

          .navbar .next:hover .next-arrow{
            -webkit-transform: translateX(3px);
                -ms-transform: translateX(3px);
                    transform: translateX(3px);
          }

          .progress-bar {
            -webkit-appearance: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 0.4rem;
            border: 0;
            background-color: transparent;
            color: rgb(97, 13, 255);
            z-index: 999;
          }

          .red {
            color: #EC6565;
          }

          .blue {
            color: #7CE1EC;
          }

          .green {
            color: #12a42d;
          }

          .purple {
            color: #9157ff;
          }

         .grey {
            color: #747a75
          }

          .navbar .progress-bar {
            position: absolute;
            width: 100%;
          }

          progress::-webkit-progress-bar {
            background: #FAFAFA;
          }

          progress::-webkit-progress-value {
            background: #9157ff;
          }

          progress::-moz-progress-bar {
            background: #9157ff;
          }

          progress.red::-webkit-progress-value {
            background-color: #fa5858;
          }

          progress.red::-moz-progress-bar {
            background-color: #fa5858;
          }


          progress.blue::-webkit-progress-value {
            background-color: #1e95ed;
          }

          progress.blue::-moz-progress-bar {
            background-color: #1e95ed;
          }


          progress.green::-webkit-progress-value {
            background-color: #12a42d;
          }

          progress.green::-moz-progress-bar {
            background-color: #12a42d;
          }

          progress.grey::-webkit-progress-value {
            background-color: #747a75;
          }

          progress.grey::-moz-progress-bar {
            background-color: #747a75;
          }


    `}</style>
      </div>
    );
  }
}

export default Navbar;
