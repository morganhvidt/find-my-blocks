import React from "react";
import classnames from "classnames";
import styles from "./Text.css";

interface TextProps {
    children: React.ReactNode;
}
export const Text = ({ children }: TextProps) => {
  const textClass = classnames( styles.text );

  return (
    <div className={ textClass }>
      { children }
    </div>
  );
};
