import CraftDetail from "../design-system/CraftDetail";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

describe("CraftDetail", () => {
  const markup = renderToStaticMarkup(
    <CraftDetail
      kind="Empty state"
      title="A map with no feedback yet"
      issue="A blank map reads as a broken service."
      before="No results found."
      after="No reports on this route yet."
      why="Turns a dead end into an instruction."
    />
  );

  test("labels the module as a concept example", () => {
    expect(markup).toContain("Concept example");
    expect(markup).toContain("Empty state");
  });

  test("renders both copy versions with their labels", () => {
    expect(markup).toContain("Typical version");
    expect(markup).toContain("Revised");
    expect(markup).toContain("No results found.");
    expect(markup).toContain("No reports on this route yet.");
  });

  test("explains issue and rationale", () => {
    expect(markup).toContain("A blank map reads as a broken service.");
    expect(markup).toContain("Why it matters:");
    expect(markup).toContain("Turns a dead end into an instruction.");
  });
});
