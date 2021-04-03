export default function removeProps(propsToRemove = [], props = {}) {
  const _props = { ...props };

  for (let prop of propsToRemove) {
    delete _props[prop];
  }

  return _props;
}
