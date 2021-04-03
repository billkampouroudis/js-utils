export default function keepProps(propsToKeep = [], props = {}) {
  const _props = {};

  for (let propKey of propsToKeep) {
    if (props[propKey] || props[propKey] === false) {
      _props[propKey] = props[propKey];
    }
  }
  return _props;
}
