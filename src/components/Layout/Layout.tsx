import React from "react";
import classnames from "classnames";
import { Box } from "../Box";
import { Heading } from "../Heading";
import { Footer } from "../Footer";
import styles from "./Layout.module.css";
import { useThrottledResizeObserver } from "../../hooks";

interface LayoutProps {
  readonly title?: string | null;
  readonly sidebar?: React.ReactNode;
  readonly settings?: React.ReactNode;
  readonly cards?: React.ReactNode;
}

export const Layout = ({ sidebar, settings, title, cards }: LayoutProps) => {
  const { ref, width = 1 } = useThrottledResizeObserver();
  const isLarge = width >= 1215;
  const isXLarge = width >= 1475;
  const className = classnames(styles.layout, {
    [styles.large]: isLarge,
    [styles.xlarge]: isXLarge,
  });

  return (
    <div className={className} ref={ref}>
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
    </div>
  );
};
