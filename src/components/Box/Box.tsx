import React from "react";

interface BoxProps {
  className?: string;
  tag?: string;
  style?: object;
  children: React.ReactNode;
}

export const Box = ({ className, tag = "div", children, style }: BoxProps) => {
  const Tag = tag;
  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
};
