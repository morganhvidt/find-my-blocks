import React, { ReactType } from "react";

interface BoxProps {
  /**
   * The tag that you would like the box to render as
   * @default 'div'
   */
  tag?: ReactType;
  children: React.ReactNode;
  // Indexer
  [x: string]: any;
}

export const Box = (props: BoxProps) => {
  const Tag = props.tag || "div";
  return <Tag {...props}>{props.children}</Tag>;
};
