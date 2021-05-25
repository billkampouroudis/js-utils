import isNumber from '../is/number';
import isArray from '../is/array';

/**
  * Finds the min number in an array of numbers.
  *
  * @param {Array} numbers
  * @returns {number}
*/
export default function min(numbers) {
  if (!isArray(numbers)) {
    return undefined;
  }

  let minNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (!isNumber(numbers[i])) {
      return undefined;
    }

    if (numbers[i] < minNumber) {
      minNumber = numbers[i];
    }
  }

  return minNumber;
}
