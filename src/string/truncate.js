/**
  * Hides a part of a given text.
  *
  * @param {Array} strings
  * @param {number} limit
  * @param {string} omission
  * @returns {number}
*/
export default function truncate(text, limit, omission = '') {
  if (text.length <= limit) {
    return text;
  }

  return text.slice(0, limit).concat(omission);
}
