/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import { Fragment } from "react";
import { Global } from "@emotion/core";
import { useCurrentDoc } from "docz";
import t from "prop-types";
import global from "gatsby-theme-docz/src/theme/global";
import { Footer } from "@fmb/components/Footer";
import { ActionBar } from "../ActionBar";
import { Sidebar } from "../Sidebar";
import * as styles from "./styles";

export const Layout = ({ children }) => {
  const { demo } = useCurrentDoc();

  return (
    <Fragment>
      <Global styles={global} />
      <Box sx={styles.layout}>
        <Box sx={styles.actions}>
          <ActionBar />
        </Box>
        {!demo && (
          <Box sx={styles.navigation}>
            <Sidebar />
          </Box>
        )}
        <main sx={styles.content} data-tesid="content">
          <Container sx={{ variant: "styles.Container" }}>{children}</Container>
          <Box sx={styles.footer}>
            <Footer />
          </Box>
        </main>
      </Box>
    </Fragment>
  );
};

Layout.propTypes = {
  children: t.oneOfType([t.arrayOf(t.element), t.element]),
};
