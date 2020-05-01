import React from "react";
import classnames from "classnames";
import styles from "./Select.module.css";

interface SelectProps {
  label: string;
  onChange?(val: string): void;
  defaultValue?: string | number | string[] | undefined;
  children: React.ReactNode;
}

export const Select = ({
  label,
  children,
  onChange = () => undefined,
  defaultValue,
}: SelectProps) => {
  const selectClass = classnames(styles.styled, styles.select);
  return (
    <label className={styles.label}>
      {label}
      <select
        className={selectClass}
        onChange={(e) => onChange(e.target.value)}
        value={defaultValue}
      >
        {children}
      </select>
    </label>
  );
};
