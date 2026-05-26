/** @jest-environment jsdom */

import React, { act } from 'react';
import { createRoot } from 'react-dom/client';

import ThemeToggle from '../ThemeToggle';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

describe('ThemeToggle', () => {
  const originalMatchMedia = window.matchMedia;
  let container;
  let root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    document.documentElement.dataset.theme = 'light';
    document.documentElement.style.colorScheme = 'light';
    document.body.dataset.theme = 'light';
    document.body.style.colorScheme = 'light';
    window.localStorage.clear();
  });

  afterEach(() => {
    if (root) {
      act(() => {
        root.unmount();
      });
    }

    container.remove();
    window.matchMedia = originalMatchMedia;
    document.documentElement.dataset.theme = 'light';
    document.documentElement.style.colorScheme = 'light';
    document.body.dataset.theme = 'light';
    document.body.style.colorScheme = 'light';
  });

  function renderToggle() {
    root = createRoot(container);

    act(() => {
      root.render(<ThemeToggle />);
    });

    return container.querySelector('button');
  }

  test('renders the current theme label from the document theme', () => {
    document.documentElement.dataset.theme = 'dark';

    const button = renderToggle();

    expect(button.getAttribute('aria-label')).toBe('Switch to light mode');
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(button.textContent).toContain('Dark mode');
  });

  test('persists a clicked theme and updates the root document', () => {
    const button = renderToggle();

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(document.documentElement.style.colorScheme).toBe('dark');
    expect(document.body.dataset.theme).toBe('dark');
    expect(document.body.style.colorScheme).toBe('dark');
    expect(window.localStorage.getItem('theme')).toBe('dark');
    expect(button.getAttribute('aria-pressed')).toBe('true');
  });

  test('follows the system preference when no stored theme exists', () => {
    delete document.documentElement.dataset.theme;

    const listeners = {};

    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: true,
      addEventListener: jest.fn((event, handler) => {
        listeners[event] = handler;
      }),
      removeEventListener: jest.fn(),
    }));

    renderToggle();

    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(document.body.dataset.theme).toBe('dark');
    expect(window.matchMedia).toHaveBeenCalledWith('(prefers-color-scheme: dark)');

    act(() => {
      listeners.change({ matches: false });
    });

    expect(document.documentElement.dataset.theme).toBe('light');
    expect(document.body.dataset.theme).toBe('light');
  });

  test('keeps a stored preference ahead of system changes', () => {
    window.localStorage.setItem('theme', 'dark');

    const listeners = {};
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: false,
      addEventListener: jest.fn((event, handler) => {
        listeners[event] = handler;
      }),
      removeEventListener: jest.fn(),
    }));

    renderToggle();

    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(document.body.dataset.theme).toBe('dark');

    act(() => {
      listeners.change({ matches: false });
    });

    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(document.body.dataset.theme).toBe('dark');
  });
});
