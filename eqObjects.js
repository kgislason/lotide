const eqArrays = require('./eqArrays');

/**
 * eqObjects()
 *
 * Description: a function that takes in 2 objects and returns true if they are equal, false otherwise
 *
 * @since 1.0.0
 * @param {object} object1 first object to compare
 * @param {object} object2 second object to compare
 * @returns {boolean} returns true if 2 objects are equal, false otherwise
 */
const eqObjects = function(object1, object2) {
  // validate arguments, return undefined if they are not 2 objects
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
    // Check for arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If eqArray() returns false, then return false
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      // Check if element is nested object that is not array
      // use recursion to compare nested objects until no more are found
      eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      // compare primitive data types
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;