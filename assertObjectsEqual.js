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

const eqObjects = (object1, object2) => {
  let objectKey1 = Object.keys(object1);
  let objectKey2 = Object.keys(object2);
  if (objectKey1.length !== objectKey2.length) {
    return false;
  }
  for (let key of objectKey1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (! eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  const passMessage = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;

  console.log((eqObjects(actual, expected) === true) ? passMessage : failMessage);
};

const object1 = {
  name: "Kristy",
};

const object2 = {
  name: "Kristy",
};

const object3 = {
  name: "Kristy",
  city: "Victoria",
};

assertObjectsEqual(object1, object2); // => true
assertObjectsEqual(object1, object3); // => false