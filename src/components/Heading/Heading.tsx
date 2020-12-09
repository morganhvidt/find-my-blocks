/** @jsx jsx */
import { jsx, Heading as ThemeUiHeading } from "theme-ui";

interface HeadingProps {
  readonly level?: 1 | 2 | 3 | 4 | 5 | 6;
  readonly children?: React.ReactNode;
}

export const Heading = ({ children, level = 1 }: HeadingProps) => {
  const heading = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return (
    <ThemeUiHeading as={heading} sx={{ textTransform: "uppercase" }}>
      {children}
    </ThemeUiHeading>
  );
};
