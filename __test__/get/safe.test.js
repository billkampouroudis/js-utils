import safe from '../../src/get/safe.js';

describe('Gets a child attribute safely', () => {
  const foo = {
    id: 1,
    bar: undefined,
    obj: {},
    empty: null,
    string: 'abcdefg'
  };

  it('Should return undefined when trying to access a child of an undefined object.', () => {
    expect(safe(() => foo.bar.child)).toBe(undefined);
  });

  it('Should return the given fallback when trying to access a child of an undefined object.', () => {
    expect(safe(() => foo.bar.child, 'fallback')).toBe('fallback');
  });

  it('Should return the actual child value when object is not undefined.', () => {
    expect(safe(() => foo.id, 'fallback')).toBe(foo.id);
  });

  it('Should return empty object when child is empty object', () => {
    expect(safe(() => foo.obj)).toEqual(foo.obj);
  });

  it('Should return null when child is null', () => {
    expect(safe(() => foo.empty)).toBe(foo.empty);
  });

  it('Should return number when child a number', () => {
    expect(safe(() => foo.id)).toBe(foo.id);
  });

  it('Should return string when child a string', () => {
    expect(safe(() => foo.string)).toBe(foo.string);
  });
});