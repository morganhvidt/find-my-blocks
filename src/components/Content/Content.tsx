/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { PropsWithChildren } from "react";
import * as styles from "./styles";

interface ContentProps {
  spacing?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export const Content = ({
  spacing = "medium",
  children,
}: PropsWithChildren<ContentProps>) => {
  return <Box sx={styles.content(spacing)}>{children}</Box>;
};
