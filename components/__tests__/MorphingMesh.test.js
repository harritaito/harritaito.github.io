jest.mock('three', () => ({
  Scene: jest.fn(() => ({
    add: jest.fn(),
  })),
  PerspectiveCamera: jest.fn(() => ({
    position: {},
  })),
  WebGLRenderer: jest.fn(() => {
    throw new Error('Error creating WebGL context.');
  }),
}));

import * as THREE from 'three';
import MorphingMesh from '../MorphingMesh';

describe('MorphingMesh WebGL fallback', () => {
  const originalCreateElement = document.createElement;
  const originalAddEventListener = window.addEventListener;
  const originalMatchMedia = window.matchMedia;

  afterEach(() => {
    document.createElement = originalCreateElement;
    window.addEventListener = originalAddEventListener;
    window.matchMedia = originalMatchMedia;
    THREE.WebGLRenderer.mockClear();
  });

  test('does not crash when Three.js cannot create a renderer', () => {
    const canvas = {
      getContext: jest.fn(() => ({})),
    };
    document.createElement = jest.fn(() => canvas);
    window.addEventListener = jest.fn();
    window.matchMedia = jest.fn(() => ({ matches: false }));
    const container = {
      clientWidth: 320,
      clientHeight: 180,
      appendChild: jest.fn(),
    };
    const mesh = new MorphingMesh({});
    mesh.container.current = container;

    expect(() => mesh.componentDidMount()).not.toThrow();
    expect(THREE.WebGLRenderer).toHaveBeenCalledWith({
      canvas,
      alpha: true,
      antialias: true,
    });
    expect(container.appendChild).not.toHaveBeenCalled();
    expect(window.addEventListener).not.toHaveBeenCalled();
  });
});
