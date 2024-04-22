import classes from "./Tag.module.css";
import { Icon } from "@wordpress/components";

const classNames = (...classes) => classes.filter(Boolean).join(" ");

/**
 * Tag
 * @param {string} variations  - "info" | "warning" | "error" | "default";
 * @returns
 */
export const Tag = ({ variation = "default", icon, label, help }) => {
  const tagClass = classNames(classes.tag, classes[variation]);

  return (
    <div className={tagClass}>
      {icon && <Icon icon={icon} className={classes.Icon} />}
      <div className={classes.label}>{label}</div>
      {help && <div className={classes.help}> {help}</div>}
    </div>
  );
};
