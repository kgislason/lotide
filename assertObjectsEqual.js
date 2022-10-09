const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const passMessage = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;

  console.log((eqObjects(actual, expected) === true) ? passMessage : failMessage);
};

module.exports = assertObjectsEqual;