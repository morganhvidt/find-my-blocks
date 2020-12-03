export const wrapper = {
  mb: 3,
};

export const main = {
  display: "flex",
  alignItems: "center",
  color: "primary",
  textTransform: "uppercase",
  fontFamily: "heading",
  fontSize: 3,
  fontWeight: 200,
  textDecoration: "none",
  cursor: "pointer",
};

export const icon = {
  display: "flex",
  alignItems: "center",
  mr: 1,
  ml: "-24px",
};

export const subLinks = {
  ml: 3,
  mt: 2,
};

export const subLink = (active: boolean) => ({
  display: "flex",
  alignItems: "center",
  color: active ? "color" : "grey",
  fontSize: 2,
  textDecoration: "none",
  mt: 1,
  ml: 1,
});

export const subIcon = {
  mr: 1,
  display: "flex",
  alignItems: "center",
  ml: "-18px",
};

export const smallLinks = {
  ml: 3,
  mt: 1,
  mb: 2,
  fontSize: 1,
  lineHeight: 2,
};

export const smallLink = {
  color: "text",
  textDecoration: "none",
};
