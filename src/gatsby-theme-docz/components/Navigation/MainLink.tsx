/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Fragment, PropsWithChildren } from "react";
// eslint-disable-next-line no-unused-vars
import { XOR } from "ts-xor";
import { Link } from "docz";

import { Icon } from "@fmb/components/Icon";

import * as styles from "./styles";

interface BaseMainLinkProps {
  readonly icon: string;
  readonly active: boolean;
}

interface LinkMainLinkProps extends BaseMainLinkProps {
  readonly to: string;
}

interface ClickMainLinkProps extends BaseMainLinkProps {
  onClick(): void;
}

type MainLinkProps = XOR<LinkMainLinkProps, ClickMainLinkProps>;

export function MainLink({
  icon,
  active,
  to,
  onClick,
  children,
}: PropsWithChildren<MainLinkProps>) {
  const linkProps = {
    sx: styles.main,
  };

  const internalProps = { icon, active, children };

  if (to) {
    return (
      <Link to={to} {...linkProps}>
        <Internals {...internalProps} />
      </Link>
    );
  }

  return (
    <Box sx={styles.main} onClick={onClick}>
      <Internals {...internalProps} />
    </Box>
  );
}

function Internals({
  icon,
  active,
  children,
}: PropsWithChildren<BaseMainLinkProps>) {
  return (
    <Fragment>
      {active && (
        <Box sx={styles.icon}>
          <Icon icon={icon} size={20} />
        </Box>
      )}
      {children}
    </Fragment>
  );
}
