import { useEffect } from "react";
import { useBlackjack } from "../hooks/useBlackjack";
import Hand from "../components/Hand";
import Button from "../components/Button";
import GameOverModal from "../components/GameOverModal";
import { useNavigate, useParams } from "react-router-dom";

const GamePage = () => {
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

  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    startGame();
  }, []);

  return (
    <div
      className="game-table"
      style={{
        backgroundImage: "url(/src/assets/background/game-background.png)",
        backgroundSize: "contain",
      }}
    >

      <div
        className="deck"
        onClick={() => {
          if (playerTurn && !gameOver) playerHit();
        }}
        style={{ cursor: playerTurn && !gameOver ? "pointer" : "default" }}
      />

      <div className="hand hand-diller">
        <Hand
          title="Dealer"
          cards={dealerCards}
          score={dealerScore}
          hideSecondCard={playerTurn && !gameOver}
        />
      </div>

      <div className="hand hand-player">
        <Hand title="Player" cards={playerCards} score={playerScore} />
      </div>

      <GameOverModal
        isOpen={gameOver}
        onRestart={startGame}
        playerScore={playerScore}
        dealerScore={dealerScore}
        message={message}
      />

      <div className="btn-panel">
        <Button
          className="spec-btn"
          onClick={() => navigate(`/${userId}/`)}
        >
          Back to MENU
        </Button>

        <Button
          className="spec-btn"
          onClick={() => playerStand()}
          disabled={!playerTurn || gameOver}
        >
          Open
        </Button>
      </div>
    </div>
  );
}
export default GamePage;