import React from "react";

interface OptionProps {
  value?: string;
  children: React.ReactNode;
}

const SelectOption = ({ value, children }: OptionProps) => {
  return <option value={value}>{children}</option>;
};

export { SelectOption as Option };
