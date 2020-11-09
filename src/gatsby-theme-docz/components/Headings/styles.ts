type Heading = 1 | 2;
export const heading = (level: Heading) => ({
  textTransform: "uppercase",
  ...getHeadingStyles(level),

  a: {
    display: "inline-block",
    color: "text",
    textDecoration: "none",

    "&:before": {
      content: `"#"`,
      display: "inline-block",
      textIndent: "-1em",
      position: "relative",
      fontWeight: "bold",
      color: "greyDark",
      top: 2,
      opacity: 0,
      transition: "top 300ms, opacity 300ms",
    },

    "&:hover:before": {
      top: 0,
      opacity: 1,
    },
  },
});

function getHeadingStyles(level: Heading) {
  let headings = {
    fontWeight: "heading",
  };

  if (level === 1) {
    return {
      h1: {
        ...headings,
        fontSize: 6,
        mb: 3,
      },
    };
  }

  if (level === 2) {
    return {
      h2: {
        ...headings,
        fontSize: 5,
        mt: 4,
        mb: 3,
      },
    };
  }
}
