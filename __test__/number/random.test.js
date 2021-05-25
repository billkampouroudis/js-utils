import random from '../../src/number/random';

describe('Generates a random number.', () => {
  it('Should generate a random number between 0 and 10.', () => {
    for (let i = 0; i < 100; i++) {
      const num = random(0, 10);
      expect(num).toBeLessThanOrEqual(10);
      expect(num).toBeGreaterThanOrEqual(0);
    }
  });

  it('Should generate a random number between 0 and 100 using no params.', () => {
    for (let i = 0; i < 100; i++) {
      const num = random();
      expect(num).toBeLessThanOrEqual(100);
      expect(num).toBeGreaterThanOrEqual(0);
    }
  });

  it('Should return undefined if min and max are not numbers.', () => {
    expect(random(NaN, NaN)).toBe(undefined);
  });

  it('Should return undefined if includeDecimals is not boolean.', () => {
    expect(random(1, 10, 'not boolean value')).toBe(undefined);
  });

  it('Should return a decimal random number.', () => {
    const number = random(1, 10, true);
    expect(number === parseInt(number, 10)).toBe(false);
  });
});
