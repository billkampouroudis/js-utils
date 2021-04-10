import get from '../../src/object/get.js';

describe('Gets a child attribute getly', () => {
  const foo = {
    id: 1,
    bar: undefined,
    obj: {},
    empty: null,
    string: 'abcdefg'
  };

  it('Should return undefined when trying to access a child of an undefined object.', () => {
    expect(get(() => foo.bar.child)).toBe(undefined);
  });

  it('Should return the given fallback when trying to access a child of an undefined object.', () => {
    expect(get(() => foo.bar.child, 'fallback')).toBe('fallback');
  });

  it('Should return the actual child value when object is not undefined.', () => {
    expect(get(() => foo.id, 'fallback')).toBe(foo.id);
  });

  it('Should return empty object when child is empty object', () => {
    expect(get(() => foo.obj)).toEqual(foo.obj);
  });

  it('Should return null when child is null', () => {
    expect(get(() => foo.empty)).toBe(foo.empty);
  });

  it('Should return number when child a number', () => {
    expect(get(() => foo.id)).toBe(foo.id);
  });

  it('Should return string when child a string', () => {
    expect(get(() => foo.string)).toBe(foo.string);
  });
});