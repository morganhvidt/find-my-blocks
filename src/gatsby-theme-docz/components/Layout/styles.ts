import { actionBarWidth } from "../ActionBar/styles";
import { media } from "../../theme/breakpoints";

const sidebarWidth = 500;

export const main = {
  position: "relative",
  display: "flex",
  minHeight: "100vh",
};

export const actions = {
  width: actionBarWidth,
  position: "relative",
  zIndex: 2,
};

export const sidebar = (open: boolean) => ({
  position: "fixed",
  left: open ? actionBarWidth : `-${sidebarWidth}px`,
  top: 0,
  zIndex: 1,
  height: "100vh",
  width: `calc(90% - ${actionBarWidth})`,
  maxWidth: sidebarWidth,
  transition: "left 300ms",

  [media.desktop]: {
    position: "sticky",
    left: 0,
  },
});

export const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  bg: "background",
  opacity: ".75",
  zIndex: 1,

  [media.desktop]: {
    display: "none",
  },
};
export const content = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
};

export const footer = {
  mt: "auto",
  fontSize: 1,
};
