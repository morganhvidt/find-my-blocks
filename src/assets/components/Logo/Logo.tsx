/* eslint-disable max-len */
import React from "react";
import classnames from "classnames";
import styles from "./Logo.css";

export const Logo = () => {
  const logoClassName = classnames( styles.logo );

  return (
    <div className={logoClassName}>
      <LogoIcon />
      Find My Blocks
    </div>
  );
};

export const LogoIcon = () => (
  <svg viewBox="0 0 64 64">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#FDFDFD" data-bbox="18 18 64 64" data-color="1" data-type="shape" viewBox="18 18 64 64">
      <path d="M50.03 18v31.97H82V18H50.03zM66 24.98a9 9 0 019 9 9 9 0 01-9 9 9 9 0 01-9-9 9 9 0 019-9zM18 50.03V82h31.97V50.03H18zm15.99 7a9 9 0 019 9 9 9 0 01-9 9 9 9 0 01-9-9 9 9 0 019-9zM42.99 33.99a9 9 0 11-18 0 9 9 0 0118 0zM75.02 66.03a9 9 0 11-18 0 9 9 0 0118 0z"/>
      <path d="M50.03 18v31.97H82V18H50.03zM66 24.98a9 9 0 019 9 9 9 0 01-9 9 9 9 0 01-9-9 9 9 0 019-9zM18 50.03V82h31.97V50.03H18zm15.99 7a9 9 0 019 9 9 9 0 01-9 9 9 9 0 01-9-9 9 9 0 019-9zM42.99 33.99a9 9 0 11-18 0 9 9 0 0118 0zM75.02 66.03a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  </svg>
);
