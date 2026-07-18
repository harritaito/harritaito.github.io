import { createCloudShape, seededRandom } from "../WritingCloudBackground";

describe("WritingCloudBackground", () => {
  test("seededRandom is deterministic", () => {
    const first = seededRandom("writing");
    const second = seededRandom("writing");

    expect(Array.from({ length: 5 }, first)).toEqual(Array.from({ length: 5 }, second));
    expect(Array.from({ length: 5 }, seededRandom("writing"))).not.toEqual(
      Array.from({ length: 5 }, seededRandom("other"))
    );
  });

  test("createCloudShape creates drawable puffs and facets", () => {
    const shape = createCloudShape(seededRandom(42), 800, 240, 0.82);

    expect(shape.puffs.length).toBeGreaterThan(25);
    expect(shape.facets.length).toBeGreaterThan(15);
    expect(shape.puffs.every((puff) => puff.length >= 6)).toBe(true);
    expect(shape.facets.every((facet) => facet.points.length >= 3)).toBe(true);
  });
});
