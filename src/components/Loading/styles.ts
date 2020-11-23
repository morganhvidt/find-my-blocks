import { keyframes } from "@emotion/core";

const hueRotate = keyframes({
  "0%": {
    filter: "hue-rotate(0deg)",
  },
  "100%": {
    filter: "hue-rotate(360deg)",
  },
});

export const loading = {
  animation: `${hueRotate.toString()} 6s linear infinite both`,

  svg: {
    mx: 1,
    animation: `${hueRotate.toString()} 6s linear infinite both`,

    "&:nth-of-type(2)": {
      animationDelay: "2s",
    },

    "&:nth-of-type(3)": {
      animationDelay: "4s",
    },
  },
};
