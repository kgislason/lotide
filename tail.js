/**
 * Tail Function
 * Description: every element except the head (first element) of the array.
 */

// FUNCTION IMPLEMENTATION - Assert Equal
const assertEqual = function(actual, expected) {
  let result = (actual === expected) ? true : false;
  const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  return result ? passMessage : failMessage;
};

// Define Tail Fucntion that returns an array minus the first element at index 0
const tail = (array) => {
  if (array.length) {
    return array.slice(1);
  } else {
    // Return a new array
    return undefined;
  }
};

// Test Cases

// Create some arrays to pass to the tail function
const originalArray = ["Hello", "Lighthouse", "Labs"];
const originalArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const originalArray2 = [0, "Kristy", "Gislason", NaN];
const originalArray3 = ["test"];

// console.log("Test 1: ");
// console.log("New array:");
// console.log(tail(originalArray));
// console.log("Original array:");
// console.log(originalArray);

console.log("\nTest: comparing original and new array from tail()");
console.log(originalArray1);
console.log(tail(originalArray1));

console.log("\nTest: check that original array has one more value than after passing inside tail function; the removed item should be the first one from the original array");
console.log(originalArray2);
console.log(tail(originalArray2));

console.log("\n Test: Description: 1 Item Array to Empty Array");
console.log(originalArray3);
console.log(tail(originalArray3));

// Check if the original array has been modified
console.log("\nTest: the original array had 3 items and should still have 3 items - unmodified after passed to tail function");
console.log(assertEqual(originalArray.length, 3));

// the value at index 1 of the original array should be equal to the new array's value at index 0 (since it removes the first item in the array)
console.log("\nTest: The original array and new array should have equal values at index 0 and 1");
console.log(assertEqual(originalArray[1], tail(originalArray)[0]));
console.log(assertEqual(originalArray[2], tail(originalArray)[1]));
console.log(assertEqual(originalArray[2], tail(originalArray)[1]));
console.log(assertEqual(originalArray[3], tail(originalArray)[2]));

// Lets create a function to llop through an array and check if items are equal
const assertEqualArray = (array, expected) => {
  if (array.length) {
    for (let i = 0; i < array.length; i++) {
      console.log(assertEqual(array[i], expected));
    }
    return '';
  } else {
    return undefined;
  }
};

console.log("\nTest: loop through array to see if a value in the array matches \"Labs\"");
console.log(assertEqualArray(originalArray, "Labs"));