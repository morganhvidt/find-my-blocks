/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useState } from "react";
import { InputText } from "../InputText";
import { NavigationItem } from "../NavigationItem";
import { Card, CardBody, CardDivider } from "@wordpress/components";
import { Logo } from "../Logo";
import { getLocalStorageItem } from "../../helpers/getLocalStorageItem";
import { setLocalStorageItem } from "../../helpers/setLocalStorageItem";

export type SidebarOrder = "az" | "za" | "low-high" | "high-low";

interface SidbearItem {
  name: string;
  count: number;
}

interface SidebarProps {
  readonly blocks: Array<SidbearItem>;
  readonly query: string;
  onClick(name: string): void;
  onChange(value: string): void;
}

export const Sidebar = ({
  blocks,
  onClick = () => undefined,
  onChange,
  query,
}: SidebarProps) => {
  const [active, setActive] = useState(getLocalStorageItem("active") || "");
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

      <CardBody size="small">
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
            count={item.count}
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
    setLocalStorageItem("active", value);
    setActive(value);
    onClick(value);
  }
};
