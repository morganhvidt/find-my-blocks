import React from "react";
import classnames from "classnames";
import styles from "./NavigationItem.module.css";

import { Icon } from "../Icon";

interface NavigationItemProps {
  label: string;
  postCount?: Number;
  active?: Boolean;
  onClick(value: string): void;
}

export const NavigationItem = ({
  label,
  postCount,
  active,
  onClick = () => undefined,
}: NavigationItemProps) => {
  const buttonClass = classnames(styles.button, active && styles.active);
  const labelClass = classnames(styles.label);

  return (
    <a className={buttonClass} onClick={handleClick}>
      <span className={labelClass}>{label}</span>
      {postCount && `Found in ${postCount} post${postCount !== 1 ? "s" : ""}`}
      <Icon icon="arrow-right" />
    </a>
  );

  function handleClick() {
    onClick(label);
  }
};
