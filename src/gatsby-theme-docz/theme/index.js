import deepmerge from "deepmerge";
import gatsbyThemeDocz from "gatsby-theme-docz/src/theme/index";
import { theme } from "@fmb/theme";

console.log({ gatsbyThemeDocz, theme });

export default deepmerge.all([
  {
    // Settings below are taken directly from `gatsby-theme-docz`
    initialColorMode: "light",
    // Show errors above playground editor
    showLiveError: true,
    // Show preview of the code inside playground
    showLivePreview: true,
    // Show editor when a playground is rendered
    showPlaygroundEditor: true,
    // Show dark/light mode switch toggle in header
    showDarkModeSwitch: true,
    // Display edit this page button on every page
    showMarkdownEditButton: true,
    // Wrap the playground editor and preview in iframes to avoid style/script collisions
    useScopingInPlayground: false,
  },
  theme,
]);
