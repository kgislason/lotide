const assertEqual = function(actual, expected) {
  const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log((actual === expected) ? passMessage : failMessage);
};

const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (actual, expected) => {
  const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  console.log((eqArrays(actual, expected) === true) ? passMessage : failMessage);
};

/**
 * Function: without
 *
 * Description: returns a new array with only those elements from `source` that are not present in the `itemsToRemove` array.
 *
 * - `source` is an array
 * - `itemsToRemove is an array
 *
 */

const without = (source, itemsToRemove) => {
  let newArray = [];
  
  for (let i = 0; i < source.length; i += itemsToRemove.length) {
    for (let item of itemsToRemove) {
      if (source[i] !== item) {
        newArray.push(source[i]);
      }
    }
  }
  console.log(newArray);
  return newArray;
};

// Test Cases
without([1, 2, 3], [1]); // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// Ensure the original array is not being overwritten
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
