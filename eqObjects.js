const assertEqual = function(actual, expected) {
  const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log((actual === expected) ? passMessage : failMessage);
};

const eqArrays = (arrayOne, arrayTwo) => {
  if (!arrayOne.length === arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arrayOne, arrayTwo) => {
  assertEqual(eqArrays(arrayOne, arrayTwo), true);
};

const eqObjects = (object1, object2) => {
  // create two arrays of the object keys
  let objectKey1 = [];
  let objectKey2 = [];

  for (let key1 in object1) {
    objectKey1.push(key1);
  }

  for (let key2 in object2) {
    objectKey2.push(key2);
  }

  // console.log(objectKey1);
  // console.log(objectKey2);

  // If there are different number of keys in the objects, then return false
  if (objectKey1.length !== objectKey2.length) {
    return false;
  }

  // Compare values
  for (let key of objectKey1) {
    if (object1[key] !== object2[key]) {
      console.log(object1[key] + "!==" + object2[key]);
      return false;
    }
  }

  return true;

};


// Test
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false