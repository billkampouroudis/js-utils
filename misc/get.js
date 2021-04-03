const get = {
  safe: (fn, defaultValue = null) => {
    try {
      return fn();
    } catch (e) {
      return defaultValue;
    }
  },
  safeImageSrc: (src, aleternativeSrc) => {
    const http = new XMLHttpRequest();
    http.open('HEAD', src, false);
    http.send();

    if (http.status !== 404) {
      return src;
    }
    return aleternativeSrc;
  }
};

export default get;
