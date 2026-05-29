jest.mock('react-medium-image-zoom', () => {
  const React = require('react');
  return function ImageZoom() {
    return React.createElement('div');
  };
});

jest.mock('react-responsive-carousel', () => {
  const React = require('react');
  return {
    Carousel: ({ children }) => React.createElement('div', null, children),
  };
});

jest.mock('react-modal', () => {
  const React = require('react');
  return function Modal({ children }) {
    return React.createElement('div', null, children);
  };
});

import Aikakone from '../../pages/aikakone';
import Kivakaupunki from '../../pages/kivakaupunki';

function wireSetState(instance) {
  instance.setState = jest.fn(function (updater) {
    const nextState = typeof updater === 'function'
      ? updater(this.state, this.props)
      : updater;

    this.state = {
      ...this.state,
      ...nextState,
    };
  });
}

describe('project gallery modal selection', () => {
  test.each([
    ['Aikakone', Aikakone],
    ['Kivakaupunki', Kivakaupunki],
  ])('%s opens the carousel at the clicked thumbnail index', (_name, PageComponent) => {
    const page = new PageComponent();
    wireSetState(page);

    page.toggleModal(3);

    expect(page.setState).toHaveBeenCalledTimes(1);
    expect(page.state.modalIsOpen).toBe(true);
    expect(page.state.selectedSlideIndex).toBe(3);
  });

  test.each([
    ['Aikakone', Aikakone],
    ['Kivakaupunki', Kivakaupunki],
  ])('%s preserves the selected carousel index when closing from the modal backdrop', (_name, PageComponent) => {
    const page = new PageComponent();
    page.state.modalIsOpen = true;
    page.state.selectedSlideIndex = 2;
    wireSetState(page);

    page.toggleModal({ type: 'click' });

    expect(page.setState).toHaveBeenCalledTimes(1);
    expect(page.state.modalIsOpen).toBe(false);
    expect(page.state.selectedSlideIndex).toBe(2);
  });
});
