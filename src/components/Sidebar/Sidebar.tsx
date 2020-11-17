/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useState } from "react";

import {
  Card as WPCard,
  CardBody,
  CardDivider,
  Notice,
} from "@wordpress/components";

import { Logo } from "../Logo";
import { InputText } from "../InputText";
import { NavigationItem } from "../NavigationItem";

export interface MenuItem {
  readonly name: string;
  readonly count: number;
}

interface SidebarProps {
  readonly items: Array<MenuItem>;
  readonly activeBlock: string;
  onClick(blockName: string): void;
}

export function Sidebar({ items, activeBlock, onClick }: SidebarProps) {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) => {
    if (!query || query === "") {
      return true;
    }
    return item.name.includes(query);
  });

  return (
    <WPCard size="small">
      <CardBody size="large">
        <Box sx={{ textAlign: "center" }}>
          <Logo size={80} />
        </Box>
      </CardBody>
      <CardDivider />
      <CardBody>
        <Box sx={{ "*": { mb: `${0} !important` } }}>
          <InputText
            placeholder="Filter Blocks"
            onChange={setQuery}
            defaultValue={query}
          />
        </Box>
      </CardBody>
      <CardDivider />

      {/* Empty State */}
      {!filteredItems ||
        (filteredItems.length < 1 && (
          <CardBody>
            <Notice status="error" isDismissible={false}>
              No results found
            </Notice>
          </CardBody>
        ))}

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
