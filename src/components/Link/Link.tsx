/** @jsx jsx */
import { jsx, Link as ThemeUiLink } from "theme-ui";
import { Fragment } from "react";
import { Link as GatsbyLink } from "docz";
// eslint-disable-next-line no-unused-vars
import { XOR } from "ts-xor";
import { Icon } from "../Icon";
import { PropsWithChildren } from "react";

interface LinkBaseProps {
  /**
   * An Icon that can be added before the link
   */
  icon?: string;
}

interface GatsbyLinkProps extends LinkBaseProps {
  /**
   * A link that is directed to somewhere on the Find My Blocks website
   */
  to: string;
}

interface BasicLinkProps extends LinkBaseProps {
  /**
   * The URL that the link will point to.
   */
  url: string;
  /**
   * Should the link open in a new tab
   */
  external?: boolean;
}

type LinkProps = XOR<GatsbyLinkProps, BasicLinkProps>;

export const Link = ({
  url,
  to,
  icon,
  external = false,
  children,
}: PropsWithChildren<LinkProps>) => {
  const linkProps = {
    sx: {
      color: "primary",
      svg: {
        mr: 1,
        mb: "-1px",
      },
    },
  };

  if (to) {
    return (
      <GatsbyLink to={to} {...linkProps}>
        <LinkInternals />
      </GatsbyLink>
    );
  }

  return (
    <ThemeUiLink
      href={url}
      target={external ? "_blank" : "_self"}
      {...linkProps}
    >
      <LinkInternals />
    </ThemeUiLink>
  );

  function LinkInternals() {
    return (
      <Fragment>
        {icon && <Icon icon={icon} size={14} />}
        {children}
      </Fragment>
    );
  }
};
