export const heading = {
  textTransform: "uppercase",
  fontSize: 6,
  mb: 3,

  a: {
    boxShadow: "none",

    "&:hover": {
      boxShadow: "none",
    },
  },
};

export const link = {
  display: "flex",
  alignItems: "center",
  gap: 3,

  "> div": {
    display: "flex",
    alignItems: "center",
    ml: -5,
    transform: "translateY(100%)",
    opacity: 0,
    transition: "transform 300ms, opacity 300ms",
  },

  "&:hover > div": {
    transform: "translateY(0)",
    opacity: 1,
  },
};
