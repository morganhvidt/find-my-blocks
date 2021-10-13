import React from "react";
import ReactDOM from "react-dom";

import { useBlocks } from "../../hooks";
import { Loading } from "../../components/Loading";

import { App } from "../../components/App";

const FindMyBlocks = () => {
  const [blocks] = useBlocks();

  return <div>{blocks.length > 0 ? <App blocks={blocks} /> : <Loader />}</div>;
};

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "75vh",
      }}
    >
      <Loading />
    </div>
  );
}

ReactDOM.render(<FindMyBlocks />, document.querySelector("#find-my-blocks"));
