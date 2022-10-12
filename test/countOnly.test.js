const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  // Define an array
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it('Should return 1 for Jason', () => {
    const actual = result["Jason"];
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it('Should return undefined for Karima', () => {
    const actual = result["Karima"];
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });

  it('Should return 2 for Fang', () => {
    const actual = result["Fang"];
    const expected = 2;
    assert.strictEqual(actual, expected);
  });

  it('Should return undefined if the function is not provided an array', () => {
    const actual = countOnly("string", {"string": true});
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });

  it('Should return undefined if the function is not provided an object as the 2nd argument', () => {
    const actual = countOnly([1, 2, 3], [1]);
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
});
