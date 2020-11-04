export const sideBarWidth = 500;

export const wrapper = {
  position: "fixed",
  top: 0,
  width: sideBarWidth,
  p: 0,
  border: 0,
  display: "flex",
  flex: "1",
  maxWidth: sideBarWidth,
  bg: "primary",
  height: "100vh",
  overflowY: "scroll",

  "&::-webkit-scrollbar": {
    display: "none",
  },
};

export const logo = {
  display: "block",
  mt: 6,
  mb: 4,
};

export const container = {
  margin: "0 auto",
  px: 3,
};
