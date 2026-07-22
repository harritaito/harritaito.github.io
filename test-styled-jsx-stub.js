// Stub for styled-jsx/style in tests. The real JSXStyle sees the fake
// window from test-setup.js, takes its client-side path, and calls
// useLayoutEffect during renderToStaticMarkup, which spams a react-dom-server
// warning. Styles are irrelevant to markup assertions, so render nothing.
module.exports = function JSXStyle() {
  return null;
};

// Mirror JSXStyle.dynamic from styled-jsx: components with dynamic styles
// call it to compute their jsx-* class names.
module.exports.dynamic = function dynamic(info) {
  return info.map(([baseId]) => `jsx-${baseId}`).join(" ");
};
