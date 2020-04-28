export * from "@theme/components/Layout/styles";
import * as styles from "@theme/components/Layout/styles";
import { media } from "../../theme/breakpoints";

export const main = {
  ...styles.main,
  background: "#fefefe",
};

export const wrapper = {
  ...styles.wrapper,
  gridTemplateColumns: "768px 1fr",

  [media.xlarge]: {
    gridTemplateColumns: "1fr 2fr",
  },
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
