const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const eqObjects = require('../eqObjects');

// Tests with Primitive Data Types
const ab = { a: "1", b: {} };
const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

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

// console.log(assertEqual(human["name"], animal["name"])); // => false
// console.log(eqObjects(human, animal)); // => false

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

//console.log(eqObjects(example1, example2)); // => true

// Test Cases with Arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
console.log(eqArrays(cd["d"], cd2["d"])); // => false
console.log(assertEqual(cd["d"][0], dc["d"][0]));
console.log(assertEqual(cd["d"].length, cd2["d"].length));

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
