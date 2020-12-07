const em = (px: number) => `${px / 16}em`;
const mountMedia = (val: number) => `@media screen and (min-width: ${em(val)})`;

export const breakpoints = {
  small: 640,
  medium: 920,
  large: 1120,
};

export const media = {
  mobile: mountMedia(breakpoints.small),
  tablet: mountMedia(breakpoints.medium),
  desktop: mountMedia(breakpoints.large),
};
