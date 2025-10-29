import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';
import Modal from 'react-modal';
import close from '../static/media/icons/close.svg';



class ProjectIcon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      imageLoaded: false
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
    link: PropTypes.string.isRequired,
    svg: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    image: PropTypes.string,
    square: PropTypes.bool,
    round: PropTypes.bool,
    links: PropTypes.array,
    first: PropTypes.bool,
  };

  static defaultProps = {
    title: "",
    description: "",
    link: "",
    svg: "",
    alt: "",
    image: null,
    square: false,
    round: false,
    links: [],
    first: false
  };

  showModal() {
    this.setState({ modalOpen: true });
    document.body.style.overflow = "hidden";
    Modal.setAppElement('body');
  }

  hideModal() {
    this.setState({ modalOpen: false });
    document.body.style.overflow = "auto";
  }

  render() {

    let square = this.props.square ? "square" : null;
    let round = this.props.round ? "round" : null;
    let modalVisible = "visible";
    this.state.imageLoaded ? modalVisible = "visible" : null;

    const modalCustomStyles = {

      overlay : {
        overflowY: "scroll",
        position: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
      },
      content: {
        height: 'auto',
        position: 'relative',
        padding: '1em',
        width: '80vw',
        maxWidth: "400px",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        border: "none",
        margin: "10vh auto",
        visibility: modalVisible,
        background: "var(--surface-elevated-color)"
      }
    }
    
    let iconClass = "project-icon col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-2";
    this.props.first ? iconClass += " col-sm-offset-3 col-md-offset-3 col-xl-offset-4" : null;

    return (
      <div className={iconClass}>
        <span onClick={this.showModal} style={{margin:10, height: '7em', width: '7em'}}>
          <object><Isvg src={this.props.svg} alt={this.props.alt} className={square || round}/></object>
        </span>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.hideModal}
          closeTimeoutMS={200}
          style={modalCustomStyles}
          contentLabel="Modal">
          <div>
            <button onClick={this.hideModal} className={"modal-close-button"}>
              <img src={close} alt={"close button"} style={{border: 0, height: '1.5em', width: '1.5em', background: 'var(--surface-elevated-color)'}}/>
            </button>
            <h2>{this.props.title}</h2>
            <div className="modal-content">
              {this.props.description}
              <img src={this.props.image} alt={this.props.alt} onLoad={() => this.setState({imageLoaded: true})} loader={<div className={"loader"}></div> }/>
              <div style={{marginTop: "1.5em"}}>
              {
                (this.props.links).map(function (link, index){
                  return (
                    <a key={link.title + "link" + index} href={link.url} target="_blank" rel="noopener noreferrer">{link.title}<div style={{display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2}} /></a>
                  )
                })
              }
              </div>
            </div>
          </div>
        </Modal>

        <style jsx>{`
          .isvg {
            height: '7em'; 
            width: '7em';
            display: 'flex'
          }
          .project-icon {
            display: -ms-flexbox;
            display: flex;
          }

          .project-icon .isvg {
            height: 7em;
            width: 7em;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: center;
                justify-content: center;
            -ms-flex-align: center;
                align-items: center;
          }

          .project-icon .square svg {
            max-height: 55%;
          }

      .project-icon .round svg {
        max-height: 63%;
      }

      .project-icon svg {
        filter: url(../static/grayscale.svg#grayscale) contrast(0);
        /* Firefox 3.5+ */
        -webkit-filter: grayscale(1) contrast(0);
        /* Google Chrome & Safari 6+ */

        -webkit-transition: all .5s ease;

        -o-transition: all .5s ease;

        transition: all .5s ease;
        max-height: 70%;
        max-width: 120%;
      }

      .project-icon:hover {
        filter: none;
        -webkit-filter: grayscale(0%);
        cursor: pointer;
      }

      .ReactModalPortal > div {
        opacity: 0;
      }

      .ReactModalPortal .ReactModal__Overlay {
        -webkit-transition: opacity 200ms ease-in-out;
        -o-transition: opacity 200ms ease-in-out;
        transition: opacity 200ms ease-in-out;
        background: rgba(0, 0, 0, 0.15);
      }


      .ReactModalPortal .ReactModal__Overlay--after-open {
        opacity: 1;
      }

      .ReactModalPortal .ReactModal__Overlay--before-close {
        opacity: 0;
      }


      .ReactModal__Content {
        padding: 1em;
      }


      .modal-close-button {
        padding: 0;
        border: 0;
        height: 1.5em;
        width: 1.5em;
        position: absolute;
        right: 1.5em;
        top: 1.5em;
        background: var(--surface-elevated-color);
      }


      .modal-close-button img {
        height: 1.5em;
        width: 1.5em;
        border: 0;
        background: var(--surface-elevated-color);
      }


      .modal-close-button:hover {
        cursor: pointer;
      }

      .modal-close-button:focus {
        outline: none;
      }


     .modal-content {
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
      }

      .modal-content img {
        display: block;
        max-width: 100%;
        margin: auto;
        max-height: 300px;
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
      }

      .modal-content a {
        margin-right: .5em;
      }

      .modal-0-2 .loader {
        background: gray;
      }
      h2{
        display: block;
        font-size: 1.5em;
        -webkit-margin-before: 0.83em;
        -webkit-margin-after: 0.83em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        font-weight: bold;
     }

    `}</style>

      </div>
    );
  }
}

export default ProjectIcon;
