import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';
import { resolveAssetSrc } from './assetSource';
import { colors, shadows } from './design-system/tokens';
import arrow from '../static/media/icons/arrow-slim.svg';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationProgress: 1
    };

    this.projectAnimation = React.createRef();
    this.updateAnimation = this.updateAnimation.bind(this);
    this.queueAnimationUpdate = this.queueAnimationUpdate.bind(this);
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    alt: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string,
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
    label: "Case Study",
    parallax: true,
    endValue: -100
  }

  componentDidMount() {
    this.prefersReducedMotion = typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

    if (!this.props.parallax || this.prefersReducedMotion) {
      this.setState({ animationProgress: 1 });
      return;
    }

    window.addEventListener('scroll', this.queueAnimationUpdate);
    window.addEventListener('resize', this.queueAnimationUpdate);
    this.updateAnimation();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.parallax !== this.props.parallax ||
      prevProps.percentage !== this.props.percentage ||
      prevProps.endValue !== this.props.endValue
    ) {
      this.updateAnimation();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.queueAnimationUpdate);
    window.removeEventListener('resize', this.queueAnimationUpdate);

    if (this.animationFrame) {
      window.cancelAnimationFrame(this.animationFrame);
    }
  }

  getStartOffset() {
    const percentage = parseFloat(this.props.percentage);

    if (Number.isNaN(percentage)) {
      return 0;
    }

    return window.innerHeight * (percentage / 100);
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
    if (!this.projectAnimation.current || !this.props.parallax || this.prefersReducedMotion) {
      return;
    }

    const rect = this.projectAnimation.current.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const elementTop = rect.top + scrollY;
    const start = elementTop - window.innerHeight + this.getStartOffset();
    const duration = window.innerHeight * 0.09;
    const progress = Math.min(Math.max((scrollY - start) / duration, 0), 1);

    this.setState({ animationProgress: progress });
  }

  getParallaxStyle() {
    if (this.prefersReducedMotion) {
      return {
        opacity: 1,
        transform: 'none'
      };
    }

    return {
      opacity: this.state.animationProgress,
      transform: `translate3d(0, ${this.props.endValue * this.state.animationProgress}px, 0)`
    };
  }

  renderProjectLink() {
    return (
      <Link href={this.props.link} className="project-link-container">
        <article className={`case-card ${this.props.color}`}>
          <div className="case-card__media">
            <img className="case-card__image" src={resolveAssetSrc(this.props.image)} alt={this.props.alt} />
          </div>
          <div className="case-card__content">
            <h3 className="case-card__title">{this.props.title}</h3>
            <p className="case-card__description">{this.props.description}</p>
            <div className="bottom">
              <div className={"next navbar-link " + this.props.color}>
                <span className="case-study-text">{this.props.label}</span>
                <span className="next-arrow" aria-hidden="true">
                  <Isvg className="next-arrow-icon" src={resolveAssetSrc(arrow)} />
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
              <div
                className="plx"
                ref={this.projectAnimation}
                style={this.getParallaxStyle()}
              >
                {this.renderProjectLink()}
              </div>
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

          .Project :global(.project-link-container) {
            color: inherit;
            display: block;
            text-decoration: none;
          }

          .Project :global(.project-link-container:focus) {
            outline: none;
          }

          .Project :global(.plx) {
            will-change: opacity, transform;
          }

          @media (prefers-reduced-motion: reduce) {
            .Project :global(.plx) {
              opacity: 1 !important;
              transform: none !important;
            }
          }

          .Project :global(.case-card) {
            border-radius: 1.5rem;
            overflow: hidden;
            background-color: var(--surface-elevated-color);
            -webkit-box-shadow: ${shadows.card};
                    box-shadow: ${shadows.card};
            -webkit-transition: box-shadow .5s ease;
            transition: box-shadow .5s ease;
            display: flex;
            flex-direction: column;
          }

          .Project :global(.project-link-container:hover .case-card) {
            -webkit-box-shadow: ${shadows.cardHover};
                    box-shadow: ${shadows.cardHover};
          }

          .Project :global(.case-card__media) {
            position: relative;
            aspect-ratio: 16 / 9;
            overflow: hidden;
          }

          .Project :global(.case-card__image) {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .Project :global(.case-card__content) {
            padding: 1.5em;
          }

          .Project :global(.case-card__title) {
            margin: 0 0 0.5em;
            font-size: clamp(1.125rem, 4vw, 1.75rem);
            line-height: 1.2;
          }

          .Project :global(.case-card__description) {
            margin: 0 0 1.25em;
            line-height: 1.7;
          }

          .Project :global(.case-card .next-arrow) {
            margin-left: 1rem;
            height: 200px;
            width: 200px;
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

          .Project :global(.case-card:hover .next-arrow) {
            -webkit-transform: translateX(5px);
                -ms-transform: translateX(5px);
                    transform: translateX(5px);
          }

          /* Link Styling */

          .Project :global(.bottom) {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: justify;
                justify-content: space-between
          }

          .Project :global(.bottom .next) {
            display: -ms-flexbox;
            display: flex;
            padding: .5em 0 1em;
          }

          .Project :global(.case-study-text) {
            display: inline-block;
            -webkit-transition: all .6s ease;
            -o-transition: all .6s ease;
            transition: all .6s ease;
          }

          .Project :global(.bottom .next-arrow) {
            width: 1em;
            height: 1em;
            margin-left: 4px;
            -webkit-transition: all .4s linear;
            -o-transition: all .4s linear;
            transition: all .4s linear;
            display: block;
          }

          .Project :global(.bottom .next-arrow-icon) {
            -webkit-transition: all .6s ease;
            -o-transition: all .6s ease;
            transition: all .6s ease;
          }

          .Project :global(.case-card .next.green .case-study-text) {
            color: ${colors.accentGreen};
          }

          .Project :global(.case-card .green .next-arrow-icon) {
            fill: ${colors.accentGreen};
          }

          .Project :global(.case-card .next.blue .case-study-text) {
            color: ${colors.accentBlue};
          }

          .Project :global(.case-card .blue .next-arrow-icon) {
            fill: ${colors.accentBlue};
          }

          .Project :global(.case-card .next.red .case-study-text) {
            color: ${colors.accentRed};
          }

          .Project :global(.case-card .red .next-arrow-icon) {
            fill: ${colors.accentRed};
          }

          .Project :global(.case-card .purple .case-study-text) {
            color: ${colors.accentPurple};
          }

          .Project :global(.case-card .purple .next-arrow-icon) {
            fill: ${colors.accentPurple};
          }

          .Project :global(.project-link-container) {
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }


          @media only screen and (max-width: 45rem) {
            .Project :global(.case-card) {
              -webkit-box-shadow: 0 0.75em 1.5em 0 rgba(0,0,0,0.22);
                      box-shadow: 0 0.75em 1.5em 0 rgba(0,0,0,0.22);
            }

            .Project :global(.plx) {
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
