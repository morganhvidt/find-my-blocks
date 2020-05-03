import React from "react";

interface OptionProps {
  value?: string;
  selected?: boolean;
  children: React.ReactNode;
}

const SelectOption = ({ value, selected, children }: OptionProps) => {
  return (
    <option value={value} selected={selected}>
      {children}
    </option>
  );
};

export { SelectOption as Option };
