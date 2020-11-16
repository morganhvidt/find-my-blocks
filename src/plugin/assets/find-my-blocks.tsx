/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "theme-ui";
import { theme } from "../../theme";

import { useBlocks, useThrottledResizeObserver } from "../../hooks";
import { breakpoints } from "../../helpers/global";
import { windowWasReloaded } from "../../helpers/windowWasReloaded";

import { Layout } from "../../components/Layout";
import { Sidebar, SidebarOrder } from "../../components/Sidebar";
import { Settings } from "../../components/Settings";
import { CardList, CardOrder } from "../../components/CardList";
import { Box } from "../../components/Box";
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
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(getLocalStorageItem("active") || "");
  const [navOrder, setNavOrder] = useState<SidebarOrder>("az");
  const [showCoreBlocks, setShowCoreBlocks] = useState<boolean>(false);
  const [cardOrder, setCardOrder] = useState<CardOrder>("az");
  const [cards, setCards] = useState([]);
  const [blocks] = useBlocks();
  const { ref, width = 1 } = useThrottledResizeObserver(100);
  const hasBlocks = blocks != undefined && blocks.length > 1;

  useEffect(() => {
    if (windowWasReloaded() && hasBlocks) {
      if (localStorage.getItem("fmb_navOrder")) {
        setNavOrder(localStorage.getItem("fmb_navOrder") as SidebarOrder);
      }
      if (localStorage.getItem("fmb_cardOrder")) {
        setCardOrder(localStorage.getItem("fmb_cardOrder") as CardOrder);
      }
    }
  }, [blocks]);

  useEffect(() => {
    if (hasBlocks) {
      const activeBlock = blocks.find((block: Block) => block.name === active);
      if (activeBlock != undefined && activeBlock.posts.length > 0) {
        setCards(activeBlock.posts);
      }
    }
  }, [active]);

  console.log("rerender");

  const sidebarItems = blocks.map(({ name, posts }: Block) => ({
    name,
    count: posts.length,
  }));

  return (
    <ThemeProvider theme={theme}>
      <div ref={ref}>
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
              <Settings
                navOrder={navOrder}
                cardOrder={cardOrder}
                initialOpen={width >= breakpoints.large}
                showCoreBlocks={showCoreBlocks}
                onNavOrderChange={(val: SidebarOrder) => {
                  localStorage.setItem("fmb_navOrder", val);
                  setNavOrder(val);
                }}
                onCardOrderChange={(val: CardOrder) => {
                  localStorage.setItem("fmb_cardOrder", val);
                  setCardOrder(val);
                }}
                onShowCoreBlocksClick={(val) => setShowCoreBlocks(val)}
              />
            }
            cards={<CardList cards={cards} order={cardOrder} />}
          />
        )}
      </div>
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
};

ReactDOM.render(<FindMyBlocks />, document.querySelector("#find-my-blocks"));
