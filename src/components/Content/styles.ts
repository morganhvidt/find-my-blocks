export const content = (spacing: string) => ({
  mt: getSpace(spacing),

  "&:first-of-type": {
    mt: 0,
  },
});

function getSpace(spacing: string) {
  switch (spacing) {
    case "small":
      return 1;
    case "medium":
      return 2;
    case "large":
      return 3;
    default:
      return 2;
  }
}
