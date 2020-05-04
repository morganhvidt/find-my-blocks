import React from "react";
import classnames from "classnames";
import styles from "./NavigationItem.module.css";

import { Icon } from "../Icon";

interface NavigationItemProps {
  label: String;
  postCount?: Number;
  active?: Boolean;
  onClick?(): void;
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
    <a className={buttonClass} onClick={() => onClick()}>
      <span className={labelClass}>{label}</span>
      {postCount && `Found in ${postCount} post${postCount !== 1 && "s"}`}
      <Icon icon="arrow-right" />
    </a>
  );
};
