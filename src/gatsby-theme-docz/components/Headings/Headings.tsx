/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { PropsWithChildren } from "react";
import { Heading } from "@fmb/components/Heading";
import * as styles from "./styles";

interface HeadingProps {
  id: string;
}

const heading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  const Component = ({ id, children }: PropsWithChildren<HeadingProps>) => {
    if (id && level !== 1) {
      return (
        <Box sx={styles.heading(level)} id={id}>
          <Heading level={level}>
            <a href={`#${id}`}>{children}</a>
          </Heading>
        </Box>
      );
    }

    return (
      <Box sx={styles.heading(level)}>
        <Heading level={level}>{children}</Heading>
      </Box>
    );
  };

  return Component;
};

export const h1 = heading(1);
export const h2 = heading(2);
export const h3 = heading(3);
export const h4 = heading(4);
export const h5 = heading(5);
export const h6 = heading(6);
