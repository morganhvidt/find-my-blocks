/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Layout } from "./components/Layout";
import { Menu } from "./components/Menu";
import { MenuItem } from "./components/MenuItem";
import { CardList } from "./components/CardList";

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

  const activeBlockPosts = blocks.filter( block => block.name === activeBlock );
  console.log( activeBlockPosts[ 0 ] !== undefined);
  // console.log(activeBlockPosts);
  return (
    <Layout>
      <Menu>
        { MenuItems }
      </Menu>
      <CardList
        cards={
          activeBlockPosts[ 0 ] !== undefined ?
            activeBlockPosts[ 0 ].posts : ""
        }
      />


    </Layout>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector("#find-my-blocks")
);
