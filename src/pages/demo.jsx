import React, { useState } from "react";

import { Layout } from "@fmb/components/Layout";
import { Sidebar } from "@fmb/components/Sidebar";
import { Settings } from "@fmb/components/Settings";

import data from "@fmb/data/data.json";

import "./demo.css";

const Page = () => {
  const [active, setActive] = useState();
  const [navOrder, setNavOrder] = useState("a-z");

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
          title="Find My Blocks"
          sidebar={
            <Sidebar
              blocks={data}
              active={active}
              order={navOrder}
              onClick={(name) => setActive(name)}
            />
          }
          settings={<Settings onNavOrderChange={(val) => setNavOrder(val)} />}
          cards={<div>Cards</div>}
        />
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Page;
