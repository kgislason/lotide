const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  // Test
  const testObject = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it('Should return noma for stars equal to 2', () => {
    const actual = findKey(testObject, x => x.stars === 2);
    const expected = "noma";
    assert.strictEqual(actual, expected);
  });

  it('Should return Blue Hill for stars greater than 3', () => {
    const actual = findKey(testObject, x => x.stars < 3);
    const expected = "Blue Hill";
    assert.strictEqual(actual, expected);
  });
  
  it('Should return undefined if case is not found: stars equal to 4', () => {
    const actual = findKey(testObject, x => x.stars === 4);
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });

  it('Should return undefined if no arguments are passed to function', () => {
    const actual = findKey();
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
});