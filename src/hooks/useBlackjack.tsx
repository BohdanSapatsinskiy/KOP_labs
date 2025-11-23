import { useState } from "react";
import { useDeck } from "./useDeck";
import type { Card } from "./useDeck";

export const useBlackjack = () => {
  const { deck, drawCard, resetDeck } = useDeck();

  const [playerCards, setPlayerCards] = useState<Card[]>([]);
  const [dealerCards, setDealerCards] = useState<Card[]>([]);

  const [playerTurn, setPlayerTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState<string>("");

  const calculateScore = (cards: Card[]): number => {
    let total = 0;
    let aces = 0;

    for (const card of cards) {
      if (card.rank === "A") {
        total += 11;
        aces++;
      } else if (["K", "Q", "J"].includes(card.rank)) {
        total += 10;
      } else {
        total += parseInt(card.rank, 10);
      }
    }

    while (total > 21 && aces > 0) {
      total -= 10;
      aces--;
    }

    return total;
  };

  const startGame = () => {
    resetDeck();
    setMessage("");

    const p1 = drawCard();
    const p2 = drawCard();
    const d1 = drawCard();
    const d2 = drawCard();

    if (!p1 || !p2 || !d1 || !d2) {
      setMessage("Deck error");
      return;
    }

    setPlayerCards([p1, p2]);
    setDealerCards([d1, d2]);

    setPlayerTurn(true);
    setGameOver(false);
  };

  const playerHit = () => {
    if (!playerTurn || gameOver) return;

    const newCard = drawCard();
    if (!newCard) return;

    const updated = [...playerCards, newCard];
    setPlayerCards(updated);

    const score = calculateScore(updated);
    if (score > 21) {
      setMessage("Перебір! Ви програли.");
      setGameOver(true);
      setPlayerTurn(false);
    }
  };


  const playerStand = () => {
    if (!playerTurn || gameOver) return;

    setPlayerTurn(false);
    dealerTurn();
  };


  const dealerTurn = () => {
    setMessage("Дилер думає...");

    let cards = [...dealerCards];

    while (calculateScore(cards) < 17) {
      const card = drawCard();
      if (!card) break;
      cards.push(card);
    }

    setDealerCards(cards);

    const playerScore = calculateScore(playerCards);
    const dealerScore = calculateScore(cards);

    if (dealerScore > 21) {
      setMessage("Дилер перебрав! Ви виграли!");
    } else if (playerScore > dealerScore) {
      setMessage("Ви виграли!");
    } else if (playerScore < dealerScore) {
      setMessage("Дилер виграв!");
    } else {
      setMessage("Нічия.");
    }

    setGameOver(true);
  };

  return {
    deck,
    playerCards,
    dealerCards,
    playerTurn,
    gameOver,
    message,

    playerScore: calculateScore(playerCards),
    dealerScore: calculateScore(dealerCards),

    startGame,
    playerHit,
    playerStand,
  };
};
