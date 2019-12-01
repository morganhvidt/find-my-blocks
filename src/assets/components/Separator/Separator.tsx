import React from "react";
import classnames from "classnames";
import styles from "./Separator.css";

export const Separator = () => {
  const separatorClass = classnames( styles.separator );

  return <hr className={ separatorClass } />;
};
