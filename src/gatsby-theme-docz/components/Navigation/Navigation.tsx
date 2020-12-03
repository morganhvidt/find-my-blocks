/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useMenus, useCurrentDoc } from "docz";

import { MainLink } from "./MainLink";

import * as styles from "./styles";
import { LinkGroup } from "./LinkGroup";

export function Navigation() {
  const menus = useMenus();
  const doc = useCurrentDoc();

  return (
    <Box>
      {menus &&
        menus.map((menu) => {
          return (
            <Box sx={styles.wrapper} key={menu.id}>
              {menu.menu ? (
                <LinkGroup menu={menu} />
              ) : (
                <MainLink
                  icon="chevrons-right"
                  active={menu.route === doc.route}
                  to={menu.route}
                >
                  {menu.name}
                </MainLink>
              )}
            </Box>
          );
        })}
    </Box>
  );
}
