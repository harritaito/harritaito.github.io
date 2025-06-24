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
      return window.location && window.location.host === url.host;
    } catch (e) {
      return false;
    }
  }

  render() {

    return (
      <div className={"button " + this.props.color}>
        {
          this.props.link ?
            (
              this.isLinkInternal() ?
              <Link href={this.props.link}>
                {this.props.label}
              </Link> :
              <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                {this.props.label}
              </a>
            ) : <a><span>{this.props.label}</span></a>
        }
      <style jsx>{`
        /* Solid Button Rules */

        .button a {
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
        @media only screen and (max-width: 45rem) {
        .button a {font-size: 0.9rem;}
      }

        .button:hover {
          cursor: pointer;
        }


        /* Outline Button Rules */

        .button.outline a {
          color: #696a6d;
          padding: 0;
        }

        .button.outline a span {
          position: relative;
          display: inline-block;
          padding: .3em 1.3em;
        }

        .button.outline a::before {
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

        .button.outline.blue a:hover span {
          color: #1e95ed
        }

        .button.outline.blue a:hover::before {
          border-color: #1e95ed;
        }


        .button.outline.green a:hover span {
          color: #12a42d
        }

        .button.outline.green a:hover::before {
          border-color: #12a42d;
        }

        .button.outline.red a:hover span {
          color: #fa5858;
        }

        .button.outline.red a:hover::before {
          border-color: #fa5858;
        }


        .button.outline.purple a:hover span {
          color: #9157ff;
        }

        .button.outline.purple a:hover::before {
          border-color: #9157ff;
        }
      `}</style>
      </div>
    );
  }
}

export default Button;

