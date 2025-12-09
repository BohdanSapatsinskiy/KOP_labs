import styles from './Card.module.css';

type CardProps = {
  front: string;        // шлях до лиць
  back?: string; // шлях до заду
  isFaceUp?: boolean;   // true - показує front, false - back
  className?: string;   // додаткові стилі
};

const defaultBack = "/src/assets/card/back/card_back_1.png";

const Card = ({ front, back = defaultBack, isFaceUp = true}: CardProps) => {
  return (

      <img
        src={isFaceUp ? front : back}
        alt="card"
        className={styles["card"]}
      />

  );
};

export default Card;
