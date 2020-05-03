import React from "react";
import classnames from "classnames";
import styles from "./Select.module.css";

interface SelectProps {
  label?: string;
  onChange?(val: string): void;
  children: React.ReactNode;
}

export const Select = ({
  label,
  children,
  onChange = () => undefined,
}: SelectProps) => {
  const selectClass = classnames(styles.styled, styles.select);
  return (
    <label className={styles.label}>
      {label}
      <select
        className={selectClass}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="true"
      >
        {children}
      </select>
    </label>
  );
};
