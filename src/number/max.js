import isNumber from '../is/number';
import isArray from '../is/array';

/**
  * Finds the max number in an array of numbers.
  *
  * @param {Array} numbers
  * @returns {number}
*/
export default function max(numbers) {
  if (!isArray(numbers)) {
    return undefined;
  }

  let maxNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (!isNumber(numbers[i])) {
      return undefined;
    }

    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }

  return maxNumber;
}
