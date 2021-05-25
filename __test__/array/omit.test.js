import omit from '../../src/array/omit';

describe('Removes Certain elements from an array', () => {
  const array = [1, 2, 3, 4, {}, { foo: 1 }, [], [1, 2]];

  it('Should return "[]" when no params are provided', () => {
    expect(omit()).toStrictEqual([]);
  });

  it('Should return "[1, 2, 4, {}, { foo: 1 }, [], [1, 2]]" when 3 is omitted', () => {
    expect(omit(array, [3])).toStrictEqual([1, 2, 4, {}, { foo: 1 }, [], [1, 2]]);
  });

  // TODO: support this test
  // it('Should return "[1, 2, 3, 4, { foo: 1 }, [], [1, 2]]" when {} is omitted', () => {
  //   expect(omit(array, [{}])).toStrictEqual([1, 2, 3, 4, { foo: 1 }, [], [1, 2]]);
  // });

  it('Should return "[1, 2, 3, 4, {}, [], [1, 2]]" when { foo: 1 } is omitted', () => {
    expect(omit(array, [{ foo: 1 }])).toStrictEqual([1, 2, 3, 4, {}, [], [1, 2]]);
  });

  // TODO: support this test
  // it('Should return "[1, 2, 3, 4, {}, { foo: 1 }, [1, 2]]" when [] is omitted', () => {
  //   expect(omit(array, [[]])).toStrictEqual([1, 2, 3, 4, {}, { foo: 1 }, [1, 2]]);
  // });

  it('Should return "[1, 2, 3, 4, {}, { foo: 1 }, []]" when [1, 2] is omitted', () => {
    expect(omit(array, [[1, 2]])).toStrictEqual([1, 2, 3, 4, {}, { foo: 1 }, []]);
  });
});
