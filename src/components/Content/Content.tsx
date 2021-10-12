import React, { PropsWithChildren } from "react";

// @ts-expect-error
import * as styles from "./Content.module.css";

export const Content = ({ children }: PropsWithChildren<unknown>) => {
  return <div className={styles.content}>{children}</div>;
};
