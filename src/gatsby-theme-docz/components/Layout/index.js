/** @jsx jsx */
import { Fragment } from "react";
import { jsx } from "theme-ui";
import { Global } from "@emotion/core";
import t from "prop-types";

import { ActionBar } from "../ActionBar";

import global from "gatsby-theme-docz/src/theme/global";
import { Box } from "@fmb/components/Box";
import { Footer } from "@fmb/components/Footer";
import { Sidebar } from "../Sidebar";
import * as styles from "./styles";
import { useCurrentDoc } from "docz";

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
        <Box sx={styles.content}>{children}</Box>
        <Footer />
      </Box>
    </Fragment>
  );
};

Layout.propTypes = {
  children: t.oneOfType([t.arrayOf(t.element), t.element]),
};
