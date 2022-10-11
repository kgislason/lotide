const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it('Should return ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const actual = tail(["Yo Yo", "Lighthouse", "Labs"]);
    const expected = ["Lighthouse", "Labs"];
    assert.deepEqual(actual, expected);
  });

  it("Empty array [] should return an empty  []", () => {
    const actual = tail([]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it('Array with only 1 element ["hello"] should return an empty array [] for its tail', () => {
    const actual = tail(["hello"]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

});