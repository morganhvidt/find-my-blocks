/** @jsx jsx */
import { jsx, Heading as ThemeUIHeading } from "theme-ui";

interface HeadingProps {
  readonly level?: 1 | 2 | 3 | 4 | 5 | 6;
  readonly children?: React.ReactNode;
}

export const Heading = ({ children, level = 1 }: HeadingProps) => {
  return (
    <ThemeUIHeading as={`h${level}`} sx={{ textTransform: "uppercase" }}>
      {children}
    </ThemeUIHeading>
  );
};
