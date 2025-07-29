import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';

class Lightbox extends Component {

  constructor () {
    super();

    this.state = {
      modalIsOpen: false
    };
  }

  
  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      this.setState({
        modalIsOpen: this.props.open
      });
    }
  }


  render () {
    return (
      <div className="lightbox">
        <Carousel showThumbs={false} showStatus={false}>
          {this.props.images.map((img, i) => (
            <div key={i}>
              <img src={img.src} alt={img.caption || ''} />
              {img.caption && <p className="legend">{img.caption}</p>}
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Lightbox;
