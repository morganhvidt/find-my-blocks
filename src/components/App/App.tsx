/** @jsx jsx */
import { jsx, ThemeProvider, Box } from "theme-ui";
import { useReducer } from "react";
import { Block } from "./app.types";
import { localStorageReducer } from "./localStorageReducer";

import { Sidebar } from "../../components/Sidebar";
import { Heading } from "../../components/Heading";
import { Settings } from "../../components/Settings";
import { CardList } from "../../components/CardList";
import { Footer } from "../../components/Footer";

import { sortSidebarItems } from "../../helpers/sortSidebarItems";
import { sortCardItems } from "../../helpers/sortCardItems";
import { getLocalStorageItem } from "../../helpers/getLocalStorageItem";

import * as styles from "./style";

export const theme = {
  colors: {
    background: "#f1f1f1",
    color: "#444",
    primary: "#ff4b3e",
    grey: "#e2e4e7",
    greyLight: "#fafafa",
    tags: {
      default: {
        bg: "#fafafa",
        text: "text",
        border: "#e2e4e7",
        icon: "white",
      },
      info: {
        bg: "#e5f5fa",
        text: "#29809a",
        border: "#bbe6f3",
        icon: "#beeffe",
      },
      warning: {
        bg: "#f8efae",
        text: "#7d6f04",
        border: "#eed202",
        icon: "#eed202",
      },
      error: {
        bg: "#ff4b3e",
        text: "#fafafa",
        border: "#eb756d",
        icon: "#eb756d",
      },
    },
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
  // @ts-ignore
  const [state, dispatch] = useReducer(localStorageReducer, {
    activeBlock: getLocalStorageItem("activeBlock"),
    navOrder: getLocalStorageItem("navOrder"),
    cardOrder: getLocalStorageItem("cardOrder"),
    showCoreBlocks: getLocalStorageItem("showCoreBlocks"),
  });

  const sidebarItems = blocks
    .filter((block) => {
      if (!state.showCoreBlocks) {
        return (
          !block.name.includes("core/") && !block.name.includes("core-embed/")
        );
      }
      return true;
    })
    .map((block) => ({
      name: block.name,
      count: block.posts.length,
    }));

  const activeItem = blocks.find((block) => block.name === state.activeBlock);
  const cards = activeItem ? activeItem.posts : [];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.app}>
        <Box sx={styles.sidebar}>
          <Sidebar
            items={sortSidebarItems(sidebarItems, state.navOrder)}
            activeBlock={state.activeBlock}
            onClick={handleSidebarClick}
          />
        </Box>
        {state.activeBlock && (
          <Box sx={styles.heading}>
            <Heading>{state.activeBlock}</Heading>
          </Box>
        )}
        <Box>
          <CardList cards={sortCardItems(cards, state.cardOrder)} />
        </Box>
        <Box>
          <Settings onChange={handleSettingsChange} state={state} />
        </Box>
        <Box sx={styles.footer}>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );

  function handleSidebarClick(blockName: string) {
    // @ts-ignore
    dispatch({ type: "activeBlock", value: blockName });
  }

  function handleSettingsChange(value: any) {
    // @ts-ignore
    dispatch(value);
  }
}
