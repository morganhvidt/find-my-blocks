/** @jsx jsx */
import { jsx } from "theme-ui";
// import classnames from "classnames";
// import styles from "./Heading.module.css";

interface HeadingProps {
  readonly level?: 1 | 2 | 3 | 4 | 5 | 6;
  readonly children?: React.ReactNode;
}

export const Heading = ({ children, level = 1 }: HeadingProps) => {
  // const HeadingClass = classnames(styles.heading, styles[`h${level}`]);
  const Tag = `h${level}`;
  return <Tag>{children}</Tag>;
};
