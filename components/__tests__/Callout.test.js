import Callout from '../Callout';

describe('Callout rendering', () => {
  function renderCallout(props) {
    return new Callout({
      ...Callout.defaultProps,
      ...props
    }).render();
  }

  test('renders accessible media and copy from props', () => {
    const tree = renderCallout({
      image: '/static/research.svg',
      altText: 'Research icon',
      title: 'Research',
      description: 'Field observations and synthesis'
    });
    const imageContainer = tree.props.children[0];
    const image = imageContainer.props.children;
    const heading = tree.props.children[1];
    const description = tree.props.children[2];

    expect(image.props.src).toBe('/static/research.svg');
    expect(image.props.alt).toBe('Research icon');
    expect(heading.props.children).toBe('Research');
    expect(description.props.children).toBe('Field observations and synthesis');
    expect(imageContainer.props.className).toContain('callout-image-container');
    expect(imageContainer.props.className).not.toContain('undefined');
  });

  test('keeps first two-column callouts centered with separate offset classes', () => {
    const tree = renderCallout({
      image: '/static/prototype.svg',
      altText: 'Prototype icon',
      title: 'Prototype',
      description: 'Clickable flow',
      number: 2,
      first: true
    });

    expect(tree.props.className).toContain('col-xs-offset-2');
    expect(tree.props.className).toContain('col-xl-3 col-sm-offset-2');
  });

  test('applies optional image-container class without leaking falsey class names', () => {
    const tree = renderCallout({
      image: '/static/audio.svg',
      altText: 'Audio icon',
      title: 'Audio',
      description: 'Sound feedback',
      className: 'Audio'
    });
    const imageContainer = tree.props.children[0];

    expect(imageContainer.props.className).toContain('callout-image-container Audio');
    expect(imageContainer.props.className).not.toContain('null');
    expect(imageContainer.props.className).not.toContain('undefined');
  });
});
