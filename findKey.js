/**
 * findKey()
 *
 * Description: a function that takes in an object and callback and returns the first key that meets the criteria specified in callback
 *
 * @since 1.0.0
 * @param {object} object The object to look through
 * @param {callback} callback specify criteria to look for in object
 * @returns {string} returns the key that meets the crtieria specified in callback function
 */

const findKey = function(object, callback) {
  // scan the object
  for (let key in object) {
    // return the first key for which the callback returns a truthy value.
    if (callback(object[key])) {
      return key;
    }
  }
  // If no key is found, then it should return undefined.
  return;
};

module.exports = findKey;