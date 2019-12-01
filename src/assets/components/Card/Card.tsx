import React from "react";
import classnames from "classnames";
import styles from "./Card.css";

import { Text } from "../Text";
import { LogoIcon } from "../Logo";

interface CardProps {
  title: string;
  postType: string;
}
export const Card = ({ title, postType }: CardProps) => {
  const cardClassNames = classnames( styles.card );
  return (
    <div className={ cardClassNames }>
      <strong>{title}</strong>
      <PostType type={ postType } />
      <PostLink>Edit Post</PostLink>
      <PostLink>View Post</PostLink>
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
}


const PostLink = ({ children }: PostLinkProps) => {
  const postLinkClass = classnames( styles.link );

  return (
    <a
      className={ postLinkClass }
      tabIndex={0}>

      {children}
    </a>
  );
};
