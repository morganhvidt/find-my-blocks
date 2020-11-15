/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useState } from "react";
import { Card, CardBody, CardDivider } from "@wordpress/components";
import { Logo } from "../Logo";
import { InputText } from "../InputText";
import { NavigationItem } from "../NavigationItem";

interface SideBarBlock {
  label: string;
  count: number;
}

interface SidebarProps {
  blocks: Array<SideBarBlock>;
  /**
   * A value that allows you to filter what blocks are being displayed.
   */
  query: string;
  onChange(val: string): void;
  onClick(val: string): void;
}

/**
 * DONT FORGET THE EMPTY STATE
 */
export const Sidebar = ({ blocks, query, onChange, onClick }: SidebarProps) => {
  const [active, setActive] = useState("");

  const filteredItems = blocks.filter((item) => {
    if (!query || query === "") {
      return true;
    }
    return item.label.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <Card>
      <CardBody>
        <Box sx={{ textAlign: "center" }}>
          <Logo size={100} />
        </Box>
      </CardBody>
      <CardDivider />
      <CardBody>
        <Box sx={{ "*": { m: `${0} !important` } }}>
          <InputText
            placeholder="Filter blocks"
            defaultValue={query}
            onChange={handleChange}
          />
        </Box>
      </CardBody>
      <CardDivider />
      {filteredItems.length < 1 && <CardBody>No results found</CardBody>}
      {filteredItems.map((item) => {
        return (
          <NavigationItem
            key={item.label}
            label={item.label}
            count={item.count}
            isActive={active === item.label}
            onClick={handleClick}
          />
        );
      })}
    </Card>
  );

  function handleChange(val: string) {
    onChange(val);
  }

  function handleClick(val: string) {
    setActive(val);
    onClick(val);
  }
};
