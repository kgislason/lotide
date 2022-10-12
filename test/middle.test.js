const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it('Should return undefined for middle("string") of non array', () => {
    const actual = middle("string");
    const expected = undefined;
    assert.deepEqual(actual, expected);
  });

  it('Should return empty array for array with 2 items', () => {
    const actual = middle(["Yo Yo", "Lighthouse"]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it("Should return an empty array [] for empty array []", () => {
    const actual = middle([]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it('Should return an empty array for array with 1 item', () => {
    const actual = middle(["hello"]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it('Should return [3] for middle([1, 2, 3, 4, 5]) where array length is odd', () => {
    const actual = middle([1, 2, 3, 4, 5]);
    const expected = [3];
    assert.deepEqual(actual, expected);
  });

  it('Should return [3, 4] for middle([1, 2, 3, 4, 5, 6]) where array length is even', () => {
    const actual = middle([1, 2, 3, 4, 5, 6]);
    const expected = [3, 4];
    assert.deepEqual(actual, expected);
  });

});