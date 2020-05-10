import { useState, useEffect } from "react";

export const useBlocks = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    fetch("/wp-json/find-my-blocks/blocks")
      .then((res) => res.json())
      .then(({ blocks }) => {
        setBlocks(blocks);
      });
  }, []);

  return [blocks];
};
