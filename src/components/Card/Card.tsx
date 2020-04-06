import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  title?: string;
  children: React.ReactNode | React.ReactNode[];
}

export const Card = ({ children, title }: CardProps) => {
  return (
    <div className={styles.card}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.body}>{children}</div>
    </div>
  );
};
