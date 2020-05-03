import React, { useState } from "react";
import styles from "./InputText.module.css";

interface InputTextProps {
  readonly placeholder?: string;
  readonly defaultValue?: string;
  onChange(val: string): void;
}

export const InputText = ({
  placeholder,
  defaultValue,
  onChange = () => null,
}: InputTextProps) => {
  const [value, setValue] = useState(defaultValue || "");
  const handleOnChange = (val: string) => {
    setValue(val);
    onChange(val || "");
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleOnChange(e.target.value)}
    />
  );
};
