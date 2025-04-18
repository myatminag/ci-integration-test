import test from "node:test";
import assert from "node:assert";

test("test integer addition", async (t) => {
  assert.strictEqual(1 + 1, 2, "1 + 1 should equal 2");
});

test("test string addition", async (t) => {
  assert.strictEqual(
    "1" + "1",
    "11",
    "Concatenation of '1' and '1' does not equal 2"
  );
});
