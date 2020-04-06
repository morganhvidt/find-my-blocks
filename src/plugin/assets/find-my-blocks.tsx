import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { useBlocks } from "../../hooks/blocks";
import { windowWasReloaded } from "../../helpers/windowWasReloaded";

import { Box } from "../../components/Box";
import { Logo } from "../../components/Logo";
import { NavigationItem } from "../../components/NavigationItem";
import { Card } from "../../components/Card";
import { Link } from "../../components/Link";

import "./find-my-blocks.foundation.css";
import styles from "./find-my-blocks.css";

interface Block {
  name: string;
  posts: Array<string>;
}

interface Post {
  id: number;
  title: string;
  postType: string;
  edit_url: string;
  post_url: string;
}

const App = () => {
  const [activeBlock, setActiveBlock] = useState<string>();
  const [blocks] = useBlocks();

  useEffect(() => {
    if (blocks.length > 0) {
      const sortedBlocks = blocks.sort((a: Block, b: Block) =>
        a.name > b.name ? 1 : -1
      );
      const localStorageBlock = localStorage.getItem("fmb_active");
      if (windowWasReloaded() && localStorageBlock) {
        setActiveBlock(localStorageBlock);
      } else {
        setActiveBlock(sortedBlocks[0].name);
      }
    }
  }, [blocks]);

  const activePosts =
    activeBlock &&
    blocks.find((post: Block) => post.name === activeBlock).posts;

  return (
    <Box className={styles.container}>
      <Box className={styles.menu}>
        <Box className={styles.logo}>
          <Logo size={85} />
        </Box>
        <Box className={styles.nav}>
          {blocks.length > 0 &&
            blocks.map((block: Block) => {
              return (
                <NavigationItem
                  key={block.name}
                  label={block.name}
                  postCount={block.posts.length}
                  active={block.name === activeBlock}
                  onClick={() => {
                    localStorage.setItem("fmb_active", block.name);
                    setActiveBlock(block.name);
                  }}
                />
              );
            })}
        </Box>
      </Box>
      <Box className={styles.content}>
        <Box>Settings</Box>
        <Box className={styles.cards}>
          {activePosts &&
            activePosts.map((post: Post) => {
              return (
                <Card key={post.id} title={post.title}>
                  <div>
                    Post Type: <strong>{post.postType}</strong>
                  </div>

                  <Link icon="edit" url={post.edit_url}>
                    Edit Post
                  </Link>
                  <Link icon="eye" url={post.post_url}>
                    View Post
                  </Link>

                  <p>reusable</p>
                </Card>
              );
            })}
        </Box>
        <Box className={styles.footer}>Footer</Box>
      </Box>
    </Box>
  );
};

ReactDOM.render(<App />, document.querySelector("#find-my-blocks"));
