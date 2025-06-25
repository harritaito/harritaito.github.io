import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Video extends Component {

  componentDidUpdate(prevProps) {
    if (prevProps.autoplay !== this.props.autoplay) {
      this.props.autoplay ? this.playVideo() : this.stopVideo();
    }
  }

  static propTypes = {
    autoplay: PropTypes.bool,
    webMsrc: PropTypes.string.isRequired,
    mp4src: PropTypes.string.isRequired,
    caption: PropTypes.string,
    controls: PropTypes.bool
  }

  static defaultProps = {
    autoplay: false,
    webMsrc: "",
    mp4src: "",
    caption: "",
    controls: false
  }

  playVideo = () => {
    this._video.play();
  }

  stopVideo = () => {
    this._video.pause();
  }

  render () {

    return (
      <span>
        <video className={"video " + this.props.className} ref={(video) => { this._video = video; }} preload="meta" muted loop>

          <source src={this.props.webMsrc} type="video/webm" />
          <source src={this.props.mp4src} type="video/mp4" />

          <p>Your browser does not support the video tag. You can alternatively <a href={this.props.mp4src}>download</a> the video.</p>
        </video>
        {this.props.caption ?
          <p className={"caption"}>
            {this.props.caption}
          </p>
          : null
        }

      <style jsx>{`
        .video {
          width: 100%;
          margin: .75em auto;
          -webkit-box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.30);
                  box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.30);
        }

        .video + .caption {
          margin-bottom: 1em;
        }

        .video.vertical-video {
          max-height: 520px;
          width: auto;
          margin: auto;
          display: block;
        }
      `}</style>

      </span>
    )
  }

}

export default Video;

