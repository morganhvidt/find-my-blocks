export const item = (isActive: boolean) => ({
  bg: isActive ? "primary" : "white",
  cursor: isActive ? "default" : "pointer",
  color: isActive ? "white" : "inherit",
  pointerEvents: isActive ? "none" : "default",
  position: "relative",
  pl: 4,
  pr: 6,
  py: 2,
  transition: "background 300ms",
  fontWeight: "bold",
  borderBottom: (t) => `1px solid ${t.colors.grey}`,

  "&:hover": {
    svg: {
      right: 3,
    },
  },

  "&:nth-child(2n+2)": {
    bg: isActive ? "primary" : "greyLightest",
  },

  svg: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    mt: "1px",
    right: 4,
    transition: "right 300ms",
  },
});

export const count = {
  fontWeight: "body",
  mt: "2px",
  fontSize: "13px",
};
