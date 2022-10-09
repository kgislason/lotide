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

assertObjectsEqual(object1, object2); // => true
assertObjectsEqual(object1, object3); // => false
