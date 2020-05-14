module.exports = {
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
