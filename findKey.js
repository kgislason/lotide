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