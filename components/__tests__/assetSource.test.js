import { resolveAssetSrc } from '../assetSource';

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
