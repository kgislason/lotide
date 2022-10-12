/**
 * eqObjects()
 *
 * Takes in 2 objects and returns true if they are equal, false otherwise
 *
 * @since 1.0.0
 * @param {object} actual
 * @param {object} expected
 * @returns {boolean} true if equal, false otherwise
 */
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const passMessage = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;

  console.log((eqObjects(actual, expected) === true) ? passMessage : failMessage);
};

module.exports = assertObjectsEqual;