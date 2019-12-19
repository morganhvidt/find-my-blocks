import React from "react";
import classnames from "classnames";
import styles from "./Typography.module.css";

interface TextProps {
    children: React.ReactNode;
}

export const Text = ({ children }: TextProps) => {
  const textClass = classnames(styles.text);
  return (
    <div className={textClass}>{children}</div>
  );
};

interface BoldProps {
    children: React.ReactNode;
}

export const Bold = ({ children }: BoldProps) => (
  <strong>{children}</strong>
);

interface HeadingProps {
    children: React.ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
  const headingClass = (styles.heading);
  return (
    <div className={headingClass}>
      {children}
    </div>
  );
};

interface LinkProps {
  readonly to: string;
  readonly openInNewWindow?: boolean;
  children: React.ReactNode;
}

export const Link = ({ children, to, openInNewWindow = true }: LinkProps) => {
  const linkClass = (styles.link);
  return (
    <a
      href={to}
      className={linkClass}
      target={ `_${ openInNewWindow ? "blank" : "self" }` }
    >
      {children}
    </a>
  );
};

