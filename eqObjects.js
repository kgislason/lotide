const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (!object1 || !object2) return;
  if (typeof object1 !== "object" || typeof object2 !== "object") return;
  if (Array.isArray(object1) || Array.isArray(object2)) return;

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
    } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      // Check if is nested object that is not array
      eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      // compare primitive data types
      return false;
    }
  }
  return true;
};

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: { x: 2 } }));

module.exports = eqObjects;