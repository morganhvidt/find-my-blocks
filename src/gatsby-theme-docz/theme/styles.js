import themeStyles from "gatsby-theme-docz/src/theme/styles";
import "../../../../src/plugin/assets/find-my-blocks.foundation.css";

const styles = {
  ...themeStyles,
  Container: {
    ...themeStyles.Container,
    maxWidth: 768,
    padding: "3em 6em",
  },
  inlineCode: {
    opacity: "0.75",
    background: "#eee",
    marginX: "2px",
    padding: "0.25em 0.5em",
    fontSize: ".875em",
    borderRadius: "2px",
    fontFamily: "Inconsolata",
  },
  table: {
    fontSize: 16,
    borderRadius: 0,
  },
  th: {
    bg: "#f1f1f1",
    p: "0.5rem 1rem !important",
    border: 0,
  },
  td: {
    p: "0.5rem 1rem !important",
    borderBottom: "1px solid #f1f1f1",

    ":first-child": {
      borderLeft: "1px solid #f1f1f1",
    },

    ":last-child": {
      borderRight: "1px solid #f1f1f1",
      textAlign: "right",
    },
  },
};

// eslint-disable-next-line import/no-default-export
export default styles;
