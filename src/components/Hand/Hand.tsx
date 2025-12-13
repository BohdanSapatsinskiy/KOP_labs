import Card from "../Card/Card";

type CardPlaceholder = {
  image: string;
};

type Props = {
  cards: CardPlaceholder[];
  hideSecondCard?: boolean;
};

export default function Hand({ cards, hideSecondCard }: Props) {
  return (
    <div className="hand">
      {cards.map((card, index) => (
        <Card
          key={index}
          front={card.image}
          isFaceUp={!(hideSecondCard && index === 1)}
        />
      ))}
    </div>
  );
}
