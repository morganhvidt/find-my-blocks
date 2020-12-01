/** @jsx jsx */
import { jsx, Box, Link as ThemeUiLink } from "theme-ui";
import { Link as DoczLink, useConfig } from "docz";

import { Icon } from "@fmb/components/Icon";

import * as styles from "./styles";

export function ActionBar() {
  const { repository } = useConfig();
  const actions = getActions();

  return (
    <Box sx={styles.wrapper}>
      {actions.map((action) => (
        <ActionButton key={action.icon} {...action} />
      ))}
    </Box>
  );

  function getActions() {
    const actions = [];

    actions.push({
      icon: "home",
      url: "/",
      label: "Find my blocks - Home",
    });

    // TODO: Add in the menu icon and click

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

interface ActionButtonProps {
  readonly icon: string;
  readonly label: string;
  readonly url: string;
  readonly external?: boolean;
}

function ActionButton({ icon, label, url, external }: ActionButtonProps) {
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

  return (
    <DoczLink to={url} {...actionProps}>
      <Icon icon={icon} size={20} />
    </DoczLink>
  );
}
