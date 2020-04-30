/** @jsx jsx */
import { useRef, useState } from "react";
import { jsx } from "theme-ui";
import { Global } from "@emotion/core";
import t from "prop-types";

import global from "@theme/theme/global";
import { Box } from "@fmb/components/Box";
import { InputText } from "@fmb/components/InputText";
import { Footer } from "@fmb/components/Footer";
import { Sidebar } from "../Sidebar";
import * as styles from "./styles";

export const Layout = ({ children }) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const nav = useRef();

  return (
    <Box sx={{ "& > div": { flex: "1 1 auto" } }} data-testid="layout">
      <Global styles={global} />
      <Box tag="main" sx={styles.main}>
        {/* <Header onOpen={() => setOpen(s => !s)} /> */}
        <Box sx={styles.wrapper}>
          <Sidebar
            ref={nav}
            open={open}
            query={query}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onClick={() => setOpen(false)}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Box>
              <InputText
                placeholder="Type to search..."
                onChange={(val) => setQuery(val)}
              />
            </Box>
            <Box sx={styles.content}>{children}</Box>
            <Box sx={{ flex: "0 0 auto", mt: "auto", fontSize: "14px" }}>
              <Footer />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  children: t.oneOfType([t.arrayOf(t.node), t.node]),
};
