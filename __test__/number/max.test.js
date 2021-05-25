import max from '../../src/number/max';

describe('Calculates the max number of an array of numbers', () => {
  it('Should find the max of 1, 2 and 3 which is 3.', () => {
    expect(max([1, 3, 2])).toBe(3);
  });

  it('Should return undefined if the given element is not an array.', () => {
    expect(max('not an array')).toBe(undefined);
  });

  it('Should return undefined if the given array does not contain numbers.', () => {
    expect(max([NaN])).toBe(undefined);
  });
});
