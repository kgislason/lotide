/**
 *
 * Head - head()
 *
 * Taks an array and returns the first element in the array
 *
 */
// return the first element itself
const head = function(array) {
  if (array !== null && array.length) {
    return array[0];
  } else {
    return undefined;
  }
};

module.exports = head;