const eqArrays = require('./eqArrays');
const inspect = require('util').inspect;

const assertArraysEqual = function(actual, expected) {
  const passMessage = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  console.log((eqArrays(actual, expected) === true) ? passMessage : failMessage);
};

module.exports = assertArraysEqual;