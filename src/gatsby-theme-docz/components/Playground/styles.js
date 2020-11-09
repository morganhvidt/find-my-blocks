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
  borderRadius: (t) => `${t.radii.radius}px ${t.radii.radius}px 0 0`,
};

export const editor = (theme) => ({
  ...styles.editor(theme),
  fontSize: 2,
  py: 3,
  mb: 4,
  borderRadius: (t) => ` 0 0 ${t.radii.radius}px ${t.radii.radius}px`,
});

export const previewWrapper = {
  ...styles.previewWrapper,

  // Draggable
  "~ span > div": {
    right: "-9px !important",
    boxShadow: (t) => `
      3px 0 0 0 ${t.colors.playground.bg} inset,
      6px 0 0 0 ${t.colors.playground.border} inset,
      9px 0 0 0 ${t.colors.playground.bg} inset
    `,
  },
};
