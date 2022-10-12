const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it('Should return ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const actual = tail(["Yo Yo", "Lighthouse", "Labs"]);
    const expected = ["Lighthouse", "Labs"];
    assert.deepEqual(actual, expected);
  });

  it("Should return an empty array [] for empty array []", () => {
    const actual = tail([]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it('Should return an empty array [] for array with only 1 element ["hello"] ', () => {
    const actual = tail(["hello"]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

});