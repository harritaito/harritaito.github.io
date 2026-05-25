import Navbar from '../Navbar';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

jest.mock('next/link', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: ({ href, children }) => React.createElement('a', { href }, children)
  };
});

jest.mock('react-headroom', () => {
  const React = require('react');
  return ({ children }) => React.createElement('div', null, children);
});

jest.mock('../ThemeToggle', () => {
  const React = require('react');
  return () => React.createElement('button', { type: 'button' }, 'Theme');
});

jest.mock('react-inlinesvg', () => {
  const React = require('react');
  return ({ src }) => React.createElement('span', { 'data-src': src });
});

describe('Navbar reading progress', () => {
  const originalDocumentElement = document.documentElement;
  const originalInnerHeight = window.innerHeight;
  const originalScrollY = window.scrollY;
  const originalAddEventListener = window.addEventListener;
  const originalRemoveEventListener = window.removeEventListener;

  afterEach(() => {
    document.documentElement = originalDocumentElement;
    window.innerHeight = originalInnerHeight;
    window.scrollY = originalScrollY;
    window.addEventListener = originalAddEventListener;
    window.removeEventListener = originalRemoveEventListener;
  });

  function createNavbar() {
    const navbar = new Navbar({});
    navbar.setState = jest.fn(function(state) {
      this.state = { ...this.state, ...state };
    });
    return navbar;
  }

  test('calculates progress from scroll position and scrollable height', () => {
    document.documentElement = { scrollHeight: 1200 };
    window.innerHeight = 200;
    window.scrollY = 250;
    const navbar = createNavbar();

    navbar.updateProgress();

    expect(navbar.setState).toHaveBeenCalledWith({ progress: 0.25 });
    expect(navbar.state.progress).toBe(0.25);
  });

  test('uses zero progress when the page is not scrollable', () => {
    document.documentElement = { scrollHeight: 600 };
    window.innerHeight = 600;
    window.scrollY = 300;
    const navbar = createNavbar();

    navbar.updateProgress();

    expect(navbar.setState).toHaveBeenCalledWith({ progress: 0 });
  });

  test('clamps progress to zero when scroll position is negative', () => {
    document.documentElement = { scrollHeight: 1200 };
    window.innerHeight = 200;
    window.scrollY = -25;
    const navbar = createNavbar();

    navbar.updateProgress();

    expect(navbar.setState).toHaveBeenCalledWith({ progress: 0 });
  });

  test('clamps progress to one when scroll position exceeds page height', () => {
    document.documentElement = { scrollHeight: 1200 };
    window.innerHeight = 200;
    window.scrollY = 5000;
    const navbar = createNavbar();

    navbar.updateProgress();

    expect(navbar.setState).toHaveBeenCalledWith({ progress: 1 });
  });

  test('registers and removes progress listeners', () => {
    document.documentElement = { scrollHeight: 1000 };
    window.innerHeight = 500;
    window.scrollY = 0;
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
    const navbar = createNavbar();

    navbar.componentDidMount();
    navbar.componentWillUnmount();

    expect(window.addEventListener).toHaveBeenCalledWith('scroll', navbar.updateProgress);
    expect(window.addEventListener).toHaveBeenCalledWith('resize', navbar.updateProgress);
    expect(window.removeEventListener).toHaveBeenCalledWith('scroll', navbar.updateProgress);
    expect(window.removeEventListener).toHaveBeenCalledWith('resize', navbar.updateProgress);
  });

  test('renders the progress element with scoped class names', () => {
    const markup = renderToStaticMarkup(<Navbar nextProjectLink={null} nextProjectName={null} color="blue" />);

    expect(markup).toMatch(/<progress[^>]*class="[^"]*progress-bar[^"]*blue/);
    expect(markup).toMatch(/class="[^"]*progress-bar-wrap/);
  });
});
