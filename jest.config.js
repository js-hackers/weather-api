const {defaults} = require('jest-config');

module.exports = {
  testPathIgnorePatterns: [
    ...defaults.testPathIgnorePatterns,
    '<rootDir>/private/',
  ],
};
