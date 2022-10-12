/**
 * head()
 *
 * Description a function that takes an array and returns the first element in the array
 *
 * @since 1.0.0
 * @param {array} source array
 * @returns {*} value of first element in array
 */

const head = function(array) {
  if (array !== null && array.length) {
    return array[0];
  } else {
    return undefined;
  }
};

module.exports = head;