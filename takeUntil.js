/**
 * Function: takeUntil()
 *
 * Returns a slice of the array with elements taken from the
 *
 * @param {array} source array
 * @param {callback} func
 */

// take in two parameters:
// 1. array to work with
// 2. callback or predicate
//   a. callback should only be provided one value: The item in the array
const takeUntil = function(array, callback) {
  const indexEnd = array.findIndex(callback);
  return array.slice(0, indexEnd);
};

module.exports = takeUntil;