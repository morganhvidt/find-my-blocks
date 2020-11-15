/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Link } from "../Link";
import * as styles from "./styles";

export function Footer() {
  const donateLink = "https://find-my-blocks.eddysims.com/donate";
  return (
    <Box sx={styles.footer}>
      Developed by{" "}
      <Link url="https://eddysims.com" external>
        Eddy Sims
      </Link>{" "}
      <Link url={donateLink} icon="heart" external>
        Make a donation
      </Link>
    </Box>
  );
}
