import * as colors from "../colors";

export const light = {
  plain: {
    fontFamily: "monospace",
    color: colors.wordpress,
    backgroundColor: colors.greyLightest,
    fontSize: 14,
    fontWeight: 500,
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#999988",
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["string", "attr-value"],
      style: {
        // peach like `@fmb/components`
        color: "#C80000",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        // grey like curly brackets
        color: colors.text,
      },
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted",
      ],
      style: {
        color: "#36acaa",
      },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        // blue like prop titles
        color: colors.wordpress,
      },
    },
    {
      types: ["function", "deleted", "tag"],
      style: {
        // yellow like `useState`
        color: "#047D60",
      },
    },
    {
      types: ["function-variable"],
      style: {
        color: "#6f42c1",
      },
    },
    {
      types: ["tag", "selector", "keyword"],
      style: {
        // pink like `import`
        color: "#9043b5",
      },
    },
  ],
};
