export const actionBarWidth = 60;

export const container = {
  position: "fixed",
  top: 0,
  height: "100vh",
  width: actionBarWidth,
  bg: "primaryDark",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
};

export const firstLink = {
  marginBottom: "auto",
};

export const action = (color: string) => {
  return {
    bg: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: actionBarWidth,
    height: actionBarWidth,
    transition: "background-color 300ms",

    svg: {
      stroke: "white",
      transition: "stroke 300ms",
    },

    "&:hover": {
      bg: "background",

      svg: {
        stroke: color,
      },
    },
  };
};
