import array from './src/is/array.js';
import emptyObject from './src/is/emptyObject.js';
import falsy from './src/is/falsy.js';
import integer from './src/is/integer.js';
import number from './src/is/number.js';
import object from './src/is/object.js';
import truthy from './src/is/truthy.js';

import toInteger from './src/convert/toInteger.js';
import toNumber from './src/convert/toNumber.js';

import safe from './src/get/safe.js';

import debounce from './src/misc/debounce.js';

export const is = {
  array,
  emptyObject,
  falsy,
  integer,
  number,
  object,
  truthy,
}

export const convert = {
  toInteger,
  toNumber
}

export const get = {
  safe
}

export {
  debounce
}
