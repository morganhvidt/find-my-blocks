import React from "react";
import classnames from "classnames";
import styles from "./MenuItem.module.css";

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

  const handleClick = () => {
    onClick && onClick();

    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };
    scrollToTop();

  };

  return (
    <a
      className={ menuItemClass }
      tabIndex={0}
      onClick={ () => handleClick() }
      onKeyDown={ ({ key }) => key === "Enter" && handleClick() }>

      {title}
      <PostCount count={count} />
    </a>
  );
};

interface PostCountProps {
  count: number;
}

const PostCount = ({ count }: PostCountProps) => {
  const postCountClass = classnames( styles.count );
  return (
    <div className={ postCountClass }>
      Found in {count} post{ count !== 1 ? "s" : "" }
    </div>
  );
};
