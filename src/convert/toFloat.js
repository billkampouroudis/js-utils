import {is} from '../../index.js';

/**
  * Converts an integer to a decimal.
  * 
  * @param {(number, string)} value
  * @returns {number}
*/
export default function toFloat(value) {
  const num = parseFloat(value);

  if (!is.number(num)) {
    console.error(`${value} can not be converted to a number.`);
    return NaN;
  }

  return num;
}