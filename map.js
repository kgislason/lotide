/**
 * map.js
 *
 * take in two arguments:
 * - An array to map
 * - A callback function
 *
 * Description: The map function will return a new array based on the results of the callback function.
 */
const map = function(array, callback) {
  const result = [];

  if (!Array.isArray(array)) return;

  if (!callback) return;

  for (let item of array) {
    result.push(callback(item));
  }

  return result;
};

module.exports = map;