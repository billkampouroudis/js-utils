// Is
import isArray from './src/is/array';
import emptyArray from './src/is/emptyArray';
import emptyObject from './src/is/emptyObject';
import equal from './src/is/equal';
import falsy from './src/is/falsy';
import integer from './src/is/integer';
import isNumber from './src/is/number';
import isObject from './src/is/object';
import truthy from './src/is/truthy';

// Object
import get from './src/object/get';

// Number
import avg from './src/number/avg';
import max from './src/number/max';
import min from './src/number/min';
import random from './src/number/random';

// String
import truncate from './src/string/truncate';

// Array
import omit from './src/array/omit';

// Misc
import debounce from './src/misc/debounce';

export const is = {
  array: isArray,
  emptyArray,
  emptyObject,
  equal,
  falsy,
  integer,
  number: isNumber,
  object: isObject,
  truthy,
};

export const object = {
  get,
};

export const number = {
  avg,
  max,
  min,
  random,
};

export const string = {
  truncate,
};

export const array = {
  omit,
};

export {
  debounce,
};
