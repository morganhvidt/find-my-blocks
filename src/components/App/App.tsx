/** @jsx jsx */
import { jsx, ThemeProvider, Box } from "theme-ui";
import { useReducer, useState } from "react";
import { Block } from "./app.types";

import { Sidebar } from "../../components/Sidebar";
import { Heading } from "../../components/Heading";
import { Settings } from "../../components/Settings";
import { CardList } from "../../components/CardList";
import { Footer } from "../../components/Footer";

import { sortSidebarItems } from "../../helpers/sortSidebarItems";

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

interface State {
  activeBlock: string;
  navOrder: string;
  cardOrder: string;
  showCoreBlocks: boolean;
}

export type ActionTypes =
  | "showCoreBlocks"
  | "activeBlock"
  | "navOrder"
  | "cardOrder";
export interface Action {
  type: ActionTypes;
  value: string | boolean;
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "showCoreBlocks": {
      return { ...state, showCoreBlocks: action.value };
    }
    case "activeBlock": {
      console.log("set active local storage");
      return { ...state, activeBlock: action.value };
    }
    case "navOrder": {
      console.log("set nav order local storage");
      return { ...state, navOrder: action.value };
    }
    case "cardOrder": {
      console.log("set card order local storage");
      return { ...state, cardOrder: action.value };
    }
    default:
      throw Error();
  }
}

export function App({ blocks }: AppProps) {
  // Ignoring due to some wierdness with strings and booleans in a reducer.
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, {
    activeBlock: "",
    navOrder: "",
    cardOrder: "",
    showCoreBlocks: true,
  });

  console.log({ state });
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
          <Settings onChange={handleSettingsChange} />
        </Box>
        <Box sx={styles.footer}>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );

  function handleSidebarClick(blockName: string) {
    setActiveBlock(blockName);
    dispatch({ type: "activeBlock", value: blockName });
  }

  function handleSettingsChange(value: any) {
    dispatch(value);
  }
}
