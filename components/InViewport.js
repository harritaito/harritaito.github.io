import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InViewport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };

    this.container = React.createRef();
  }

  componentDidMount() {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      this.setState({ isVisible: true });
      return;
    }

    this.observer = new IntersectionObserver(([entry]) => {
      this.setState({ isVisible: entry.isIntersecting });
    }, {
      rootMargin: this.props.rootMargin,
      threshold: this.props.threshold
    });

    if (this.container.current) {
      this.observer.observe(this.container.current);
    }
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    return (
      <div ref={this.container}>
        {this.props.children({ isVisible: this.state.isVisible })}
      </div>
    );
  }
}

InViewport.propTypes = {
  children: PropTypes.func.isRequired,
  rootMargin: PropTypes.string,
  threshold: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ])
};

InViewport.defaultProps = {
  rootMargin: '0px',
  threshold: 0
};

export default InViewport;
