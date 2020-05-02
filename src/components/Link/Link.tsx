import React from "react";

import { Icon } from "../Icon";
import styles from "./Link.module.css";

interface LinkProps {
  /**
   * The URL that the link will point to.
   */
  url: string;
  /**
   * An Icon that can be added before the link
   */
  icon?: string;
  /**
   * Should the link open in a new tab
   */
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
