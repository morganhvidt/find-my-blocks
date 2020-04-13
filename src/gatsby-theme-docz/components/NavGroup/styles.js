export * from "gatsby-theme-docz/src/components/NavGroup/styles";
import * as styles from "gatsby-theme-docz/src/components/NavGroup/styles";

export const wrapper = {
  padding: "0.4375em 0",
};

export const title = {
  ...styles.title,
  display: "block",
  position: "relative",
  fontWeight: "700",
  color: "#f1f1f1",
  letterSpacing: "0.05em",
  margin: 0,
  textTransform: "uppercase",

  svg: {
    position: "absolute",
    left: "-1.375em",
    top: "50%",
    transform: "translateY(-50%)",
  },
};

export const sublinkWrapper = {
  ml: 16,
  py: 2,

  "&:empty": {
    py: 0,
  },

  "> a": {
    color: "var(--fmb-red--light)",
  },

  "> a:not([href*='#'])": {
    fontSize: "0.75em",
  },
};

//

//   export const title = {
//     mb: 1,
//     fontSize: 2,
//     fontWeight: 500,
//     color: 'sidebar.navGroup',
//     cursor: 'pointer',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   }

//   export const chevron = ({ active }) => ({
//     ml: 1,
//     flexShrink: 0,
//     alignSelf: 'baseline',
//     transform: `rotateX(${active ? 180 : 0}deg)`,
//     transformOrigin: 'center',
//     transition: 'transform .3s ease-in-out',
//   })
