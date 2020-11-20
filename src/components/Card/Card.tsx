/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import { Post } from "../App/app.types";

import {
  Card as WPCard,
  CardBody,
  CardDivider,
  CardHeader,
} from "@wordpress/components";
import { Content } from "../Content";
import { Link } from "../Link";
import { Tag, TagVariations } from "../Tag";
interface CardProps {
  card: Post;
}

interface TagProps {
  readonly label: string;
  readonly icon?: string;
  readonly variation: TagVariations;
}

export const Card = ({ card }: CardProps) => {
  const tags: Array<TagProps> = getTags();

  if (typeof window === "undefined") return <Fragment />;

  return (
    <WPCard size="small">
      <CardHeader isShady>
        <strong>{card.title}</strong>
      </CardHeader>
      <CardBody>
        <Content>
          Post type: <strong>{card.postType}</strong>
        </Content>
        <Content>
          <Link url={card.edit_url} icon="edit">
            Edit Post
          </Link>
          <Link url={card.post_url} icon="eye">
            View Post
          </Link>
        </Content>
      </CardBody>

      {tags.length > 0 && (
        <Fragment>
          <CardDivider />
          <CardBody>
            {tags.map((tag) => {
              return <Tag key={tag.label} {...tag} />;
            })}
          </CardBody>
        </Fragment>
      )}
    </WPCard>
  );

  function getTags() {
    const tags = [];

    if (card.isReusable) {
      tags.push({
        label: "Reusable block",
        icon: "alert-triangle",
        variation: "warning",
      });
    }

    if (card.count > 1) {
      tags.push({
        label: `${card.count} usages in post`,
        icon: "plus-circle",
        variation: "info",
      });
    }

    if (card.isNested) {
      tags.push({
        label: `Nested in: ${card.nestedBlockType}`,
        icon: "layers",
        variation: "info",
      });
    }

    return tags as Array<TagProps>;
  }
};
