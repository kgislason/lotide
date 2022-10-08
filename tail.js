const assertEqual = require('./assertEqual');

/**
 * Tail Function
 * Description: every element except the head (first element) of the array.
 */

// const assertEqual = function(actual, expected) {
//   const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
//   const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

//   console.log((actual === expected) ? passMessage : failMessage);
// };

// Define Tail Function that returns an array minus the first element at index 0
const tail = function(array) {
  if (!Array.isArray(array) || !array.length) {
    return;
  }

  return array.slice(1);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
