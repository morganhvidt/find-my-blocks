/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Card, CardBody } from "@wordpress/components";

import { Link } from "../Link";

export const Footer = () => {
  return (
    <Card>
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
