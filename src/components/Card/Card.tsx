import React, { useState } from "react";
import classnames from "classnames";
import { Icon } from "../Icon";
import styles from "./Card.module.css";

interface CardProps {
  title?: string;
  toggle?: boolean;
  initialOpen?: boolean;
  children: React.ReactNode | React.ReactNode[];
}

export const Card = ({
  children,
  title,
  toggle = false,
  initialOpen = true,
}: CardProps) => {
  const [open, setOpen] = useState<boolean>(initialOpen);
  const bodyClass = classnames(styles.body, !open && styles.hidden);

  return (
    <div className={styles.card}>
      {title && (
        <CardTitle
          title={title}
          toggle={toggle}
          open={open}
          onClick={() => setOpen(!open)}
        />
      )}
      <div className={bodyClass}>{children}</div>
    </div>
  );
};

interface CardTitleProps {
  title: string;
  open: boolean;
  toggle: boolean;
  onClick(): void;
}

const CardTitle = ({ open, toggle, title, onClick }: CardTitleProps) => {
  const titleClass = classnames(styles.title, toggle && styles.togglable);
  return (
    <div className={titleClass} onClick={() => toggle && onClick()}>
      {title}
      {toggle && <Icon icon={open ? "chevron-up" : "chevron-down"} />}
    </div>
  );
};
