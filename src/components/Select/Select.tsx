import React from "react";
import classnames from "classnames";
import styles from "./Select.module.css";

interface SelectProps {
  onChange?(val: string): void;
  defaultValue?: string;
  children: React.ReactNode;
}

export const Select = ({
  children,
  onChange = () => undefined,
  defaultValue,
}: SelectProps) => {
  const selectClass = classnames(styles.styled, styles.select);
  return (
    <select
      className={selectClass}
      onChange={(e) => onChange(e.target.value)}
      value={defaultValue}
    >
      {children}
    </select>
  );
};
