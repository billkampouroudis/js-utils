import isEmptyObject from './emptyObject';

/**
  * Checks if the given value is falsy.
  * @param {*} value
  * @returns {boolean}
*/
export default function isFalsy(value) {
  return (
    value === undefined
    || value === null
    || value == 0 // eslint-disable-line eqeqeq
    || value === 0n
    || value < 0
    || String(value).trim() === ''
    || value === false
    || (typeof value === 'number' && Number.isNaN(value))
    || isEmptyObject(value)
  );
}
