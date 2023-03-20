import { expect, describe, it, test } from "vitest";
import { CosineSimilarityCalculator } from "./CosineSimilarityCalculator";

// The two tests marked with concurrent will be run in parallel
describe("CosineSimilarityCalculator", () => {
  it(`test CosineSimilarityCalculator`, async () => {
    const similarityCalculator = new CosineSimilarityCalculator();
    const testCases: { va: number[]; vb: number[]; expected: number }[] = [
      {
        va: [1, 2, 3],
        vb: [0, -1, 1],
        expected: 0.1889822365046136,
      },
      {
        va: [1, 2, 3],
        vb: [1, 2, 3],
        expected: 1.0,
      },
      {
        va: [1, 2, 3],
        vb: [1, 2, 1],
        expected: 0.87287156,
      },
    ];
    testCases.forEach((tc) => {
      expect(similarityCalculator.similarity(tc.va, tc.vb)).toBeCloseTo(
        tc.expected,
        5
      );
    });
  });
});
