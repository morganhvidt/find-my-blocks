import React from "react";
import classnames from "classnames";
import styles from "./MenuItem.css";

import { Text } from "../Text";

interface MenuItemProps {
  title: string;
  count: number;
  isActive: boolean;
  onClick?(): void;
}

export const MenuItem = ({
  title,
  count,
  isActive,
  onClick }: MenuItemProps) => {

  const menuItemClass = classnames(
    styles.menuItem,
    isActive && styles.active
  );

  return (
    <a
      className={ menuItemClass }
      tabIndex={0}
      onClick={ onClick }>

      {title}
      <PostCount count={count} />
    </a>
  );
};

interface PostCountProps {
  count: number;
}

const PostCount = ({ count }: PostCountProps) => {
  return (
    <Text>Found in {count} post{ count !== 1 ? "s" : "" }</Text>
  );
};
