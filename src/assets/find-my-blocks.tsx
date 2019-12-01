import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Layout } from "./components/Layout";
import { Menu } from "./components/Menu";
import { MenuItem } from "./components/MenuItem";
import { CardList, Card } from "./components/Card";

import "./find-my-blocks.css";

const App = () => {
  const [ blocks, setBlocks ] = useState<Array<string>>([]);
  const [ activeBlock, setActiveBlock ] = useState<string>("");

  const fetchPosts = async () => {
    await fetch( "/wp-json/find-my-blocks/blocks" )
      .then(res => res.json())
      .then(({ blocks }) => {
        setBlocks(blocks);
        setActiveBlock(blocks[ 0 ].name);
      });
  };

  useEffect( () => {
    fetchPosts();
  }, []);

  useEffect( () => {

  });

  const MenuItems = blocks.map(({ name, posts }) => {
    const handleClick = () => {
      console.log("hello");
      setActiveBlock(name);
    };

    return (
      <MenuItem
        key={name}
        title={name}
        count={posts.length}
        isActive={ activeBlock === name }
        onClick={ () => handleClick() } />
    );
  });

  return (
    <Layout>
      <Menu>
        { MenuItems }
      </Menu>
      <CardList title={activeBlock}>
        <Card title="Community" postType="features" />
      </CardList>
    </Layout>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector("#find-my-blocks")
);
