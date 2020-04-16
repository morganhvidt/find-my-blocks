import React from "react";

import { Card } from "../../../../components/Card";
import { Link } from "../../../../components/Link";

export const Footer = () => {
  return (
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
  );
};
