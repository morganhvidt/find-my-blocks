import deepmerge from "deepmerge";
import moraga from "typography-theme-moraga";
import { toTheme } from "@theme-ui/typography";
import * as colors from "./colors";
import * as fonts from "./fonts";
import * as fontWeights from "./fontWeights";
import { space } from "./space";
import { fontSizes } from "./fontSizes";
import { radii } from "./radii";
import { styles } from "./styles";
import { prism } from "./prism";

moraga.headerWeight = 700;
const typography = toTheme(moraga);

export const theme = {
  ...deepmerge(typography, { styles }),
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  space,
  prism,
};
