/** @jsx jsx */
import { useRef, useState } from "react";
import {
  jsx,
  Layout as BaseLayout,
  Main,
  Container,
  useColorMode,
  Box
} from "theme-ui";
import { Global } from "@emotion/core";
import { useConfig, } from "docz";
import {
  Sun,
  Github
} from "gatsby-theme-docz/src/components/Icons";

import global from "~theme/global";
import { Header } from "gatsby-theme-docz/src/components/Header";
import { Sidebar } from "gatsby-theme-docz/src/components/Sidebar";
import * as styles from "gatsby-theme-docz/src/components/Layout/styles";

// eslint-disable-next-line
export const Layout = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode();
  const [open, setOpen] = useState(false);
  const nav = useRef();
  const {
    repository,
    themeConfig: { showDarkModeSwitch }
  } = useConfig();

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <BaseLayout sx={{ "& > div": { flex: "1 1 auto" } }} data-testid="layout">
      <Global styles={global} />
      <Main sx={styles.main}>
        {showDarkModeSwitch && (
          <button sx={styles.headerButton} onClick={toggleColorMode}>
            <Sun size={15} />
          </button>
        )}
        {repository && (
          <Box sx={{ mr: 2 }}>
            <a
              href={repository}
              sx={styles.headerButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={15} />
            </a>
          </Box>
        )}
        <Header onOpen={() => setOpen(s => !s)} />
        <div sx={styles.wrapper}>
          <Sidebar
            ref={nav}
            open={open}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onClick={() => setOpen(false)}
          />

          <Container sx={styles.content} data-testid="main-container">
            {children}
          </Container>
        </div>
      </Main>
    </BaseLayout>
  );
};
