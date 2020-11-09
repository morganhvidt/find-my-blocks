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
    },
    "import/resolver": {
      alias: {
        map: [
          ["@fmb", "./src"],
        ],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
      }
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  plugins: ["react", "import", "typescript"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "typescript/no-unused-vars": "warn",
    "react/prop-types": "error",
    "import/no-default-export": "error",
    "import/no-named-default": "error",
  },
  overrides: [
    {
      files: [
        "**/doczrc.js",
      "./src/gatsby-theme-docz/**/*",
      "./src/pages/**/*"
      ],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
};
