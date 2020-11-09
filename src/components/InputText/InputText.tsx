import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { XOR } from "ts-xor";
import { TextareaControl, TextControl } from "@wordpress/components";

interface InputTextBaseProps {
  /**
   * Placeholder text to be displayed in an empty input
   */
  readonly placeholder: string;
  /**
   * Default value of the input
   */
  readonly defaultValue?: string;
  /**
   * Name of the field. Required for submitting a field
   */
  name?: string;
  onChange?(val: string): void;
}

interface InputTextMultilineProps extends InputTextBaseProps {
  /**
   * Display a textarea instead on input
   */
  readonly multiline: boolean;
}

interface InputTextInputProps extends InputTextBaseProps {
  readonly type?: "text" | "email";
}

export type InputTextProps = XOR<InputTextMultilineProps, InputTextInputProps>;

export const InputText = ({
  placeholder,
  defaultValue,
  multiline,
  type = "text",
  name,
  onChange,
}: InputTextProps) => {
  const [value, setValue] = useState(defaultValue || "");

  /**
   * We must check for window when using @wordpress/components
   *
   * In the case of InputText, we want to return a basic input.
   */
  if (typeof window === "undefined") {
    return (
      <input
        type="text"
        aria-label={placeholder}
        value={value}
        name={name}
        onChange={(e) => handleChange(e.target.value)}
      />
    );
  }

  const inputProps = {
    placeholder,
    value,
    name,
    onChange: handleChange,
    "aria-label": placeholder,
  };

  if (multiline) {
    return <TextareaControl {...inputProps} />;
  } else {
    return <TextControl {...inputProps} type={type} />;
  }

  function handleChange(value: string) {
    setValue(value);
    onChange && onChange(value);
  }
};
