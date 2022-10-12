/**
 * map.js
 *
 * Description: return a new array based on the results of the callback function.
 *
 * @since 1.0.0
 * @param {array} An array to map
 * @param {callback} A callback function
 * @returns {array} based on the results of the callback function.
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