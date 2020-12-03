/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useState } from "react";
import { MenuItem, useCurrentDoc } from "docz";

import { MainLink } from "./MainLink";
import { SubLink } from "./SubLink";

import * as styles from "./styles";

interface LinkGroupProps {
  readonly menu: MenuItem;
}

export function LinkGroup({ menu }: LinkGroupProps) {
  const doc = useCurrentDoc();
  const [open, setOpen] = useState(doc.menu === menu.name);

  return (
    <Box>
      <MainLink active={true} icon={open ? "x" : "plus"} onClick={handleClick}>
        {menu.name}
      </MainLink>
      {open && (
        <Box sx={styles.subLinks}>
          {menu.menu &&
            menu.menu.map((group) => <SubLink key={group.id} item={group} />)}
        </Box>
      )}
    </Box>
  );

  function handleClick() {
    setOpen(!open);
  }
}
