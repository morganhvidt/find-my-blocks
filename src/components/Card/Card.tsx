import React from "react";
import classnames from "classnames";
import styles from "./Card.css";

export const Card = () => {
  const cardClassNames = classnames( styles.card );
  return (
    <div className={ cardClassNames }>
            I am a card!!!
    </div>
  );
};
