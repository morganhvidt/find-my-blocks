import React from "react";
import styles from "./Spinner.module.css";


interface SpinnerProps {
  caption: string;
}

export const Spinner = ({
  caption
}: SpinnerProps) => {

  return (
    <div className={ styles.spinner }>
      <div className={ styles.cube }>
        <div className={ styles.inner }>
          <div className={ `${styles.face} ${styles.face1}` }></div>
          <div className={ `${styles.face} ${styles.face2}` }></div>
          <div className={ `${styles.face} ${styles.face3}` }></div>
          <div className={ `${styles.face} ${styles.face4}` }></div>
          <div className={ `${styles.face} ${styles.face5}` }></div>
          <div className={ `${styles.face} ${styles.face6}` }></div>
        </div>
      </div>
      <div className={ styles.title }>{ caption }</div>
    </div>
  );
};
