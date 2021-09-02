import { useState, useLayoutEffect } from "react";

declare var find_my_blocks_globals: any;

export const useBlocks = () => {
  const [blocks, setBlocks] = useState([]);

  useLayoutEffect(() => {
    let fetchUrl = "find-my-blocks/blocks";
    if (find_my_blocks_globals.site_url) {
      fetchUrl = find_my_blocks_globals.site_url + fetchUrl;
    }

    fetch(fetchUrl, {
      credentials: "include",
      headers: {
        "content-type": "application/json",
        "X-WP-Nonce": find_my_blocks_globals.nonce,
      },
    })
      .then((res) => res.json())
      .then(({ blocks }) => {
        setBlocks(blocks);
      });
  }, []);

  return [blocks];
};
