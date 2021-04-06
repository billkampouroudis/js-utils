/**
  * Checks if the given value is falsy.
  * @param {*} value
  * @returns {boolean}
*/
export default function isFalsy(value) {
  return (
    value === undefined ||
    value === null ||
    value === 0 ||
    value === 0n ||
    String(value).trim() === '' ||
    value === false
  );
}
