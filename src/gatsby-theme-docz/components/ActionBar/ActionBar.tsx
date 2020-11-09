/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link, useConfig } from "docz";
import { Icon } from "@fmb/components/Icon";
import * as styles from "./styles";

export function ActionBar() {
  const { repository } = useConfig();

  const actions = [
    {
      url: "/",
      color: "primary",
      icon: "home",
      label: "Find My Blocks | Home",
    },
    {
      url: "https://wordpress.org/plugins/find-my-blocks/",
      color: "wordpress",
      icon: "download",
      label: "Download from WordPress.org",
      external: true,
    },
    {
      url: repository,
      color: "github",
      icon: "github",
      label: "View Find My Blocks on Github",
      external: true,
    },
  ];

  return (
    <nav sx={styles.container}>
      {actions.map((action) => {
        return (
          <Action
            key={action.icon}
            url={action.url}
            color={action.color}
            icon={action.icon}
            label={action.label}
            external={action.external}
          />
        );
      })}
    </nav>
  );
}

interface ActionProps {
  readonly url?: string | null;
  readonly color: string;
  readonly icon: string;
  readonly label: string;
  readonly external?: boolean;
}

function Action({ url, external, color, icon, label }: ActionProps) {
  if (!url) {
    return undefined;
  }

  /**
   * Size of the icons to display
   */
  const iconSize = 20;

  const linkProps = {
    sx: styles.action(color),
    "aria-label": label,
    title: label,
  };

  if (!external) {
    return (
      <Link to={url} {...linkProps}>
        <Icon icon={icon} size={iconSize} />
      </Link>
    );
  }

  return (
    <a href={url} {...linkProps} target="_blank" rel="noreferrer">
      <Icon icon={icon} size={iconSize} />
    </a>
  );
}
