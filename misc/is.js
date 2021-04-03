const is = {
  falsy: (item) => {
    return (
      item === 'undefined' ||
      item === null ||
      item === 0 ||
      item === '' ||
      item === ' ' ||
      item === [] ||
      item === {} ||
      item === false
    );
  },
  truthy: (item) => {
    return !is.falsy(item);
  },
  emptyObject: (item) => {
    return !(
      item &&
      item.constructor === Object &&
      Object.keys(item).length > 0
    );
  },
  correctImageSrc: (src) => {
    const http = new XMLHttpRequest();
    http.open('HEAD', src, false);
    http.send();

    return http.status !== 404;
  },
  number: (value) => {
    return typeof value === 'number' && !isNaN(value);
  },
  array: (item) => {
    return Array.isArray(item);
  },
  object: (item) => {
    return typeof item === 'object' && item !== null;
  }
};

export default is;
