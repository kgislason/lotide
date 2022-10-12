const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {

  it('should return true for 2 equal arrays of numbers [1, 2, 3] === [1, 2, 3]', () => {
    const actual = eqArrays([1, 2, 3], [1, 2, 3]);
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it('should return undefined if another type is entered that is not an array', () => {
    const actual = eqArrays(1, 1);
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });

  it('Should return false for arrays of equal length, but are in reverse order: [1, 2, 3] !== [3, 2, 1]', () => {
    const actual = eqArrays([1, 2, 3], [3, 2, 1]);
    const expected = false;
    assert.strictEqual(actual, expected);
  });

  it('Should return true for array of strings that are identical', () => {
    const actual = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it('Should return false if arrays are close to equal, but one value is of different type 3 !== "3"', () => {
    const actual = eqArrays(["1", "2", "3"], ["1", "2", 3]);
    const expected = false;
    assert.strictEqual(actual, expected);
  });

  it('Should return false for nested arrays that are not equal', () => {
    const actual = eqArrays([3, [4], [5, 6, [7]]], [[3, 4], 5, [6, [7]]]);
    const expected = false;
    assert.strictEqual(actual, expected);
  });

  it('Should return true for nested arrays that are equal', () => {
    const actual = eqArrays([3, [4], [5, 6, [7]]], [3, [4], [5, 6, [7]]]);
    const expected = true;
    assert.strictEqual(actual, expected);
  });
});