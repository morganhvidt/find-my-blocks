/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useState } from "react";

import { Heading } from "../Heading";
import { Sidebar } from "../Sidebar";
// import { Footer } from "../Footer";

import * as styles from "./styles";

interface AppProps {
  blocks: any;
}

export function App({ blocks }: AppProps) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("");

  /**
   * Create an array of blocks for the sidebar
   */
  const sidebar = blocks.map((block: any) => ({
    label: block.name,
    count: block.posts.length,
  }));

  return (
    <Box sx={styles.layout}>
      <Box sx={styles.column}>
        <Sidebar
          blocks={sidebar}
          query={query}
          onChange={handleSidebarInputChange}
          onClick={handleSidebarClick}
        />
      </Box>
      <Box sx={styles.content}>
        <Box>
          <Heading>{active}</Heading>
        </Box>
        <Box>content - {query}</Box>
        <Box sx={{ mt: 4 }}>{/* <Footer /> */}</Box>
      </Box>
      <Box sx={{ ...styles.column, mt: 5 }}>settings</Box>
    </Box>
  );

  function handleSidebarInputChange(value: string) {
    setQuery(value);
  }

  function handleSidebarClick(value: string) {
    setActive(value);
  }
}
