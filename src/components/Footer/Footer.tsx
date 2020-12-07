/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Fragment } from "react";
import { Card, CardBody } from "@wordpress/components";

import { Link } from "../Link";

import * as styles from "./styles";

interface FooterProps {
  /**
   * @default 'app'
   */
  readonly version?: "app" | "website";
}

export const Footer = ({ version = "app" }: FooterProps) => {
  if (typeof window === "undefined") return <Fragment />;

  const footerStyles = {
    ...(version === "website" && styles.website),
  };

  return (
    <Card sx={footerStyles}>
      <CardBody>
        <Box sx={{ textAlign: "right" }}>
          Developed by <Link url="https://eddysims.com">Eddy Sims</Link>
          <Link url="https://find-my-blocks.eddysims.com/donate" icon="heart">
            Make a donation
          </Link>
        </Box>
      </CardBody>
    </Card>
  );
};
