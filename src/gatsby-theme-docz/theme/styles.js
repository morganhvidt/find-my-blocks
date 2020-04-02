import themeStyles from "gatsby-theme-docz/src/theme/styles";

const styles = {
  ...themeStyles,
  Container: {
    ...themeStyles.Container,
    maxWidth: 768,
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
