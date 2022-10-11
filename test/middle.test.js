const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test cases - Examples
console.log("==========================")
console.log("\nNot an array: ");
// console.log(middle('test'));
console.log(assertEqual(middle('test'), undefined, true));
console.log(assertEqual(middle(true), undefined, true));
console.log(assertEqual(middle(100), undefined, true));
console.log(assertEqual(middle(NaN), undefined, true));
console.log(assertEqual(middle({ test: "test"}), undefined, true));

console.log("\nEmpty array should return an empty array: ");
console.log(assertEqual(middle([]), undefined, true));

console.log("\nArray with 1 item should return an empty array: ");
assertArraysEqual(middle([0]), [], true);

console.log("\nArray with 2 items should return an empty array: ");
assertArraysEqual(middle([1,0]), [], true);

console.log("\nArray with even # of items should return middle 2 items as array: ");
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3], true); // Expected [2, 3]

console.log("\nArray with odd # of items should return a singe item as array: ");
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4], true); // expected [4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5], true); // expected [5]

console.log("\nFor arrays with one or two elements, there is no middle. Return an empty array.");
assertArraysEqual(middle([1]), [], true);
assertArraysEqual(middle([1, 2]), [], true);

// For arrays with odd number of elements, an array containing a single middle element should be returned.
assertArraysEqual(middle([1, 2, 3]), [2], true); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3], true); // => [3]

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// Test assertions for the various scenarios with middle
console.log("\nEven array should return 2 items:");
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4], true);
console.log("\nOdd array should return a single item:");
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

// Test: array with 2 items should return empty array or length of 0
console.log("\nArray with 2 items should return empty array:");
assertEqual(middle([1, 2]).length, [].length); // true 0 !== 0