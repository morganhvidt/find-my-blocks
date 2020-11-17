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

export interface MenuItem {
  readonly name: string;
  readonly count: number;
}

interface SidebarProps {
  items: Array<MenuItem>;
}

export function Sidebar({ items }: SidebarProps) {
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
      <CardBody>
        {/* Empty State */}
        {!filteredItems ||
          (filteredItems.length < 1 && (
            <div>
              <Notice status="error" isDismissible={false}>
                No results found
              </Notice>
            </div>
          ))}

        {/* Results State */}
        {filteredItems &&
          filteredItems.map(({ name, count }: MenuItem) => {
            return (
              <Box key={name}>
                name: {name} | count: {count}
              </Box>
            );
          })}
      </CardBody>
    </WPCard>
  );
}
