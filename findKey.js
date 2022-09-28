/**
 * Function: findKey
 *
 */

const assertEqual = function(actual, expected) {
  const passMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log((actual === expected) ? passMessage : failMessage);
};

// Arguments:
// - object
// - callback.
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

// Test
const testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const test1 = findKey(testObject, x => x.stars === 2); // => "noma"
const test2 = findKey(testObject, x => x.stars < 3); // => "Blue Hill"
const test3 = findKey(testObject, x => x.stars === 4); // => undefined

assertEqual(test1, "noma");
assertEqual(test2, "Blue Hill");
assertEqual(test3, undefined);