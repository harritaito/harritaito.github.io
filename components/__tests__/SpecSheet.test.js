import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import SpecSheet from "../SpecSheet";

const PANEL_HEADINGS = ["States", "Validation", "Responsive", "Accessibility"];

describe("SpecSheet", () => {
  test("renders every spec panel", () => {
    const html = renderToStaticMarkup(<SpecSheet />);
    PANEL_HEADINGS.forEach((heading) => {
      expect(html).toContain(heading);
    });
  });

  test("exposes an accessible label", () => {
    const html = renderToStaticMarkup(<SpecSheet />);
    expect(html).toContain('aria-label="Example of a developer-ready spec"');
  });

  test("labels the example as illustrative", () => {
    const html = renderToStaticMarkup(<SpecSheet />);
    expect(html).toContain("Illustrative example");
  });

  test("includes the engineering clarification questions", () => {
    const html = renderToStaticMarkup(<SpecSheet />);
    expect(html).toContain("Logged for engineering before the build starts");
    expect(html).toContain("What does the API return on partial failure?");
  });
});
