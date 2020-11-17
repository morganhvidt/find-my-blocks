/** @jsx jsx */
import { jsx, ThemeProvider, Box } from "theme-ui";
import { useState } from "react";
import { Block } from "./app.types";

import { Sidebar } from "../../components/Sidebar";
import { Heading } from "../../components/Heading";

import { sortSidebarItems } from "../../helpers/sortSidebarItems";

import * as styles from "./style";

const theme = {
  colors: {
    background: "#f1f1f1",
    color: "#444",
    primary: "#ff4b3e",
  },
  spacing: [0, 4, 8, 16, 24, 32, 40, 48],
  fonts: {
    heading:
      "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
  },
};

interface AppProps {
  blocks: Array<Block>;
}

export function App({ blocks }: AppProps) {
  const [activeBlock, setActiveBlock] = useState("");

  const sidebarItems = blocks.map((block) => ({
    name: block.name,
    count: block.posts.length,
  }));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.app}>
        <Box sx={styles.sidebar}>
          <Sidebar
            items={sortSidebarItems(sidebarItems, "count-low-high")}
            activeBlock={activeBlock}
            onClick={handleSidebarClick}
          />
        </Box>
        {activeBlock && (
          <Box sx={styles.heading}>
            <Heading>{activeBlock}</Heading>
          </Box>
        )}
        <Box sx={styles.content}>Content</Box>
        <Box sx={styles.settings}>Settings</Box>
        <Box sx={styles.footer}>Footer</Box>
      </Box>
      <pre>{JSON.stringify(blocks, null, 2)}</pre>
    </ThemeProvider>
  );

  function handleSidebarClick(blockName: string) {
    setActiveBlock(blockName);
  }
}
