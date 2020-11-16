/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useReducer, useState } from "react";
import { ThemeProvider } from "theme-ui";

import ReactDOM from "react-dom";

import { theme } from "../../theme";
import { useBlocks } from "../../hooks";

import { Layout } from "../../components/Layout";
import { Sidebar } from "../../components/Sidebar";
import {
  Settings,
  initialSettings,
  settingsReducer,
} from "../../components/Settings";
import { Loading } from "../../components/Loading";

import { getLocalStorageItem } from "../../helpers/getLocalStorageItem";
import { setLocalStorageItem } from "../../helpers/setLocalStorageItem";

import "./find-my-blocks.foundation.css";
import styles from "./find-my-blocks.css";

interface Post {
  id: number;
  title: string;
  edit_url: string;
  post_url: string;
  postType: string;
  nestedBlockType?: string;
  count: number;
  isNested: boolean;
  isReusable: boolean;
}

interface Block {
  name: string;
  posts: Array<Post>;
}

const FindMyBlocks = () => {
  const [blocks] = useBlocks();
  const hasBlocks = blocks != undefined && blocks.length > 1;
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(getLocalStorageItem("active") || "");

  // @ts-ignore
  const [settings, dispatch] = useReducer(settingsReducer, initialSettings);

  console.log("rerender");

  const sidebarItems = blocks
    .filter((block: Block) => {
      const isCoreBlock =
        block.name.includes("core/") || block.name.includes("core-embed/");
      if (!settings.showCoreBlocks && isCoreBlock) {
        return false;
      }

      return true;
    })
    .map(({ name, posts }: Block) => ({
      name,
      count: posts.length,
    }));

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {!hasBlocks ? (
          <Box className={styles.loading}>
            <Loading />
          </Box>
        ) : (
          <Layout
            title={active}
            sidebar={
              <Sidebar
                blocks={sidebarItems}
                active={active}
                onClick={handleMenuItemClick}
                query={query}
                onChange={setQuery}
              />
            }
            settings={
              <Settings state={settings} onChange={handleSettingsChange} />
            }
            cards={JSON.stringify(settings, undefined, 2)}
          />
        )}
      </Box>
    </ThemeProvider>
  );

  function handleMenuItemClick(value: string) {
    setLocalStorageItem("active", value);
    setActive(value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleSettingsChange(value: SettingsReducer) {
    dispatch(value);
  }
};

ReactDOM.render(<FindMyBlocks />, document.querySelector("#find-my-blocks"));
