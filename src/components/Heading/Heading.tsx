/** @jsx jsx */
import { jsx, Heading as ThemeUiHeading } from "theme-ui";

interface HeadingProps {
  readonly level?: 1 | 2 | 3 | 4 | 5 | 6;
  readonly children: string;
}

export function Heading({ children, level = 1 }: HeadingProps) {
  return (
    <ThemeUiHeading
      // @ts-ignore
      as={`h${level}`}
      sx={{ textTransform: "uppercase", fontWeight: "bold" }}
    >
      {children}
    </ThemeUiHeading>
  );
}
