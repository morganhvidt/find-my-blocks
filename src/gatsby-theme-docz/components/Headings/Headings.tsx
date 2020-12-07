/** @jsx jsx */
import { jsx, Box, Link } from "theme-ui";
import { Fragment, PropsWithChildren } from "react";

import { Heading } from "@fmb/components/Heading";

interface ComponentProps {
  readonly id: string;
}

const heading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  const Component = ({ id, children }: PropsWithChildren<ComponentProps>) => {
    return (
      <Fragment>
        <Box id={id} />
        <Heading level={level}>
          <Link href={`#${id}`}>{children}</Link>
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
