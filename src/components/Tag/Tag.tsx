/** @jsx jsx */
import { jsx, Box } from "theme-ui";

import { Icon } from "../Icon";

import * as styles from "./styles";

export type TagVariations = "info" | "warning" | "error" | "default";
interface TagProps {
  icon?: string;
  variation: TagVariations;
  label: string;
}

export const Tag = ({ variation = "default", icon, label }: TagProps) => {
  return (
    <Box sx={styles.tag(variation)}>
      {icon && (
        <Box sx={styles.icon(variation)}>
          <Icon icon={icon} size={16} />
        </Box>
      )}
      <Box sx={styles.label}>{label}</Box>
    </Box>
  );
};
