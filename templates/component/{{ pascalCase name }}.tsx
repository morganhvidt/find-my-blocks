import React from "react";
import classnames from "classnames";
import styles from "./{{ pascalCase name }}.module.css";

interface {{ pascalCase name }}Props {
  size?: "small" | "normal" | "large";
  children: React.ReactNode;
}

export const {{ pascalCase name }} = ({ size = "normal", children }: {{ pascalCase name }}Props) => {
  const className = classnames(styles[size]);
  return <div className={className}>{children}</div>;
};
