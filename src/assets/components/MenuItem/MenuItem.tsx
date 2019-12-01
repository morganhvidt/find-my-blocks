import React from "react";
import classnames from "classnames";
import styles from "./MenuItem.css";

import { Text } from "../Text";

interface MenuItemProps {
  title: string;
  count: number;
}
export const MenuItem = ({ title, count }: MenuItemProps) => {
  const menuItemClass = classnames( styles.menuItem );

  return (
    <a
      className={ menuItemClass }
      tabIndex={0}>

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
