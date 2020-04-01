module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  plugins: ["react", "import"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "react/prop-types": "error",
    "import/no-default-export": "error",
    "import/no-named-default": "error"
  }
};
