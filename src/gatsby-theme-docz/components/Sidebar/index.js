/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React, { useRef, useEffect } from "react";
import { Global } from "@emotion/core";
import { jsx, Box } from "theme-ui";
import { useMenus, useCurrentDoc } from "docz";

import { Logo } from "@fmb/components/Logo";
import { NavLink } from "../NavLink";
import { NavGroup } from "../NavGroup";
import * as styles from "./styles";

export const Sidebar = React.forwardRef((props, ref) => {
  const { query } = props;
  const menus = useMenus({ query });
  const currentDoc = useCurrentDoc();
  const currentDocRef = useRef();
  useEffect(() => {
    if (ref.current && currentDocRef.current) {
      ref.current.scrollTo(0, currentDocRef.current.offsetTop);
    }
  }, []);
  return (
    <>
      <Box onClick={props.onClick} sx={styles.overlay(props)}>
        {props.open && <Global styles={styles.global} />}
      </Box>
      <Box ref={ref} sx={styles.wrapper(props)} data-testid="sidebar">
        <Box sx={styles.container}>
          <a href="/" sx={styles.logo}>
            <Logo size={125} color="#f1f1f1" />
          </a>
          {menus &&
            menus.map((menu) => {
              if (!menu.route)
                return <NavGroup key={menu.id} item={menu} sidebarRef={ref} />;
              if (menu.route === currentDoc.route) {
                return (
                  <NavLink key={menu.id} item={menu} ref={currentDocRef}>
                    {menu.name}
                  </NavLink>
                );
              }
              return (
                <NavLink key={menu.id} item={menu}>
                  {menu.name}
                </NavLink>
              );
            })}
        </Box>
      </Box>
    </>
  );
});
