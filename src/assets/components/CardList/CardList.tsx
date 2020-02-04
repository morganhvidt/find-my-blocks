/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import classnames from "classnames";
import styles from "./CardList.module.css";

import {
  Notice,
  Card,
  CardBody,
  CardHeader,
} from "@wordpress/components";
import { Content } from "../Content";
import { Heading, Text, Bold, Link } from "../Typography";

interface CardListProps {
    readonly cards: Array<object>;
    readonly title: string;
}

export const CardList = ({ cards, title }: CardListProps) => {
  const sortedCards = [...cards].sort((a, b) => (a.title > b.title) ? 1 : -1);
  const Cards = sortedCards.length > 0 && sortedCards.map( ({
    id,
    title,
    postType,
    count,
    isReusable,
    post_url,
    edit_url
  }) => {
    const hasAlerts = count > 1 || isReusable;
    const Alerts = (
      <>
        { count > 1 && (
          <Notice status="info" isDismissible={ false }>
            { count } usages in post.
          </Notice>
        )}
        { isReusable && (
          <Notice status="warning" isDismissible={ false }>
            Reusable Block
          </Notice>
        )}
      </>
    );

    return (
      <Card key={ id } size="medium">
        <CardHeader isBorderless={ false }>
          <Heading>{title}</Heading>
        </CardHeader>
        <CardBody>
          <Content spacing="small">
            Post Type: <Bold>{ postType }</Bold>
          </Content>
          <Content spacing="small">
            <Text>
              <Link to={ edit_url }>Edit Post</Link>
              <Link to={ post_url }>View Post</Link>
            </Text>
          </Content>
        </CardBody>
        { hasAlerts && Alerts }
      </Card>
    );
  } );

  const cardListHolderClass = classnames( styles.holder );
  const cardListClass = classnames(styles.list);
  return (
    <div className={ cardListHolderClass }>
      <CardTitle>{title}</CardTitle>
      <div className={ cardListClass }>
        {Cards}
      </div>
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
}

const CardTitle = ({ children }: CardTitleProps) => {
  const cardTitleClass = classnames(styles.title);
  return (
    <div className={cardTitleClass}>{children}</div>
  );
};
