/** @jsx jsx */
import { jsx, ThemeProvider, Box } from "theme-ui";
import { Block } from "./app.types";
import { Sidebar } from "../../components/Sidebar";

import * as styles from "./style";

const theme = {
  colors: {
    background: "#f1f1f1",
    color: "#444",
    primary: "#ff4b3e",
  },
  spacing: [0, 4, 8, 16, 24, 32, 40, 48],
};

interface AppProps {
  blocks: Array<Block>;
}

export function App({ blocks }: AppProps) {
  const sidebarItems = blocks.map((block) => ({
    name: block.name,
    count: block.posts.length,
  }));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.app}>
        <Sidebar items={sidebarItems} />
        <pre>{JSON.stringify(blocks, null, 2)}</pre>
      </Box>
    </ThemeProvider>
  );
}
