import {is} from '../../index.js';

/**
  * Converts a decimal to an integer.
  * 
  * @param {(number, string)} value
  * @returns {number}
*/
export default function toInteger(value) {
  const num = parseInt(value);

  if (!is.number(num)) {
    console.error(`${value} can not be converted to a number.`);
    return NaN;
  }

  return num;
}