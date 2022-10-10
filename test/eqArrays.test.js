const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

// Test Cases
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// Use assertEqual to write test cases for various scenarios.
assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => should PASS
assertArraysEqual([3, 2, 1], [1, 2, 3], false); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2], false); // => should PASS
assertArraysEqual([1, 2, [3]], [1, [2], 3], false);
assertArraysEqual([1, 2, 3, 4, [5, 6, [7]]], [1, 2, 3, 4, [5, 6, [7]]]); // => should pass
assertArraysEqual([3, [4], [5, 6, [7]]], [[3, 4], 5, [6, [7]]]); // => should fail