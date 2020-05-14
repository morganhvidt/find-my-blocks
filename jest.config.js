module.exports = {
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
