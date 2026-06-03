import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import { resolveAssetHeight, resolveAssetSrc, resolveAssetWidth } from './assetSource';

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
              <img
                src={resolveAssetSrc(img.src)}
                alt={img.caption || ''}
                width={resolveAssetWidth(img.src)}
                height={resolveAssetHeight(img.src)}
                loading={i === 0 ? undefined : "lazy"}
                decoding="async"
              />
              {img.caption && <p className="legend">{img.caption}</p>}
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Lightbox;
