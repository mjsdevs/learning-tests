// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  preset: '@shelf/jest-mongodb',
  clearMocks: true,
  verbose: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov'],
  testMatch: [
    '**/__tests__/**/*.test.[jt]s?(x)',
  ],
};
