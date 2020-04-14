import React, { useState } from "react";

import { Box } from "../../../../components/Box";
import { Logo } from "../../../../components/Logo";
import { InputText } from "../../../../components/InputText";
import { Filter } from "../../../../components/Filter";
import { NavigationItem } from "../../../../components/NavigationItem";

import styles from "./Sidebar.module.css";

interface SidebarProps {
  blocks: object;
  activeBlock: string;
  handleClick(name: string): void;
}

export const Sidebar = ({
  blocks,
  activeBlock,
  handleClick = () => undefined,
}: SidebarProps) => {
  const [filter, setFilter] = useState<string>("");
  return (
    <Box className={styles.menu}>
      <Box className={styles.logo}>
        <Logo size={85} />
      </Box>
      <InputText
        placeholder="Filter Blocks"
        onChange={(val) => setFilter(val)}
      />
      <Box className={styles.nav}>
        <Filter
          data={blocks}
          value={filter}
          match="name"
          renderedResults={(results) => {
            const blocks = results.map(({ name, posts }) => (
              <NavigationItem
                key={name}
                label={name}
                postCount={posts.length}
                active={name === activeBlock}
                onClick={() => handleClick(name)}
              />
            ));

            return blocks;
          }}
        />
      </Box>
    </Box>
  );
};
