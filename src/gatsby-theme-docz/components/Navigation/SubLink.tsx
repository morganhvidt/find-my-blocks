/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Fragment } from "react";
import { Link, MenuItem, useCurrentDoc } from "docz";
import { Heading } from "docz/dist/state";

import { Icon } from "@fmb/components/Icon";

import * as styles from "./styles";

interface SubLinkProps {
  readonly item: MenuItem;
}

export function SubLink({ item }: SubLinkProps) {
  console.log({ item });
  const doc = useCurrentDoc();
  const { headings, route } = item;
  const active = route === doc.route;

  return (
    <Fragment>
      <Link to={route} sx={styles.subLink(active)}>
        {active && (
          <Box sx={styles.subIcon}>
            <Icon icon="corner-down-right" size={14} />
          </Box>
        )}
        {item.name}
      </Link>
      {active && headings && (
        <Box sx={styles.smallLinks}>
          {headings.map(({ value, slug }: Heading) => {
            return (
              <Box key={slug}>
                <Link to={`#${slug}`} sx={styles.smallLink}>
                  {value}
                </Link>
              </Box>
            );
          })}
        </Box>
      )}
    </Fragment>
  );
}
