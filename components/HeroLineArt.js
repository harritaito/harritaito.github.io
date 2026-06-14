import React, { Component } from "react";
import { colors } from "./design-system/tokens";

// A flowing line that draws itself as the home hero is scrolled top -> bottom.
const PATH_D =
  "M40 520 C 120 360, 220 360, 300 480 S 480 600, 560 440 S 740 280, 820 420 S 1000 560, 1080 380";

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
    // pathLength="1" normalizes the dash math to a 0..1 range, so the line is
    // hidden at progress 0 and fully drawn at progress 1 -- no getTotalLength
    // measurement and no flash of a drawn line before hydration.
    return (
      <div className="hero-line-art" aria-hidden="true">
        <svg
          viewBox="0 0 1120 720"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={PATH_D}
            pathLength="1"
            style={{ strokeDashoffset: 1 - this.state.progress }}
          />
        </svg>
        <style jsx>{`
          .hero-line-art {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
          }

          .hero-line-art svg {
            width: 100%;
            height: 100%;
          }

          .hero-line-art :global(path) {
            fill: none;
            stroke: ${colors.accentGreen};
            stroke-width: 3;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 1;
            opacity: 0.7;
            will-change: stroke-dashoffset;
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-line-art :global(path) {
              stroke-dashoffset: 0 !important;
            }
          }

          @media only screen and (max-width: 45rem) {
            .hero-line-art :global(path) {
              stroke-dashoffset: 0 !important;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default HeroLineArt;
