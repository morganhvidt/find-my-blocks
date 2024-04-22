import { useState } from "@wordpress/element";
import { useFindMyBlocks } from "../../context/FindMyBlocksContext.js";
import style from "./BlockNavigation.module.css";
import { __ } from "@wordpress/i18n";

const BlockNavigation = ({}) => {
  const { finder, preferences } = useFindMyBlocks();
  const { setSelectedBlock } = preferences;
  const { foundBlocks, withFilters } = finder;
  const [currentActive, setCurrentActive] = useState(null);

  const filteredBlocks = withFilters(foundBlocks);

  const handleLinkClick = (blockName) => {
    setSelectedBlock(blockName);
    setCurrentActive(blockName);
  };

  return (
    <nav className={style.navigation}>
      <ul>
        {filteredBlocks.map((block) => (
          <li
            key={block.name}
            className={currentActive === block.name ? style.active : ""}
            onClick={() => handleLinkClick(block.name)}
          >
            {block.name}{" "}
            <span className={style.subtitle}>
              {__("Found in", "find-my-blocks")} {block.posts.length}{" "}
              {block.posts.length > 1
                ? __("locations", "find-my-blocks")
                : __("location", "find-my-blocks")}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BlockNavigation;
