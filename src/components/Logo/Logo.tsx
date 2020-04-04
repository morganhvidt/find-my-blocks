import React from "react";

import { logos } from "./logo.ignore";

interface LogoProps {
  version?: "pin" | "full";
  color?: string;
  /**
   * By default, the logo will fill its area. If you would like to specify
   * a size, you can do so with the size prop.
   */
  size?: number | string;
}

export const Logo = ({
  version = "full",
  color = "#FF4B3E",
  size,
}: LogoProps) => {
  const createMarkup = (markup: string) => {
    return { __html: markup };
  };

  if (!logos[version]) {
    return <React.Fragment />;
  }

  return (
    <svg
      style={{
        width: "auto",
        height: size,
      }}
      viewBox={logos[version].viewbox}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g dangerouslySetInnerHTML={createMarkup(logos[version]["markup"])} />
    </svg>
  );
};
