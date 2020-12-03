/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useState } from "react";
import { MenuItem, Heading } from "docz";

import { MainLink } from "./MainLink";

import * as styles from "./styles";

interface LinkGroupProps {
  readonly menu: MenuItem;
}

export function LinkGroup({ menu }: LinkGroupProps) {
  console.log({ menu });
  const [open, setOpen] = useState(true);

  return (
    <Box>
      <MainLink active={true} icon={open ? "x" : "plus"} onClick={handleClick}>
        {menu.name}
      </MainLink>
      {open && (
        <Box>
          {menu.menu &&
            menu.menu.map((group) => {
              return (
                <Box key={group.id}>
                  <Box>{group.name}</Box>
                  {/* {group.headings &&
                    group.headings.map((heading: Heading) => {
                      return (
                        <Box key={heading.slug}>{heading.value} - small</Box>
                      );
                    })} */}
                </Box>
              );
            })}
        </Box>
      )}
    </Box>
  );

  function handleClick() {
    setOpen(!open);
  }
}
