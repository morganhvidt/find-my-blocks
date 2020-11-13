import * as colors from "@fmb/theme/colors";
export * from "gatsby-theme-docz/src/components/Playground/styles";
import * as styles from "gatsby-theme-docz/src/components/Playground/styles";

export const wrapper = () => ({
  ...styles.wrapper(),
  width: "100%",
  bg: "none",
});

export const wrapperBorder = () => ({});

export const buttons = {
  display: "none",
};

export const preview = {
  m: 0,
  px: 3,
  py: 4,
  bg: "playground.bg",
};

export const editor = (theme) => ({
  ...styles.editor(theme),
  fontSize: 2,
  mt: "1px",
  mb: 4,
  bg: "transparent",
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${colors.WPBackground.replace(
    "#",
    ""
  )}' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
  border: (t) => `1px solid ${t.colors.WPBackground}`,
});

export const previewWrapper = {
  ...styles.previewWrapper,

  // Draggable
  "~ span > div": {
    right: "-10px !important",
    boxShadow: (t) => `
      3px 0 0 0 ${t.colors.playground.bg} inset,
      6px 0 0 0 ${t.colors.playground.border} inset,
      9px 0 0 0 ${t.colors.playground.bg} inset
    `,
  },
};
