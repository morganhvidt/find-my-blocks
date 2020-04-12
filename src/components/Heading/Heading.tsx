import React from "react";
import classnames from "classnames";
import { Box } from "../Box";
import styles from "./Heading.module.css";

interface HeadingProps {
  readonly level?: 1 | 2 | 3 | 4 | 5 | 6;
  readonly children?: React.ReactNode;
}

export const Heading = ({ children, level = 1 }: HeadingProps) => {
  const HeadingClass = classnames(styles.heading, styles[`h${level}`]);
  return (
    <Box tag={`h${level}`} className={HeadingClass}>
      {children}
    </Box>
  );
};
