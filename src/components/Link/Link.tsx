import React from "react";

import { Icon } from "../Icon";
import { PropsWithChildren } from "react";

// @ts-expect-error
import * as styles from "./Link.module.css";

interface LinkProps {
  readonly url: string;
  readonly icon?: string;
}

export function Link({ url, icon, children }: PropsWithChildren<LinkProps>) {
  return (
    <a href={url} className={styles.link} target="_blank" rel="noreferrer">
      {icon && <Icon icon={icon} size={14} />}
      {children}
    </a>
  );
}
