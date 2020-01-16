import React, { useState } from "react";
import classnames from "classnames";
import styles from "./Input.module.css";

interface InputProps {
  placeholder: string;
  defaultValue?: string;
  onChange?(val: string): void;
}

export const Input = ({
  placeholder,
  defaultValue,
  onChange = () => null,
}: InputProps) => {
  const [value, setValue] = useState(defaultValue || "");
  const inputClassNames = classnames( styles.input );
  const handleOnChange = ( val: string ) => {
    setValue(val);
    onChange(val || "");
  };

  return(
    <input
      className={inputClassNames}
      type="text"
      placeholder={ placeholder }
      value={value}
      onChange={ (e) => handleOnChange(e.target.value) }
    />
  );
}
;
