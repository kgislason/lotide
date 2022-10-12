/**
 * Function: takeUntil()
 *
 * Description: takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
 *
 * @since 1.0.0
 * @param {array} source array
 * @param {callback} callback function or predicate; should only be provided one value: The item in the array
 */

const takeUntil = function(array, callback) {
  // get the index of the element in the array that meets callback criteria
  const indexEnd = array.findIndex(callback);
  // Return new array starting at beginning until the indexEnd as defined above
  return array.slice(0, indexEnd);
};

module.exports = takeUntil;