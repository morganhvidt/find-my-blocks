import { media } from "../../theme/breakpoints";

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
  p: `0 !important`,

  "> div": {
    display: "none",
    alignItems: "center",
    ml: -5,
    transform: "translateY(100%)",
    opacity: 0,
    transition: "transform 300ms, opacity 300ms",

    [media.tablet]: {
      display: "flex",
    },
  },

  "&:hover > div": {
    transform: "translateY(0)",
    opacity: 1,
  },
};
