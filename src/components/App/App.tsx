import React, { useReducer, useMemo } from "react";
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

// @ts-expect-error
import * as styles from "./App.module.css";

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

  const activeItem = blocks.find((block) => block.name === state.activeBlock);

  const cards = useMemo(() => {
    return sortCardItems(activeItem ? activeItem.posts : [], state.cardOrder);
  }, [state.activeBlock, state.cardOrder]);

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

  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <Sidebar
          items={sortSidebarItems(sidebarItems, state.navOrder)}
          activeBlock={state.activeBlock}
          onClick={handleSidebarClick}
        />
      </div>
      {state.activeBlock && (
        <div className={styles.heading}>
          <Heading>{state.activeBlock}</Heading>
        </div>
      )}
      <div>
        <CardList cards={cards} />
      </div>
      <div>
        <Settings onChange={handleSettingsChange} state={state} />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
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
