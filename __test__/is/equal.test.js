import isEqual from '../../src/is/equal';

describe('Checks if two given values are equals.', () => {
  it('Should return true when {} is provided', () => {
    expect(isEqual({}, {})).toBe(true);
  });

  it('Should return true when {foo: "bar"} is provided.', () => {
    expect(isEqual({ foo: 'bar' }, { foo: 'bar' })).toBe(true); // eslint-disable-line no-new-object
  });

  it('Should return true when {foo: {bar: undefined}} is provided.', () => {
    expect(isEqual({ foo: { bar: undefined } }, { foo: { bar: undefined } })).toBe(true);
  });

  it('Should return false when two objects with different number of children is provided.', () => {
    expect(isEqual({ foo: 1 }, { foo: 1, bar: 2 })).toBe(false);
  });

  it('Should return false when two objects with different children is provided.', () => {
    expect(isEqual({ foo: 1, bar: { foo: 1 } }, { foo: 1, bar: { foo: 2 } })).toBe(false);
  });

  it('Should return true when [] is provided.', () => {
    expect(isEqual([], [])).toBe(true);
  });

  it('Should return true when 1 is provided.', () => {
    expect(isEqual(1, 1)).toBe(true);
  });

  it('Should return true when null is provided.', () => {
    expect(isEqual(null, null)).toBe(true);
  });

  it('Should return false when params of different type are provided.', () => {
    expect(isEqual({}, 1)).toBe(false);
  });

  it('Should return true when NaN is provided for both params.', () => {
    expect(isEqual(NaN, NaN)).toBe(true);
  });

  it('Should return false when NaN is provided as the first param.', () => {
    expect(isEqual(NaN, 1)).toBe(false);
  });

  it('Should return true when the same strings are provided as params.', () => {
    expect(isEqual('This is a string', 'This is a string')).toBe(true);
  });

  it('Should return false when different strings are provided as params.', () => {
    expect(isEqual('This is a string', 'This is another string')).toBe(false);
  });

  it('Should return true when undefined is provided as params.', () => {
    expect(isEqual(undefined, undefined)).toBe(true);
  });

  it('Should return false when functions are provided as params.', () => {
    expect(isEqual(() => {}, () => {})).toBe(false);
  });
});
