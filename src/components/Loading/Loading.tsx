import React from "react";
import { Logo } from "../Logo";

// @ts-expect-error
import * as styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <Logo size={25} version="pin" />
        <Logo size={25} version="pin" />
        <Logo size={25} version="pin" />
      </div>
      <div className={styles.text}>Loading</div>
    </div>
  );
};
