/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useMenus, useCurrentDoc } from "docz";

import { MainLink } from "./MainLink";

import * as styles from "./styles";

export function Navigation() {
  const menus = useMenus();
  const doc = useCurrentDoc();
  console.log({ menus });

  return (
    <Box>
      {menus &&
        menus.map((menu) => {
          console.log({ menu });
          return (
            <Box sx={styles.wrapper} key={menu.id}>
              {menu.menu ? (
                "group"
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
