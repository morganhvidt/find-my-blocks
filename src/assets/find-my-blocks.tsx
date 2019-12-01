import React from "react";
import ReactDOM from "react-dom";

import { Layout } from "./components/Layout";
import { Menu } from "./components/Menu";
import { MenuItem } from "./components/MenuItem";
import { CardList, Card } from "./components/Card";

import "./find-my-blocks.css";

const App = () => (
  <Layout>
    <Menu>
      <MenuItem title="jobber/upcoming-event" count={3}/>
      <MenuItem title="jobber/dlp" count={100}/>
      <MenuItem title="jobber/eddy-sims" count={1}/>
    </Menu>
    <CardList title="jobber/eddy-sims">
      <Card title="Community" postType="features" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardList>
  </Layout>
);

ReactDOM.render(
  <App />,
  document.querySelector("#find-my-blocks")
);
