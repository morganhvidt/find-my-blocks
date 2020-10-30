/** @jsx jsx */
import { Fragment, useRef, useState } from "react";
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
  // const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const nav = useRef();
  const { demo } = useCurrentDoc();

  return (
    <Fragment>
      <Global styles={global} />
      <Box sx={styles.layout}>
        <Box sx={styles.actions}>
          <ActionBar />
        </Box>
        {!demo && <Box sx={styles.navigation}>navigation</Box>}
        <Box sx={styles.content}>content</Box>
      </Box>
    </Fragment>
  );

  // return (
  //   <Box sx={{ "& > div": { flex: "1 1 auto" } }} data-testid="layout">
  //     <Global styles={global} />
  //     <Box tag="main" sx={styles.main}>
  //       {/* <Header onOpen={() => setOpen(s => !s)} /> */}
  //       <Box sx={styles.wrapper}>
  //         <Sidebar
  //           ref={nav}
  //           open={open}
  //           // query={query}
  //           onFocus={() => setOpen(true)}
  //           onBlur={() => setOpen(false)}
  //           onClick={() => setOpen(false)}
  //         />
  //         <Box
  //           sx={{
  //             display: "flex",
  //             flexDirection: "column",
  //             minHeight: "100vh",
  //             flex: "1",
  //             minWidth: 640,
  //           }}
  //         >
  //           <Box sx={styles.content}>{children}</Box>
  //           <Box sx={{ flex: "0 0 auto", mt: "auto", fontSize: "14px" }}>
  //             <Footer />
  //           </Box>
  //         </Box>
  //       </Box>
  //     </Box>
  //   </Box>
  // );
};

Layout.propTypes = {
  children: t.oneOfType([t.arrayOf(t.node), t.node]),
};
