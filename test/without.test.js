// const assertEqual = require('../assertEqual');
// const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const without = require('../without');

// Test Data
// const array1 = ["1", "2", "3"];
// const array2 = [1, 2, 3, 1, 2, 3, 1, 2, 3];
// const words = ["hello", "world", "lighthouse"];

// // Test Cases

// // Does it work when there are multiple values that are the same
// console.log(without(array2, [1, 2])); // => [2, 3]
// assertEqual(without(array2, [1, 2]).length, [3, 3, 3].length);
// assertArraysEqual(without(array1, [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

// // Make sure the original array was not altered by the without function
// assertArraysEqual(array1, ["1", "2", "3"]); // PAss
// assertArraysEqual(without(array1, ["1", "2"]), ["3"]); // PASS
// assertArraysEqual(without(array1, ["1", "2"]), ["1", "3"]); // FAIL
// assertArraysEqual(words, ["hello", "world", "lighthouse"]); // PASS
// assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]); // PASS


describe("#without", () => {
  it('Should return ["3"] for ["1", "2", "3"]', () => {
    const actual = without(["1", "2", "3"], ["1", "2"]);
    const expected = ["3"];
    assert.deepEqual(actual, expected);
  });

  it("Empty array [] should return an empty  []", () => {
    const actual = without([], []);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it('Array with only 1 element ["hello"] should return an empty array [] for its without', () => {
    const actual = without(["hello"], ["hello"]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it('should return undefined if not an array', () => {
    const actual = without("hello", "h");
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });

  it('should return empty array when entire array is filtered out', () => {
    const actual = without(["hello", "world", "lighthouse"], ["hello", "world", "lighthouse"]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

});