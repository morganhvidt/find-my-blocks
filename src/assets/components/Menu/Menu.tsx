import React from "react";
import classnames from "classnames";
import styles from "./Menu.css";

interface MenuProps {
    children: React.ReactNode;
}

export const Menu = ({ children }: MenuProps) => {
  const menuClassName = classnames( styles.menu );

  return (
    <nav className={ menuClassName }>
      {children}
    </nav>
  );
};
