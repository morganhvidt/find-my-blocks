import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { useBlocks } from "../../hooks/blocks";
import { windowWasReloaded } from "../../helpers/windowWasReloaded";

import { Box } from "../../components/Box";
import { Loading } from "../../components/Loading";
import { Logo } from "../../components/Logo";
import { Heading } from "../../components/Heading";

import { Sidebar } from "./layout/Sidebar";
import { Settings } from "./layout/Settings";
import { ListOfCards } from "./layout/ListOfCards";
import { Footer } from "./layout/Footer";

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
  const [offsetHeight, setOffsetHeight] = useState<number>(0);
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

  useEffect(() => {
    const findMyBlocks = document.querySelector("#find-my-blocks");

    if (findMyBlocks) {
      const { top } = findMyBlocks.getBoundingClientRect();
      // Explain this 65!
      setOffsetHeight(offsetHeight + top + 65);
    }
  }, []);

  const activePosts =
    activeBlock &&
    blocks.find((post: Block) => post.name === activeBlock).posts;

  if (blocks && blocks.length < 1) {
    const style = {
      height: `calc(100vh - ${offsetHeight}px)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
    return (
      <div style={style}>
        <Loading />
      </div>
    );
  }

  return (
    <Box className={styles.container}>
      <Box className={styles.sidebar}>
        <Sidebar
          blocks={blocks}
          activeBlock={activeBlock}
          handleClick={(name: string) => {
            localStorage.setItem("fmb_active", name);
            setActiveBlock(name);
          }}
        />
      </Box>

      <Box className={styles.content}>
        <Settings />
        <Box className={styles.heading}>
          <Heading>
            <Logo version="pin" color="var(--fmb-red--light)" size={24} />
            {activeBlock}
          </Heading>
        </Box>
        <Box className={styles.cards}>
          {activePosts && <ListOfCards cards={activePosts} />}
        </Box>
        <Box className={styles.footer}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

ReactDOM.render(<App />, document.querySelector("#find-my-blocks"));
