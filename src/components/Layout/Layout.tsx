import React from "react";
import { Box } from "../Box";
import { Logo } from "../Logo";
import { Heading } from "../Heading";
import { Footer } from "../Footer";
import styles from "./Layout.module.css";

interface LayoutProps {
  readonly title?: string | null;
  readonly sidebar?: React.ReactNode;
  readonly settings?: React.ReactNode;
  readonly cards?: React.ReactNode;
}

export const Layout = ({ sidebar, settings, title, cards }: LayoutProps) => {
  return (
    <Box className={styles.layout}>
      <Box className={styles.logo}>
        <Logo size={75} />
      </Box>
      {sidebar && <Box className={styles.sidebar}>{sidebar}</Box>}
      {settings && <Box className={styles.settings}>{settings}</Box>}
      {title && (
        <Box className={styles.heading}>
          <Heading>{title}</Heading>
        </Box>
      )}
      {cards && <Box className={styles.cards}>{cards}</Box>}
      <Box className={styles.footer}>
        <Footer />
      </Box>
    </Box>
  );
};
