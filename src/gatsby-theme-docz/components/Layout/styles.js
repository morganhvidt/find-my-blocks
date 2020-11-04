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
  display: "flex",
};

export const content = {
  flex: "1",
  minHeight: "100vh",
};

export const footer = {
  position: "fixed",
  zIndex: "0",
  bottom: 0,
  right: 0,
  width: `calc(100% - ${sideBarWidth}px - ${actionBarWidth}px)`,
};
