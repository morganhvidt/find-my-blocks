import React from "react";
import { Card, CardBody } from "@wordpress/components";

import { Link } from "../Link";

// @ts-expect-error
import * as styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <Card>
      <CardBody>
        <div className={styles.footer}>
          Developed by <Link url="https://eddysims.com">Eddy Sims</Link>
          <Link url="https://www.buymeacoffee.com/eddysims" icon="heart">
            Make a donation
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};
