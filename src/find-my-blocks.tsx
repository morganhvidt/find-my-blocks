import React from "react";
import ReactDOM from "react-dom";

import { Card } from "./components/Card";

const App = () => <div><Card /></div>;

ReactDOM.render(
  <App />,
  document.querySelector("#find-my-blocks")
);
