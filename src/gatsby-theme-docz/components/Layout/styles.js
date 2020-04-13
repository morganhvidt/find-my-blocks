export * from "gatsby-theme-docz/src/components/Layout/styles";
import * as styles from "gatsby-theme-docz/src/components/Layout/styles";

export const main = {
  ...styles.main,
  background: "#fefefe",
};

export const wrapper = {
  ...styles.wrapper,
  gridTemplateColumns: "3.5fr 6.5fr",
};

export const content = {
  ...styles.content,
  background: "none",
};

// export const main = {
//   display: 'flex',
//   flexDirection: 'column',
//   minHeight: '100vh',
// }

// export const wrapper = {
//   py: 0,
//   flex: 1,
//   display: 'grid',
//   gridTemplateColumns: '250px calc(1fr -250px',
//   minHeight: '100vh',
//   [media.tablet]: {
//     display: 'block',
//   },
// }

// export const content = {
//   backgroundColor: 'background',
//   position: 'relative',
//   maxWidth: 960,
//   py: 5,
//   px: 4,
//   variant: 'styles.Container',
//   [media.tablet]: {
//     py: 4,
//     px: 4,
//     pt: 5,
//   },
// }
