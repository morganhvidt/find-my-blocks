/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Icon } from "../Icon";
import * as styles from "./styles";

interface NavigationItemProps {
  label: string;
  count: number;
  isActive: boolean;
  onClick(val: string): void;
}

export const NavigationItem = ({
  label,
  count,
  isActive,
  onClick,
}: NavigationItemProps) => {
  return (
    <Box sx={styles.item(isActive)} onClick={handleClick}>
      {label}
      <Box sx={styles.count}>
        Found in {count} post{count !== 1 ? "s" : ""}
      </Box>
      <Icon icon="arrow-right" size={20} />
    </Box>
  );

  function handleClick() {
    onClick(label);
  }
};
