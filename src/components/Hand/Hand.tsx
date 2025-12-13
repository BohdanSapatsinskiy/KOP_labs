import Card from "../Card/Card";
import type { Card as CardType } from "../../hooks/useDeck";

type Props = {
  title?: string;
  cards: CardType[];
  score?: number;
  hideSecondCard?: boolean;
};

export default function Hand({ cards, hideSecondCard }: Props) {
  return (
    <>
      {cards.map((card, index) => (
        <Card
          key={index}
          front={card.image}
          isFaceUp={!(hideSecondCard && index === 1)}
        />
      ))}
    </>
  );
}

