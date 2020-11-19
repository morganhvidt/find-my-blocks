export const item = (active: boolean) => ({
  bg: active ? "primary" : "white",
  cursor: active ? "default" : "pointer",
  color: active ? "white" : "inherit",
  pointerEvents: active ? "none" : "default",
  position: "relative",
  pl: 3,
  pr: 4,
  py: 2,
  fontSize: "12px",
  transition: "background 300ms",
  borderBottom: (t: any) => `1px solid ${t.colors.grey}`,

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

  "&:nth-of-type(2n+2)": {
    bg: active ? "primary" : "greyLight",
  },
});

export const name = {
  fontWeight: "bold",
  mb: "2px",
  fontSize: "13px",
};
