/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useCurrentDoc, Link } from "docz";

import { Logo } from "@fmb/components/Logo";

import { Navigation } from "../Navigation";

import * as styles from "./styles";

export function Sidebar() {
  const { route } = useCurrentDoc();
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.logo}>
        {route === "/" ? (
          <Logo size={100} />
        ) : (
          <Link to="/">
            <Logo size={100} />
          </Link>
        )}
      </Box>
      <Box sx={styles.navigation}>
        <Navigation />
      </Box>
    </Box>
  );
}
