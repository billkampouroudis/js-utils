import isNumber from '../../src/is/number';

describe('Checks if the given value is a number', () => {
  it('Should return true when 1 is provided', () => {
    expect(isNumber(1)).toBe(true);
  });

  it('Should return false when 1.1 is provided', () => {
    expect(isNumber(1.1)).toBe(true);
  });

  it('Should return false when "1" is provided', () => {
    expect(isNumber('1')).toBe(false);
  });

  it('Should return false when NaN is provided', () => {
    expect(isNumber(NaN)).toBe(false);
  });
});