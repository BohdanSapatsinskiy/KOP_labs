import { useBlackjack } from "../hooks/useBlackjack";
import Hand from "../components/Hand";
import Button from "../components/Button";
import GameOverModal from "../components/GameOverModal";

export default function GamePage() {
  const {
    playerCards,
    dealerCards,
    playerTurn,
    gameOver,
    message,
    playerScore,
    dealerScore,
    startGame,
    playerHit,
    playerStand,
  } = useBlackjack();

  return (
    <div>
      <h1>Blackjack</h1>

      <Button onClick={startGame}>Start</Button>

      <Hand title="Player" cards={playerCards} score={playerScore} />

      <Button onClick={playerHit} disabled={!playerTurn || gameOver}>Hit</Button>
      <Button onClick={playerStand} disabled={!playerTurn || gameOver}>Stand</Button>

      <Hand
        title="Dealer"
        cards={dealerCards}
        score={dealerScore}
        hideSecondCard={playerTurn && !gameOver}
      />

      <h2>{message}</h2>

      {/* Портал-модалка для завершення гри */}
      <GameOverModal
        isOpen={gameOver}
        onRestart={startGame}
        playerScore={playerScore}
        dealerScore={dealerScore}
        message={message}
      />
    </div>
  );
}
