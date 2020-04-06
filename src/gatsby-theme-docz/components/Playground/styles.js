export * from "gatsby-theme-docz/src/components/Playground/styles";
import * as styles from "gatsby-theme-docz/src/components/Playground/styles";

export const editor = (theme) => ({
  ...styles.editor(theme),
  padding: 16,
  borderRadius: 0,
  border: 0,
});

export const previewWrapper = {
  ...styles.previewWrapper,
  outline: (t) => console.log(t),

  "> div": {
    border: 0,
    borderRadius: 0,
  },

  "+ div": {
    border: 0,
    borderRadius: 0,

    "* > textarea:focus": {
      outline: "none",
    },
  },

  "~ span > div": {
    backgroundColor: "#f1f1f1",
    right: "-9px !important",

    "::before": {
      content: "''",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "0",
      height: "90%",
      borderLeft: "solid 1px transparent",
      borderColor: "#fff",
    },
  },
};

export const preview = {
  ...styles.preview,
  padding: 16,
  background: "#f1f1f1",
  borderRadius: 0,
};
