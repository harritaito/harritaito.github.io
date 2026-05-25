import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Video from '../Video';

describe('Video componentDidUpdate', () => {
  test('plays and stops based on autoplay prop', () => {
    const video = new Video({ autoplay: false, webMsrc: '', mp4src: '' });
    const play = jest.fn();
    const pause = jest.fn();
    video._video = { play, pause };
    video.props = { autoplay: true, webMsrc: '', mp4src: '' };
    video.componentDidUpdate({ autoplay: false });
    expect(play).toHaveBeenCalled();

    video.props = { autoplay: false, webMsrc: '', mp4src: '' };
    video.componentDidUpdate({ autoplay: true });
    expect(pause).toHaveBeenCalled();
  });

  test('does not throw when video ref is missing', () => {
    const video = new Video({ autoplay: false, webMsrc: '', mp4src: '' });
    expect(() => video.playVideo()).not.toThrow();
    expect(() => video.stopVideo()).not.toThrow();
  });
});

describe('Video rendering', () => {
  test('passes controls and autoplay props to video element', () => {
    const markup = renderToStaticMarkup(
      <Video
        autoplay
        controls
        className="vertical-video"
        webMsrc="/demo.webm"
        mp4src="/demo.mp4"
      />
    );

    expect(markup).toContain('controls=""');
    expect(markup).toContain('autoplay=""');
    expect(markup).toContain('preload="metadata"');
  });

  test('uses src as fallback for webm and mp4 sources', () => {
    const markup = renderToStaticMarkup(
      <Video
        src="/hero-video.mp4"
      />
    );

    expect(markup).toContain('src="/hero-video.mp4" type="video/webm"');
    expect(markup).toContain('src="/hero-video.mp4" type="video/mp4"');
    expect(markup).toContain('href="/hero-video.mp4"');
  });
});
