import Validator from './validator';

/**
 * Runs the validation for all given inputs
 * @param {object} inputs
 */
export const validateAll = (inputs) => {
  let resultInputs = { ...inputs };

  for (let inputKey in inputs) {
    for (let ruleKey in inputs[inputKey].rules) {
      let result = {};

      if (inputs[inputKey].file) {
        result = Validator[ruleKey](
          inputs[inputKey].file,
          inputs[inputKey].rules[ruleKey]
        );
      } else {
        result = Validator[ruleKey](
          inputs[inputKey].value,
          inputs[inputKey].rules[ruleKey]
        );
      }

      resultInputs[inputKey] = {
        ...inputs[inputKey],
        errorMessage: result.error || ''
      };

      if (result.error) {
        break;
      }
    }
  }
  return resultInputs;
};

/**
 * Runs the validation for the given input
 * @param {object} input
 */
export const validateOne = (input) => {
  let tempInput = { ...input };

  for (let ruleKey in input.rules) {
    let result = {};

    if (input.file) {
      result = Validator[ruleKey](input.file, input.rules[ruleKey]);
    } else {
      result = Validator[ruleKey](input.value, input.rules[ruleKey]);
    }

    if (result.error) {
      return {
        ...tempInput,
        errorMessage: result.error
      };
    }
  }

  return { ...tempInput, errorMessage: '' };
};

/**
 * Checks if there are errors in the given form inputs
 * @param {object} inputsToCheck
 */
export const haveErrors = (inputsToCheck = {}) => {
  for (let inputKey in inputsToCheck) {
    if (!!inputsToCheck[inputKey].errorMessage) {
      return true;
    }
  }
  return false;
};

export const handleOnKeyUp = (e, key, inputs) => {
  let _input = {
    ...inputs[key],
    value: e.target.value
  };

  if (inputs[key].errorMessage || (!_input.value && inputs[key].value)) {
    _input = validateOne({
      ...inputs[key],
      value: e.target.value
    });
  }

  return {
    ...inputs,
    [key]: _input
  };
};

export const handleOnBlur = (e, key, inputs) => {
  return {
    ...inputs,
    [key]: validateOne({
      ...inputs[key],
      value: e.target.value
    })
  };
};
