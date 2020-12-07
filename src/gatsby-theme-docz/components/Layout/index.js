/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useState } from "react";
import { Global } from "@emotion/core";
import t from "prop-types";

import global from "gatsby-theme-docz/src/theme/global";
import { Footer } from "@fmb/components/Footer";
import { Sidebar } from "../Sidebar";
import { ActionBar } from "../ActionBar";
import * as styles from "./styles";

export const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box sx={{ "& > div": { flex: "1 1 auto" } }} data-testid="layout">
      <Global styles={global} />
      <Box sx={styles.main}>
        <Box sx={styles.wrapper}>
          <ActionBar onClick={handleClick} />
          <Sidebar />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              flex: "1",
              minWidth: 640,
              bg: "background",
            }}
          >
            <Box sx={styles.content}>{children}</Box>
            <Box sx={{ flex: "0 0 auto", mt: "auto", fontSize: "14px" }}>
              <Footer />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  function handleClick() {
    setMenuOpen(!menuOpen);
  }
};

Layout.propTypes = {
  children: t.oneOfType([t.arrayOf(t.node), t.node]),
};
