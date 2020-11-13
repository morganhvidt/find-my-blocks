/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Card, CardBody, CardDivider } from "@wordpress/components";
import { Logo } from "../Logo";
import { InputText } from "../InputText";

interface SidebarProps {
  onChange(val: string): void;
}

/**
 * DONT FORGET THE EMPTY STATE
 */

export const Sidebar = ({ onChange }: SidebarProps) => {
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
          <InputText placeholder="Filter blocks" onChange={handleChange} />
        </Box>
      </CardBody>

      <CardDivider />

      <CardBody>Menu</CardBody>
    </Card>
  );

  function handleChange(val: string) {
    onChange(val);
  }
};
