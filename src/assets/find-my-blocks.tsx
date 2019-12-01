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

  const activeBlockObj = blocks.filter( block => block.name === activeBlock );
  console.log("activeBlockObj", activeBlockObj);

  const ListOfCards = activeBlockObj.map( block => {
    return block.posts.map( post => (
      <Card
        key={ post.id  }
        title={ post.title }
        postType={ post.postType }
        editPost={ post.edit_url }
        viewPost={ post.post_url }
        isReusable={ post.isReusable }
        count={ post.count } />
    ) );
  });

  return (
    <Layout>
      <Menu>
        { MenuItems }
      </Menu>
      <CardList title={activeBlock}>
        { ListOfCards }
      </CardList>
    </Layout>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector("#find-my-blocks")
);
