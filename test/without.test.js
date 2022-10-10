const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

// Test Data
const array1 = ["1", "2", "3"];
const array2 = [1, 2, 3, 1, 2, 3, 1, 2, 3];
const words = ["hello", "world", "lighthouse"];

// Test Cases

// Does it work when there are multiple values that are the same
console.log(without(array2, [1, 2])); // => [2, 3]
assertEqual(without(array2, [1, 2]).length, [3, 3, 3].length);
assertArraysEqual(without(array1, [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

// Make sure the original array was not altered by the without function
assertArraysEqual(array1, ["1", "2", "3"]); // PAss
assertArraysEqual(without(array1, ["1", "2"]), ["3"]); // PASS
assertArraysEqual(without(array1, ["1", "2"]), ["1", "3"]); // FAIL
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // PASS
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]); // PASS