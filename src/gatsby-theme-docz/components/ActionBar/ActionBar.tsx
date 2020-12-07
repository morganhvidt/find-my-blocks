/** @jsx jsx */
import { jsx, Box, Link as ThemeUiLink, Button } from "theme-ui";
// eslint-disable-next-line no-unused-vars
import { XOR } from "ts-xor";
import { Link as DoczLink, useConfig } from "docz";

import { Icon } from "@fmb/components/Icon";

import * as styles from "./styles";

interface ActionBarProps {
  readonly open: boolean;
  onClick(): void;
}

export function ActionBar({ open, onClick }: ActionBarProps) {
  const { repository } = useConfig();
  const actions = getActions();

  return (
    <Box sx={styles.wrapper}>
      {actions.map((action) => (
        <ActionButton key={action.icon} {...action} />
      ))}
    </Box>
  );

  function handleClick() {
    onClick && onClick();
  }

  function getActions() {
    const actions = [];

    actions.push({
      icon: "home",
      url: "/",
      label: "Find my blocks - Home",
    });

    actions.push({
      icon: open ? "x" : "menu",
      onClick: handleClick,
      label: "Menu",
    });

    actions.push({
      icon: "download",
      url: "https://wordpress.org/plugins/find-my-blocks/",
      external: true,
      label: "Download from WordPress.org",
    });

    if (repository) {
      actions.push({
        icon: "github",
        url: repository,
        external: true,
        label: "View this project on Github",
      });
    }

    return actions;
  }
}

interface ActionButtonBaseProps {
  readonly icon: string;
  readonly label: string;
}

interface ActionButtonLinkProps extends ActionButtonBaseProps {
  readonly url: string;
  readonly external?: boolean;
}

interface ActionButtonButtonProps extends ActionButtonBaseProps {
  onClick(): void;
}

type ActionButtonProps = XOR<ActionButtonLinkProps, ActionButtonButtonProps>;

function ActionButton({
  icon,
  label,
  url,
  external,
  onClick,
}: ActionButtonProps) {
  const actionProps = {
    sx: styles.link(icon),
    "aria-label": label,
  };

  if (external) {
    return (
      <ThemeUiLink href={url} target="_blank" {...actionProps}>
        <Icon icon={icon} />
      </ThemeUiLink>
    );
  }

  if (onClick) {
    return (
      <Button onClick={onClick} {...actionProps}>
        <Icon icon={icon} />
      </Button>
    );
  }

  return (
    <DoczLink to={url} {...actionProps}>
      <Icon icon={icon} size={20} />
    </DoczLink>
  );
}
