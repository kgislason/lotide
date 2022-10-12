const assert = require('chai').assert;
const flatten = require('../flatten');

// Test Cases
describe("#flatten", () => {
  // Test Data
  const array1 = [1, 2, [3, 4], 5, [6]];
  const array2 = [1, 2, [3, 4], [5], [6]];
  const arrayFlat = [1, 2, 3, 4, 5, 6];

  it('should return 6 as the length of the flattened array of [1, 2, [3, 4], 5, [6]]', () => {
    const actual = flatten(array1).length;
    const expected = arrayFlat.length;
    assert.strictEqual(actual, expected);
  });
  
  it(`should return ${array1} for ${arrayFlat}`, () => {
    const actual = flatten(array1);
    const expected = arrayFlat;
    assert.deepEqual(actual, expected);
  });

  it('should return [] for []', () => {
    const actual = [];
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it(`should return ${array2} for ${arrayFlat}`, () => {
    const actual = flatten(array2);
    const expected = arrayFlat;
    assert.deepEqual(actual, expected);
  });

  it('should return undefined for an empty argument', () => {
    const actual = flatten();
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });

  it('should return undefined for an argument that is not an array', () => {
    const actual = flatten('test[1, 2, 3]');
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
});
