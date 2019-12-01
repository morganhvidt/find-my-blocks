module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      }
    },
    rules: {
      "indent": ["error", 2],
      "semi": 2,
      "quotes": ["error", "double"],
      "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
      'max-len': ["error", { "code": 80 }],
      'eol-last': ["error", "always"],
      'no-trailing-spaces': ["error"],
      "@typescript-eslint/explicit-function-return-type": 0,
      "no-unexpected-multiline": 2,
      "object-curly-spacing": ["error", "always"],
      "computed-property-spacing": ["error", "always"],
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  };