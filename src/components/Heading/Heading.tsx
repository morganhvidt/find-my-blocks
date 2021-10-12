import React, { PropsWithChildren } from "react";

interface HeadingProps {
  readonly level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = ({
  children,
  level = 1,
}: PropsWithChildren<HeadingProps>) => {
  const Element = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return <Element style={{ textTransform: "uppercase" }}>{children}</Element>;
};
