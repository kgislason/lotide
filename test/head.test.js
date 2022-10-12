const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("Should return the first element in the array: 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("should return '5' got ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it('should return "Hello" got ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("should return undefined for empty array []: An empty array should yield undefined as its head", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("should return 0 for [0]: An array with only one element should still yield that one element as its head", () => {
    assert.strictEqual(head([0]), 0);
  });

  it("should return null for [null, 0, 1]),", () => {
    assert.strictEqual(head([null, 0, 1]), null);
  });
});