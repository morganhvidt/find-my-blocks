/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import { logos } from "./logo.svg";

interface LogoProps {
  /**
   * The version of the logo to display
   */
  version?: "pin" | "full";
  /**
   * Set a custom color for the logo. This should be a
   * value that can be read by css
   */
  color?: "primary" | "white";
  /**
   * By default, the logo will fill its area. If you would like to specify
   * a size, you can do so with the size prop.
   */
  size?: number;
}

export const Logo = ({
  version = "full",
  color = "primary",
  size,
}: LogoProps) => {
  const createMarkup = (markup: string) => {
    return { __html: markup };
  };

  if (!logos[version]) {
    return <Fragment />;
  }

  return (
    <svg
      sx={{
        width: "auto",
        height: size,
        fill: color,
      }}
      viewBox={logos[version].viewbox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g dangerouslySetInnerHTML={createMarkup(logos[version]["markup"])} />
    </svg>
  );
};
