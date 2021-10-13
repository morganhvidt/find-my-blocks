import React, { useState, Fragment } from "react";

import {
  Card as WPCard,
  CardBody,
  CardDivider,
  TextControl,
} from "@wordpress/components";

import { Logo } from "../Logo";
import { NavigationItem } from "../NavigationItem";
import { Icon } from "../Icon";

// @ts-expect-error
import * as styles from "./Sidebar.module.css";

export interface MenuItem {
  readonly name: string;
  readonly count: number;
}

interface SidebarProps {
  readonly items: Array<MenuItem>;
  readonly activeBlock: string;
  // eslint-disable-next-line no-unused-vars
  onClick(val: string): void;
}

export function Sidebar({ items, activeBlock, onClick }: SidebarProps) {
  const [query, setQuery] = useState("");

  if (typeof window === "undefined") return <Fragment />;

  const filteredItems = items.filter((item) => {
    if (!query || query === "") {
      return true;
    }
    return item.name.includes(query);
  });

  return (
    <WPCard size="small">
      <CardBody size="large">
        <div className={styles.logo}>
          <Logo size={80} />
        </div>
      </CardBody>
      <CardDivider />
      <CardBody>
        <TextControl
          className={styles.search}
          placeholder="Filter Blocks"
          onChange={setQuery}
          value={query}
        />
      </CardBody>
      <CardDivider />

      {/* Empty State */}
      {!filteredItems || (filteredItems.length < 1 && <EmptyState />)}

      {/* Results State */}
      {filteredItems &&
        filteredItems.map(({ name, count }: MenuItem) => {
          return (
            <NavigationItem
              key={name}
              name={name}
              count={count}
              active={activeBlock === name}
              onClick={handleClick}
            />
          );
        })}
    </WPCard>
  );

  function handleClick(blockName: string) {
    onClick(blockName);
  }
}

function EmptyState() {
  return (
    <CardBody>
      <div className={styles.logo}>
        <div className={styles.icon}>
          <Icon icon="frown" size={35} />
        </div>
        <div>No Results Found</div>
      </div>
    </CardBody>
  );
}
