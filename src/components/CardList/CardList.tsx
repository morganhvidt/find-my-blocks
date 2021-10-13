import React from "react";
import { Post } from "../App/app.types";
import { Logo } from "../Logo";
import { Heading } from "../Heading";
import { Card } from "../Card";

// @ts-expect-error
import * as styles from "./CardList.module.css";

interface CardListProps {
  readonly cards: Array<Post>;
}

export function CardList({ cards }: CardListProps) {
  if (!cards || cards.length < 1) {
    return <EmptyState />;
  }

  return (
    <div className={styles.cards}>
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
}

function EmptyState() {
  return (
    <div className={styles.empty}>
      <Logo version="pin" size={125} color="white" />
      <Heading>No block selected</Heading>
      Please select a block from the menu to see more info.
    </div>
  );
}
