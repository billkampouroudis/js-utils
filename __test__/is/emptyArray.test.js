import isEmptyArray from '../../src/is/emptyArray';

describe('Checks if the given value is an empty array', () => {
  it('Should return true when "[]" is provided', () => {
    expect(isEmptyArray([])).toBe(true);
  });

  it('Should return true when "new Array()" is provided', () => {
    expect(isEmptyArray(new Array())).toBe(true); // eslint-disable-line no-array-constructor
  });

  it('Should return true when "[1, 2, 3]" is provided', () => {
    expect(isEmptyArray([1, 2, 3])).toBe(false);
  });

  it('Should return false when string is provided', () => {
    expect(isEmptyArray('abcd')).toBe(false);
  });

  it('Should return false when number is provided', () => {
    expect(isEmptyArray(1234)).toBe(false);
  });

  it('Should return false when object is provided', () => {
    expect(isEmptyArray({})).toBe(false);
  });

  it('Should return false when null is provided', () => {
    expect(isEmptyArray(null)).toBe(false);
  });

  it('Should return false when undefined is provided', () => {
    expect(isEmptyArray(undefined)).toBe(false);
  });
});
