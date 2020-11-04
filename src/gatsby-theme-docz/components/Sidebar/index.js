/** @jsx jsx */
import { Fragment } from "react";
import { jsx, Box } from "theme-ui";
import { useCurrentDoc, Link } from "docz";
import { Logo } from "@fmb/components/Logo";
import { Navigation } from "../Navigation";
import * as styles from "./styles";

export function Sidebar() {
  return (
    <Fragment>
      <Box sx={styles.wrapper} data-testid="sidebar">
        <Box sx={styles.container}>
          <Box sx={styles.logo}>
            <SidebarLogo />
          </Box>

          <Navigation />
        </Box>
      </Box>
    </Fragment>
  );
}

function SidebarLogo() {
  const { route } = useCurrentDoc();

  if (route === "/") {
    return <Logo size={125} color="white" />;
  }

  return (
    <Link to="/">
      <Logo size={125} color="#f1f1f1" />
    </Link>
  );
}
