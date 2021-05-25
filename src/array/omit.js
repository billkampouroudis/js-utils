import isEqual from '../is/equal';

/**
  * Excludes certain elements from the given array.
  *
  * *NOTE: This version does not support the removal of empty arrays and empty objects.
  * TODO: Support the removal of empty arrays and empty objects.
  *
  * @param {*} array
  * @param {*} valuesToExclude
  * @returns {array} An array without the excluded elements.
*/
export default function omit(array = [], valuesToExclude = []) {
  const result = [...array];

  for (const [index, value] of array.entries()) {
    for (const valueToExclude of valuesToExclude) {
      if (isEqual(value, valueToExclude)) {
        result[index] = undefined;
      }
    }
  }

  return result.filter((el) => el !== undefined);
}
