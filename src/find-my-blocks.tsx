import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
    name?: string;
}
const App = ({name}: AppProps) => <div>Hello World - { name }</div>;

ReactDOM.render(
  <App />,
  document.querySelector("#find-my-blocks")
);
