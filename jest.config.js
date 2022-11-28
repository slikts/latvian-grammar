// https://jestjs.io/docs/configuration

module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
}
