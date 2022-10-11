const { expect } = require('chai');
const tail = require('../tail');

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  const result = ["Lighthouse", "Labs"];

  it('Should return ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    expect(tail(words)).to.deep.equal(result);
  });

  it("Empty array [] should return an empty  []", () => {
    expect(tail([])).to.deep.equal([]);
  });

  it('Array with only 1 element ["hello"] should return an empty array [] for its tail', () => {
    expect(tail(["hello"])).to.deep.equal([]);
  });

});