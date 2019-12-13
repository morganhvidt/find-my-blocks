import React from "react";
import classnames from "classnames";
import styles from "./Card.module.css";

import { LogoIcon } from "../Logo";

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({
  children
}: CardProps) => {

  const cardClassNames = classnames( styles.card );

  return (
    <div className={ cardClassNames }>
      { children }
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
