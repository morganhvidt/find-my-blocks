import React from "react";
import classnames from "classnames";
import styles from "./NavigationItem.module.css";

import { Icon } from "../Icon";

interface NavigationItemProps {
  label: string;
  postCount?: number;
  active?: boolean;
  onClick?(): void;
}

export const NavigationItem = ({
  label,
  postCount,
  active,
  onClick = () => {
    return;
  },
}: NavigationItemProps) => {
  const buttonClass = classnames(styles.button, active && styles.active);
  const labelClass = classnames(styles.label);

  return (
    <a className={buttonClass} onClick={() => onClick()}>
      <span className={labelClass}>{label}</span>
      Found in {postCount} post{postCount !== 1 && "s"}
      <Icon icon="arrow-right" />
    </a>
  );
};
