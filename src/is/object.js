/**
  * Checks if the given value is an object.
  *
  * @param {*} value
  * @returns {boolean}
*/
export default function isObject(value) {
  return typeof value === 'object' && value !== null;
}
