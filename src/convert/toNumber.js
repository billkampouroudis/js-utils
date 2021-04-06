import { is } from '../../index.js';

/**
  * Converts an string to a number.
  * 
  * @param {string} value
  * @returns {number}
*/
export default function toNumber(value) {
  const num = Number(value);

  if (!is.number(num)) {
    console.error(`${value} can not be converted to a number.`);
    return NaN;
  }

  return num;
}