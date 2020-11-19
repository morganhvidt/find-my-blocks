import React from "react";
import classnames from "classnames";

import { Icon } from "../Icon";

import styles from "./Tag.module.css";

export type TagVariations = "info" | "warning" | "error" | "default";
interface TagProps {
  icon?: string;
  variation: TagVariations;
  children: React.ReactNode;
}

export const Tag = ({ icon, variation = "default", children }: TagProps) => {
  const tagClass = classnames(
    styles.tag,
    styles[variation],
    icon && styles.hasIcon
  );

  return (
    <div className={tagClass}>
      {icon && (
        <div className={styles.icon}>
          <Icon icon={icon} />
        </div>
      )}
      {children}
    </div>
  );
};
