import isTruthy from '../../src/is/truthy';

describe('Checks if the given value is truthy', () => {
  it('Should return false when undefined is provided', () => {
    expect(isTruthy(undefined)).toBe(false);
  });

  it('Should return false when null is provided', () => {
    expect(isTruthy(null)).toBe(false);
  });

  it('Should return false when 0 is provided', () => {
    expect(isTruthy(0)).toBe(false);
  });

  it('Should return false when " " is provided', () => {
    expect(isTruthy(' ')).toBe(false);
  });

  it('Should return false when false is provided', () => {
    expect(isTruthy(false)).toBe(false);
  });

  it('Should return false when NaN is provided', () => {
    expect(isTruthy(NaN)).toBe(false);
  });

  it('Should return false when -1 is provided', () => {
    expect(isTruthy(-1)).toBe(false);
  });

  it('Should return false when 0n is provided', () => {
    expect(isTruthy(0n)).toBe(false);
  });

  it('Should return false when BigInt(0) is provided', () => {
    expect(isTruthy(BigInt(0))).toBe(false);
  });

  it('Should return true when string is provided', () => {
    expect(isTruthy('abcd')).toBe(true);
  });

  it('Should return true when number is provided', () => {
    expect(isTruthy(1234)).toBe(true);
  });

  it('Should return true when empty object is provided', () => {
    expect(isTruthy({})).toBe(false);
  });

  it('Should return true when object with attributes is provided', () => {
    expect(isTruthy({foo: 'bar'})).toBe(true);
  });
});