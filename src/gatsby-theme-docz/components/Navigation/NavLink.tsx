/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { MenuItem, Link, useCurrentDoc } from "docz";
import { Icon } from "@fmb/components/Icon";
import { MiniLink, Heading } from "./MiniLink";
import * as styles from "./styles";

interface NavLinkProps {
  readonly item: MenuItem;
  readonly variation?: "primary" | "secondary";
}

export function NavLink({ item, variation = "primary" }: NavLinkProps) {
  const { name, route, headings } = item;
  const doc = useCurrentDoc();
  const isActive = route === doc.route;

  return (
    <Box>
      <Link to={route || "/"} sx={styles.link(variation)}>
        {isActive && (
          <Box sx={styles.icon}>
            <Icon icon="chevrons-right" color="white" size={18} />
          </Box>
        )}
        {name}
      </Link>

      {isActive && (
        <Box sx={styles.miniWrapper}>
          {headings.map((heading: Heading) => (
            <MiniLink key={heading.slug} item={heading} />
          ))}
        </Box>
      )}
    </Box>
  );
}
