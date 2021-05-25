import isInteger from '../../src/is/integer';

describe('Checks if the given value is an integer', () => {
  it('Should return true when 1 is provided', () => {
    expect(isInteger(1)).toBe(true);
  });

  it('Should return false when "1" is provided', () => {
    expect(isInteger('1')).toBe(false);
  });

  it('Should return false when 1.1 is provided', () => {
    expect(isInteger(1.1)).toBe(false);
  });

  it('Should return false when NaN is provided', () => {
    expect(isInteger(NaN)).toBe(false);
  });
});
