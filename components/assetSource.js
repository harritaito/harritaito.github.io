export function resolveAssetSrc(asset) {
  if (typeof asset === 'string') {
    return asset;
  }

  if (asset && typeof asset.src === 'string') {
    return asset.src;
  }

  return asset;
}
