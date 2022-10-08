const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  // Round down to whole number; index starts at 0 so substract 1
  let middleCalc = Math.round(array.length / 2) - 1;

  if (!Array.isArray(array) || array.length === 0) {
    return;
  } else if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(middleCalc, middleCalc + 2);
  } else if (array.length % 2 !== 0) {
    return array.slice(middleCalc, middleCalc + 1);
  }
};

// Test cases
console.log("\nNot an array: ");
console.log(middle('test'));
console.log(middle(true));
console.log(middle(100));
console.log(middle(NaN));
console.log(middle({ test: "test"}));

console.log("\nEmpty array: ");
console.log(middle([]));

console.log("\nArray with 1 item: ");
console.log(middle([0]));

console.log("\nArray with 2 items: ");
console.log(middle([0, 1]));

console.log("\nArray with even # of items: ");
console.log(middle([1, 2, 3, 4])); // Expected [2, 3]

console.log("\nArray with odd # of items: ");
console.log(middle([1, 2, 3, 4, 5, 6, 7])); // expected [4]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9])); // expected [5]
console.log("\n");
// For arrays with one or two elements, there is no middle. Return an empty array.
middle([1]); // => []
middle([1, 2]); // => []

// For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

// Test assertions for the various scenarios with middle
// Even array should return 2 items
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // true

// Odd array should return a single item
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

// Test: array with 2 items should return empty array or length of 0
assertEqual(middle([1, 2]).length, [].length); // true 0 !== 0