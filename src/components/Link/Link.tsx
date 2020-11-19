/** @jsx jsx */
import { jsx, Link as ThemeUiLink } from "theme-ui";

import { Icon } from "../Icon";
import { PropsWithChildren } from "react";

import * as styles from "./styles";

interface LinkProps {
  readonly url: string;
  readonly icon?: string;
}

export function Link({ url, icon, children }: PropsWithChildren<LinkProps>) {
  return (
    <ThemeUiLink href={url} sx={styles.link} target="_blank">
      {icon && <Icon icon={icon} size={14} />}
      {children}
    </ThemeUiLink>
  );
}
