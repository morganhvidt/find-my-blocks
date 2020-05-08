/* eslint-disable max-lines */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { useBlocks } from "../../hooks/blocks";
import { windowWasReloaded } from "../../helpers/windowWasReloaded";

import { Layout } from "../../components/Layout";
import { Sidebar, SidebarOrder } from "../../components/Sidebar";
import { Settings } from "../../components/Settings";
import { CardList, CardOrder } from "../../components/CardList";
import { Box } from "../../components/Box";
import { Loading } from "../../components/Loading";

import "./find-my-blocks.foundation.css";
import styles from "./find-my-blocks.css";

interface Block {
  name: String;
  posts: Array<String>;
}

const FindMyBlocks = () => {
  const [active, setActive] = useState<string | null>("");
  const [navOrder, setNavOrder] = useState<SidebarOrder>("az");
  const [showCoreBlocks, setShowCoreBlocks] = useState<boolean>(false);
  const [cardOrder, setCardOrder] = useState<CardOrder>("az");
  const [cards, setCards] = useState([]);
  const [blocks] = useBlocks();
  const hasBlocks = blocks != undefined && blocks.length > 1;

  useEffect(() => {
    if (windowWasReloaded() && hasBlocks) {
      if (localStorage.getItem("fmb_active")) {
        setActive(localStorage.getItem("fmb_active"));
      }
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

  if (!hasBlocks) {
    return (
      <Box className={styles.loading}>
        <Loading />
      </Box>
    );
  }

  return (
    <Layout
      title={active}
      sidebar={
        <Sidebar
          blocks={blocks}
          active={active}
          showCoreBlocks={showCoreBlocks}
          order={navOrder}
          onClick={(name) => {
            localStorage.setItem("fmb_active", name);
            setActive(name);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      }
      settings={
        <Settings
          navOrder={navOrder}
          cardOrder={cardOrder}
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
  );
};

ReactDOM.render(<FindMyBlocks />, document.querySelector("#find-my-blocks"));
