import React from "react";

import { Layout } from "@fmb/components/Layout";
import "./demo.css";

const Page = () => {
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
          sidebar={<div>Sidebar!</div>}
          settings={<div>Settings</div>}
          cards={<div>Cards</div>}
        />
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Page;
