/**
  * Checks if the given value is an empty array.
  *
  * @param {*} value
  * @returns {boolean}
*/
export default function isArray(value) {
  return Array.isArray(value) && value.length === 0;
}
