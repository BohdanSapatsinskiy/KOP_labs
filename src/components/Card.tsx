type CardProps = {
  front: string;        // шлях до лиць
  back?: string; // шлях до заду
  isFaceUp?: boolean;   // true - показує front, false - back
  className?: string;   // додаткові стилі
};

const defaultBack = "/assets/card/back/file.png";

const Card = ({ front, back = defaultBack, isFaceUp = true, className }: CardProps) => {
  return (
    <div className={`card ${className ?? ""}`}>
      <img
        src={isFaceUp ? front : back}
        alt="card"
        className="w-20 h-28 object-cover rounded shadow"
      />
    </div>
  );
};

export default Card;
