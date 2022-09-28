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
  let newArray = source;

  // Verify we are working with arrays
  if (!Array.isArray(source) || !Array.isArray(itemsToRemove)) {
    return;
  }

  // Loop through itemsToRemove array
  for (const ri of itemsToRemove) {
    // modify the newArray by filtering out items to remove (ri = remove item)
    // Each loop should build on the a new array that as prev been filtered
    newArray = newArray.filter(element => element !== ri);
  }

  return newArray;

};

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