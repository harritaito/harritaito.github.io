import React, {Component} from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

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
        <Carousel views={this.props.images}/>
      </div>
    );
  }
}

export default Lightbox;
