/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useState } from "react";
import { MenuItem, useCurrentDoc } from "docz";
import { Icon } from "@fmb/components/Icon";
import { NavLink } from "./NavLink";
import * as styles from "./styles";

interface NavGroupProps {
  readonly group: MenuItem;
}

export function NavGroup({ group }: NavGroupProps) {
  const { name, menu } = group;
  const doc = useCurrentDoc();
  const [open, setOpen] = useState(doc.menu === name);

  return (
    <Box sx={styles.navgroup}>
      <Box sx={styles.heading} onClick={() => setOpen(!open)}>
        <Box sx={styles.icon}>
          <Icon icon={open ? "x" : "plus"} size={18} color="white" />
        </Box>
        {name}
      </Box>

      {open &&
        menu &&
        menu.map((menu) => {
          return (
            <Box key={menu.id} sx={styles.groupItem}>
              <NavLink item={menu} variation="secondary" />
            </Box>
          );
        })}
    </Box>
  );
}
