import isArray from '../../src/is/array';

describe('Checks if the given value is an array', () => {
  it('Should return true when "[]" is provided', () => {
    expect(isArray([])).toBe(true);
  });

  it('Should return true when "new Array()" is provided', () => {
    expect(isArray(new Array())).toBe(true);
  });

  it('Should return false when string is provided', () => {
    expect(isArray('abcd')).toBe(false);
  });

  it('Should return false when number is provided', () => {
    expect(isArray(1234)).toBe(false);
  });

  it('Should return false when object is provided', () => {
    expect(isArray({})).toBe(false);
  });

  it('Should return false when null is provided', () => {
    expect(isArray(null)).toBe(false);
  });

  it('Should return false when undefined is provided', () => {
    expect(isArray(undefined)).toBe(false);
  });
});