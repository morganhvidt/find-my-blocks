export const item = (isActive: boolean) => ({
  bg: isActive ? "primary" : "white",
  cursor: isActive ? "default" : "pointer",
  color: isActive ? "white" : "inherit",
  pointerEvents: isActive ? "none" : "default",
  position: "relative",
  pl: 3,
  pr: 4,
  py: 3,
  fontWeight: "bold",
  borderBottom: (t) => `1px solid ${t.colors.border}`,
  transition: "background 300ms",

  svg: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    mt: "1px",
    right: 3,
    transition: "right 300ms",
  },

  "&:hover": {
    svg: {
      right: 2,
    },
  },

  "&:nth-child(2n+2)": {
    bg: isActive ? "primary" : "greyLight",
  },
});

export const count = {
  mt: "2px",
  fontSize: "13px",
};
