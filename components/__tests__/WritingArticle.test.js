import { estimateReadingTime } from "../../lib/readingTime";

describe("writing article helpers", () => {
  test("estimates at least one minute for short articles", () => {
    expect(estimateReadingTime("A short note.")).toBe("1 min read");
  });

  test("rounds article reading time up", () => {
    const words = Array.from({ length: 221 }, (_, index) => `word${index}`).join(" ");

    expect(estimateReadingTime(words)).toBe("2 min read");
  });
});
