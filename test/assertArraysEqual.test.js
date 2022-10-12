const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

console.log("Should return Assertion Passed: ");
assertEqual([1, 2, 3].length, [1, 2, 3].length); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
console.log("Should return Assertion Failed: ");
assertArraysEqual([3, 2, 1], [1, 2, 3]); // => should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2]); // => should FAIL
