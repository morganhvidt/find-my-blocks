export * from "@theme/components/Props/styles";

export const container = {
  marginBottom: "1em",
};

export const line = {
  background: "rgb(246, 248, 250)",
  marginTop: "0.1875em",
  padding: "0.5em 1em",
  display: "flex",
  alignItems: "center",
  width: "100%",

  ":first-child": {
    marginTop: 0,
  },
};

export const propName = {
  color: "var(--fmb-red)",
  flex: "1",
  maxWidth: "40%",
  svg: {
    marginRight: "0.25em",
    marginBottom: "-1px",
  },
};

export const defaultProp = {
  fontSize: "0.75em",
  color: "var(--fmb-grey--dark)",
};

export const propType = {
  flex: "1",
  textAlign: "right",
  fontSize: "0.875em",
};

export const description = {
  position: "relative",
  padding: "0 1em",
  background: "#fefefe",
  fontSize: "0.75em",
  border: "1px solid rgb(246, 248, 250)",
};
