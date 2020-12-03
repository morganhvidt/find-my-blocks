export const wrapper = {
  mb: 3,
};

export const main = {
  display: "flex",
  alignItems: "center",
  color: "primary",
  textTransform: "uppercase",
  fontSize: 3,
  fontWeight: "light",
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
  color: active ? "primary" : "nav.sub",
  fontSize: 3,
  fontWeight: "light",
  textDecoration: "none",
  mt: 2,
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
  mt: 2,
  mb: 3,
  fontSize: 1,
  lineHeight: 2,
};

export const smallLink = {
  color: "nav.small",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: 2,
};
