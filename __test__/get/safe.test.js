import safe from '../../src/get/safe.js';

describe('Get a child attribute safely', () => {
  const foo = {
    id: 1,
    bar: undefined
  };

  it('Should handle the error returning undefined', () => {
    expect(safe(() => foo.bar.child)).toBe(undefined);
  });

  it('Should handle the error returning a fallback value', () => {
    expect(safe(() => foo.bar.child, 'fallback')).toBe('fallback');
  });

  it('Should return the actual child value', () => {
    expect(safe(() => foo.id, 'fallback')).toBe(1);
  });

});