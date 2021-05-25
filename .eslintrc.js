module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'airbnb-base'
  ],
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    // General rules
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
    'comma-dangle': ['warn', 'never']
  }
};
