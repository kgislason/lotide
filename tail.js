/**
 * tail()
 *
 * Description: every element except the head (first element) of the array.
 *
 * @since 1.0.0
 * @param {array} source array
 * @returns {array} returns an array without the first element (head)
 */

// Define Tail Function that returns an array minus the first element at index 0
const tail = function(array) {
  if (!Array.isArray(array)) {
    return;
  }
  
  if (array.length <= 1) {
    return [];
  }

  return array.slice(1);
};

module.exports = tail;