import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string,
    color: PropTypes.string.isRequired,
  }

  static defaultProps = {
    label: "Button",
    color: "green"
  }

  isLinkInternal () {
    if (!this.props.link)
      return false;

    if (this.props.link.indexOf('://') === -1) {
      return true;
    }

    try {
      const url = new URL(this.props.link);
      if (typeof window === 'undefined' || !window.location) {
        return false;
      }
      return window.location.host === url.host;
    } catch (e) {
      return false;
    }
  }

  render() {

    const content = <span>{this.props.label}</span>;

    return (
      <div className={"button " + this.props.color}>
        {
          this.props.link ?
            (
              this.isLinkInternal() ?
                <Link href={this.props.link} className="button-link">
                  {content}
                </Link> :
                <a
                  className="button-link"
                  href={this.props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
            ) : <span className="button-link button-link--static" aria-disabled="true">{content}</span>
        }
        <style jsx>{`
          /* Solid Button Rules */

          .button .button-link {
            display: inline-block;
            position: relative;
            border-radius: 26px;
            padding: .5em 1.5em;
            color: #FAFAFA;
            text-decoration: none;
            -webkit-transition: all .6s linear;
            -o-transition: all .6s linear;
            transition: all .6s linear;
            font-weight: 500;
          }
          .button .button-link--static {
            cursor: default;
          }
          @media only screen and (max-width: 45rem) {
          .button .button-link {font-size: 0.9rem;}
        }

          .button:hover {
            cursor: pointer;
          }


          /* Outline Button Rules */

          .button.outline .button-link {
            color: #696a6d;
            padding: 0;
          }

          .button.outline .button-link span {
            position: relative;
            display: inline-block;
            padding: .3em 1.3em;
          }

          .button.outline .button-link::before {
            border: 2px solid #696a6d;
            border-radius: 26px;
            width: 100%;
            height:100%;
            content: '';
            top: -2px;
            left: -2px;
            position: absolute;
          }

          /* Outline Button Colors */

          .button.outline.blue .button-link:hover span {
            color: #1e95ed
          }

          .button.outline.blue .button-link:hover::before {
            border-color: #1e95ed;
          }


          .button.outline.green .button-link:hover span {
            color: #12a42d
          }

          .button.outline.green .button-link:hover::before {
            border-color: #12a42d;
          }

          .button.outline.red .button-link:hover span {
            color: #fa5858;
          }

          .button.outline.red .button-link:hover::before {
            border-color: #fa5858;
          }


          .button.outline.purple .button-link:hover span {
            color: #9157ff;
          }

          .button.outline.purple .button-link:hover::before {
            border-color: #9157ff;
          }
        `}</style>
      </div>
    );
  }
}

export default Button;

