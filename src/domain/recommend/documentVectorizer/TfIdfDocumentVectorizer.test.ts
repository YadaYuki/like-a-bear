import { describe, assert, it } from "vitest";

// The two tests marked with concurrent will be run in parallel
describe("suite", () => {
  it("serial test", async () => {
    assert.equal(1 + 1, 2);
  });
});
