// Basic DOM mocks for tests running in node environment
if (typeof global.document === 'undefined') {
  global.document = {
    body: { style: { overflow: 'auto' } },
    querySelector: () => null,
    createElement: () => ({ style: {} })
  };
}
if (typeof global.window === 'undefined') {
  global.window = { location: { host: '' } };
}

if (typeof globalThis.performance === 'undefined') {
  const { performance } = require('perf_hooks');
  globalThis.performance = performance;
}

if (typeof global.requestAnimationFrame === 'undefined') {
  global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
  global.cancelAnimationFrame = (id) => clearTimeout(id);
}

// Provide window properties used by react and scheduler
Object.assign(global.window, {
  performance: globalThis.performance,
  requestAnimationFrame: global.requestAnimationFrame,
  cancelAnimationFrame: global.cancelAnimationFrame,
  Date,
  setTimeout,
  clearTimeout
});
