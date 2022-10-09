const assertEqual = require('../assertEqual');
const assertArraysEqual = require ('../assertArraysEqual');

assertEqual([1, 2, 3].length, [1, 2, 3].length); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([3, 2, 1], [1, 2, 3]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2]); // => should PASS