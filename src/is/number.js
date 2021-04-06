/**
  * Checks if the given value is a number.
  * 
  * @param {*} value
  * @returns {boolean}
*/
export default function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}
