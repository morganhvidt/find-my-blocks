/** @jsx jsx */
import { jsx } from "theme-ui";

import { Box } from "@fmb/components/Box";
import { Link } from "@fmb/components/Link";

import * as styles from "./styles";

export const Footer = () => (
  <Box sx={styles.footer}>
    Developed by{" "}
    <Link url="https://eddysims.com" openInNewTab>
      Eddy Sims
    </Link>
    <Link
      url="https://find-my-blocks.eddysims.com/donate"
      icon="heart"
      openInNewTab
    >
      Make a donation
    </Link>
  </Box>
);
