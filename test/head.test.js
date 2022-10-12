const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("Should return the first element in the array: 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("Should return '5' got ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it('Should return "Hello" got ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("Should return undefined for empty array []: An empty array Should yield undefined as its head", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("Should return 0 for [0]: An array with only one element should still yield that one element as its head", () => {
    assert.strictEqual(head([0]), 0);
  });

  it("Should return null for [null, 0, 1]),", () => {
    assert.strictEqual(head([null, 0, 1]), null);
  });
});