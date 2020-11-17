/** @jsx jsx */
import { jsx, Box } from "theme-ui";

import { Icon } from "../Icon";

import * as styles from "./styles";

interface NavigationItemProps {
  readonly name: string;
  readonly count?: number;
  readonly active?: boolean;
  onClick(name: string): void;
}

export const NavigationItem = ({
  name,
  count,
  active,
  onClick,
}: NavigationItemProps) => {
  return (
    <Box sx={styles.item(active)} onClick={handleClick}>
      <Box sx={styles.name}>{name}</Box>
      Found in {count} post{count !== 1 ? "s" : ""}
      <Icon icon="arrow-right" size={16} />
    </Box>
  );

  function handleClick() {
    onClick(name);
  }
};
