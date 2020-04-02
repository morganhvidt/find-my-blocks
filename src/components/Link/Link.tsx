import React from "react";

import { Icon } from "../Icon";
import styles from "./Link.module.css";

interface LinkProps {
  url: string;
  icon?: string;
  openInNewTab?: boolean;
  children: React.ReactNode;
}

export const Link = ({
  url,
  icon,
  openInNewTab = false,
  children,
}: LinkProps) => {
  return (
    <a
      href={url}
      className={styles.link}
      target={openInNewTab ? "_blank" : "_self"}
    >
      {icon && <Icon icon={icon} />}
      {children}
    </a>
  );
};
