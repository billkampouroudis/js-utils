/**
  * Keeps you safe from errors that occurs when you try
  * to access a child of an undefined object.
  * 
  * @param {Function} fn Function that returns the object that may throw an error.
  * @param {*} fallback The value you want to return in case the given object throws an error.
  * @returns {*} Whatever the given child's value is. If the given object throws error and no
  * fallback is provided, returns undefined, otherwise returns the provided fallback value.
  * 
  * @example get.safe(() => user.address.zipCode, 'N/A')
*/
export default function safe(fn, fallback = undefined) {
  try {
    return fn();
  } catch (e) {
    return fallback;
  }
}
