import React from "react";
import classnames from "classnames";
import styles from "./Layout.module.css";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const layoutClass = classnames( styles.layout);

  return(
    <main className={layoutClass}>
      { children }
    </main>
  );
};
