import React from "react";
import { Box } from "../Box";
import { Heading } from "../Heading";
import styles from "./Layout.module.css";

interface LayoutProps {
  readonly title?: string;
  readonly sidebar?: React.ReactNode;
  readonly settings?: React.ReactNode;
  readonly cards?: React.ReactNode;
}

export const Layout = ({ sidebar, settings, title, cards }: LayoutProps) => {
  return (
    <Box className={styles.layout}>
      {sidebar && <Box className={styles.sidebar}>{sidebar}</Box>}
      <Box className={styles.main}>
        {settings && <Box className={styles.box}>{settings}</Box>}
        {title && (
          <Box className={styles.box}>
            <Heading>{title}</Heading>
          </Box>
        )}
        {cards && <Box className={styles.box}>{cards}</Box>}
        <Box className={styles.footer}>FOOTER</Box>
      </Box>
    </Box>
  );
};
