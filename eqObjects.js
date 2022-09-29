const assertEqual = function(actual, expected) {
  const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log((actual === expected) ? passMessage : failMessage);
};

const eqArrays = function(arrayOne, arrayTwo) {
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

// Check if 2 objects are the same: same number of keys, same key values, same  arrays foudn within key values
const eqObjects = function(object1, object2) {
  // create two arrays of the object keys
  let objectKey1 = Object.keys(object1);
  let objectKey2 = Object.keys(object2);

  // If there are different number of keys in objects, return false
  if (objectKey1.length !== objectKey2.length) {
    return false;
  }

  // Next, compare values in each key
  for (let key of objectKey1) {
    // Check for arrays as values
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If eqArray() returns false, then return false
      if (! eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      // compare primitive data types
      return false;
    }
  }
  return true;
};

// Tests with Primitive Data Types
const ab = { a: "1", b: {} };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const human = {
  name: "Jane Smith",
  age: 50,
  city: "Victoria"
};

const animal = {
  name: "Nibbles",
  age: 2,
  city: "Victoria"
};

console.log(assertEqual(human["name"], animal["name"])); // => false
console.log(eqObjects(human, animal)); // => false

const example1 = {
  sample: "a",
  test: true,
  result: "pass",
};

const example2 = {
  test: true,
  result: "pass",
  sample: "a",
};

console.log(eqObjects(example1, example2)); // => true

// Test Cases with Arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
console.log(eqArrays(cd["d"], cd2["d"])); // => false
console.log(assertEqual(cd["d"][0], dc["d"][0]));
console.log(assertEqual(cd["d"].length, cd2["d"].length));