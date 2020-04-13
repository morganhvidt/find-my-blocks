export * from "@theme/components/Sidebar/styles";
import * as styles from "@theme/components/Sidebar/styles";

export const wrapper = ({ open }) => ({
  ...styles.wrapper(open),
  p: 0,
  border: 0,
});

export const logo = {
  display: "block",
  mb: "2em",
};

export const container = {
  maxWidth: "300px",
  margin: "0 auto",
  padding: "2em 0",
};
