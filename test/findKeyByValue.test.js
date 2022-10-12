const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it('should return key drama for value The Wire', () => {
    const actual = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expected = "drama";
    assert.strictEqual(actual, expected);
  });

  it('should return undefined for a value that does not exist', () => {
    const actual = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });

  it('should return undefined if no arguments are passed to function', () => {
    const actual = findKeyByValue();
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
});

