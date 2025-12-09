import { useEffect } from "react";
import { useBlackjack } from "../../hooks/useBlackjack";
import Hand from "../../components/Hand";
import Button from "../../components/Button/Button";
import GameOverModal from "../../components/GameOverModal/GameOverModal";
import { useNavigate, useParams } from "react-router-dom";

import styles from './GamePage.module.css';

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
      className="table"
      style={{
        backgroundImage: "url(/src/assets/background/game-background.png)",
        backgroundSize: "contain",
      }}
    >

      <div
        className={styles["deck"]}
        onClick={() => {
          if (playerTurn && !gameOver) playerHit();
        }}
        style={{ cursor: playerTurn && !gameOver ? "pointer" : "default" }}
      />

      <div className={`${styles["hand"]} ${styles["hand-diller"]}`}>
        <Hand
          title="Dealer"
          cards={dealerCards}
          score={dealerScore}
          hideSecondCard={playerTurn && !gameOver}
        />
      </div>

      <div className={`${styles["hand"]} ${styles["hand-player"]}`}>
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
          onClick={() => navigate(`/${userId}/`)}
        >
          Back to MENU
        </Button>

        <Button
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