import React from "react";
import ReactDOM from "react-dom";

import { useBlocks } from "../../hooks/blocks";

import { Box } from "../../components/Box";
import { Card } from "../../components/Card";
import { Link } from "../../components/Link";
import { Icon } from "../../components/Icon";

import Logo from "./find-my-blocks.svg";

import "./find-my-blocks.foundation.css";
import styles from "./find-my-blocks.css";

const App = () => {
  const [blocks] = useBlocks();

  const menuItems =
    blocks.length > 0 &&
    blocks.map((block) => {
      return (
        <li key={block.name}>
          <Icon icon="arrow-right" /> {block.name}
          <div>Found in {block.posts.length} posts</div>
        </li>
      );
    });

  return (
    <Box className={styles.container}>
      <Box className={styles.menu}>
        <img src={Logo} alt="React Logo" />
        <ul>{menuItems}</ul>
      </Box>
      <Box className={styles.cards}>
        <Card title="Example Card">
          <p>Hello World</p>
          <Link icon="edit" url="#">
            Edit Post
          </Link>
          <Link icon="eye" url="#">
            View Post
          </Link>
        </Card>

        <Card title="Example Card">
          <p>Hello World</p>
          <Link icon="edit" url="#">
            Edit Post
          </Link>
          <Link icon="eye" url="#">
            View Post
          </Link>
        </Card>
      </Box>
    </Box>
  );
};

ReactDOM.render(<App />, document.querySelector("#find-my-blocks"));
