import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Layout } from "./components/Layout";
import { Menu } from "./components/Menu";
import { MenuItem } from "./components/MenuItem";
import { CardList } from "./components/CardList";
import { Spinner } from "./components/Spinner";
import { Input } from "./components/Input";

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

  const MenuItems = blocks.map(({ name, posts }) => {
    const handleClick = () => {
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

  const activeBlockPosts = blocks.filter( block => {
    return block.name === activeBlock;
  });

  if ( blocks.length < 1 ) {
    return (
      <div style={
        {
          textAlign: "center",
          marginTop: "15rem",
        }
      }>
        <Spinner caption="Loading" />
      </div>
    );
  }

  return (
    <Layout>
      <Menu>
        <Input
          placeholder="Filter Blocks"
          onChange={ async (val) => {
            console.log(val);
          } }
        />
        { MenuItems }
      </Menu>
      <CardList
        cards={
          activeBlockPosts[ 0 ] !== undefined ? activeBlockPosts[ 0 ].posts : ""
        }
        title={ activeBlock }
      />
    </Layout>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector("#find-my-blocks")
);
