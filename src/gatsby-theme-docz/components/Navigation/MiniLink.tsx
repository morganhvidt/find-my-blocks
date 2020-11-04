/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Fragment } from "react";
import { Link } from "docz";
import * as styles from "./styles";

export interface Heading {
  readonly slug: string;
  readonly depth: 1 | 2 | 3 | 4 | 5 | 6;
  readonly value: string;
}

interface MiniLinkProps {
  item: Heading;
}

export function MiniLink({ item }: MiniLinkProps) {
  const { depth, slug, value } = item;

  if (depth !== 2) {
    return <Fragment></Fragment>;
  }

  const isActive = getCurrentHash() === `#${slug}`;

  return (
    <Box>
      <Link
        to={`#${slug}`}
        sx={styles.mini}
        className={isActive ? "active" : ""}
      >
        {value}
      </Link>
    </Box>
  );
}

function getCurrentHash() {
  if (typeof window === "undefined") {
    return "";
  }

  return window.location ? decodeURI(window.location.hash) : "";
}
