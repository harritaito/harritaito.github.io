import React, {Component} from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

class Lightbox extends Component {

  constructor () {
    super();

    this.state = {
      modalIsOpen: false
    };
  }

  
  componentWillReceiveProps (nextProps) {
    this.setState ({
      modalIsOpen: nextProps.open
    });
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
