import React from "react";
import ReactDOM from "react-dom";

import { Layout } from "./components/Layout";
import { Menu } from "./components/Menu";
import { Content } from "./components/Content";
import { Logo } from "./components/Logo";

import "./find-my-blocks.css";

const App = () => (
  <Layout>
    <Menu>
      <Content>
        <Logo />
      </Content>
    </Menu>
  </Layout>
);

ReactDOM.render(
  <App />,
  document.querySelector("#find-my-blocks")
);
