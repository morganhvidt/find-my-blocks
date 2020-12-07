/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import { PropsWithChildren, useState, Fragment } from "react";
import { Global } from "@emotion/core";

import { Footer } from "@fmb/components/Footer";

import { Sidebar } from "../Sidebar";
import { ActionBar } from "../ActionBar";

import global from "../../theme/global";
import * as styles from "./styles";

interface LayoutProps {}
export const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Fragment>
      <Global styles={global} />
      <Box sx={styles.main}>
        <Box sx={styles.actions}>
          <ActionBar onClick={handleClick} open={menuOpen} />
        </Box>
        <Box sx={styles.sidebar(menuOpen)}>
          <Sidebar />
        </Box>
        <Box sx={styles.content}>
          <Container sx={{ variant: "styles.Container" }}>{children}</Container>
          <Box sx={styles.footer}>
            <Footer />
          </Box>
        </Box>
      </Box>
    </Fragment>
  );

  function handleClick() {
    setMenuOpen(!menuOpen);
  }
};
