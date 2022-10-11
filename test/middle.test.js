// const assertEqual = require('../assertEqual');
// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// // Test cases - Examples
// console.log("==========================")
// console.log("\nNot an array: ");
// // console.log(middle('test'));
// console.log(assertEqual(middle('test'), undefined, true));
// console.log(assertEqual(middle(true), undefined, true));
// console.log(assertEqual(middle(100), undefined, true));
// console.log(assertEqual(middle(NaN), undefined, true));
// console.log(assertEqual(middle({ test: "test"}), undefined, true));

// console.log("\nEmpty array should return an empty array: ");
// console.log(assertEqual(middle([]), undefined, true));

// console.log("\nArray with 1 item should return an empty array: ");
// assertArraysEqual(middle([0]), [], true);

// console.log("\nArray with 2 items should return an empty array: ");
// assertArraysEqual(middle([1,0]), [], true);

// console.log("\nArray with even # of items should return middle 2 items as array: ");
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3], true); // Expected [2, 3]

// console.log("\nArray with odd # of items should return a singe item as array: ");
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4], true); // expected [4]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5], true); // expected [5]

// console.log("\nFor arrays with one or two elements, there is no middle. Return an empty array.");

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it('should return undefined for middle("string") of non array.', () => {
    const actual = middle("string");
    const expected = undefined;
    assert.deepEqual(actual, expected);
  });

  it('array with 2 items should return empty array', () => {
    const actual = middle(["Yo Yo", "Lighthouse"]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it("Empty array [] should return an empty array []", () => {
    const actual = middle([]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it('array with 1 items should return an empty array', () => {
    const actual = middle(["hello"]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it('should return [3] for middle([1, 2, 3, 4, 5]) where array length is odd', () => {
    const actual = middle([1, 2, 3, 4, 5]);
    const expected = [3];
    assert.deepEqual(actual, expected);
  });

  it('should return [3, 4] for middle([1, 2, 3, 4, 5, 6]) where array length is even', () => {
    const actual = middle([1, 2, 3, 4, 5, 6]);
    const expected = [3, 4];
    assert.deepEqual(actual, expected);
  });

});