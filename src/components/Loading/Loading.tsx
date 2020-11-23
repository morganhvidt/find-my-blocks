/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Logo } from "../Logo";

import * as styles from "./styles";

export const Loading = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={styles.loading}>
        <Logo size={25} version="pin" />
        <Logo size={25} version="pin" />
        <Logo size={25} version="pin" />
      </Box>
      <Box sx={{ mt: 2, fontWeight: "bold" }}>Loading</Box>
    </Box>
  );
};
