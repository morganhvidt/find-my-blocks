export * from "gatsby-theme-docz/src/components/NavLink/styles";
import * as styles from "gatsby-theme-docz/src/components/NavLink/styles";

export const link = {
  ...styles.link,
  position: "relative",
  fontWeight: "700",
  color: "#f1f1f1",
  letterSpacing: "0.05em",
  margin: 0,
  padding: "0.4375em 0",
  textTransform: "uppercase",

  "&.active": {
    color: "#f1f1f1",
  },

  svg: {
    position: "absolute",
    left: "-1.375em",
    top: "50%",
    transform: "translateY(-50%)",
  },
};

export const smallLink = {
  ...styles.smallLink,
  color: "#f1f1f1",
};
// export const link = {
//     my: 2,
//     display: 'block',
//     color: 'sidebar.navGroup',
//     textDecoration: 'none',
//     fontSize: 2,
//     '&.active': {
//       color: 'sidebar.navLinkActive',
//     },
//   }

//   export const smallLink = {
//     ...link,
//     ml: 3,
//     fontSize: 1,
//     position: 'relative',
//     color: 'sidebar.tocLink',
//     '&.active': {
//       color: 'sidebar.tocLinkActive',
//     },
//     '&.active::before': {
//       content: '""',
//       position: 'absolute',
//       display: 'block',
//       top: '2px',
//       left: -2,
//       height: '1rem',
//       backgroundColor: 'primary',
//       transition: 'width 200ms ease 0s',
//       width: '2px',
//       borderRadius: 1,
//     },
//   }
