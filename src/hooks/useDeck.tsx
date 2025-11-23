import { useState } from "react";

export type Suit = "clubs" | "diamonds" | "hearts" | "spades";
export type Rank =
  | "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";

export interface Card {
  rank: Rank;
  suit: Suit;
  image: string; 
}


const generateDeck = (): Card[] => {
  const suits: Suit[] = ["clubs", "diamonds", "hearts", "spades"];
  const ranks: Rank[] = [
    "A","2","3","4","5","6","7","8","9","10","J","Q","K"
  ];

  const deck: Card[] = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({
        rank,
        suit,       
        image: `/assets/cards/${rank}_of_${suit}.png`
      });
    }
  }

  return deck;
};

const shuffle = (array: Card[]) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export const useDeck = () => {
  const [deck, setDeck] = useState<Card[]>(shuffle(generateDeck()));

  const drawCard = (): Card | null => {
    if (deck.length === 0) return null;

    const card = deck[0];
    setDeck((prev) => prev.slice(1));
    return card;
  };

  const resetDeck = () => {
    setDeck(shuffle(generateDeck()));
  };

  return {
    deck,
    drawCard,
    resetDeck
  };
};
