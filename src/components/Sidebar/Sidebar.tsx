/** @jsx jsx */
import { jsx } from "theme-ui";
import { Card as WPCard, CardBody, CardDivider } from "@wordpress/components";

export function Sidebar() {
  return (
    <WPCard size="small">
      <CardBody size="large">Logo</CardBody>
      <CardDivider />
      <CardBody>Search</CardBody>
      <CardDivider />
      <CardBody>Menu</CardBody>
    </WPCard>
  );
}
