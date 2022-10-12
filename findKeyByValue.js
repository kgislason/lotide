/**
 * findKeyByValue()
 *
 * Description: a function that takes in an object and a value and returns the first key that corresponds to that value.
 *
 * @since 1.0.0
 * @param {object} object - source object
 * @param {*} value any primitive data type to look for inside object
 * @returns {string} returns the first key that corresponds to that value
 */

const findKeyByValue = function(object, value) {
  // loop through the object
  for (let key in object) {
    // return the first key which contains the given value.
    if (object[key].includes(value)) {
      return key;
    }
  }
  // If no key with that given value is found,
  // then it should return undefined.
  return;
};

module.exports = findKeyByValue;