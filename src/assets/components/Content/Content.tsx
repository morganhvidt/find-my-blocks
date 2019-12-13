import React from "react";
import classnames from "classnames";
import styles from "./Content.module.css";

interface ContentProps {
    spacing?: "small" | "medium" | "large";
    children: React.ReactNode;
}

export const Content = ({ spacing = "medium", children }: ContentProps) => {
  const contentClassNames = classnames(
    styles.content,
    spacing === "small" && styles.small,
    spacing === "medium" && styles.medium,
    spacing === "large" && styles.large,
  );

  return (
    <div className={contentClassNames}>
      {children}
    </div>
  );
};
