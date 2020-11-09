import moraga from "typography-theme-moraga";
import { toTheme } from "@theme-ui/typography";
import * as colors from "./colors";
import * as fonts from "./fonts";
import { space } from "./space";
import { fontSizes } from "./fontSizes";

moraga.headerWeight = 700;
const typography = toTheme(moraga);

export const theme = {
  ...typography,
  colors,
  fonts,
  fontSizes,
  space,
};
