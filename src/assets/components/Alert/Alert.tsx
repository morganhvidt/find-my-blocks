import React from "react";
import classnames from "classnames";
import styles from "./Alert.module.css";

interface AlertProps {
  type?: string;
  children: React.ReactNode;
}

export const Alert = ({ type, children }: AlertProps) => {
  const alertClass = classnames(
    styles.alert,
    type === "success" && styles.success,
    type === "warning" && styles.warning,
    type === "error" && styles.error,
  );

  return (
    <div className={alertClass}>
      {children} - HI
    </div>
  );
};
