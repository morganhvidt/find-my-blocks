import React from "react";
import classnames from "classnames";
import styles from "./Content.module.css";

interface ContentProps {
  spacing?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export const Content = ({ spacing = "medium", children }: ContentProps) => {
  const className = classnames(styles.content, styles[spacing]);
  return <div className={className}>{children}</div>;
};
