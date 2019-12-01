import React from "react";
import ReactDOM from "react-dom";

import { Layout } from "./components/Layout";
import { Menu } from "./components/Menu";
import { Content } from "./components/Content";
import { Logo } from "./components/Logo";
import { Separator } from "./components/Separator";

import "./find-my-blocks.css";

const App = () => (
  <Layout>
    <Menu>
      <Content>
        <Logo />
      </Content>
      <Separator />
    </Menu>
  </Layout>
);

ReactDOM.render(
  <App />,
  document.querySelector("#find-my-blocks")
);
