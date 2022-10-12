/**
 * assertEqual()
 *
 * Takes in 2 values and prints a message to the console if they are equal or false otherwise
 *
 * @since 1.0.0
 * @param {actual} any primitive data type - string, boolean, number, undefined, null, bigint, symbol
 * @param {expected} any primitive data type
 * @returns {undefined} Used for its side-effects prints message to the console
 */
const assertEqual = function(actual, expected) {
  const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log((actual === expected) ? passMessage : failMessage);
};

module.exports = assertEqual;