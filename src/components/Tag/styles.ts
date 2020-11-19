import { theme } from "../App/App";
import { TagVariations } from "./Tag";

export const tag = (variation: TagVariations) => ({
  bg: theme.colors.tags[variation].bg,
  border: `1px solid ${theme.colors.tags[variation].border}`,
  color: theme.colors.tags[variation].text,
  borderRadius: "radius",
  display: "flex",
  alignItems: "center",
  fontSize: "12px",
  fontWeight: "bold",
  mt: 1,

  "&:first-of-type": {
    mt: 0,
  },
});

export const label = {
  px: 2,
  py: 2,
};

export const icon = (variation: TagVariations) => ({
  py: 1,
  px: 2,
  alignSelf: "stretch",
  display: "flex",
  alignItems: "center",
  bg: theme.colors.tags[variation].icon,
});
