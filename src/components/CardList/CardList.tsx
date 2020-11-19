/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Post } from "../App/app.types";
import { Logo } from "../Logo";
import { Heading } from "../Heading";
import { Card } from "../Card";

import * as styles from "./styles";

interface CardListProps {
  readonly cards: Array<Post>;
}

export function CardList({ cards }: CardListProps) {
  if (!cards || cards.length < 1) {
    return <EmptyState />;
  }

  return (
    <Box>
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </Box>
  );
}

function EmptyState() {
  return (
    <Box sx={styles.empty}>
      <Logo version="pin" size={125} color="white" />
      <Heading>No block selected</Heading>
      Please select a block from the menu to see more info.
    </Box>
  );
}
