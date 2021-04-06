/**
  * Prevents a function to be called multiple times in the given time period.
  * 
  * @param {Function} func The function you want to run. 
  * @param {number} delay The amount of time before the function is allowed to run again. 
  * @returns {object}
  * @example
  *   const debounced = debounce(() => console.log('foo'), 1000);
  * 
  *   initBtn.addEventListener('click', debounced.init); // To run a function using debounce.
  *   stopBtn.addEventListener('click', debounced.stop); // To stop the debounce before it ends.
  * 
*/
export default function debounce(func, delay) {
  let inDebounce = null;

  return {
    init: function() {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(context, args), delay)
    },
    stop: function() {
      clearTimeout(inDebounce)
    }
  }
}
