import isFalsy from './falsy.js';

/**
  * Checks if the given value is truthy.
  * 
  * @param {*} value
  * @returns {boolean}
*/
export default function isTruthy(value) {
  return !isFalsy(value);
}
