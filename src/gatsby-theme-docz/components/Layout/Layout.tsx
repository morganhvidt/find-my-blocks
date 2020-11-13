/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import { PropsWithChildren } from "react";
import { Global } from "@emotion/core";
import { useCurrentDoc } from "docz";
import global from "gatsby-theme-docz/src/theme/global";
import { Footer } from "@fmb/components/Footer";
import { App } from "@fmb/components/App";
import { ActionBar } from "../ActionBar";
import { Sidebar } from "../Sidebar";
import * as styles from "./styles";

interface LayoutProps {}

export const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  const { isDemo } = useCurrentDoc();

  return (
    <Box sx={styles.layout}>
      <Global styles={global} />
      <Box sx={styles.actions}>
        <ActionBar />
      </Box>
      {!isDemo && (
        <Box sx={styles.navigation}>
          <Sidebar />
        </Box>
      )}
      <main sx={styles.content} data-tesid="content">
        <LayoutInternals isDemo={isDemo}>{children}</LayoutInternals>
        {!isDemo && (
          <Box sx={styles.footer}>
            <Footer />
          </Box>
        )}
      </main>
    </Box>
  );
};

interface LayoutInternalProps {
  isDemo: boolean;
}

function LayoutInternals({
  isDemo,
  children,
}: PropsWithChildren<LayoutInternalProps>) {
  const variant = isDemo ? "styles.Demo" : "styles.Container";

  return <Container sx={{ variant }}>{isDemo ? <Demo /> : children}</Container>;
}

function Demo() {
  return <App />;
}
