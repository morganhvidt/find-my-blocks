/** @jsx jsx */
import { jsx, ThemeProvider, Box } from "theme-ui";
import { useState } from "react";
import { Block } from "./app.types";

import { Sidebar } from "../../components/Sidebar";
import { Heading } from "../../components/Heading";
import { Settings } from "../../components/Settings";
import { CardList } from "../../components/CardList";

import { sortSidebarItems } from "../../helpers/sortSidebarItems";

import * as styles from "./style";

const theme = {
  colors: {
    background: "#f1f1f1",
    color: "#444",
    primary: "#ff4b3e",
    grey: "#e2e4e7",
    greyLight: "#fafafa",
  },
  spacing: [0, 4, 8, 16, 24, 32, 40, 48],
  fonts: {
    heading:
      "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
  },
  radii: {
    radius: "3px",
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

  const activeItem = blocks.find((block) => block.name === activeBlock);
  const cards = activeItem ? activeItem.posts : [];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.app}>
        <Box sx={styles.sidebar}>
          <Sidebar
            items={sortSidebarItems(sidebarItems, "count-high-low")}
            activeBlock={activeBlock}
            onClick={handleSidebarClick}
          />
        </Box>
        {activeBlock && (
          <Box sx={styles.heading}>
            <Heading>{activeBlock}</Heading>
          </Box>
        )}
        <Box>
          <CardList cards={cards} />
        </Box>
        <Box>
          <Settings />
        </Box>
        <Box sx={styles.footer}>Footer</Box>
      </Box>
      <pre>{JSON.stringify(blocks, null, 2)}</pre>
    </ThemeProvider>
  );

  function handleSidebarClick(blockName: string) {
    setActiveBlock(blockName);
  }
}
