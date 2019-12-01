import React from "react";
import classnames from "classnames";
import styles from "./Menu.css";

import { Content } from "../Content";
import { Logo } from "../Logo";
import { Separator } from "../Separator";
import { Text } from "../Text";

interface MenuProps {
    children: React.ReactNode;
}

export const Menu = ({ children }: MenuProps) => {
  const menuClassName = classnames( styles.menu );

  return (
    <nav className={ menuClassName }>
      <Content>
        <Logo />
      </Content>

      <Separator />

      <Content>
        <Text>
          A tool to help you find what Gutenbergs blocks
          you have used on your website and where
          they are located.
        </Text>
      </Content>

      <Separator />

      {children}
    </nav>
  );
};
