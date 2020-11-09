/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useCurrentDoc, Link } from "docz";
import { Logo } from "@fmb/components/Logo";
import { Navigation } from "../Navigation";
import * as styles from "./styles";

export function Sidebar() {
  return (
    <nav aria-label="main navigation">
      <Box sx={styles.wrapper} data-testid="sidebar">
        <Box sx={styles.container}>
          <Box sx={styles.logo}>
            <SidebarLogo />
          </Box>

          <Navigation />
        </Box>
      </Box>
    </nav>
  );
}

function SidebarLogo() {
  const { route } = useCurrentDoc();

  if (route === "/") {
    return <Logo size={125} color="white" />;
  }

  return (
    <Link to="/" aria-label="Find My Blocks | Home">
      <Logo size={125} color="white" />
    </Link>
  );
}
