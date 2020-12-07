/** @jsx jsx */
import { jsx, Box, Link, Heading } from "theme-ui";
import { Fragment, PropsWithChildren } from "react";

import { Icon } from "@fmb/components/Icon";

import * as styles from "./styles";

interface ComponentProps {
  readonly id: string;
}

const heading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  const Component = ({ id, children }: PropsWithChildren<ComponentProps>) => {
    return (
      <Fragment>
        <Box id={id} />
        <Heading as={`h${level}`} sx={styles.heading}>
          <Link href={`#${id}`} sx={styles.link}>
            <Box>
              <Icon icon="link-2" size={28} />
            </Box>
            {children}
          </Link>
        </Heading>
      </Fragment>
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
