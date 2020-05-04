import React, { useState } from "react";

import { Box } from "../Box";
import { Logo } from "../Logo";
import { InputText } from "../InputText";
import { Filter } from "../Filter";
import { NavigationItem } from "../NavigationItem";
import { Tag } from "../Tag";

import styles from "./Sidebar.module.css";

export type SidebarOrder = "a-z" | "z-a" | "low-high" | "high-low";

interface Block {
  name: string;
  posts: Array<String>;
}

interface SidebarProps {
  readonly blocks: Block[];
  readonly active?: string | null;
  readonly order?: "a-z" | "z-a" | "low-high" | "high-low";
  onClick(name: string): void;
}

export const Sidebar = ({
  blocks,
  active,
  order = "a-z",
  onClick = () => undefined,
}: SidebarProps) => {
  const [filter, setFilter] = useState<string>("");

  return (
    <>
      <Box className={styles.logo}>
        <Logo size={85} />
      </Box>
      <InputText
        placeholder="Filter Blocks"
        onChange={(val) => setFilter(val)}
      />
      <Box className={styles.nav}>
        {blocks && (
          <Filter
            data={blocks}
            value={filter}
            match="name"
            renderedResults={(results) => {
              if (results == undefined || results.length < 1) {
                return (
                  <Box className={styles.empty}>
                    <Tag variation="error" icon="alert-octagon">
                      No results found
                    </Tag>
                  </Box>
                );
              }
              const sorted = sortResults(results, order);
              const blocks = sorted.map(({ name, posts }) => (
                <NavigationItem
                  key={name as string}
                  label={name}
                  postCount={posts.length}
                  active={name === active}
                  onClick={() => onClick(name)}
                />
              ));

              return blocks;
            }}
          />
        )}
      </Box>
    </>
  );
};

function sortResults(d: any, order: string) {
  if (order === "a-z") {
    d.sort((a: Block, b: Block) => (a.name > b.name ? 1 : -1));
  } else if (order === "z-a") {
    d.sort((a: Block, b: Block) => (a.name < b.name ? 1 : -1));
  } else if (order === "low-high") {
    d.sort((a: Block, b: Block) => (a.posts.length > b.posts.length ? 1 : -1));
  } else if (order === "high-low") {
    d.sort((a: Block, b: Block) => (a.posts.length < b.posts.length ? 1 : -1));
  } else {
    d.sort((a: Block, b: Block) => (a.name > b.name ? 1 : -1));
  }
  return d;
}
