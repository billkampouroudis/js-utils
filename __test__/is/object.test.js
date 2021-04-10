import isObject from '../../src/is/object';

describe('Checks if the given value is an object', () => {
  it('Should return true when "{}" is provided', () => {
    expect(isObject({})).toBe(true);
  });

  it('Should return true when "new Object()" is provided', () => {
    expect(isObject(new Object())).toBe(true); // eslint-disable-line no-new-object
  });

  it('Should return true when object with attributes is provided', () => {
    expect(isObject({ foo: 'bar' })).toBe(true);
  });

  it('Should return false when string is provided', () => {
    expect(isObject('abcd')).toBe(false);
  });

  it('Should return false when number is provided', () => {
    expect(isObject(1234)).toBe(false);
  });

  it('Should return false when null is provided', () => {
    expect(isObject(null)).toBe(false);
  });

  it('Should return false when undefined is provided', () => {
    expect(isObject(undefined)).toBe(false);
  });

  it('Should return false when function is provided', () => {
    expect(isObject(() => {})).toBe(false);
  });
});
