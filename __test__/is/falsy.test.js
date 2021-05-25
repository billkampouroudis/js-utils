import isFalsy from '../../src/is/falsy';

describe('Checks if the given value is falsy', () => {
  it('Should return true when undefined is provided', () => {
    expect(isFalsy(undefined)).toBe(true);
  });

  it('Should return true when null is provided', () => {
    expect(isFalsy(null)).toBe(true);
  });

  it('Should return true when 0 is provided', () => {
    expect(isFalsy(0)).toBe(true);
  });

  it('Should return true when " " is provided', () => {
    expect(isFalsy(' ')).toBe(true);
  });

  it('Should return true when false is provided', () => {
    expect(isFalsy(false)).toBe(true);
  });

  it('Should return true when NaN is provided', () => {
    expect(isFalsy(NaN)).toBe(true);
  });

  it('Should return true when -1 is provided', () => {
    expect(isFalsy(-1)).toBe(true);
  });

  it('Should return true when 0n is provided', () => {
    expect(isFalsy(0n)).toBe(true);
  });

  it('Should return true when BigInt(0) is provided', () => {
    expect(isFalsy(BigInt(0))).toBe(true);
  });

  it('Should return true when empty object is provided', () => {
    expect(isFalsy({})).toBe(true);
  });

  it('Should return false when string is provided', () => {
    expect(isFalsy('abcd')).toBe(false);
  });

  it('Should return false when number is provided', () => {
    expect(isFalsy(1234)).toBe(false);
  });

  it('Should return false when object with attributes is provided', () => {
    expect(isFalsy({ foo: 'bar' })).toBe(false);
  });
});
