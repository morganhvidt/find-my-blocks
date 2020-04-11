import React from "react";
import classnames from "classnames";
import styles from "./Heading.module.css";

interface HeadingProps {
  readonly level?: 1 | 2 | 3 | 4 | 5 | 6;
  readonly children?: React.ReactNode;
}

export const Heading = ({ children, level = 1 }: HeadingProps) => {
  const HeadingClass = classnames(styles[`h${level}`]);
  return <div className={HeadingClass}>{children}</div>;
};
