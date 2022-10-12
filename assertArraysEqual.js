/**
 * assertArraysEqual()
 *
 * Prints a message to the console if 2 arrays are equal or not
 *
 * @since 1.0.0
 * @param {array} actual - compare 2 arrays actual and expected
 * @param {array} expected
 * @returns {undefined} Used for its side-effects prints message to the console
 */

const eqArrays = require('./eqArrays');
const inspect = require('util').inspect;

const assertArraysEqual = function(actual, expected) {
  const passMessage = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  console.log((eqArrays(actual, expected) === true) ? passMessage : failMessage);
};

module.exports = assertArraysEqual;