const assertArraysEqual = require('./assertArraysEqual');

/**
 * Function: tankeUntil
 *
 * Returns a slice of the array with elements taken from the beginning
 */

// take in two parameters:
// 1. array to work with
// 2. callback or predicate
//   a. callback should only be provided one value: The item in the array
const takeUntil = function(array, callback) {
  const indexEnd = array.findIndex(callback);
  return array.slice(0, indexEnd);
};

// Test Data
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

// Expected Output
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

// Example Function Calls
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log('---');
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Tests
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);