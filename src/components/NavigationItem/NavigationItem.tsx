/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Icon } from "../Icon";

import * as styles from "./styles";

interface NavigationItemProps {
  readonly label: string;
  readonly count?: number;
  readonly active: boolean;
  onClick(value: string): void;
}

export const NavigationItem = ({
  label,
  count,
  active,
  onClick = () => undefined,
}: NavigationItemProps) => {
  return (
    <Box sx={styles.item(active)} onClick={handleClick}>
      {label}
      <Box sx={styles.count}>
        Found in {count} post{count !== 1 ? "s" : ""}
      </Box>
      <Icon icon="arrow-right" size={16} />
    </Box>
  );

  function handleClick() {
    onClick(label);
  }
};
