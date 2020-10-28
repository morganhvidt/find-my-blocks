export * from "gatsby-theme-docz/src/theme/breakpoints";
import * as bp from "gatsby-theme-docz/src/theme/breakpoints";

const em = (px) => `${px / 16}em`;
const mountMedia = (val) => `@media screen and (max-width: ${em(val)})`;

export const breakpoints = {
  ...bp.breakpoints,
  xlarge: 1550,
};

export const media = {
  ...bp.media,
  xlarge: mountMedia(breakpoints.xlarge),
};
