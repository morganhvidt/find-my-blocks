import deepmerge from "deepmerge";
import themeStyles from "gatsby-theme-docz/src/theme/index";
import { theme } from "@fmb/theme/index";
import fonts from "./fonts";
import fontWeights from "./fontWeights";
import * as colors from "./colors";

console.log({ colors });

export default deepmerge.all([
  themeStyles,
  { colors, fonts, fontWeights },
  theme,
]);
