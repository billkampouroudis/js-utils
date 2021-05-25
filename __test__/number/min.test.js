import min from '../../src/number/min';

describe('Calculates the min number of an array of numbers', () => {
  it('Should find the min of 1, 2 and 3 which is 3.', () => {
    expect(min([2, 1, 3])).toBe(1);
  });

  it('Should return undefined if the given element is not an array.', () => {
    expect(min('not an array')).toBe(undefined);
  });

  it('Should return undefined if the given array does not contain numbers.', () => {
    expect(min([NaN])).toBe(undefined);
  });
});
