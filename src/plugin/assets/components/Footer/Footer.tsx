import React from "react";

import { Box } from "../../../../components/Box";
import { Card } from "../../../../components/Card";
import { Link } from "../../../../components/Link";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Card>
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
      </Card>
    </Box>
  );
};
