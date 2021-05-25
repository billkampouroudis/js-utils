import isNumber from '../is/number';

/**
  * Generates a random number.
  *
  * @param {number} from
  * @param {number} to
  * @param {boolean} includeDecimals
  * @returns {number}
*/
export default function random(min = 0, max = 100, includeDecimals = false) {
  if (!isNumber(min) || !isNumber(max) || typeof includeDecimals !== 'boolean') {
    return undefined;
  }

  const randomNumber = Math.random() * (max - min) + min;

  if (includeDecimals) {
    return randomNumber;
  }

  return Math.floor(randomNumber);
}
