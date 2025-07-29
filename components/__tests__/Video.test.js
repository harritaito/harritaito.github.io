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
});
