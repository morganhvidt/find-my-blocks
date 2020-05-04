import React from "react";
import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.square}></div>
      <div className={styles.square}></div>
      <div className={styles.square}></div>
      <div className={styles.square}></div>
      <div className={styles.square}></div>
      <div className={styles.square}></div>
      <div className={styles.square}></div>
    </div>
  );
};
