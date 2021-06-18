/**
  * Adds the given CSS classes to an element.
  *
  * @param {string} standardClasses The CSS classes that will for sure be added
  * @param {object} conditionalClasses The CSS classes that will be rendered based on a condition
  * @example
  *  <div className={classNames('a, b, c', {
  *     'class-a clas-b': foo > bar
  *  })}>
  *     div content
  *  </div>
*/
export default function addClassNames(standardClasses = '', conditionalClasses = {}) {
  let finalClasses = standardClasses || '';

  for (const classes in conditionalClasses) {
    if (conditionalClasses[classes]) {
      finalClasses += ` ${classes}`;
    }
  }

  return finalClasses;
}
