import avg from '../../src/number/avg';

describe('Calculates the average number of an array of numbers', () => {
  it('Should find the avg of 1, 2 and 3 which is 2.', () => {
    expect(avg([1, 2, 3])).toBe(2);
  });

  it('Should return undefined if the given element is not an array.', () => {
    expect(avg('not an array')).toBe(undefined);
  });

  it('Should return undefined if the given array does not contain numbers.', () => {
    expect(avg([NaN])).toBe(undefined);
  });
});
