/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Card } from "../Card";
import { Content } from "../Content";
import { Link } from "../Link";
import { Tag } from "../Tag";
import { Logo } from "../Logo";
import { Heading } from "../Heading";

import styles from "./CardList.module.css";

export type CardOrder = "az" | "za" | "popular" | "reusable";

interface Post {
  readonly id: string;
  readonly title: string;
  readonly postType: string;
  readonly edit_url: string;
  readonly post_url: string;
  readonly isReusable: boolean;
  readonly isNested: boolean;
  readonly nestedBlockType: string;
  readonly count: number;
}
interface CardListProps {
  readonly cards: Array<Post>;
  /**
   * The order that you would like the cards to appear in.
   * @default 'a-z'
   */
  readonly order: CardOrder;
}

export const CardList = ({ cards, order = "az" }: CardListProps) => {
  if (cards == undefined || cards.length < 1) {
    return (
      <Box className={styles.empty}>
        <Logo size={150} version="pin" />
        <Heading level={2}>No block selected</Heading>
        <Heading level={3}>Please select a block to see more info.</Heading>
      </Box>
    );
  }

  switch (order) {
    case "az":
      cards.sort((a: Post, b: Post) => (a.title > b.title ? 1 : -1));
      break;
    case "za":
      cards.sort((a: Post, b: Post) => (a.title < b.title ? 1 : -1));
      break;
    case "popular":
      cards.sort((a: Post, b: Post) => (a.count < b.count ? 1 : -1));
      break;
    case "reusable":
      cards.sort((a: Post, b: Post) => (a.isReusable < b.isReusable ? 1 : -1));
      break;
    default:
      cards.sort((a: Post, b: Post) => (a.title > b.title ? 1 : -1));
      break;
  }

  const Cards = cards.map((post) => {
    return (
      <Card key={post.id} title={post.title}>
        <Content>
          Post Type: <strong>{post.postType}</strong>
        </Content>

        <Content spacing="large">
          <Link icon="edit" url={post.edit_url} openInNewTab>
            Edit Post
          </Link>
          <Link icon="eye" url={post.post_url} openInNewTab>
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

        {post.isNested && (
          <Content>
            <Tag variation="info" icon="info">
              Nested in:&nbsp;<b>{post.nestedBlockType}</b>
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

  return <Box className={styles.cards}>{Cards}</Box>;
};
