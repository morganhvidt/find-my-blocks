/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useState } from "react";
import { InputText } from "../InputText";
import { NavigationItem } from "../NavigationItem";
import { Card, CardBody, CardDivider } from "@wordpress/components";
import { Logo } from "../Logo";

export type SidebarOrder = "az" | "za" | "low-high" | "high-low";

interface Block {
  name: string;
  posts: Array<String>;
}

interface SidebarProps {
  readonly blocks: Block[];
  readonly showCoreBlocks?: boolean;
  readonly order?: SidebarOrder;
  onClick(name: string): void;
  onChange(value: string): void;
  query: string;
}

export const Sidebar = ({
  blocks,
  onClick = () => undefined,
  onChange,
  query,
}: SidebarProps) => {
  const [active, setActive] = useState("");
  const filteredItems = blocks.filter((block) => {
    if (!query || query === "") {
      return true;
    }
    return block.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <Card>
      <CardBody size="large">
        <Box sx={{ textAlign: "center" }}>
          <Logo size={80} />
        </Box>
      </CardBody>

      <CardDivider />

      <CardBody>
        <Box sx={{ "*": { m: `${0} !important` } }}>
          <InputText placeholder="Filter Blocks" onChange={handleChange} />
        </Box>
      </CardBody>

      <CardDivider />

      {filteredItems.length < 1 && <CardBody>No results found</CardBody>}
      {filteredItems.map((item) => {
        return (
          <NavigationItem
            key={item.name}
            label={item.name}
            count={item.posts.length}
            active={active === item.name}
            onClick={handleClick}
          />
        );
      })}
    </Card>
  );

  function handleChange(value: string) {
    onChange(value);
  }

  function handleClick(value: string) {
    setActive(value);
    onClick(value);
  }
};
