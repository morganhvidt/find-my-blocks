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
  ...linkStyles(variant),
});

function linkStyles(variant: string) {
  if (!variant) {
    return {};
  }

  switch (variant) {
    case "home":
      return {
        bg: "primary",

        "&:hover": {
          color: "primary",
          bg: "white",
        },
      };

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
    default:
      return {};
  }
}
