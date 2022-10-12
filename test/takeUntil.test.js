const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

  it('Should return []', () => {
    const actual = takeUntil(data1, x => x < 0);
    const expected = [ 1, 2, 5, 7, 2 ];
    assert.deepEqual(actual, expected);
  });

  it('Should return original array if the filter case is not found', () => {
    const actual = takeUntil(data2, x => x === ',');
    const expected = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
    assert.deepEqual(actual, expected);
  });
});