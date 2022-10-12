const assert = require('chai').assert;
const countLetters = require('../countLetters');
 
describe("#countLetters", () => {
  it('Should return object with letter as key and number as value', () => {
    const actual = countLetters("lighthouse in the house");
    const expected = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, ' ': 3, n: 1 };
    assert.deepEqual(actual, expected);
    assert.strictEqual(actual["l"], 1);
    assert.strictEqual(actual["h"], 4);
    assert.strictEqual(actual[" "], 3);
  });

  it('Should return undefined of a string is not passed to the function', () => {
    const actual = countLetters(123);
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });

  it('Should return undefined if not string is passed to the function', () => {
    const actual = countLetters();
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
});
