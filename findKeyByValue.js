// takes in an object and a value.
const findKeyByValue = function(object, value) {
  // scan the object
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