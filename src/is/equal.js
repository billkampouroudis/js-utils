import isObject from './object';

/**
 * Checks if two objects have the same values.
 *
 * @param object object1
 * @param {object} object2
 */
const deepEqual = (objectA, objectB) => {
  if (objectA === null && objectB === null) {
    return true;
  }

  const keys1 = Object.keys(objectA);
  const keys2 = Object.keys(objectB);

  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check children
  for (const key of keys1) {
    const value1 = objectA[key];
    const value2 = objectB[key];
    const areObjects = isObject(value1) && isObject(value2);

    // eslint-disable-next-line no-unused-vars
    if ((areObjects && !deepEqual(value1, value2)) || (!areObjects && value1 !== value2)) {
      return false;
    }
  }

  return true;
};

/**
  * Checks if the given values are equal.
  *
  * @param {*} a
  * @param {*} b
  * @returns {boolean}
*/
export default function isEqualObject(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }

  switch (typeof a) {
    case 'object': return deepEqual(a, b);
    case 'number':
      if (Number.isNaN(a) && Number.isNaN(b)) {
        return true;
      }

      return a === b;
    case 'string': return a === b;
    case 'undefined': return true;
    default: return false;
  }
}
