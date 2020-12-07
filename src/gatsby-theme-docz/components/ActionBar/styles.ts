import { media } from "../../theme/breakpoints";

export const actionBarWidth = "50px";

export const wrapper = {
  bg: "primary",
  position: "sticky",
  top: 0,
  right: 0,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
};

export const link = (variant: string) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: actionBarWidth,
  height: actionBarWidth,
  transition: "background 300ms, color 300ms",
  color: "white",
  border: "none",
  borderRadius: "square",
  WebkitAppearance: "none",
  ...linkStyles(variant),
});

function linkStyles(variant: string) {
  const base = {
    bg: "primary",

    "&:hover": {
      color: "primary",
      bg: "white",
    },
  };
  if (!variant) {
    return base;
  }

  switch (variant) {
    case "home":
      return base;

    case "download":
      return {
        bg: "wordpress",
        mt: "auto",

        "&:hover": {
          color: "wordpress",
          bg: "white",
        },
      };

    case "github":
      return {
        bg: "github",

        "&:hover": {
          color: "github",
          bg: "white",
        },
      };

    case "menu":
      return {
        ...base,

        [media.desktop]: {
          display: "none",
        },
      };

    case "x":
      return {
        bg: "white",
        color: "primary",

        [media.desktop]: {
          display: "none",
        },
      };
    default:
      return base;
  }
}
