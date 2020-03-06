module.exports = {
  env: {
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'no-underscore-dangle': 0,
  },
  plugins: [
    'json5',
  ],
};
