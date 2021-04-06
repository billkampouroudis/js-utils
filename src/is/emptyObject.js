import isObject from './object';

/**
  * Checks if the given image source corresponds to an actual image.
  * 
  * @param {*} value
  * @returns {boolean}
*/
export default function isEmptyObject(value) {
  return (
    isObject(value) &&
    Object.keys(value).length === 0
  );
}
