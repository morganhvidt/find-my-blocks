import deepmerge from "deepmerge";
import themeStyles from "gatsby-theme-docz/src/theme/index";
import { theme } from "@fmb/theme/index";
console.log(theme);

export default deepmerge(themeStyles, theme);
