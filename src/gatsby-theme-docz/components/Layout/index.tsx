import React from "react";
import classnames from "classnames";
import { Layout as BaseLayout } from "theme-ui";
import { Global } from "@emotion/core";
import global from "~theme/global";

import styles from "./layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <BaseLayout sx={{ "& > div": { flex: "1 1 auto" } }} data-testid="layout">
      <Global styles={global} />
      <Main>
        <div>Sidebar</div>
        <div>Logo</div>
        <Container>
          {children}
        </Container>
      </Main>
    </BaseLayout>
  );
};

interface MainProps {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  const mainClass = classnames(styles.main);

  return (
    <main className={mainClass}>
      {children}
    </main>
  );
};

interface ContainerProps {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  const containerClass = classnames(styles.container);

  return (
    <div className={containerClass}>
      {children}
    </div>
  );
};
