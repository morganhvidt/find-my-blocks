import { media } from "./breakpoints";

export const styles = {
  Container: {
    maxWidth: 700,
    fontSize: 2,
    py: 5,
    px: 4,

    [media.tablet]: {
      py: 5,
    },

    [media.desktop]: {
      py: 6,
    },

    a: {
      color: "text",
      textDecoration: "none",
      px: 1,
      transition: "box-shadow 300ms, color 300ms",
      boxShadow: (t: any) => `
        0 -2px 0 0 ${t.colors.primary} inset,
        0 -9px 0 0 ${t.colors.grey} inset
      `,

      "&:hover": {
        color: "primary",
        boxShadow: (t: any) => `
          0 -2px 0 0 ${t.colors.primary} inset,
          0 -2px 0 0 ${t.colors.grey} inset
        `,
      },
    },
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

  ul: {
    mb: 0,
    ml: 4,
    listStyle: "circle",
  },
  li: {
    mb: 1,
  },
};
