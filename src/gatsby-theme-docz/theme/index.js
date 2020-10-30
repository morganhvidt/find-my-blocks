import deepmerge from "deepmerge";
import theme from "gatsby-theme-docz/src/theme/index";
import * as colors from "./colors";

export default deepmerge(theme, {
  colors,
});
