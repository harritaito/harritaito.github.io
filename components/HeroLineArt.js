import React, { Component } from "react";
import { colors } from "./design-system/tokens";

class HeroLineArt extends Component {
  constructor(props) {
    super(props);

    this.state = { progress: 0 };

    this.updateAnimation = this.updateAnimation.bind(this);
    this.queueAnimationUpdate = this.queueAnimationUpdate.bind(this);
  }

  componentDidMount() {
    this.prefersReducedMotion =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false;

    if (this.prefersReducedMotion) {
      this.setState({ progress: 1 });
      return;
    }

    window.addEventListener("scroll", this.queueAnimationUpdate);
    window.addEventListener("resize", this.queueAnimationUpdate);
    this.updateAnimation();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.queueAnimationUpdate);
    window.removeEventListener("resize", this.queueAnimationUpdate);

    if (this.animationFrame) {
      window.cancelAnimationFrame(this.animationFrame);
    }
  }

  queueAnimationUpdate() {
    if (this.animationFrame) {
      return;
    }

    this.animationFrame = window.requestAnimationFrame(() => {
      this.animationFrame = null;
      this.updateAnimation();
    });
  }

  updateAnimation() {
    if (this.prefersReducedMotion) {
      return;
    }

    const scrollY = window.scrollY || window.pageYOffset;
    const drawDistance = window.innerHeight;
    const progress = Math.min(Math.max(scrollY / drawDistance, 0), 1);

    this.setState({ progress });
  }

  render() {
    const drawStyle = { strokeDashoffset: 1 - this.state.progress };

    return (
      <div className="hero-line-art" aria-hidden="true">
        <svg
          viewBox="0 0 1120 720"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="paper-shapes">
            <path d="M778 102h278v212H778z" className="paper paper-blue" />
            <path d="M722 374h190v128H722z" className="paper paper-purple" />
            <path d="M936 382h118v94H936z" className="paper paper-red" />
            <path d="M828 526h132v74H828z" className="paper paper-green" />
          </g>

          <g className="linework" style={drawStyle}>
            <path
              pathLength="1"
              d="M514 638c66-23 92-74 73-122-17-43 1-79 54-101 48-20 63-54 44-102-22-56 7-93 88-112"
              className="route"
            />

            <path pathLength="1" d="M778 102h278v212H778z" />
            <path pathLength="1" d="M778 137h278" />
            <path pathLength="1" d="M801 120h1m16 0h1m16 0h1" />
            <path
              pathLength="1"
              d="M808 274v-81h39v81m0-54h42v54m0-31h42v31m0-68h42v68m0-44h43v44"
              className="chart"
            />
            <path
              pathLength="1"
              d="M808 252c41-9 67-7 94-26 26-18 44-57 74-50 22 5 34 25 50 17"
              className="accent-line"
            />
            <path pathLength="1" d="M804 293h86m17 0h49m17 0h54" />

            <path pathLength="1" d="M722 374h190v128H722z" />
            <path pathLength="1" d="M750 405h91m-91 24h132m-132 24h103" />
            <path
              pathLength="1"
              d="M758 485c18-28 42-28 61 0 18-28 42-28 61 0"
              className="accent-line"
            />

            <path pathLength="1" d="M936 382h118v94H936z" />
            <path pathLength="1" d="M960 407h70m-70 21h48m-48 21h61" />

            <path pathLength="1" d="M828 526h132v74H828z" />
            <path pathLength="1" d="M851 549h82m-82 25h55" />

            <path
              pathLength="1"
              d="M1001 524l35 81-18 8-35-81 18-8zm17 89-1 18 12-13-11-5z"
              className="pencil"
            />
            <path pathLength="1" d="M986 537l35-15m-28 32 35-15" />

            <path
              pathLength="1"
              d="M681 546h92v55c0 29-20 48-46 48s-46-19-46-48v-55zm92 14h16c27 0 27 40 0 40h-16"
              className="cup"
            />
            <path
              pathLength="1"
              d="M704 531c-17-25 17-29 0-53m43 53c-17-25 17-29 0-53"
            />
            <path pathLength="1" d="M660 657h151" />

            <path
              pathLength="1"
              d="M735 177h19m-10-10v20"
              className="accent-line"
            />
            <path
              pathLength="1"
              d="M990 337h25m-13-13v26"
              className="accent-line"
            />
            <path pathLength="1" d="M681 344h21m-11-11v22" />
            <path
              pathLength="1"
              d="M1037 90c0 12-9 21-21 21 12 0 21 9 21 21 0-12 9-21 21-21-12 0-21-9-21-21z"
              className="spark"
            />

            <path pathLength="1" d="M587 516h19m-9-10v20" className="node" />
            <path pathLength="1" d="M685 313h19m-9-10v20" className="node" />
            <path pathLength="1" d="M773 201h19m-9-10v20" className="node" />
          </g>
        </svg>
        <style jsx>{`
          .hero-line-art {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
            z-index: -1;
          }

          .hero-line-art svg {
            width: 100%;
            height: 100%;
          }

          .hero-line-art :global(.paper) {
            stroke: none;
            opacity: 0.07;
          }

          .hero-line-art :global(.paper-blue) {
            fill: ${colors.accentBlue};
          }

          .hero-line-art :global(.paper-purple) {
            fill: ${colors.accentPurple};
          }

          .hero-line-art :global(.paper-red) {
            fill: ${colors.accentRed};
          }

          .hero-line-art :global(.paper-green) {
            fill: ${colors.accentGreen};
          }

          .hero-line-art :global(.linework path) {
            fill: none;
            stroke: ${colors.textStrong};
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 1;
            vector-effect: non-scaling-stroke;
            opacity: 0.34;
          }

          .hero-line-art :global(.linework .route) {
            stroke: ${colors.accentGreen};
            stroke-width: 3;
            opacity: 0.44;
          }

          .hero-line-art :global(.linework .accent-line),
          .hero-line-art :global(.linework .spark),
          .hero-line-art :global(.linework .node) {
            stroke: ${colors.accentPurple};
            stroke-width: 2.5;
            opacity: 0.58;
          }

          .hero-line-art :global(.linework .chart) {
            stroke: ${colors.accentBlue};
            opacity: 0.48;
          }

          .hero-line-art :global(.linework .pencil) {
            stroke: ${colors.accentRed};
            opacity: 0.52;
          }

          .hero-line-art :global(.linework .cup) {
            stroke: ${colors.accentGreen};
            opacity: 0.48;
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-line-art :global(.linework) {
              stroke-dashoffset: 0 !important;
            }
          }

          @media only screen and (max-width: 45rem) {
            .hero-line-art svg {
              width: 135%;
              margin-left: -14%;
              opacity: 0.5;
            }

            .hero-line-art :global(.linework) {
              stroke-dashoffset: 0 !important;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default HeroLineArt;
