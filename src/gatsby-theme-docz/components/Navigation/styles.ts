export const navgroup = {};

export const groupItem = {
  pl: 3,
};

export const miniWrapper = {
  pl: 2,
  mb: 3,
};

export const heading = {
  color: "white",
  fontSize: 2,
  fontWeight: "heading",
  textTransform: "uppercase",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  my: 3,
};

export const link = (variation: string) => {
  const attr = {
    primary: {},
    secondary: {
      my: 2,
      fontSize: 1,
      opacity: "0.75",
    },
  };

  return {
    ...heading,
    // @ts-ignore
    ...attr[variation],
  };
};

export const mini = {
  display: "block",
  color: "white",
  fontSize: 1,
  textDecoration: "none",
  lineHeight: "1.2",
  borderLeft: `2px solid transparent`,
  my: 3,
  pl: 1,
  ml: "-6px",
  transition: "border 300ms, padding 300ms",

  "&:hover": {
    pl: 2,
    borderLeft: `2px solid white`,
  },

  "&.active": {
    pl: 2,
    borderLeft: `2px solid white`,
  },
};

export const icon = {
  mb: "-5px",
  ml: "-22px",
  mr: "4px",
  opacity: ".5",
};
