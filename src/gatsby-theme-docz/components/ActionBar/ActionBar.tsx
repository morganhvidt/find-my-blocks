/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import * as styles from "./styles";
import { Github } from "gatsby-theme-docz/src/components/Icons";
import { Icon } from "@fmb/components/icon";
import { Link, useConfig, useCurrentDoc } from "docz";

export function ActionBar() {
  const {
    repository,
    themeConfig: { showMarkdownEditButton },
  } = useConfig();
  const { edit = true, link } = useCurrentDoc();
  const showEditButton = showMarkdownEditButton && edit && link;

  console.log("repo", repository);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.firstLink}>
        <Action
          url="/"
          color="primary"
          icon="home"
          label="Find My Blocks | Home"
        />
      </Box>

      {showEditButton && (
        <Action
          external
          url={link}
          color="lightBlue"
          icon="edit"
          label="Edit page"
        />
      )}

      <Action
        external
        url="https://wordpress.org/plugins/find-my-blocks/"
        color="wordpress"
        icon="download"
        label="Download from WordPress"
      />

      {repository && (
        <Action
          external
          url={repository}
          color="github"
          icon="github"
          label="View Find My Blocks on Github"
        />
      )}
    </Box>
  );
}

interface ActionProps {
  readonly url: string;
  readonly external?: boolean;
  readonly color: string;
  /**
   * Icon type from WordPress is unstable, needs an `any` here.
   */
  readonly icon: any;
  readonly label: string;
}

function Action({ url, external, color, icon, label }: ActionProps) {
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
    <a href={url} {...linkProps}>
      {icon === "github" ? (
        <Github size={iconSize} />
      ) : (
        <Icon icon={icon} size={iconSize} />
      )}
    </a>
  );
}
