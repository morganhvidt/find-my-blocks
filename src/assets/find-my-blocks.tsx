import React from "react";
import ReactDOM from "react-dom";

import { Layout } from "./components/Layout";
import { Menu } from "./components/Menu";


import "./find-my-blocks.css";

const App = () => (
  <Layout>
    <Menu>
      A LIST
    </Menu>
  </Layout>
);

ReactDOM.render(
  <App />,
  document.querySelector("#find-my-blocks")
);
