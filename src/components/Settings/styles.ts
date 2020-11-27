// This is a hack to override the wordpress styles.
export const settings = {
  borderRadius: "radius",
  border: (t: any) => `1px solid ${t.colors.grey}`,

  ".components-panel__row": {
    display: "block",

    "+ .components-panel__row": {
      mt: 3,
    },
  },
};
