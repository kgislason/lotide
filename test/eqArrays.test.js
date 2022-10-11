const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

// Test Cases
console.log("if another type is entered that is not an array, should return undefined: ")
console.log(eqArrays('test', 'test'));
console.log("Should return true: ");
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log("Should return false, arrays are in reverse order: ");
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log("Should return true - 2 arrays of strings that are the same: ");
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log("Should return false if a value is a string and the other is a number: ");
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// Use assertEqual to write test cases for various scenarios.
assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => should PASS
assertArraysEqual([3, 2, 1], [1, 2, 3], false); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2], false); // => should PASS
assertArraysEqual([1, 2, [3]], [1, [2], 3], false);
assertArraysEqual([1, 2, 3, 4, [5, 6, [7]]], [1, 2, 3, 4, [5, 6, [7]]]); // => should pass
assertArraysEqual([3, [4], [5, 6, [7]]], [[3, 4], 5, [6, [7]]]); // => should fail