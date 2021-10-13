import React from "react";
import classNames from "classnames";

import { Icon } from "../Icon";

// @ts-expect-error
import * as styles from "./Tag.module.css";

type TagVariations = "info" | "warning" | "error" | "default";
interface TagProps {
  icon?: string;
  variation: TagVariations;
  label: string;
}

export const Tag = ({ variation = "default", icon, label }: TagProps) => {
  const tagClass = classNames(styles.tag, styles[variation]);
  return (
    <div className={tagClass}>
      {icon && (
        <div className={styles.icon}>
          <Icon icon={icon} size={16} />
        </div>
      )}
      <div className={styles.label}>{label}</div>
    </div>
  );
};
