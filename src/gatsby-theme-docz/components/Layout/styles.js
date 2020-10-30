export * from "gatsby-theme-docz/src/components/Layout/styles";
import * as styles from "gatsby-theme-docz/src/components/Layout/styles";
import { media } from "../../theme/breakpoints";
import { actionBarWidth } from "../ActionBar/styles";

export const layout = {
  display: "flex",
  minHeight: "100vh",
};

export const actions = {
  position: "relative",
  flex: `0 0 ${actionBarWidth}px`,
  background: "primary",
};

export const navigation = {
  flex: "0 0 500px",
  background: "lightGrey",
};

export const wrapper = {
  ...styles.wrapper,
  display: "flex",
};

export const content = {
  flex: "1",
  background: "green",
};
