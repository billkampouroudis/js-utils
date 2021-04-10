import isEmptyObject from '../../src/is/emptyObject';

describe('Checks if the given value is an empty object', () => {
  it('Should return true when "{}" is provided', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  it('Should return true when "new Object()" is provided', () => {
    expect(isEmptyObject(new Object())).toBe(true); // eslint-disable-line no-new-object
  });

  it('Should return false when string is provided', () => {
    expect(isEmptyObject('abcd')).toBe(false);
  });

  it('Should return false when number is provided', () => {
    expect(isEmptyObject(1234)).toBe(false);
  });

  it('Should return false when object with attributes is provided', () => {
    expect(isEmptyObject({ foo: 'bar' })).toBe(false);
  });

  it('Should return false when null is provided', () => {
    expect(isEmptyObject(null)).toBe(false);
  });

  it('Should return false when undefined is provided', () => {
    expect(isEmptyObject(undefined)).toBe(false);
  });
});
