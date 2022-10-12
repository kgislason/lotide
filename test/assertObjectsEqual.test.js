const assertObjectsEqual = require('../assertObjectsEqual');

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

console.log("\n#assertObjectsEqual");
console.log("Should print passed for 2 equal objects:")
assertObjectsEqual(object1, object2); // => true
console.log("Should print failed for 2 inequal objects:")
assertObjectsEqual(object1, object3); // => false
console.log("END assertObjectsEqual\n");