import React from "react";
import { logos } from "./logo.svg";
import classNames from "classnames";

// @ts-expect-error
import * as styles from "./Logo.module.css";

interface LogoProps {
  version?: "pin" | "full";
  color?: "primary" | "white";
  size?: number;
}

export const Logo = ({
  version = "full",
  color = "primary",
  size,
}: LogoProps) => {
  const logoClass = classNames(styles.logo, styles[color]);
  const createMarkup = (markup: string) => {
    return { __html: markup };
  };

  if (!logos[version]) {
    return <></>;
  }

  return (
    <svg
      className={logoClass}
      height={size}
      viewBox={logos[version].viewbox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g dangerouslySetInnerHTML={createMarkup(logos[version]["markup"])} />
    </svg>
  );
};
