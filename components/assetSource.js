export function resolveAssetSrc(asset) {
  if (typeof asset === 'string') {
    return asset;
  }

  if (asset && typeof asset.src === 'string') {
    return asset.src;
  }

  return asset;
}

export function resolveAssetWidth(asset) {
  return asset && typeof asset.width === 'number' ? asset.width : undefined;
}

export function resolveAssetHeight(asset) {
  return asset && typeof asset.height === 'number' ? asset.height : undefined;
}
