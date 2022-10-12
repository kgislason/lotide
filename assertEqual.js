/**
 *
 * assertEqual.js
 *
 * A function that takes in 2 values and returns true if they are equal or false otherwise
 *
 */
const assertEqual = function(actual, expected) {
  const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log((actual === expected) ? passMessage : failMessage);
};

module.exports = assertEqual;