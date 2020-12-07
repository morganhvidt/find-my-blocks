import deepmerge from "deepmerge";
import themeStyles from "gatsby-theme-docz/src/theme/index";

import { theme } from "@fmb/theme/index";
import { lineHeights } from "./lineHeights";
import { styles } from "./styles";

import fonts from "./fonts";
import fontWeights from "./fontWeights";

import * as colors from "./colors";

export default deepmerge.all([
  themeStyles,
  { colors, fonts, fontWeights, lineHeights, styles },
  theme,
]);
