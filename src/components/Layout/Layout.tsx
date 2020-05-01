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
      {sidebar && <Box className={styles.sidebar}>{sidebar}</Box>}
      <Box className={styles.main}>
        {settings && <Box className={styles.box}>{settings}</Box>}
        {title && (
          <Box className={styles.box}>
            <Heading>
              {title}
              <Logo size={16} version="pin" color="var(--fmb-red--light)" />
            </Heading>
          </Box>
        )}
        {cards && <Box className={styles.box}>{cards}</Box>}
        <Box className={styles.footer}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};
