import React, { useEffect, useRef } from "react";

const DEFAULTS = {
  pixelRatio: 2,
  speed: 0.38,
  opacity: 0.42,
  seed: "writing-page-clouds",
};

function hashSeed(seed) {
  if (typeof seed === "number" && Number.isFinite(seed)) return seed >>> 0;
  const text = String(seed ?? "writing-page-clouds");
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function seededRandom(seed) {
  let state = hashSeed(seed);
  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

const range = (random, min, max) => min + (max - min) * random();

function polygon(random, cx, cy, rx, ry, sides) {
  const count = Math.max(6, Math.round(sides));
  return Array.from({ length: count }, (_, index) => {
    const angle = -Math.PI / 2 + (index / count) * Math.PI * 2;
    const jitter = range(random, 0.92, 1.07);
    return {
      x: cx + Math.cos(angle) * rx * jitter,
      y: cy + Math.sin(angle) * ry * jitter,
    };
  });
}

export function createCloudShape(random, width, height, depth = 1) {
  const puffs = [];
  const facets = [];
  const addPuffs = (count, position, radii, sides) => {
    for (let index = 0; index < count; index += 1) {
      const progress = index / Math.max(1, count - 1);
      const [cx, cy] = position(progress);
      puffs.push(polygon(random, cx, cy, ...radii(), range(random, ...sides)));
    }
  };

  addPuffs(
    Math.floor(range(random, 12, 18)),
    (progress) => [
      width * (-0.02 + progress * 1.04) + range(random, -width * 0.035, width * 0.035),
      height * range(random, 0.55, 0.74),
    ],
    () => [width * range(random, 0.07, 0.13), height * range(random, 0.13, 0.23)],
    [10, 15]
  );
  addPuffs(
    Math.floor(range(random, 9, 14)),
    (progress) => [
      width * (0.12 + progress * 0.76) + range(random, -width * 0.045, width * 0.045),
      height * range(random, 0.24, 0.5) - Math.sin(progress * Math.PI) * height * range(random, 0.08, 0.2),
    ],
    () => [width * range(random, 0.06, 0.13), height * range(random, 0.12, 0.22)],
    [10, 16]
  );
  addPuffs(
    Math.floor(range(random, 8, 12)),
    (progress) => [
      width * (0.1 + progress * 0.8) + range(random, -width * 0.045, width * 0.045),
      height * range(random, 0.12, 0.3),
    ],
    () => [width * range(random, 0.06, 0.14), height * range(random, 0.07, 0.14)],
    [9, 14]
  );

  const facetCount = Math.round(range(random, 22, 38) * depth);
  for (let index = 0; index < facetCount; index += 1) {
    const cx = range(random, -width * 0.04, width * 1.04);
    const cy = range(random, height * 0.08, height * 0.9);
    facets.push({
      points: polygon(random, cx, cy, width * range(random, 0.018, 0.055), height * range(random, 0.025, 0.08), random() > 0.82 ? 4 : 3),
      shade: cy / height,
      cool: cy > height * range(random, 0.52, 0.72),
      hueOffset: range(random, -7, 8),
      lightOffset: range(random, -4, 5),
      alpha: range(random, 0.035, 0.11),
    });
  }

  return { puffs, facets };
}

function tracePolygon(ctx, points, offsetX, offsetY) {
  if (!points.length) return;
  ctx.moveTo(offsetX + points[0].x, offsetY + points[0].y);
  for (let index = 1; index < points.length; index += 1) {
    ctx.lineTo(offsetX + points[index].x, offsetY + points[index].y);
  }
  ctx.closePath();
}

function traceCloud(ctx, cloud, x, y) {
  ctx.beginPath();
  cloud.puffs.forEach((puff) => tracePolygon(ctx, puff, x, y));
}

function drawCloud(ctx, cloud, x, y, opacity) {
  const gradient = ctx.createLinearGradient(x, y, x, y + cloud.height);
  gradient.addColorStop(0, `hsla(${cloud.hue}, 62%, 98%, ${cloud.opacity * opacity})`);
  gradient.addColorStop(0.52, `hsla(${cloud.hue - 2}, 48%, 91%, ${cloud.opacity * opacity})`);
  gradient.addColorStop(1, `hsla(${cloud.hue - 10}, 36%, 76%, ${cloud.opacity * opacity})`);

  ctx.save();
  ctx.shadowColor = `rgba(86, 58, 38, ${0.035 + cloud.depth * 0.035})`;
  ctx.shadowBlur = 10 + cloud.depth * 14;
  ctx.shadowOffsetY = 6 + cloud.depth * 7;
  traceCloud(ctx, cloud, x, y);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.clip();

  cloud.facets.forEach((facet) => {
    const lightness = Math.max(74, Math.min(98, 96 - facet.shade * 16 + facet.lightOffset));
    const hue = facet.cool ? 203 + facet.hueOffset : cloud.hue + facet.hueOffset;
    ctx.beginPath();
    tracePolygon(ctx, facet.points, x, y);
    ctx.fillStyle = `hsla(${hue}, ${facet.cool ? 22 : 34}%, ${lightness}%, ${facet.alpha})`;
    ctx.fill();
  });

  const veil = ctx.createLinearGradient(x, y, x, y + cloud.height);
  veil.addColorStop(0, "rgba(255, 255, 251, 0.14)");
  veil.addColorStop(1, "rgba(246, 232, 208, 0.04)");
  ctx.fillStyle = veil;
  ctx.fillRect(x - cloud.width * 0.08, y - cloud.height * 0.08, cloud.width * 1.16, cloud.height * 1.16);
  ctx.restore();
}

function createClouds(width, height, seed) {
  const random = seededRandom(seed);
  const layers = [
    { depth: 0.52, width: [0.46, 0.72], y: [0.02, 0.3], speed: [2.4, 4.8], count: 3 },
    { depth: 0.82, width: [0.56, 0.9], y: [0.22, 0.68], speed: [3.4, 6.4], count: 4 },
    { depth: 1, width: [0.7, 1.05], y: [0.52, 0.92], speed: [4.4, 7.4], count: 4 },
  ];

  return layers
    .flatMap((layer, layerIndex) =>
      Array.from({ length: Math.ceil(width / (620 - layerIndex * 70)) + layer.count }, (_, index) => {
        const cloudWidth = Math.min(width * 1.08 + 180, Math.max(260, width * range(random, ...layer.width)));
        const cloudHeight = cloudWidth * range(random, 0.17, 0.29);
        const progress = index / Math.max(1, Math.ceil(width / (620 - layerIndex * 70)) + layer.count - 1);
        return {
          ...createCloudShape(random, cloudWidth, cloudHeight, layer.depth),
          baseX: -cloudWidth * 0.72 + progress * (width + cloudWidth * 1.36) + range(random, -cloudWidth * 0.16, cloudWidth * 0.16),
          y: height * range(random, ...layer.y) - cloudHeight * range(random, 0.08, 0.2),
          width: cloudWidth,
          height: cloudHeight,
          depth: layer.depth,
          direction: (index + layerIndex) % 2 === 0 ? 1 : -1,
          speed: range(random, ...layer.speed),
          opacity: range(random, 0.48, 0.72),
          hue: range(random, 34, 45),
          phase: range(random, 0, Math.PI * 2),
          floatAmplitude: range(random, 1.5, 5.5) * layer.depth,
          floatSpeed: range(random, 0.55, 1.1),
          gap: cloudWidth * range(random, 0.04, 0.18),
        };
      })
    )
    .sort((a, b) => a.depth - b.depth);
}

function drawBackground(ctx, width, height, clouds, time, options, reducedMotion) {
  ctx.clearRect(0, 0, width, height);
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "rgba(250, 250, 250, 0.96)");
  gradient.addColorStop(0.42, "rgba(248, 242, 232, 0.9)");
  gradient.addColorStop(1, "rgba(237, 249, 242, 0.82)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  clouds.forEach((cloud) => {
    const motion = reducedMotion ? 0 : time * 0.001 * cloud.speed * cloud.direction * options.speed;
    const span = width + cloud.width + cloud.gap;
    const x = ((cloud.baseX + motion + cloud.width) % span + span) % span - cloud.width;
    const bob = reducedMotion ? 0 : Math.sin(time * 0.00032 * cloud.floatSpeed + cloud.phase) * cloud.floatAmplitude;
    const positions = [x];
    if (x > 0) positions.push(x - span);
    if (x + cloud.width < width) positions.push(x + span);
    positions.forEach((position) => drawCloud(ctx, cloud, position, cloud.y + bob, options.opacity));
  });

  const vignette = ctx.createRadialGradient(width * 0.46, height * 0.22, 0, width * 0.46, height * 0.22, Math.max(width, height) * 0.82);
  vignette.addColorStop(0, "rgba(255, 255, 252, 0.22)");
  vignette.addColorStop(0.72, "rgba(139, 200, 246, 0.055)");
  vignette.addColorStop(1, "rgba(105, 106, 109, 0.11)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, width, height);
}

function useCloudCanvas(canvasRef, options = DEFAULTS) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext?.("2d");
    if (!canvas || !ctx) return undefined;

    const settings = { ...DEFAULTS, ...options };
    const mediaQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let clouds = [];
    let width = 1;
    let height = 1;

    const resize = () => {
      width = canvas.clientWidth || window.innerWidth || 1;
      height = canvas.clientHeight || window.innerHeight || 1;
      const dpr = Math.min(window.devicePixelRatio || 1, settings.pixelRatio);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      clouds = createClouds(width, height, settings.seed);
      drawBackground(ctx, width, height, clouds, performance.now(), settings, mediaQuery?.matches ?? false);
    };

    const tick = (time) => {
      drawBackground(ctx, width, height, clouds, time, settings, mediaQuery?.matches ?? false);
      if (!(mediaQuery?.matches ?? false)) frame = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!(mediaQuery?.matches ?? false)) frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
      ctx.clearRect(0, 0, width, height);
    };
  }, [canvasRef, options]);
}

export default function WritingCloudBackground() {
  const canvasRef = useRef(null);
  useCloudCanvas(canvasRef);

  return <canvas ref={canvasRef} className="writing-cloud-background" aria-hidden="true" />;
}
