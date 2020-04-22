export * from "@theme/components/Layout/styles";
import * as styles from "@theme/components/Layout/styles";
import { media } from "@theme/theme/breakpoints";

export const main = {
  ...styles.main,
  background: "#fefefe",
};

export const wrapper = {
  ...styles.wrapper,
  gridTemplateColumns: "3.5fr 6.5fr",
};

export const content = {
  ...styles.content,
  background: "none",
  width: "100%",
  margin: "0 auto",
  p: "3rem 4rem",

  [media.tablet]: {
    px: 5,
  },
};
