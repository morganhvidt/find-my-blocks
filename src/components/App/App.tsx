/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useState } from "react";

import { Heading } from "../Heading";
import { InputText } from "../InputText";

import * as styles from "./styles";

export function App() {
  const [query, setQuery] = useState("");
  return (
    <Box sx={styles.layout}>
      <Box sx={styles.column}>
        <InputText onChange={setQuery} placeholder="Filter Blocks" />
      </Box>
      <Box sx={styles.content}>
        <Box>
          <Heading>acf/block name</Heading>
        </Box>
        <Box>content - {query}</Box>
        <Box>footer</Box>
      </Box>
      <Box sx={{ ...styles.column, mt: 5 }}>settings</Box>
    </Box>
  );
}
