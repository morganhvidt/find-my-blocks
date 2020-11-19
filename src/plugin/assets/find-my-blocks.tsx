/* eslint-disable max-lines */
import React from "react";
import ReactDOM from "react-dom";

import { useBlocks } from "../../hooks";

import { App } from "../../components/App";

interface Block {
  name: String;
  posts: Array<String>;
}

const FindMyBlocks = () => {
  const [blocks] = useBlocks();
  return <App blocks={blocks} />;
};

ReactDOM.render(<FindMyBlocks />, document.querySelector("#find-my-blocks"));
