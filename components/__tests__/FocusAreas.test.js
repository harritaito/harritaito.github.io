import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import FocusAreas from "../FocusAreas";

describe("FocusAreas", () => {
  const html = renderToStaticMarkup(<FocusAreas />);

  test("renders every focus area with an anchor id", () => {
    ["systems", "research", "ai-and-data"].forEach((id) => {
      expect(html).toContain(`id="${id}"`);
    });
    ["Systems", "Research", "AI &amp; Data"].forEach((title) => {
      expect(html).toContain(title);
    });
  });

  test("links to the evidence pages for each theme", () => {
    [
      "/direction-setting",
      "/operations-platform",
      "/kivakaupunki",
      "/thesis",
      "/hri-study",
      "/aikakone",
      "/writing",
      "/ai-decision-support",
    ].forEach((href) => {
      expect(html).toContain(`href="${href}"`);
    });
  });

  test("keeps honest status labels on in-progress and concept material", () => {
    expect(html).toContain("Proof today");
    expect(html).toContain("In progress");
    expect(html).toContain("concept shell");
    expect(html).toContain("No shipped AI product is claimed");
  });
});
