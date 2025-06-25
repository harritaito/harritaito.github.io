import ProjectIcon from '../ProjectIcon';
import Modal from 'react-modal';
import React from 'react';

jest.mock('react-modal', () => ({ setAppElement: jest.fn() }));

describe('ProjectIcon modal handlers', () => {
  beforeEach(() => {
    document.body.style.overflow = 'auto';
  });

  test('showModal opens modal and locks body scroll', () => {
    const icon = new ProjectIcon({
      title: 'Test',
      description: <span>desc</span>,
      link: '/',
      svg: ''
    });
    icon.state = { modalOpen: false };
    icon.setState = jest.fn(function(state){ this.state = { ...this.state, ...state }; });
    icon.showModal();
    expect(icon.setState).toHaveBeenCalledWith({ modalOpen: true });
    expect(document.body.style.overflow).toBe('hidden');
    expect(Modal.setAppElement).toHaveBeenCalledWith('body');
  });

  test('hideModal closes modal and restores body scroll', () => {
    const icon = new ProjectIcon({
      title: 'Test',
      description: <span>desc</span>,
      link: '/',
      svg: ''
    });
    icon.state = { modalOpen: true };
    icon.setState = jest.fn(function(state){ this.state = { ...this.state, ...state }; });
    document.body.style.overflow = 'hidden';
    icon.hideModal();
    expect(icon.setState).toHaveBeenCalledWith({ modalOpen: false });
    expect(document.body.style.overflow).toBe('auto');
  });
});
