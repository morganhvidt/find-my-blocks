/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Fragment } from "react";
import { useMenus } from "docz";
import { NavGroup } from "./NavGroup";
import { NavLink } from "./NavLink";

interface MenuHeading {
  readonly slug: string;
  readonly value: string;
  readonly depth: number;
}

export function Navigation() {
  const menus = useMenus();

  if (!menus) {
    return <Fragment></Fragment>;
  }

  return (
    <Box>
      {menus.map((menu) => {
        /**
         * If there are multiple links to show, render
         * a NavGroup
         */
        if (Array.isArray(menu.menu)) {
          return <NavGroup group={menu} key={menu.id} />;
        }

        return <NavLink key={menu.id} item={menu} />;
      })}
    </Box>
  );
}
