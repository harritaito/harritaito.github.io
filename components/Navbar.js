import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Headroom from "react-headroom";
import Isvg from "react-inlinesvg";

import { resolveAssetSrc } from "./assetSource";
import { colors } from "./design-system/tokens";
import arrow from "../static/media/icons/arrow-slim.svg";

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      visible: true,
      progress: 0,
    };

    this.updateProgress = this.updateProgress.bind(this);
  }

  updateProgress() {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const rawValue = height > 0 ? window.scrollY / height : 0;
    const value = Number.isFinite(rawValue)
      ? Math.min(1, Math.max(0, rawValue))
      : 0;
    this.setState({ progress: value });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.updateProgress);
    window.addEventListener("resize", this.updateProgress);
    this.updateProgress();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateProgress);
    window.removeEventListener("resize", this.updateProgress);
  }

  static propTypes = {
    nextProjectLink: PropTypes.string,
    nextProjectName: PropTypes.string,
    color: PropTypes.string,
  };

  static defaultProps = {
    nextProjectLink: null,
    nextProjectName: "Next",
    color: "",
  };

  render() {
    return (
      <header className="nav">
        <div className="progress-bar-wrap">
          <progress
            className={`progress-bar ${this.props.color}`}
            value={this.state.progress}
            max={1}
          />
        </div>
        <Headroom style={{ position: "fixed" }}>
          <nav className="navbar" aria-label="Primary navigation">
            <Link href="/" legacyBehavior>
              <a className="navbar-link">Home</a>
            </Link>
            {this.props.nextProjectLink ? (
              <div className="next-wrapper">
                <Link href={this.props.nextProjectLink} legacyBehavior>
                  <a className="next navbar-link">
                    {this.props.nextProjectName}
                    <Isvg
                      className={"next-arrow"}
                      src={resolveAssetSrc(arrow)}
                    />
                  </a>
                </Link>
              </div>
            ) : null}
          </nav>
        </Headroom>
        <style jsx>{`
          .headroom {
            position: relative;
            top: 0px;
            left: 0px;
            right: 0px;
            background: var(--surface-elevated-color);
            z-index: 1 !important;
            transform: translateY(0px);
            -webkit-box-shadow: var(--navbar-shadow);
                    box-shadow: var(--navbar-shadow);
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

          .headroom--unfixed .progress-bar-wrap {
            display: none;
          }
          .headroom-wrapper{height: 3.5rem;}
          .navbar {
            padding-bottom: .6em;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.5em;
            -webkit-box-shadow: var(--navbar-shadow);
                    box-shadow: var(--navbar-shadow);
            background: var(--surface-elevated-color);
            color: var(--link-color);
          }

          .navbar-link {
            display: inline-flex;
            align-items: center;
            padding: 1em 1em 0em 1em;
            outline: none;
            -webkit-transition: all .2s linear;
            -o-transition: all .2s linear;
            transition: all .2s linear;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            color: inherit;
          }
          .navbar-link:focus {
            outline: none;
          }

          .navbar .next {
            padding: 1em 1em 0em 0em;
            display: -ms-flexbox;
            display: flex;
          }

          .next-wrapper {
            display: -ms-flexbox;
            display: flex;
          }

          .navbar .next:hover {
            cursor: pointer;
          }

          .navbar .next .next-arrow {
            height: 1rem;
            width: 1rem;
            margin-left: 4px;
            -webkit-transition: all .3s linear;
            -o-transition: all .3s linear;
            transition: all .3s linear;
          }

          .next-arrow {
            height: 1rem;
            width: 1rem;
          }

          .navbar .next:hover .next-arrow {
            -webkit-transform: translateX(3px);
                -ms-transform: translateX(3px);
                    transform: translateX(3px);
          }


          .progress-bar-wrap {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 0.4rem;
            border: 0;
            background-color: transparent;
            z-index: 999;
          }

          progress.progress-bar {
            -webkit-appearance: none;
            height: 0.4rem;
            border: 0;
            background-color: transparent;
            width: 100%;
            display: block;
            appearance: none;
          }

          progress.progress-bar.red {
            color: ${colors.progressRed};
          }

          progress.progress-bar.blue {
            color: ${colors.progressBlue};
          }

          progress.progress-bar.green {
            color: ${colors.accentGreen};
          }

          progress.progress-bar.purple {
            color: ${colors.accentPurple};
          }

         progress.progress-bar.grey {
            color: ${colors.accentGrey}
          }

          progress.progress-bar::-webkit-progress-bar {
            background: var(--progress-track-color);
          }

          progress.progress-bar::-webkit-progress-value {
            background: ${colors.accentPurple};
          }

          progress.progress-bar::-moz-progress-bar {
            background: ${colors.accentPurple};
          }

          progress.progress-bar.red::-webkit-progress-value {
            background-color: ${colors.accentRed};
          }

          progress.progress-bar.red::-moz-progress-bar {
            background-color: ${colors.accentRed};
          }


          progress.progress-bar.blue::-webkit-progress-value {
            background-color: ${colors.accentBlue};
          }

          progress.progress-bar.blue::-moz-progress-bar {
            background-color: ${colors.accentBlue};
          }


          progress.progress-bar.green::-webkit-progress-value {
            background-color: ${colors.accentGreen};
          }

          progress.progress-bar.green::-moz-progress-bar {
            background-color: ${colors.accentGreen};
          }

          progress.progress-bar.grey::-webkit-progress-value {
            background-color: ${colors.accentGrey};
          }

          progress.progress-bar.grey::-moz-progress-bar {
            background-color: ${colors.accentGrey};
          }

          @media only screen and (max-width: 575px) {
            .navbar {
              padding-bottom: 0.2em;
            }

            .navbar-link {
              padding: 0.75em 0.75em 0 0.75em;
            }
          }


    `}</style>
      </header>
    );
  }
}

export default Navbar;
