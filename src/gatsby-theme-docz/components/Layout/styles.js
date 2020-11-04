export * from "gatsby-theme-docz/src/components/Layout/styles";
import * as styles from "gatsby-theme-docz/src/components/Layout/styles";
import { actionBarWidth } from "../ActionBar/styles";
import { sideBarWidth } from "../Sidebar/styles";

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
  position: "relative",
  flex: `0 0 ${sideBarWidth}px`,
};

export const wrapper = {
  ...styles.wrapper,
  display: "flex",
};

export const content = {
  flex: "1",
  background: "green",
};
