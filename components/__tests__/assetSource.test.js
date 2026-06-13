import { resolveAssetHeight, resolveAssetSrc, resolveAssetWidth } from '../assetSource';

describe('resolveAssetSrc', () => {
  test('keeps string asset paths unchanged', () => {
    expect(resolveAssetSrc('/static/image.svg')).toBe('/static/image.svg');
  });

  test('unwraps Next static image objects to their emitted URL', () => {
    expect(resolveAssetSrc({
      src: '/_next/static/media/arrow.svg',
      width: 15,
      height: 10
    })).toBe('/_next/static/media/arrow.svg');
  });
});


describe('asset dimensions', () => {
  const image = {
    src: '/_next/static/media/photo.jpg',
    width: 1200,
    height: 800
  };

  test('returns dimensions from Next static image objects', () => {
    expect(resolveAssetWidth(image)).toBe(1200);
    expect(resolveAssetHeight(image)).toBe(800);
  });

  test('omits dimensions for string assets', () => {
    expect(resolveAssetWidth('/static/image.svg')).toBeUndefined();
    expect(resolveAssetHeight('/static/image.svg')).toBeUndefined();
  });
});
