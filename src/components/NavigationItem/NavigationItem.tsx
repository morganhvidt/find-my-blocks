import React from "react";
import classNames from "classnames";

import { Icon } from "../Icon";

// @ts-expect-error
import * as styles from "./NavigationItem.module.css";

interface NavigationItemProps {
  readonly name: string;
  readonly count?: number;
  readonly active?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick(name: string): void;
}

export const NavigationItem = ({
  name,
  count,
  active,
  onClick,
}: NavigationItemProps) => {
  const itemClass = classNames(styles.item, {
    [styles.active]: active,
  });

  return (
    <div className={itemClass} onClick={handleClick}>
      <div className={styles.name}>{name}</div>
      Found in {count} post{count !== 1 ? "s" : ""}
      <Icon icon="arrow-right" size={16} />
    </div>
  );

  function handleClick() {
    onClick(name);
  }
};
