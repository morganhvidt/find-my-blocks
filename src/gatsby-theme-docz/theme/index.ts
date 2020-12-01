import deepmerge from "deepmerge";
import themeStyles from "gatsby-theme-docz/src/theme/index";
import { theme } from "@fmb/theme/index";
import * as colors from "./colors";

export default deepmerge.all([themeStyles, { colors }, theme]);
