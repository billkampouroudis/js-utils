export const defaultMinLength = 1;
export const defaultMaxLength = 100;
export const defaultMaxFileSize = 20; //Mb

export const defaultFileTypes = [
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'image/tiff',
  'image/webp',
  'image/bmp',
  'text/plain',
  'text/csv',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/pdf',
  'application/x-7z-compressed',
  'application/zip',
  'application/vnd.rar'
];
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const nameRegex = /^([^.<>!@#$+()/%&=*_-][^0-9]*)$/;
// eslint-disable-next-line no-useless-escape
export const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const lettersOnlyRegex = /^[a-zA-Z]+$/;

export const password = {
  length: 8
};

const locale = 'el';
const formMessages = require(`./messages`).default;

const Validator = {
  notEmpty: (inputValue) => {
    if (!!inputValue) {
      return true;
    }
    return { error: formMessages[locale].required };
  },
  minLength: (inputValue, min = defaultMinLength) => {
    if (inputValue.length > min) {
      return true;
    }
    return {
      error: formMessages[locale].minLength(min)
    };
  },
  maxLength: (inputValue, max = defaultMaxLength) => {
    if (inputValue.length < max) {
      return true;
    }
    return { error: formMessages[locale].maxLength(max) };
  },
  email: (inputValue) => {
    if (emailRegex.test(inputValue)) {
      return true;
    }
    return { error: formMessages[locale].email };
  },
  name: (inputValue) => {
    if (nameRegex.test(inputValue)) {
      return true;
    }
    return { error: formMessages[locale].name };
  },
  phone: (inputValue) => {
    if (!inputValue || phoneRegex.test(inputValue)) {
      return true;
    }
    return { error: formMessages[locale].phone };
  },
  file: (file) => {
    if (file) {
      const { size, type } = file;
      const sizeInMb = size / 1024 / 1024;
      if (sizeInMb > defaultMaxFileSize) {
        return { error: formMessages[locale].fileTooLarge('20Mb') };
      }

      if (!defaultFileTypes.includes(type)) {
        return { error: formMessages[locale].fileType };
      }
    }

    return true;
  },
  password: (inputValue) => {
    if (inputValue.length < password.length) {
      return { error: formMessages[locale].password.length(8) };
    }
    return true;
  },
  numeric: (inputValue) => {
    if (Number(inputValue)) {
      return true;
    }
    return { error: formMessages[locale].numeric };
  }
};
export default Validator;
