import isNumber from '../is/number';
import isArray from '../is/array';

/**
  * Calculates the avarage of an array of numbers.
  *
  * @param {Array} numbers
  * @returns {number}
*/
export default function avg(numbers) {
  if (!isArray(numbers)) {
    return undefined;
  }

  let sum = 0;
  for (const number of numbers) {
    if (!isNumber(number)) {
      return undefined;
    }

    sum += number;
  }

  return sum / numbers.length;
}
