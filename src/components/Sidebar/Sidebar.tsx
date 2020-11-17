/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useState } from "react";

import { Card as WPCard, CardBody, CardDivider } from "@wordpress/components";

import { Logo } from "../Logo";
import { InputText } from "../InputText";

export function Sidebar() {
  const [query, setQuery] = useState("");

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
      <CardBody>menu | {query}</CardBody>
    </WPCard>
  );
}
