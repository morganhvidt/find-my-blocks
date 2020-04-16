import React from "react";

import { Card } from "../../../../components/Card";
import { Content } from "../../../../components/Content";
import { Link } from "../../../../components/Link";
import { Tag } from "../../../../components/Tag";

interface ListOfCardsProps {
  cards: object;
}
export const ListOfCards = ({ cards }: ListOfCardsProps) => {
  const Cards = cards.map((post) => {
    return (
      <Card key={post.id} title={post.title}>
        <Content>
          Post Type: <strong>{post.postType}</strong>
        </Content>

        <Content spacing="large">
          <Link icon="edit" url={post.edit_url}>
            Edit Post
          </Link>
          <Link icon="eye" url={post.post_url}>
            View Post
          </Link>
        </Content>

        {post.isReusable && (
          <Content>
            <Tag variation="warning" icon="alert-triangle">
              Reusable block
            </Tag>
          </Content>
        )}

        {post.count > 1 && (
          <Content spacing="small">
            <Tag variation="info" icon="plus-circle">
              {post.count} usages in post
            </Tag>
          </Content>
        )}
      </Card>
    );
  });

  return Cards;
};
