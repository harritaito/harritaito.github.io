import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import HeroLineArt from "../HeroLineArt";

describe("HeroLineArt", () => {
  test("renders decorative svg hidden from assistive tech", () => {
    const html = renderToStaticMarkup(<HeroLineArt />);
    expect(html).toContain('aria-hidden="true"');
    expect(html).toContain("<svg");
  });

  test("starts with the linework fully undrawn", () => {
    const html = renderToStaticMarkup(<HeroLineArt />);
    expect(html).toContain("stroke-dashoffset:1");
  });
});
