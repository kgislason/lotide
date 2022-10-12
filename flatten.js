/**
 * flatten()
 * take an array containing elements including nested arrays and returns a flattened version of the array
 *
 * @since 1.0.0
 * @param {array} array with nested arrays [1, 2, [1, 2, [3, [4]]]]
 * @returns {array} returns a flattend version of the original array [1, 2, 1, 2, 3, 4]
 */

const flatten = function(array) {
  // Check if argument is actually an array. If not return undefined
  if (!Array.isArray(array)) return;

  // create empty newArray;
  const newArray = [];

  // Loop through the array
  for (const x of array) {
    // If x is array
    if (Array.isArray(x)) {
      // Loop through nested array
      for (const y of x) {
        newArray.push(y);
      }
    } else if (!Array.isArray(x)) {
      newArray.push(x);
    }
  }

  return newArray;
};

module.exports = flatten;