const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it('Should return ["3"] for ["1", "2", "3"]', () => {
    const actual = without(["1", "2", "3"], ["1", "2"]);
    const expected = ["3"];
    assert.deepEqual(actual, expected);
  });

  it("Empty array [] should return an empty  []", () => {
    const actual = without([], []);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it('Array with only 1 element ["hello"] should return an empty array [] for its without', () => {
    const actual = without(["hello"], ["hello"]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it('should return undefined if not an array', () => {
    const actual = without("hello", "h");
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });

  it('should return empty array when entire array is filtered out', () => {
    const actual = without(["hello", "world", "lighthouse"], ["hello", "world", "lighthouse"]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

});