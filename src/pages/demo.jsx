import React, { useState, useEffect } from "react";

import { Layout } from "@fmb/components/Layout";
import { Sidebar } from "@fmb/components/Sidebar";
import { Settings } from "@fmb/components/Settings";
import { CardList } from "@fmb/components/CardList";

import data from "@fmb/data/data.json";

import "./demo.css";

const Page = () => {
  const [active, setActive] = useState();
  const [navOrder, setNavOrder] = useState("a-z");
  const [cardOrder, setCardOrder] = useState("a-z");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const activeBlock = data.find((item) => item.name === active);
    if (activeBlock != undefined && activeBlock.posts.length > 0) {
      setCards(activeBlock.posts);
    }
  }, [active]);

  const wrapper = {
    width: "100%",
    minHeight: "100vh",
    background: "#f1f1f1",
  };

  const container = {
    width: "100%",
    maxWidth: "1260px",
    minHeight: "100vh",
    margin: "0 auto",
    padding: "2em",
  };

  return (
    <div style={wrapper}>
      <div style={container}>
        <Layout
          title={active}
          sidebar={
            <Sidebar
              blocks={data}
              active={active}
              order={navOrder}
              onClick={(name) => setActive(name)}
            />
          }
          settings={
            <Settings
              onNavOrderChange={(val) => setNavOrder(val)}
              onCardOrderChange={(val) => setCardOrder(val)}
            />
          }
          cards={<CardList cards={cards} order={cardOrder} />}
        />
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Page;
