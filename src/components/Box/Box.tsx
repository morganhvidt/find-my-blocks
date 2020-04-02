import React from "react";

interface BoxProps {
  className?: string;
  tag?: "div" | "span";
  children: React.ReactNode;
}

export const Box = ({ className, tag = "div", children }: BoxProps) => {
  const Tag = tag;
  return <Tag className={className}>{children}</Tag>;
};
