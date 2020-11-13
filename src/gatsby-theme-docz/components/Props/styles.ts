export * from "gatsby-theme-docz/src/components/Props/styles";

export const container = {
  marginBottom: 3,
};

export const prop = {
  mb: 3,
};

export const info = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  bg: "greyLightest",
  p: 3,
};

export const name = {
  color: "primaryDark",

  svg: {
    mr: 2,
    mb: "-1px",
  },
};

export const defaultText = {
  color: "text",
  fontSize: 1,
  fontWeight: "body",
};

export const type = {
  fontSize: 1,
};

export const description = {
  border: (t) => `1px solid ${t.colors.WPBackground}`,
  mt: "1px",
  p: 3,
  fontSize: 2,

  "*": {
    m: 0,
  },
};
