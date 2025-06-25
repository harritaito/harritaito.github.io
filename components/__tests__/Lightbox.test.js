import Lightbox from '../Lightbox';

// Mock react-images to avoid DOM dependencies in tests
jest.mock('react-images', () => {
  const React = require('react');
  const Carousel = () => React.createElement('div');
  const Modal = (props) => React.createElement('div', props);
  const ModalGateway = ({ children }) => React.createElement('div', null, children);
  return { __esModule: true, default: Carousel, Modal, ModalGateway };
});

describe('Lightbox componentDidUpdate', () => {
  test('sets modal state when open prop changes', () => {
    const lb = new Lightbox({ open: false, images: [] });
    lb.state = { modalIsOpen: false };
    lb.setState = jest.fn(function (state) { this.state = { ...this.state, ...state }; });
    lb.props = { open: true, images: [] };
    lb.componentDidUpdate({ open: false });
    expect(lb.setState).toHaveBeenCalledWith({ modalIsOpen: true });
    expect(lb.state.modalIsOpen).toBe(true);
  });

  test('does not update state when open unchanged', () => {
    const lb = new Lightbox({ open: false, images: [] });
    lb.state = { modalIsOpen: false };
    lb.setState = jest.fn(function (state) { this.state = { ...this.state, ...state }; });
    lb.props = { open: false, images: [] };
    lb.componentDidUpdate({ open: false });
    expect(lb.setState).not.toHaveBeenCalled();
  });
});
