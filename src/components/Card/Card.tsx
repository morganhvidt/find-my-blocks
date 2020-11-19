/** @jsx jsx */
import { jsx } from "theme-ui";
import { Post } from "../App/app.types";

import {
  Card as WPCard,
  CardBody,
  CardFooter,
  CardHeader,
} from "@wordpress/components";
import { Content } from "../Content";

interface CardProps {
  card: Post;
}

export const Card = ({ card }: CardProps) => {
  return (
    <WPCard size="small">
      <CardHeader isShady>
        <strong>{card.title}</strong>
      </CardHeader>
      <CardBody>
        <Content>
          Post type: <strong>{card.postType}</strong>
        </Content>
      </CardBody>
      <pre>{JSON.stringify(card, undefined, 2)}</pre>
      <CardFooter>Hello</CardFooter>
    </WPCard>
  );
};
