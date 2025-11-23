import Card from "./Card";
import type { Card as CardType } from "../hooks/useDeck";

type Props = {
  title: string;
  cards: CardType[];
  score: number;
  hideSecondCard?: boolean;
};

export default function Hand({ title, cards, score, hideSecondCard }: Props) {
  return (
    <div className="hand">
      <h2>{title}</h2>

      <div className="hand-cards" style={{ display: "flex", gap: "10px" }}>
        {cards.map((card, index) => (
          <Card
            key={index}
            front={card.image}
            isFaceUp={!(hideSecondCard && index === 1)}
          />
        ))}
      </div>

      <div>Score: {score}</div>
    </div>
  );
}
