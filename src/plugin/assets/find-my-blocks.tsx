import React from "react";
import ReactDOM from "react-dom";

import { Card } from "../../components/Card";
import { Link } from "../../components/Link";

import "./find-my-blocks.css";

const App = () => {
  return (
    <div>
      <Card title="Example Card">
        <p>Hello World</p>
        <Link icon="edit" url="#">
          Edit Post
        </Link>
        <Link icon="eye" url="#">
          View Post
        </Link>
      </Card>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#find-my-blocks"));
