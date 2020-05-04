import React from "react";

import { Box } from "../Box";
import { Link } from "../Link";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <Box className={styles.footer}>
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
};
