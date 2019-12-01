import React from "react";
import classnames from "classnames";
import styles from "./Card.css";

import { Text } from "../Text";
import { LogoIcon } from "../Logo";
import { Alert } from "../Alert";

interface CardProps {
  title: string;
  postType: string;
  editPost: string;
  viewPost: string;
  isReusable: boolean;
  count: number;
}
export const Card = ({
  title,
  postType,
  editPost,
  viewPost,
  isReusable = false,
  count
}: CardProps) => {

  const cardClassNames = classnames( styles.card );

  return (
    <div className={ cardClassNames }>
      <strong>{title}</strong>
      <PostType type={ postType } />
      <PostLink url={ editPost }>Edit Post</PostLink>
      <PostLink url={ viewPost }>View Post</PostLink>
      { count > 1 && <Alert>{count} usages in post</Alert>}
      { isReusable && <Alert type="warning">This is a Reusable Block</Alert>}
    </div>
  );
};

interface CardListProps {
  children: React.ReactNode;
  title: string;
}

export const CardList = ({ children, title }: CardListProps) => {
  const cardListClass = classnames( styles.cardList );

  return (
    <div className={ cardListClass }>
      <CardListTitle>
        <LogoIcon />{title }
      </CardListTitle>
      {children}
    </div>
  );
};

interface CardListTitleProps {
  children: React.ReactNode;
}

const CardListTitle = ({ children }: CardListTitleProps) => {
  const cardListTitleClass = classnames( styles.cardListTitle );

  return <div className={cardListTitleClass}>{children}</div>;
};


interface PostTypeProps {
  type: string;
}

const PostType = ({ type }: PostTypeProps) => (
  <Text>Post Type: {type}</Text>
);

interface PostLinkProps {
  children: React.ReactNode;
  url: string;
}


const PostLink = ({ children, url }: PostLinkProps) => {
  const postLinkClass = classnames( styles.link );

  return (
    <a
      className={ postLinkClass }
      tabIndex={0}
      href={url}
      target="_blank"
      rel="noopener noreferrer">

      {children}
    </a>
  );
};
